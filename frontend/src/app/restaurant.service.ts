import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  private restaurantsUrl = 'api/restaurants';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl)
      .pipe(
        catchError(this.handleError<Restaurant[]>('getRestaurant', []))
      )
  }

  getRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restaurantsUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`))
    )
  }

  getCategory(cateName: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.restaurantsUrl}/?category=${cateName}`).pipe(
      catchError(this.handleError<Restaurant[]>('searchRestaurant', []))
    )
  }

  searchRestaurant(term: string): Observable<Restaurant[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Restaurant[]>(`${this.restaurantsUrl}/?hashtag=${term}`).pipe(
      catchError(this.handleError<Restaurant[]>('searchRestaurant', []))
    )
  }
}
