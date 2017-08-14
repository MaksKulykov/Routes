import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  items: Array<any> = [
    {
      title: 'Кофе',
      description: 'Лучший кофе на дороге! Отхлебнешь - протянешь ноги!',
      price: '20 грн'
    },
    {
      title: 'Пиво',
      description: 'Живот не от пива, а для пива!',
      price: '50 грн'
    },
    {
      title: 'Шаурма',
      description: 'Свинина 2й сорт - собачатина, рубленая вместе с будкой.',
      price: '60 грн'
    }
  ];

  getItems(): Array<any> {
    return this.items;
  }


}
