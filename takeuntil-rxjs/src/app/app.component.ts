import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'takeuntil-rxjs';

  sub = new Subject<any>();

  ngOnInit(): void {
      // this.testTakeUntill()
  }

  // takeUntil is take as mush as value you want if the observable is giving
  // till the given observable haven't been emitted 

  // testTakeUntill(){
    
  //   // run observable and get the data from the observable till the subject is emiting the value
  //   interval(1000).pipe(
  //     takeUntil(this.sub)
  //   ).subscribe(
  //     (data)=> console.log('Second ' + data),
  //     (er) => console.log('er '+er),
  //     () => console.log('done')
  //   )
  //   // พอใส่คำสั่งส่วนนี้ไปพอครบ 5 วิมันก็จะทำการ update sub
  //   // ทำให้ไม่มีตัวเลขออกมาแล้ว
  //   // setTimeout(()=>{
  //   //   this.sub.next(null);
  //   // },5000)
  // }

  // ngOnDestroy(): void {
  //   // ย้ายจาก setTimeout
  //   this.sub.next(null);
  // }


}
