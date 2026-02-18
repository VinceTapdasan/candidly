import { Module } from '@nestjs/common';
// import { FirebaseModule } from './firebase/firebase.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
