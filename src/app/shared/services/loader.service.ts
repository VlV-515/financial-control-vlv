import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  public showLoader(estatus: boolean = false): void {
    this.isLoading$.next(estatus);
  }
}
