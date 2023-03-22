import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
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
    const googleUser = await this.authService.validateGoogleUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
      photo: profile.photos[0].value,
    });
    return googleUser || null;
  }
}
