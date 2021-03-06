import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = [
    {viewValue: 'Consulta', link: 'consulta'},
    {viewValue: 'Catálogo', link: 'catalogo'},
    {viewValue: 'Prestamos', link: 'prestamos'},
    {viewValue: 'Investigación', link: 'investigacion'},
    {viewValue: 'Restauración', link: 'restauracion'},
    {viewValue: 'Administración', link: 'administracion'},
  ];

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  goHome() {
    this.router.navigateByUrl('/inicio');
  }
}
