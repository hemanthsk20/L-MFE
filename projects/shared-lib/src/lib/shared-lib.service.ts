import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  // eventRegistry: object = {};
  appId : any;
  eventRegistry: {[index: string]:any} = {};
  constructor() { }
  createListener(module: string, event: string, initialValue: any) {
    if (!this.eventRegistry[module]) {
      this.eventRegistry[module] = {};
    }
    if (!this.eventRegistry[module][event]) {
      this.eventRegistry[module][event] = { "initialValue": initialValue, "listeners": [] };
    } else {
      alert("event " + module + "::" + event + " is already created");
    }
  }
  registerListener(module: string, event: string, callback: CallableFunction) {
    this.eventRegistry[module] = {}
    console.log("test"+this.eventRegistry[module])
   
    if (!this.eventRegistry[module][event]) {
  
      alert("event " + module + "::" + event + " is not created so far.");
    }else
    this.eventRegistry[module][event]["listeners"].push(callback);
  }
  callListener(module: string, event: string, obj: any) {
    if (!this.eventRegistry[module]) {
      alert("event " + module + "::" + event + " is not created, module does not exist");
    }
    if (this.eventRegistry[module][event]) {

      let initialValue: any = this.eventRegistry[module][event]["initialValue"];

      for (let i = 0; i < this.eventRegistry[module][event]["listeners"].length; i++) {
        initialValue = this.eventRegistry[module][event]["listeners"][i](initialValue, obj);
      }
      return initialValue;
    } else {
      alert("event " + module + "::" + event + " is not created");
    }
  }

  /*get and set id*/
  setId(Id: any) {
    this.appId = Id;
    localStorage.setItem('Id', JSON.stringify(this.appId))
    console.log(Id);
  }

  getId(Id: string) {
    localStorage.getItem(Id);
    console.log(Id);
    return Id;
  }
}
