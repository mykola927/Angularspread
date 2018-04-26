import { Taxonomy } from './../models/taxonomy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> { return this.http.get<Product>(`api/v1/products/${id}`) }

  /**
   *
   *
   * @returns {Array<Taxonomy>}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any { return this.http.get<Array<Taxonomy>>(`api/v1/taxonomies?set=nested`) }

  /**
   *
   *
   * @returns {Array<Product>}
   *
   * @memberof ProductService
   */
  getProducts(): any { return this.http.get<Array<Product>>(`api/v1/products`) }

  markAsFavorite(id: number): Observable<{}> { return this.http.post<{}>(`favorite_products`, {id: id}) }

  removeFromFavorite(id: number): Observable<{}> { return this.http.delete<{}>(`favorite_products/${id}`) }

  getFavoriteProducts(): Observable<Array<Product>> { return this.http.get<Array<Product>>(`favorite_products`) }


}
