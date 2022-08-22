import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("Spotify Service Listo");
   }

   getQuery( query:string ){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB0nBU4QsjEYP3jn2a-xL2vzOBXvyfhDq91-DJ9tdW0kifG3KHZCcWRpQKog4SVGDSKnV5JZwj3Kzv2xEM'
    });

    return this.http.get(url, { headers });

   }

   getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20').pipe( map( (data:any)=>{
      return data.albums.items;
    }));
   }

   getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( (data:any)=>{
      return data.artists.items;
    }));
   }

   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
        //.pipe( map( (data:any)=>{ return data.artists.items;} ));
   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map( (data:any)=>{ 
        return data.tracks;
      } ));
   }

}
