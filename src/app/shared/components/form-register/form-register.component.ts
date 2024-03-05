import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/apiLogin/login.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { ActivatedRoute } from '@angular/router';
import { params } from 'src/environments/environment.variables';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  formRegister: FormGroup;
  captcha: string;
  res: string;
  captchaResolved: boolean = false;
  promocod={} as params;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute) {
    this.loginForm();
    this.captcha = '';
    this.res = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.promocod.promocod = params["promocod"];
      this.promocod.company = params["company"];
      console.log('Valor de promocod:', this.promocod);
    });
  }

  loginForm() {
    this.formRegister = this.formBuilder.group({
      nameUser: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required]],
    })
  }


  register() {
    debugger
    if (this.promocod && this.promocod.company) {
      setTimeout(() => this.router.navigateByUrl(`/informacion-cliente/info-personal/${this.promocod.promocod}/${this.promocod.company}`), 500);
    }else{
      setTimeout(() => this.router.navigateByUrl(`/informacion-cliente/info-personal`), 500);
    }
  }

  // Aquí se usa el método postData
  sendDataRegister() {

    const nameUser = this.formRegister.get('nameUser')?.value;
    const pass = this.formRegister.get('pass')?.value;

    this.loginService.getLogin(nameUser, pass).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Información guardada correctamente',
        });

        // Guardar userApiKey en LocalStorage
        this.localStorageService.setItem('userApiKey', response.userApiKey);

        this.formRegister.reset();
        setTimeout(() => this.router.navigateByUrl('/sv/inicio'), 500);

      }, error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fallo en el sistema',
          detail: 'Error consultando datos de ingreso'
        });

        this.formRegister.reset();
      }
    });
  }
}


