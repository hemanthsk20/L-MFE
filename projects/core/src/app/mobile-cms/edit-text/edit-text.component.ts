import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss']
})
export class EditTextComponent implements OnInit {
  textId: string;
  textTitle: string;
  editTextForm: FormGroup;
  disabled: boolean = true;
  appIdCtrl: FormControl;
  constructor(private fb: FormBuilder,) { 
    this.editTextForm = this.fb.group({
      texttitle: ['', Validators.required],
      appid: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.appIdCtrl = new FormControl({value: '', disabled: this.disabled})
  }
  getTextsDetails() {
    // this.getTextService.getTextByTextId(this.textId).subscribe((res: any) => {
    //   this.editTextForm.controls['newstitle'].setValue(res.newstitle)
    //   this.textTitle = res.texttitle
    //   this.editTextForm.controls['body'].setValue(res.body)
    //   console.log(res);
    // })
  }
  updateText() {

    const formData = this.editTextForm.getRawValue();
    console.log(formData)
    const payload = {
      texttitle: formData.texttitle,
      appid: formData.appid,
      body: formData.body,
    }
    console.log(payload)
    // this.editTextService.editNews(this.textId, payload).subscribe((res: any) =>{
    //   console.log(res)
    // })
  }
}
