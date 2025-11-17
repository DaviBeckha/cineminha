import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsComponent } from './content-details';

describe('ContentDetails', () => {
  let component: ContentDetailsComponent;
  let fixture: ComponentFixture<ContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
