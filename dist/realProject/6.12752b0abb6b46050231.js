(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PwPq:function(t,n,e){"use strict";e.r(n),e.d(n,"GenresModule",function(){return b});var o=e("ofXK"),i=e("tyNb"),c=e("AytR"),l=e("fXoL"),r=e("yTNM");function a(t,n){if(1&t&&(l.Ob(0,"div",7),l.Ob(1,"div",8),l.Ob(2,"figure",9),l.Ob(3,"div",10),l.Ob(4,"a",11),l.wc(5,"+"),l.Nb(),l.Nb(),l.Kb(6,"img",12),l.Nb(),l.Ob(7,"div",13),l.Ob(8,"div",14),l.wc(9),l.Nb(),l.Ob(10,"h3",15),l.Ob(11,"a",11),l.wc(12),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){const t=n.$implicit,e=l.ac();l.xb(2),l.hc("routerLink","/film/",null==t?null:t.id,""),l.xb(2),l.hc("routerLink","/film/",null==t?null:t.id,""),l.xb(2),l.gc("src",e.imgUrl+(null==t?null:t.poster_path),l.pc),l.xb(3),l.yc(" ",null==t?null:t.vote_average,""),l.xb(2),l.hc("routerLink","/film/",null==t?null:t.id,""),l.xb(1),l.xc(null==t?null:t.title)}}const s=[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.api=n,this.imgUrl=c.a.imgUrl}ngOnInit(){this.router.params.subscribe(()=>{this.api.getGenreFilm(this.router.snapshot.params.id).subscribe(t=>{this.films=t.results}),this.api.getGenreById(this.router.snapshot.params.id).subscribe(t=>{this.genres=t})})}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(i.a),l.Jb(r.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-genres"]],decls:11,vars:2,consts:[["role","main"],["data-background","#111111",1,"content-section",2,"background","rgb(17, 17, 17)"],[1,"container"],[1,"row"],[1,"col-12"],[1,"section-title","text-center","light"],["class","col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6",4,"ngFor","ngForOf"],[1,"col-xl-2","col-lg-3","col-md-4","col-sm-6","col-6"],[1,"video-thumb","light"],[1,"video-image",3,"routerLink"],[1,"play-btn"],[3,"routerLink"],["width","100%","alt","Image",3,"src"],[1,"category-content"],[1,"tags"],[1,"name"]],template:function(t,n){1&t&&(l.Ob(0,"main",0),l.Ob(1,"section",1),l.Ob(2,"div",2),l.Ob(3,"div",3),l.Ob(4,"div",4),l.Ob(5,"div",5),l.Ob(6,"h6"),l.wc(7,"\u0416\u0430\u043d\u0440\u044b "),l.Nb(),l.Ob(8,"h2"),l.wc(9),l.Nb(),l.Nb(),l.Nb(),l.uc(10,a,13,6,"div",6),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.xb(9),l.xc(null==n.genres?null:n.genres.name),l.xb(1),l.fc("ngForOf",n.films))},directives:[o.i,i.c,i.d],styles:['.section-title.light[_ngcontent-%COMP%]{color:#fff}.section-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{width:100%;display:block;font-size:14px;font-weight:800;letter-spacing:2px;opacity:.6}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;display:block;margin:0;font-size:46px;font-weight:600}.section-title[_ngcontent-%COMP%]{margin:50px}.video-thumb[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;margin:15px 0}.video-thumb.light[_ngcontent-%COMP%], .video-thumb.light[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.video-thumb[_ngcontent-%COMP%]   .video-image[_ngcontent-%COMP%]{width:100%;display:block;position:relative}.video-thumb[_ngcontent-%COMP%]   .video-image[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;position:absolute;left:0;top:0;transition:all .35s ease-in-out;opacity:0;background:#000}.video-thumb[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap}.video-thumb[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]{display:inline-block;font-size:13px;margin-right:6px}.video-thumb[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{color:#e90451;font-size:13px}.video-thumb[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;padding:0;list-style:none;color:#e90101}.video-thumb[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%]{margin-left:auto;height:20px;line-height:18px;font-size:12px;padding:0 4px;border:1px solid #fff;opacity:.7}.video-thumb[_ngcontent-%COMP%]   .video-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:100%;display:block;font-size:16px;font-weight:600;margin-top:5px}.video-thumb[_ngcontent-%COMP%]:hover   .video-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.7}.play-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:46px;width:46px;line-height:46px;display:inline-block;background:#fff;border-radius:50%;text-align:center;position:relative;text-indent:-9999px;bottom:-130px;left:60px}.play-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;left:calc(50% - 4px);top:calc(50% - 8px);border-color:transparent transparent transparent #111;border-style:solid;border-width:8px 0 8px 12px}.category-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:large;color:#fff}']}),t})()}];let g=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(s)],i.e]}),t})(),b=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(n){return new(n||t)},imports:[[o.b,g]]}),t})()}}]);