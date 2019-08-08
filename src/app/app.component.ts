import {Component} from '@angular/core';
import {Toast, ToastService, ToastType} from './toast.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-template';

	constructor(private toastService: ToastService) {
		this.toastService.show(new Toast().setBody('This is a toast!'));
		this.toastService.show(new Toast().setBody('This is a toast!').setType(ToastType.Info));
		this.toastService.show(new Toast().setBody('This is a toast!').setType(ToastType.Success));
		this.toastService.show(new Toast().setBody('This is a toast!').setType(ToastType.Warning));
		this.toastService.show(new Toast().setBody('This is a toast!').setType(ToastType.Danger));
	}
}
