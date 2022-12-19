import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string="Angular";
    data:number=1;
  ngOnInit(): void { //Initialize the directive or component after displays the data bound properties

    console.log('ngonchanges data is ' + this.name);
  }
  getColor()
  {
    return 'red';
  }
  add()
  {
    this.data++;
    this.name;
  }
  stateFlag = false;

  toggleState() {
      this.stateFlag = !this.stateFlag;
  }

  submit() {
      console.log('Button submitted');
  }
  colour: any[] = [
    {
      "name": "Blue"
    },
    {
      "name": "Green"
    },
    {
      "name": "Gray"
    },
    {
      "name": "Pink"
    },
    {
      "name": "Red"
    }
  ];
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
}
