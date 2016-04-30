import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features

@Component({
    selector: 'my-app',
    template: '<div> it works! I think?! </div>',
    providers: [HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('init app!');
    }
}