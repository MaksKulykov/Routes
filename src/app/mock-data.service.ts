import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {
        id: 1,
        title: 'Кофе',
        description: 'Лучший кофе на дороге! Отхлебнешь - протянешь ноги!',
        price: '20 грн'
      },
      {
        id: 2,
        title: 'Пиво',
        description: 'Живот не от пива, а для пива!',
        price: '50 грн'
      },
      {
        id: 3,
        title: 'Шаурма',
        description: 'Свинина 2й сорт - собачатина, рубленая вместе с будкой.',
        price: '60 грн'
      }
    ];
    return {items};
  }
}
