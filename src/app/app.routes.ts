import { Routes } from '@angular/router';
import { Principal } from '../pages/principal/principal';
import { Professores } from '../pages/professores/professores';
import { Estudantes } from '../pages/estudantes/estudantes';

export const routes: Routes = [
    {path:"", component:Principal},
    {path: "professores", component: Professores},
    {path: "estudantes", component: Estudantes},
    {path:"**", redirectTo:""}
];
