import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = []

  getMessages() {
    return this.messages
  }

  add(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }
}
