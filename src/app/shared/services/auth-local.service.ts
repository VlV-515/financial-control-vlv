import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { BehaviorSubject, EMPTY, Observable, switchMap } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({ providedIn: 'root' })
export class AuthLocalService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly authSvc: AuthService,
    private readonly loaderSvc: LoaderService
  ) {
    this.setObservableisAuthenticated();
    this.setObservableIsLoading();
  }

  public getUser$(): Observable<User | null> {
    return this.user$.asObservable();
  }

  public login(): void {
    this.authSvc.loginWithRedirect();
  }

  public logout(): void {
    this.user$.next(null);
    this.authSvc.logout();
  }

  private setObservableisAuthenticated(): void {
    this.authSvc.isAuthenticated$
      .pipe(
        switchMap((isAuthenticated) => {
          if (isAuthenticated) {
            return this.authSvc.user$;
          }
          return EMPTY;
        })
      )
      .subscribe((user) => {
        if (user) this.user$.next(user);
      });
  }

  private setObservableIsLoading(): void {
    this.authSvc.isLoading$.subscribe((isLoading) => {
      if (isLoading) {
        this.loaderSvc.showLoader(true);
        return;
      }
      this.loaderSvc.showLoader(false);
    });
  }
}
