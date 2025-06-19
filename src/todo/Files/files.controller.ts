// src/upload/upload.controller.ts

import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskstorage } from './diskstorahe';


@Controller('upload')
export class FilesController {
  @Post('single')
  @UseInterceptors(
    FileInterceptor('file',diskstorage()),
  )
 uploadFile(@Req() req: Request) {
  const file = (req as any).file;
  return {
    message: 'File uploaded successfully',
    filename: file.filename,
    originalname: file.originalname,
    mimetype: file.mimetype,
  };
}

}
