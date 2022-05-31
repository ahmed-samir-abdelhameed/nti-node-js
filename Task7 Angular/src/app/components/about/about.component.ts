import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lightgray = "lightgray"
  status : boolean = false
  red = "red"
  inputVal = ""
  headingText= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ea."
  
  
  number :number=0

  month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
  Date = new this.Date().getMonth()
  constructor() { }

  ngOnInit(): void {
  }
  decrice(){
    this.number++
  }
  incrice({
    this.number --
  })

  divColor(){
    return "orange"
  }

  inputValue(event:any){
    console.log('typing...')
    console.log(event.target.value)
    this.inputVal = event.target.value

  }

  showInputValue(val:any){
    console.log(val.value)
  }

}
