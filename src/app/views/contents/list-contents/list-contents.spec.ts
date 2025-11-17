import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContents } from './list-contents';

describe('ListContents', () => {
  let component: ListContents;
  let fixture: ComponentFixture<ListContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
