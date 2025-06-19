import { diskStorage } from 'multer';
import { extname } from 'path';

export const diskstorage = ()=>{
    return  {
          storage: diskStorage({
            destination: './uploads',  
            filename: (req, file, cb) => {
              const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
              cb(null, uniqueSuffix + extname(file.originalname)); // filename.jpg
            },
          }),
          limits: { fileSize: 2 * 1024 * 1024 },  
        }
}