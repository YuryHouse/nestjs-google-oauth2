import { Injectable } from '@nestjs/common';
import { GoogleUserDetails } from '../utils/types';
import { GoogleUser } from '../sequelize/models/google-user';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(GoogleUser)
    private readonly userModel: typeof GoogleUser,
  ) {}
  async validateGoogleUser(details: GoogleUserDetails) {
    console.log('AuthService');
    console.log(details);
    const googleUser = await this.userModel.findOne({
      where: { email: details.email },
    });
    console.log(googleUser);
    if (googleUser) return googleUser;
    console.log('User not found. Creating...');
    return this.userModel.create(details);
  }
}
