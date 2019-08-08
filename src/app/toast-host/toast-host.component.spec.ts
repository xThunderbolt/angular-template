import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToastHostComponent} from './toast-host.component';

describe('ToastHostComponent', () => {
	let component: ToastHostComponent;
	let fixture: ComponentFixture<ToastHostComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ToastHostComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ToastHostComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
