import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  nombre:String="";

  submitForm(){
    console.log("enviando");
  }

  miFormulario = new FormGroup({
    name: new FormControl('name'),
    age: new FormControl("age")
  }
  )
}
