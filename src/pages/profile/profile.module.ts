import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { Camera } from '@ionic-native/camera';
import { ImageUtilService } from '../../services/image-util.service';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers: [
    Camera,
    ImageUtilService
  ]
})
export class ProfilePageModule {}
