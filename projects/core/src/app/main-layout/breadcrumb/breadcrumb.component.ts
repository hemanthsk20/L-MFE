import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  public routeNames: any = [];
  public routeValues: any = [];

  public routeComponent: any = [];
  obj: any = {
    name: '',
    value: ''
};

  constructor(private router: Router) {
    this.setAccessedsRoutes();
   }

  ngOnInit(): void {
  }
  private setAccessedsRoutes(): void {
    this.router.events
        .pipe(
            filter((event: NavigationEvent) => {
                return event instanceof NavigationStart;
            })
        )
        .subscribe((event: any) => {
            const matchRoute = this.router.config.find((element) => element.path === event.url.replace('/', ''));

            if (matchRoute) {
                if (event.navigationTrigger === 'imperative') {
                    if (matchRoute.data?.['routeName']) {
                        this.routeComponent.push(matchRoute.data['group']);

                        if (this.routeNames.includes(matchRoute.data['routeName'])) {
                            const positionRouteName = this.routeNames.indexOf(matchRoute.data['routeName']);
                            this.routeNames.splice(positionRouteName + 1, Infinity);
                            const routeValues = this.routeNames.indexOf(matchRoute.data['routeName']);
                            this.routeValues.splice(routeValues + 1, Infinity);
                        } else {
                            this.routeNames.push(matchRoute.data['routeName']);
                            this.routeValues.push(event.url);
                        }
                    }
                } else if (event.navigationTrigger === 'popstate') {
                    this.routeNames.pop();
                }
            } else if (typeof matchRoute === 'undefined') {
                this.routeNames = [];
                this.routeValues = [];
            }

            let lastElementFromRoute;
            if (this.routeComponent.length > 1) {
                lastElementFromRoute = this.routeComponent[this.routeComponent.length - 2];

                if (lastElementFromRoute !== this.routeComponent[this.routeComponent.length - 1]) {
                    const newRouteName = this.routeNames[this.routeNames.length - 1];
                    const newRouteValue = this.routeValues[this.routeValues.length - 1];

                    this.routeNames = [];
                    this.routeValues = [];
                    this.routeNames.push(newRouteName);
                    this.routeValues.push(newRouteValue);
                }
            }
        });
}

clearBreadcrumbList(): void {}
}
