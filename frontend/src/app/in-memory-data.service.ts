import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }
  
  createDb() {
    const restaurants = [
      {
        id: 1,
        category: '한식',
        name: '홍화돈',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동1가',
        phone: '0507-1393-7988',
        star: 5,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAyMjAxMTFfNDkg%2FMDAxNjQxODk1MjE3OTAz.UsaSySY4mYf--Lw4Ovh1BDELc0ubl3N6KXruccUddYYg.7d-LfcQRs-4Nv0-gC-ByI4re-FoKtLX2JyGGX6rExDkg.PNG%2F2085437-e2f5d4b6-3b87-46ae-94a2-de16552bca72.png',
        hashtag: ['돼지고기', '삼겹살', '홍화돈']
    },
    {
        id: 2,
        category: '한식',
        name: '대성갈비',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동2가',
        phone: '02-465-6580',
        star: 4,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160225_113%2F1456377548094rapEp_JPEG%2F176175544926522_0.jpg',        
        hashtag: ['갈비', '대성갈비']
    },
    {
        id: 3,
        category: '양식',
        name: '성수다락',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동2가',
        phone: '0507-1349-9197',
        star: 5,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220427_281%2F1651023046377PXzud_JPEG%2F1.jpg',
        hashtag: ['파스타', '스파게티', '성수다락']
    },
    {
        id: 4,
        category: '중식',
        name: '일일향 성수10호점',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동2가',
        phone: '0507-1393-7988',
        star: 5,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200405_269%2F1586044760715kD2tP_JPEG%2FydPeM5Ry2YAaeyH_E5L4Rpng.jpg',
        hashtag: ['짜장면', '탕수육', '짬뽕', '일일향']
    },
    {
        id: 5,
        category: '중식',
        name: '라라면가 서울숲점',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동1가',
        phone: '0507-1329-7000',
        star: 3,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220420_299%2F1650419400766OD70y_JPEG%2FKakaoTalk_20220420_104932768.jpg',
        hashtag: ['칠리새우', '짜장면', '짬뽕', '라라면가']
    },
    {
        id: 6,
        category: '일식',
        name: '저스트텐동 성수점',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동1가',
        phone: '0507-1479-0304',
        star: 5,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAyMTA3MDdfMjQ3%2FMDAxNjI1NjE0MzQ1NTQ3.XuvuzcqV5DE2LPDQypSSvYacYrJZyx5vbYbRhdt0ecgg.BWGnu5xStoNMoks6Dsy_eB1X9m1dry-oOyo9vkOJ1nkg.PNG%2F2290554-7fe63150-6365-498e-95bf-14cd77d95c26.png',
        hashtag: ['연어덮밥', '초밥', '저스트텐동']
    },
    {
        id: 7,
        category: '일식',
        name: '모모야 성수점',
        open: '09:00',
        close: '21:00',
        location: '서울 성동구 성수동1가',
        phone: '070-7576-0452',
        star: 5,
        image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAyMjA0MTJfMjUx%2FMDAxNjQ5NzQ1ODUyNDEz.qEger2O-zuCLzQTREtCVbF1zeZLoeA9ynj4jx7TGerAg.qMMrogCwSAqF6Pq8Ik6-9s8U7WsHqE3xnopMObhrZEwg.PNG%2F2502146-a7ddc55d-c165-4cb8-b837-f02df3e50b1a.png',
        hashtag: ['오코노미야끼', '덮밥', '모모야']
    }];
    return { restaurants };
  }

  genId(restaurants: Restaurant[]): number {
    return restaurants.length > 0 ? Math.max(...restaurants.map(restaurant => restaurant.id)) + 1 : 1
  }
}
