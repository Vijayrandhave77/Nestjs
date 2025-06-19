// import {
//   Injectable,
//   NestMiddleware,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { CustomRequest } from './types/expressRequest.interface';
// @Injectable()
// export class authMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//       throw new UnauthorizedException('JWT token is missing');
//     }

//     try {
//       const decoded = jwt.verify(token, 'secret12345');
//       // req.user = decoded;
//       (req as any).user = decoded;
//       next();
//     } catch (error) {
//       throw new UnauthorizedException('Invalid or expired JWT token');
//     }
//   }
// }


import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Injectable()
export class authMiddleware implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('JWT token is missing');
    }

    try {
      const decoded = jwt.verify(token, 'secret12345');
      (request as any).user = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired JWT token');
    }
  }
}
