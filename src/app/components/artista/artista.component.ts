import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];
  loading: boolean;

  constructor( private activatedRouter: ActivatedRoute,
          private _spotifyService: SpotifyService) { 
    this.loading = true;
    this.activatedRouter.params.subscribe( params=>{
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading = true;
    this._spotifyService.getArtista(id).subscribe( (artista:any)=>{
      this.artista = artista;
      this.loading = false;
      console.log(this.artista);
    });
  }

  getTopTracks( id:string ){
    this._spotifyService.getTopTracks(id).subscribe( (topTracks)=>{
      this.topTracks = topTracks;
    });
  }

}
