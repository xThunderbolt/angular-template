import {Component} from '@angular/core';
import {Toast, ToastService, ToastType} from '../toast.service';

@Component({
	selector: 'app-toast-host',
	templateUrl: './toast-host.component.html',
	styleUrls: ['./toast-host.component.scss']
})
export class ToastHostComponent {
	constructor(public toastService: ToastService) {
	}

	toastClass(toast: Toast) {
		switch (toast.type) {
			case ToastType.Info:
				return 'bg-info text-light';

			case ToastType.Success:
				return 'bg-success text-light';

			case ToastType.Warning:
				return 'bg-warning';

			case ToastType.Danger:
				return 'bg-danger text-light';

			default:
				return '';
		}
	}

	showInfoIcon(toast: Toast) {
		return toast.type === ToastType.Info;
	}

	showSuccessIcon(toast: Toast) {
		return toast.type === ToastType.Success;
	}

	showWarningIcon(toast: Toast) {
		return toast.type === ToastType.Warning;
	}

	showDangerIcon(toast: Toast) {
		return toast.type === ToastType.Danger;
	}

	hide(toast: Toast) {
		this.toastService.remove(toast);
	}
}
