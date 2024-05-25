import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestNewsComponent } from './lastest-news.component';

describe('LastestNewsComponent', () => {
  let component: LastestNewsComponent;
  let fixture: ComponentFixture<LastestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastestNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
