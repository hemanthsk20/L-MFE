import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTextService } from '../../services/create-text.service';

@Component({
  selector: 'app-create-text',
  templateUrl: './create-text.component.html',
  styleUrls: ['./create-text.component.scss']
})
export class CreateTextComponent implements OnInit {
  createTextForm: FormGroup;
  disabled: boolean = true;
  appIdCtrl: FormControl;
  constructor(private fb: FormBuilder,private createTextService: CreateTextService) {
    this.createTextForm = this.fb.group({
      texttitle: ['', Validators.required],
      appid: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.appIdCtrl = new FormControl({value: '', disabled: this.disabled})
  }
  createText() {

    const formData = this.createTextForm.getRawValue();
    console.log(formData)
    const payload = {
      texttitle: formData.texttitle,
      appid: formData.appid,
      body: formData.body,
    }
    console.log(payload)
    this.createTextService.CreateTexts(payload).subscribe((res: any) => {
      console.log(res)
      // this.router.navigate(['/home/edit-app/:'+id])
      // this.location.back();
    })
  }
}
