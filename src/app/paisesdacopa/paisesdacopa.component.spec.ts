import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesdacopaComponent } from './paisesdacopa.component';

describe('PaisesdacopaComponent', () => {
  let component: PaisesdacopaComponent;
  let fixture: ComponentFixture<PaisesdacopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesdacopaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesdacopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
