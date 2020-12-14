import {Component,  OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  styles = '';
  genreId: any;
  genres: any[] = [];

  ngOnInit(): void {
    this.api.getGenre().subscribe((result: any) => {
      this.genres = result.genres;
      this.genreId = this.api.genre;
    });
  }

  // ngOnDestroy(): void {
  //   if (this.genreId) {
  //     this.genreId.unsubscribe();
  //   }
  // }
}
