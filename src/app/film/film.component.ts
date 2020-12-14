import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  videos: any;
  filmInfo: any;
  src: any;
  dangerousVideoUrl: any;
  imgRootUrl = environment.imgUrl;
  checkFilm = false;
  checkVideo = false;

  constructor(
    private router: ActivatedRoute,
    private  api: ApiService,
    private sanitizer: DomSanitizer
  ) {
  }


  ngOnInit(): void {
    this.api.getFilm(this.router.snapshot.params.id).subscribe((result: any) => {
      this.filmInfo = result;
      this.filmInfo.popularity = this.round(this.filmInfo.popularity);
      this.checkFilm = true;
    });
    this.api.getVideo(this.router.snapshot.params.id).subscribe((videos: any) => {
        this.videos = videos.results[0];
        this.updateVideoUrl(this.videos.key);
        this.checkVideo = true;
      }
    );
  }


  updateVideoUrl(id: string): any {
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

  round(input: any): any {
    return Math.floor(input);
  }


}
