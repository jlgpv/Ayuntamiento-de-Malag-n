import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GridMenuPage } from './grid-menu.page';

describe('GridMenuPage', () => {
  let component: GridMenuPage;
  let fixture: ComponentFixture<GridMenuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridMenuPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
