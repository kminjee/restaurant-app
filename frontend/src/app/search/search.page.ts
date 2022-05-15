import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';
import { RestaurantService } from '../restaurant.service';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private restaurantService: RestaurantService,
  ) { }

  restaurants: Restaurant[] = [];
  restaurants$: Observable<Restaurant[]>;
  category$: Observable<Restaurant[]>;
  data: boolean = false;
  private searchTerms = new Subject<string>();

  /* 검색 */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /* 카테고리별 목록 */
  category(cateName: string): void {
    this.category$ = this.restaurantService.getCategory(cateName);
    if (this.category$) {
      this.data = true;
    }
  }

  /* 전체 목록 */
  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurant => this.restaurants = restaurant)
  }

  /* 상세페이지 (모달) */
  selectedRestaurant: Restaurant;
  async onSelect(restaurant: Restaurant) {
    let restaurantStar = '';
    switch(restaurant.star) {
      case 1:
        restaurantStar = '⭐️';
        break;
      case 2:
        restaurantStar = '⭐️⭐️';
        break;
      case 3:
        restaurantStar = '⭐️⭐️⭐️';
        break;
      case 4:
        restaurantStar = '⭐️⭐️⭐️⭐️';
        break;
      case 5:
        restaurantStar = '⭐️⭐️⭐️⭐️⭐️';
        break;
    }
    const modal = await this.modalController.create({
      component: DetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        restaurant,
        restaurantStar
      }
    });
    return await modal.present();
  }

  ngOnInit(): void {
    this.getRestaurants()
    this.restaurants$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.restaurantService.searchRestaurant(term))
    )
  }

}
