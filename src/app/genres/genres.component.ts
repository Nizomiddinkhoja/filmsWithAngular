import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: any;
  imgUrl = environment.imgUrl;
  films: any;


  constructor(private router: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit(): void {

    // TODO refactor the rxjs code

    this.router.params.subscribe(() => {
      this.api.getGenreFilm(this.router.snapshot.params.id)
        .subscribe((result: any) => {
          this.films = result.results;
        });
      this.api.getGenreById(this.router.snapshot.params.id)
        .subscribe((result: any) => {
          this.genres = result;
        });
    });
  }


}
