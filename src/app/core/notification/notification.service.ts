import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toast: ToastrService) { }
    /**
   * 
   * @param {string} message 
   * @param {string} type 
   * @param {string }icon 
   */
     showNotification(message: string, type: string, icon?: string) {
      this._toast.show(`<span class="now-ui-icons ${icon}"></span>`, message, {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
        toastClass: `alert alert-${type} alert-with-icon`
      });
    }
  
  
}
