import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovies } from '../movies';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesApi:MoviesService)
  {}

  Movies:IMovies[]=[]
  
  imgsrc : string = 'https://image.tmdb.org/t/p/w500'
  
  
  
  



    ngOnInit(): void {
     this._MoviesApi.getMovies().subscribe({
      next:(res)=>{
        console.log(res)
        this.Movies= res.results;
        
      },
      error:(err)=>{

      }

     })
      
    }

}
