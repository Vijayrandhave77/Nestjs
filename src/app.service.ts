import { Controller, Injectable, UseGuards } from '@nestjs/common';
import { pipes } from './pipes';
@Injectable()
export class AppService {
  getHello(req) {
    const name = req.params.name;
    return name
  }

  pipline() {
    return pipes.hellopiplone()
  }
}
