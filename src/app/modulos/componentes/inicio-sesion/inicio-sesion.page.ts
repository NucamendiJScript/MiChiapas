import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/servicios/toastServicio/toast.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  inicioSesion: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.inicioSesion = this.fb.group({
      correo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  formularioInicio() {
    console.log(this.inicioSesion.value);
    const correo = this.inicioSesion.get('correo').value;
    const password = this.inicioSesion.get('password').value;
    if (correo === '') {
      this.toastService.toastPersonalizado('Ingresa tu correo o numero.', 3000, 'toastRedondo');
    } else if (password ==='') {
      this.toastService.toastPersonalizado('Ingresa tu contraseña.', 3000, 'toastRedondo');
    }
  }
}
