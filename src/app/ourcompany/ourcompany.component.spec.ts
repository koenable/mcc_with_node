import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcompanyComponent } from './ourcompany.component';

describe('OurcompanyComponent', () => {
  let component: OurcompanyComponent;
  let fixture: ComponentFixture<OurcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
