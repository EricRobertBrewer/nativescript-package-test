import { Component, OnInit } from "@angular/core";
import * as application from "application";

declare var NSBundle: any;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    packageId: string = "loading...";

    ngOnInit() {
        if (application.ios) {
            this.packageId = NSBundle.mainBundle.bundleIdentifier;
        } else if (application.android) {
            this.packageId = application.android.context.getPackageName();
        }
    }
}
