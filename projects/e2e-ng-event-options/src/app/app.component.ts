import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // expect "true"
  public passiveTest: string = 'passiveTest';

  // expect 1
  public onceTest: number = 0;

  // expect "true"
  public preventDefaultTest: string = 'preventDefaultTest';

  // expect "true"
  public ngZoneTest: string = 'ngZoneTest';

  // expect "true"
  public captureTest: string = 'captureTest';

  // expect "true"
  public stopEmptyTest: string = 'stopEmptyTest';

  // expect 1
  public stopTest: number = -1;

  // expect "true"
  public throttleWaitTest: string = 'throttleWaitTest';

  // expect "true"
  public debounceWaitTest: string = 'debounceWaitTest';

  // expect "true"
  public throttleImmediateTest: string = 'throttleImmediateTest';

  // expect "true"
  public debounceImmediateTest: string = 'debounceImmediateTest';

  private capturePhase?: boolean;

  constructor(private readonly ngZone: NgZone) {}

  onPassiveClick(event: MouseEvent): void {
    try {
      event.preventDefault();
    } catch {}
    this.passiveTest = (!event.defaultPrevented).toString();
  }

  onOnceClick(): void {
    this.onceTest++;
  }

  onPreventDefaultClick(event: MouseEvent): void {
    this.preventDefaultTest = event.defaultPrevented.toString();
  }

  onNgZoneClick(): void {
    const result: string = (!NgZone.isInAngularZone()).toString();
    this.ngZone.run(() => (this.ngZoneTest = result));
  }

  onCaptureParentClick(): void {
    this.capturePhase = true;
  }

  onBubbleParentClick(): void {
    this.captureTest = this.capturePhase != null ? this.capturePhase.toString() : 'false';
  }

  onCaptureChildClick(): void {
    this.capturePhase = this.capturePhase === true;
  }

  onStopCaptureParentClick(): void {
    this.stopTest = 0;
  }

  onStopChildClick(): void {
    if (this.stopTest === 0) {
      this.stopTest = 1;
    }
  }

  onStopTestChildClick(): void {
    this.stopTest = 2;
  }

  onStopBubbleParentClick(): void {
    this.stopTest = 3;
  }

  onStopEmptyClick(): void {
    this.stopEmptyTest = 'sibling';
  }

  onStopParentEmptyClick(): void {
    this.stopEmptyTest = 'parent';
  }

  onThrottleWaitClick(): void {
    // console.log(event);
  }

  onDebounceWaitClick(): void {
    // console.log(event);
  }

  onThrottleImmediateClick(): void {
    // console.log(event);
  }

  onDebounceImmediateClick(): void {
    // console.log(event);
  }
}
