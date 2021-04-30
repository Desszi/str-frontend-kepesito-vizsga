import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL : string = 'https://testserver/Desszi/movies';

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(id: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL);
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiURL}/${id}`);
  }
}
