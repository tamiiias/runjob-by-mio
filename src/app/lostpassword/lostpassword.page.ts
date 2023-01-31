import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../services/authentication.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lostpassword',
  templateUrl: './lostpassword.page.html',
  styleUrls: ['./lostpassword.page.scss'],
})
export class LostpasswordPage implements OnInit {


  lostPasswordForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    
    var lostpassword_key = this.route.snapshot.params['lostpassword_key'];
    var lostpassword_login = this.route.snapshot.params['lostpassword_login'];
    
    console.info("login : " + lostpassword_login);
    console.info("key : " + lostpassword_key);
    
    this.lostPasswordForm = this.formBuilder.group({
      login: [lostpassword_login, [Validators.required]],
      rp_key: [lostpassword_key, [Validators.required]],
      pass1: ["", [Validators.required]]
    })
    
    
  }
  
  submitForm() {
      this.authenticationService.resetPassword(this.lostPasswordForm.value).subscribe(
          async res => {
            const alert = await this.alertCtrl.create({
              header: "Succès",
              //subHeader: err.error.data.status,
              message: res['message'],
              buttons: [
                {
                text: 'OK',
                handler: () => {
                  this.router.navigateByUrl('/login');
                }
              }]
            });
            await alert.present();
          },
          err => {
            this.showError(err);
          }
      );
  }
  
  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: "Erreur",
      //subHeader: err.error.data.status,
      message: err.error.message,
      buttons: [
        {
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }]
    });
    await alert.present();
  }

}
