import { Component, OnInit, OnDestroy } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;

  constructor() {}

  ngOnInit() {
    /* this.firstObsSub = interval(1000).subscribe((count) => {
      console.log("count", count);
    });
    console.log("this.firstObsSub ", this.firstObsSub); */
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 4) {
          observer.complete();
        }
        if (count === 5) {
          observer.error(new Error("Count is 5"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSub = customObservable.subscribe(
      data => {
        console.log("data", data);
      },
      error => {
        console.log("customObservable error: ", error.message);
      },
      () => {
        console.log("customObservable complete !!!");
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.firstObsSub.unsubscribe();
  }
}
