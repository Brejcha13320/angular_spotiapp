import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any): string {

    let url = "http://image.tmdb.org/t/p/w500"

    if(image.backdrop_path){
      return url + image.backdrop_path;
    }
    
    if( images.length > 0){
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
    
  }

}
