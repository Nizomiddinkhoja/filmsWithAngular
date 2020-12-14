import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  imgRootUrl = environment.imgRootUrl;
  movieList: any = [];

  constructor(private router: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit(): void {
    //TODO add destroy function
    this.api.getMovie()
      .subscribe((result: any) => {
        this.movieList = result.results;
      });
  }

}
