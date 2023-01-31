import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import OneSignal from 'onesignal-cordova-plugin';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform, private router: Router, private zone: NgZone
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    /*this.platform.ready().then(() => {
      OneSignalInit();
    });*/
    
    if (this.platform.is("capacitor")) {
      console.log('is capacitor');
      OneSignalInit();
    } else {
      console.log('not capacitor');
    }
    
    
    //Url open special rooting
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
        this.zone.run(() => {
            var slug = event.url.split("lab.airlab.fr/runjob/").pop();
            if(slug && slug.indexOf("wp-login.php?action=rp") !== -1){
                
                //Get params
                var queryString = event.url.split('?')[1];
                var arr = queryString.split('&');
                var key = "";
                var login = "";
                var lostpassword_key = "";
                var lostpassword_login = "";
                
                for (var i = 0; i < arr.length; i++) {
                    // separate the keys and the values
                    var a = arr[i].split('=');

                    // set parameter name and value (use 'true' if empty)
                    var paramName = a[0];
                    var paramValue = a[1]; //typeof (a[1]) === 'undefined' ? true : a[1];
                    if(paramName=="key"){
                        lostpassword_key = paramValue;
                    }
                    else if(paramName=="login"){
                        lostpassword_login = paramValue;
                    }
                }
                
                this.router.navigateByUrl(`/lostpassword/${lostpassword_key}/${lostpassword_login}`);
            }
            else if (slug) {
                this.router.navigateByUrl(slug);
            }
            // If no match, do nothing - let regular routing
            // logic take over
        });
    });
    
  }
  
}

// Call this function when your app starts
function OneSignalInit(): void {
    // Uncomment to set OneSignal device logging to VERBOSE  
    //OneSignal.setLogLevel(6, 0);
    
    
    OneSignal.setAppId("d95f4950-4ee6-491c-9d59-23f19b93f200");
    
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.info('open');
    });

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
    
}
