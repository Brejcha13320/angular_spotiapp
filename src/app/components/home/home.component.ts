import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string = "";

  constructor( private _spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;
    this._spotify.getNewReleases().subscribe( (data:any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio)=>{
      this.error=true;
      this.loading=false;
      this.mensajeError = errorServicio.error.error.message;
    } );
  }

}
