import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  showNotify(data: { title: string }): string {
    console.log('data>>>', data);
    return data.title;
  }

  getHello(): string {
    return 'Hello tracking!';
  }
}
