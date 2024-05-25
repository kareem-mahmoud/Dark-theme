import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosListComponent } from './logos-list.component';

describe('LogosListComponent', () => {
  let component: LogosListComponent;
  let fixture: ComponentFixture<LogosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
