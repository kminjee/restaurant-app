import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {

  constructor() { }

  data = [
    {
      id: 1,
      category: '한식',
      name: '김가네김밥 서울숲IT밸리점',
      open: '10:00',
      close: '21:00',
      location: '서울특별시 성동구 성수일로 77 서울숲 IT 밸리',
      image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220114_54%2F1642140098863A5Yhg_JPEG%2F%25B1%25E8%25B0%25A1%25B3%25D7_%25B3%25D7%25C0%25CC%25B9%25F6_%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA_%25BD%25E6%25B3%25D7%25C0%25CF.jpg'
    },
    {
      id: 2,
      category: '한식',
      name: '삼청당 성수점',
      open: '09:00',
      close: '18:00',
      location: '서울특별시 성동구 상원8길 1 지하1층',
      image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210917_33%2F1631843523556czxgt_JPEG%2F8Oj-Dq3rmmFY0UB8gS6EKEgY.jpg'
    },
    {
      id: 3,
      category: '양식',
      name: '위드번',
      open: '13:00',
      close: '20:00',
      location: '서울특별시 성동구 성수이로12길 17-1',
      image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fsearchad-phinf.pstatic.net%2FMjAyMjA0MDZfMjIx%2FMDAxNjQ5MjMyNDE3NTY0.9aLMwrVtG0AkXADzr7mFmiDVkyIjGzCfvyuyvosUOhAg.5Pajsn6cZk-YQK9MFNFlWeIrZoQf0o03WXjEMHXc-GYg.PNG%2F2389210-70602ad9-ad97-45e4-b538-6acab8da0af7.png'
    },
    {
      id: 4,
      category: '양식',
      name: '성수다락',
      open: '11:00',
      close: '19:00',
      location: '서울특별시 성동구 뚝섬로9길 20 2층',
      image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=f184_184&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220427_281%2F1651023046377PXzud_JPEG%2F1.jpg'
    },
  ]

  ngOnInit() {}

}
