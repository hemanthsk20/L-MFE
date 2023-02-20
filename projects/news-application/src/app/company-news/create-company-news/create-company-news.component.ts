import { V } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileDialogComponent } from '../upload-file-dialog/upload-file-dialog.component';

@Component({
  selector: 'app-create-company-news',
  templateUrl: './create-company-news.component.html',
  styleUrls: ['./create-company-news.component.scss']
})
export class CreateCompanyNewsComponent implements OnInit {
  createAppForm: FormGroup;
  locationForm: FormGroup;
  openingHoursGroup: FormGroup;
  fileUploadPending = true;
  file: any;
  showaddress: boolean = true
  allLanguages: string[] = ['en', 'de', 'fr', 'ar', 'zh'];
  selected1: string;
  selected2: string;
  selected3: string;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  data = {
    headline: [
      {
        language: "en",
        headlineText: "example headline"
      }
    ],
    teaserText: [
      {
        language: "en",
        teaserText: "example teaser"
      }
    ],
    bodyText: [
      {
        language: "en",
        bodyText: "example bodytext"
      }
    ],
    location: {
      name: "mkontheway",
      // lvkGebiet: "lvk4",
      lvkGebiet: "lvk4",
      openingHours: [
        {
          day: "Mon-frd"
        }
      ],
      address: {
        street: "test",
        postCode: "test",
        city: "test",
        country: "test",
        phone: "test",
        website: "test",
        email: "test",
      }
    }
  }
  constructor(private fb: FormBuilder, private dialog:MatDialog) {
    this.createAppForm = this.fb.group({
      headline: this.fb.array([]),
      teaserText: this.fb.array([]),
      bodyText: this.fb.array([]),
      location: this.fb.group({
        name: ['', Validators.required],
        lvkGebiet: ['', Validators.required],
        openingHours: this.fb.array([

        ]),
        address: this.fb.group({
          street: ['', Validators.required],
          postCode: ['', Validators.required],
          city: ['', Validators.required],
          country: ['', Validators.required],
          phone: ['', Validators.required],
          website: ['', Validators.required],
          email: ['', Validators.required],
        })
      })
    });
    // debugger
    this.setPayload();
  }

  ngOnInit(): void {
    this.selected1 = JSON.stringify(this.data.headline[0])
    this.selected2 = JSON.stringify(this.data.teaserText[0])
    this.selected3 = JSON.stringify(this.data.bodyText[0])
    console.log(this.selected1)
    console.log(this.createAppForm)
  }
  openDialog(){
    const dialog = this.dialog.open(UploadFileDialogComponent)
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onChange(event: any) {
    // this.file = event.target.files;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = event.target.files[0];
        this.fileUploadPending = false;
        console.log(this.file);
      };
    }
  }
  getHeadlineFormData() {
    return <FormArray>this.createAppForm.get('headline')
  }
  getTeaserFormData() {
    return <FormArray>this.createAppForm.get('teaserText')
  }
  getBodyTextFormData() {
    return <FormArray>this.createAppForm.get('bodyText')
  }
  getLocationFormData() {
    return <FormArray>this.createAppForm.get('location')
  }
  getopeningHoursFormData() {
    return <FormArray>this.createAppForm.get('openingHours')
  }
  addHeadline() {
    let control = <FormArray>this.createAppForm.get('headline');
    control.push(
      this.fb.group({
        headlineText: ['', Validators.required],
        language: ['', Validators.required],
      })
    )
    // let teasercontrol = <FormArray>this.createAppForm.get('teaserText');
    // teasercontrol.push(
    //   this.fb.group({
    //     teaserText: ['', Validators.required],
    //     language: ['', Validators.required],
    //   })
    // )
    // let bodycontrol = <FormArray>this.createAppForm.get('bodyText');
    // bodycontrol.push(
    //   this.fb.group({
    //     bodyText: ['', Validators.required],
    //     language: ['', Validators.required],
    //   })
    // )
  }
  deleteNewsTeaser(index: any) {
    let control = <FormArray>this.createAppForm.get('teaserText');
    control.removeAt(index)
  }
  addTeaser() {
    let control = <FormArray>this.createAppForm.get('teaserText');
    control.push(
      this.fb.group({
        teaserText: ['', Validators.required],
        language: ['', Validators.required],
      })
    )
  }
  deleteNewsHeadline(index: any) {
    let control = <FormArray>this.createAppForm.get('headline');
    control.removeAt(index)
  }
  addBodyText() {
    let control = <FormArray>this.createAppForm.get('bodyText');
    control.push(
      this.fb.group({
        bodyText: ['', Validators.required],
        language: ['', Validators.required],
      })
    )
  }
  addOpeningHours(){
    let control = <FormArray>this.createAppForm.get('openingHours');
    control.push(this.fb.group({
      day: ['', Validators.required]
    }))
  }
  deleteNewsBodyText(index: any) {
    let control = <FormArray>this.createAppForm.get('headline');
    control.removeAt(index)
  }
  setPayload() {
    let control = <FormArray>this.createAppForm.get('headline');
    let teaserTextcontrol = <FormArray>this.createAppForm.get('teaserText');
    let bodyTextcontrol = <FormArray>this.createAppForm.get('bodyText');
    let openingHourscontrol = <FormArray>this.createAppForm.get('openingHours');

    this.data.headline.forEach(x => {
      control.push(this.fb.group({
        headlineText: x.headlineText,
        language: x.language
      }))
    })
    this.data.bodyText.forEach(x => {
      bodyTextcontrol.push(this.fb.group({
        bodyText: x.bodyText,
        language: x.language
      }))
    })
    this.data.teaserText.forEach(x => {
      teaserTextcontrol.push(this.fb.group({
        teaserText: x.teaserText,
        language: x.language
      }))
    })
    // this.data.location.openingHours.forEach(x =>{
    //   openingHourscontrol.push(this.fb.group({
    //     day: x.day
    //   }))
    // })
  }
}
function UploadFileDocumentComponent(UploadFileDocumentComponent: any) {
  throw new Error('Function not implemented.');
}

