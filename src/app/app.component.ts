import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  user: any;


  constructor(
      private activatedRoute: ActivatedRoute,
      private route: ActivatedRoute) {}
  ngOnInit():void {
      this.activatedRoute.data.subscribe(({ user }) => {
      console.log(user);


    })
      this.route.queryParams.subscribe(params => {
      console.log(params);
    });



  }


}
