import { Routes } from '@angular/router';
import { BodyComponent } from './inicio/body/body.component';

import { IndexComponent as IndexProductoComponent } from './producto/index/index.component';
import { CreateComponent as CreateProductoComponent } from './producto/create/create.component';


import { IndexComponent as IndexCategoriaComponent } from './categoria/index/index.component';
import { CreateComponent as CreateCategoriaComponent } from './categoria/create/create.component';


import { IndexComponent as IndexEmpresaComponent } from './empresa/index/index.component';
import { CreateComponent as CreateEmpresaComponent } from './empresa/create/create.component';

import { IndexComponent as IndexUserComponent } from './user/index/index.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio/body', pathMatch: 'full' },
  { path: 'inicio/body', component: BodyComponent },

  { path: 'producto/index', component: IndexProductoComponent },
  { path: 'producto/create', component: CreateProductoComponent },
  { path: 'producto/editar/:id', component: CreateProductoComponent },


  { path: 'categoria/index', component: IndexCategoriaComponent },
  { path: 'categoria/create', component: CreateCategoriaComponent },
  { path: 'categoria/editar/:id', component: CreateCategoriaComponent },

  
  { path: 'empresa/index', component: IndexEmpresaComponent },
  { path: 'empresa/create', component: CreateEmpresaComponent },
  { path: 'empresa/editar/:id', component: CreateEmpresaComponent },

  { path: 'user/index', component: IndexUserComponent},

];
