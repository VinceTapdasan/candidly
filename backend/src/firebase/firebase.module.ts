import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';

export const FIREBASE = Symbol('FIREBASE');

@Global()
@Module({
  providers: [
    {
      provide: FIREBASE,
      useFactory: () => {
        if (admin.apps.length) {
          return admin.app();
        }

        return admin.initializeApp({
          credential: admin.credential.cert(
            process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './serviceAccountKey.json',
          ),
        });
      },
    },
  ],
  exports: [FIREBASE],
})
export class FirebaseModule {}
