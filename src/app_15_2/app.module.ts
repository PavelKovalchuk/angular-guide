import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // FormsModule, // for template driven approach
    ReactiveFormsModule // for reactive driven approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
