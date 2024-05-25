import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router){}

  sub = new Subject<any>();

  ngOnInit(): void {
      this.testTakeUntill()
  }

  // takeUntil is take as mush as value you want if the observable is giving
  // till the given observable haven't been emitted 
  // when we are emiting any observable means emitting next from our subject then observable will be complete

  testTakeUntill(){
    
    // run observable and get the data from the observable till the subject is emiting the value
    interval(1000).pipe(
      takeUntil(this.sub)
    ).subscribe(
      (data)=> console.log('Second ' + data),
      (er) => console.log('er '+er),
      () => console.log('done')
    )
    // พอใส่คำสั่งส่วนนี้ไปพอครบ 5 วิมันก็จะทำการ update sub
    // ทำให้ไม่มีตัวเลขออกมาแล้ว
    // setTimeout(()=>{
    //   this.sub.next(null);
    // },5000)
  }

  ngOnDestroy(): void {
    // ย้ายจาก setTimeout
    // it means after out of this page i am emitting the value
    // เท่าที่ดูก็คือมันให้มัน emit ค่าอะไรก็ได้ขอแค่ emit ค่าไป
    this.sub.next('');
    // after you emit next from it you need to close means unsubscribe subject as well
    // การ unsub มันจะเป็นการ destroyed จริงๆ
    this.sub.complete();
  }


  goToPage(){
    this.router.navigate(['/page'])
  }
}
