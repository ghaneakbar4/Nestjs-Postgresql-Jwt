import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from './auth.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    // define auth service and extract jwt token from header
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
    }
    async validate(payload: any, done: VerifiedCallback) {
        // Get user from payload
        const user = await this.authService.validateUser(payload);
        // If no user return unauthorized response
        if (!user) {
            return done(new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED));
        }
        // else, return successful response with the user data
        return done(null, user, payload.iat);
    }
}