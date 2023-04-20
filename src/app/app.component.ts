import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';
  // public pageTitle: string;

  constructor(
    private titleService: Title,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activeRoute);
      rt.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title)
      })
    })
  }

  getChild(activedRoute: ActivatedRoute): any {
    if (activedRoute.firstChild) {
      return this.getChild(activedRoute.firstChild);
    } else {
      return activedRoute
    }

  }

}
