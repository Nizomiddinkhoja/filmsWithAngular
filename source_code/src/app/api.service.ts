import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  genre: any;
  rootUrl = environment.rootUrl;

  getGenre(): any {
    return this.http.get(this.rootUrl + 'genre/movie/list?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US');
  }

  getFilm(id: any): any {
    return this.http.get(this.rootUrl + 'movie/' + id + '?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US');
  }

  getMovie(): any {
    return this.http.get(this.rootUrl + 'discover/movie?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

  getGenreFilm(id: any): any {
    this.genre = id;
    return this.http.get(this.rootUrl + 'discover/movie?sort_by=popularity.desc&api_key=c145995d15853bf7b8891db5c10635a8&with_genres=' + id);
  }

  getGenreById(id: any): any {
    this.genre = id;
    return this.http.get(this.rootUrl + 'genre/' + id + '?api_key=c145995d15853bf7b8891db5c10635a8');
  }

  getVideo(id: any): any {
    return this.http.get(this.rootUrl + 'movie/' + id + '/videos?api_key=c145995d15853bf7b8891db5c10635a8&language=en-US');
  }


}
