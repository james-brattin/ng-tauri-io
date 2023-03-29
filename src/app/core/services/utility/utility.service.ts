import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  /**
   * Shows a toast message at the bottom of the browser window.
   *
   * @param message Message to show in toast.
   * @param duration Optional duration of the toast, defaults to 5s.
   */
  // public showToast(message: string, duration = 5000): void {
  //   this.snackBar.open(message, 'Close', { duration, horizontalPosition: 'end' });
  // }

  /**
   * Replaces the screen content with a fullpage loading animation.
   *
   * @param val Boolean value of whether to show the animation.
   */
  public changeLoading(val: boolean): void {
    this.loading$.next(val);
  }
}
