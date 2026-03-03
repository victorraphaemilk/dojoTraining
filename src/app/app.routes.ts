import { Routes } from '@angular/router';
import { Principal } from '../pages/principal/principal';
import { Professores } from '../pages/professores/professores';
import { Estudantes } from '../pages/estudantes/estudantes';
import { Feiticos } from '../pages/feiticos/feiticos';

export const routes: Routes = [
    {path:"", component:Principal},
    {path: "professores", component: Professores},
    {path: "estudantes", component: Estudantes},
    {path: "feiticos", component: Feiticos},
    {path:"**", redirectTo:""}
];
