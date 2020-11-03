import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { ChatRoom } from '../models/chat-room';
//import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatCollection: AngularFirestoreCollection<any>;
  private chatRooms: Observable<any[]>;;

  private messagesCollection: AngularFirestoreCollection<any>;
  public messages: Observable<any[]>;




  constructor(
    private afs: AngularFirestore,
    //private authService: AuthService,

  ) {
    this.chatCollection = this.afs.collection<any>('chatRoomsTest');
    this.chatRooms = this.chatCollection.snapshotChanges();

   }

  getChatRooms(){
    return this.chatRooms.pipe(
      map(
        rooms => {
          return rooms.map(
            item => {
              const data: ChatRoom = item.payload.doc.data() as ChatRoom;
              data.id=item.payload.doc.id;
              return data;
              
            }
          ).filter(data => {
              console.log('ChatRoom.id > ',data.id);
              let uids =data.id.split('-');
              let uidProv= uids[0];
              let uidOther= uids[1];
              /*let uidCurrent = this.authService.userApp.uid;
              console.log(this.authService.userApp);
              return (uidCurrent===uidProv || uidCurrent==uidOther)*/
              
          });
        }
      )
    )
  }

  getMessages(chatRoom){
    console.log('cg> ',chatRoom)
    this.messagesCollection = this.afs.collection<any>(`/chatRoomsTest/${chatRoom}/messages`);
    return this.messagesCollection.valueChanges();
  }

} 