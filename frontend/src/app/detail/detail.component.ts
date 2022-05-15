import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Input() restaurantStar: string;

  constructor(public modalControllor: ModalController) { }

  dismiss() {
    this.modalControllor.dismiss({
      'dismissed': true
    })
  }
  ngOnInit() {}

}
