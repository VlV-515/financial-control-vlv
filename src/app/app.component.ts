import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    public LoaderSvc: LoaderService,
    private readonly detectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.detectorRef.detectChanges();
  }
}
