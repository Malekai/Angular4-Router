import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:number;

  constructor(
    // Bind to your constructor 
  	private route:ActivatedRoute,
  	private router:Router
  ) { 
    // Params lets us access the params as a obser 
    // We can then take the params object and make requests or so
  	this.route.params.subscribe((params:Params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
  }

}
