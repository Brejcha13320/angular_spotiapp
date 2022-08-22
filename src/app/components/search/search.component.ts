import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading: boolean | undefined;

  constructor( private _spotifyService: SpotifyService ) { }

  ngOnInit(): void {
  }

  

  buscar(termino:string){
    this.loading = true;
    this._spotifyService.getArtistas(termino).subscribe( (data:any)=>{
      this.artistas = data;
      this,this.loading = false;
    });
  }

}
