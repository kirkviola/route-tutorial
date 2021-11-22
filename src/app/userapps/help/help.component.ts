import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  helpNbr: number = 0;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.helpNbr = +this.route.snapshot.params["id"];
  }

}
