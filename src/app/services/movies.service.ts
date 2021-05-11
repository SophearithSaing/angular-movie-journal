import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl = environment.apiUrl;
  apiImageUrl = environment.apiImageUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getTrendingMovies = () => {
    const url = `${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getPopularMovies = () => {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getOneMovie = (id: number) => {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  searchMovies = (query: string) => {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<{results: Movie[]}>(url);
  }

  saveMovie = () => {

  }
}
