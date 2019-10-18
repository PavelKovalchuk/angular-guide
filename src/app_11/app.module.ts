import { AuthService } from "./auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "../app_11/servers/servers.componentomponent";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "../app_11/servers/edit-server/edit-server.componentomponent";
import { ServerComponent } from "../app_11/servers/server/server.componentomponent";
import { ServersService } from "../app_11/servers/servers.service.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "../app_11/servers/edit-server/can-deactivate-guard.service.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "../app_11/servers/server/server-resolver.service.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
