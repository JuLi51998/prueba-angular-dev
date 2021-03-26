import { AvisosService } from './../../../pages/avisos/avisos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aviso } from '../../../models/avisos.interface';

@Component({
  selector: 'app-form-avisos',
  templateUrl: './form-avisos.component.html',
  styleUrls: ['./form-avisos.component.scss']
})
export class FormAvisosComponent implements OnInit {

  aviso: Aviso | undefined;
  avisoForm!: FormGroup;

  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router: Router, private fb: FormBuilder, private avisosSvc: AvisosService) {
    const navigation = this.router.getCurrentNavigation();
    this.aviso = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.aviso === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.avisoForm.patchValue(this.aviso);
    }
  }

  onSave(): void {
    console.log('Saved', this.avisoForm.value);
    if (this.avisoForm.valid) {
      const aviso = this.avisoForm.value;
      const avisoId = this.aviso?.id || null;
      this.avisosSvc.onSaveAviso(aviso, avisoId);
      this.avisoForm.reset();
    }

  }


  isValidField(field: string) {
    const validatedField = this.avisoForm.get(field);
    if (validatedField != null) {
      return (!validatedField.valid && validatedField.touched)
        ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
    }
    return ''
  }

  private initForm(): void {
    this.avisoForm = this.fb.group({
      valor: ['', [Validators.required, Validators.min(1)]],
    });
  }

}
