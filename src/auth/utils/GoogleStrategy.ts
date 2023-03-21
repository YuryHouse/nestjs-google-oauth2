import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID:
        '852006515989-i92htgnjunbe1q9959nbgjhmlaeu8e5v.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3003/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  }
}
