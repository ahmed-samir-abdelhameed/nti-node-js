import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit-profile-img',
  templateUrl: './edit-profile-img.component.html',
  styleUrls: ['./edit-profile-img.component.css']
})
export class EditProfileImgComponent implements OnInit {
  file:any = null
  modal:any={}

  constructor(private global:GlobalService) { }

  ngOnInit(): void {
  }
  handleImg(ev : any){
    console.log(ev)
    this.file = ev.target.file
  }
  handleSubmit(){
    if(this.file ! = null){
      let formData = new FormData()
      formData.append("image" , this.file[0])
      this.global.uploadImg(formData).subscribe(data=>{
        console.log(data)
      })
    }

  }

}
