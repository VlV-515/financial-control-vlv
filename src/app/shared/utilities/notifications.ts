import * as toastr from 'toastr';

export interface ToastInvocation {
  tittle?: string;
  message: string;
}

export class ToastrNotification {
  static options: ToastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-center',
    preventDuplicates: true,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 5000,
    extendedTimeOut: 500,
    showEasing: 'swing',
    hideEasing: 'swing',
    showMethod: 'slideDown',
    hideMethod: 'slideUp',
  };
  constructor() {}
  static showSuccess({ tittle = 'Success!!!', message }: ToastInvocation) {
    toastr.success(message, tittle, this.options);
  }

  static showInfo({ tittle = 'Info!!!', message }: ToastInvocation) {
    toastr.info(message, tittle, this.options);
  }

  static showWarning({ tittle = 'Warning!!!', message }: ToastInvocation) {
    toastr.warning(message, tittle, this.options);
  }

  static showError({ tittle = 'Error!!!', message }: ToastInvocation) {
    toastr.error(message, tittle, this.options);
  }
}
