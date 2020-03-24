import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SkillComponent } from './skill/skill.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


const routes: Routes = [
  {path: 'step-1', component: PersonalDetailsComponent},
  {path: 'step-2', component: ContactDetailsComponent},
  {path: 'step-3', component: SkillComponent},
  {path: 'step-4', component: WorkExperienceComponent},
  {path: '**', redirectTo: 'step-1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
