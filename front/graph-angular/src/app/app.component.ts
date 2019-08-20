import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_MOVIES = gql`
{
  allMovies {
    edges {
      node {
        id
        title
        year
      }
    }
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.movies = this.apollo.watchQuery({query: GET_MOVIES}).valueChanges.pipe(
      map( ({data}) => data.allMovies.edges )
    );
  }
}
