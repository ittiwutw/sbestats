import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[];
  chatBox: string;
  btnEmitter: EventEmitter<string>;

  constructor() { 
    this.btnEmitter = new EventEmitter<string>();
    this.messages = [
      {
        type:"outgoing",
        text:"ขอนัดไปดูที่ได้ไหมคะ?"
      },
      {
        type:"incoming",
        text:"ได้ครับ สะดวกวันไหน ช่วงกี่โมงครับ?"
      }, 
      {
        type:"outgoing",
        text:"วันศุกร์นี้ ช่วง 13.00 ได้ไหมคะ?"
      },
      {
        type:"incoming",
        text:"ได้ครับ เจอกันครับ"
      },
      {
        type:"outgoing",
        text:"โอเคค่ะ"
      }
    ];
    this.chatBox = "";
    this.ngOnInit();
  }

  ngOnInit() {
  }

  getClasses(messageType) {
    return {
      incoming: messageType === 'incoming',
      outgoing: messageType === 'outgoing',
    };
  }

}
