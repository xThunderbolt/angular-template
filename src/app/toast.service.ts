import {Injectable} from '@angular/core';

export enum ToastType {
	Normal, Info, Success, Warning, Danger
}

export class Toast {
	private _type = ToastType.Normal;
	private _header: string = null;
	private _body = '';
	private _delay = 5000;
	private _sticky = false;

	get type(): ToastType {
		return this._type;
	}

	setType(type: ToastType) {
		this._type = type;
		return this;
	}

	get header(): string {
		return this._header;
	}

	setHeader(header: string) {
		this._header = header;
		return this;
	}

	get body(): string {
		return this._body;
	}

	setBody(body: string) {
		this._body = body;
		return this;
	}

	get delay(): number {
		return this._delay;
	}

	setDelay(delay: number) {
		this._delay = delay;
		return this;
	}

	get sticky(): boolean {
		return this._sticky;
	}

	setSticky(sticky: boolean) {
		this._sticky = sticky;
		return this;
	}
}

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	toasts: Toast[] = [];

	show(toast: Toast) {
		this.toasts.push(toast);
	}

	remove(toast: Toast) {
		this.toasts = this.toasts.filter(t => t !== toast);
	}
}
