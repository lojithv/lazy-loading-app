import { Component, ElementRef, ViewChild } from '@angular/core';
import { EntriesService } from '../entries.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  public items: any[] = [];
  public totalCount = 0;
  public pageIndex = 0;
  public pageSize = 10;

  @ViewChild('uiElement', { static: false }) uiElement: ElementRef | undefined;

  constructor(private entriesService: EntriesService) { }

  async ngOnInit() {
    await this.getItems(this.pageIndex, this.pageIndex);
    this.pageIndex += 1;
  }

  public async getItems(pageIndex: number, skip: number) {
    try {
      fetch(`https://dummyjson.com/products?limit=10&skip=${skip*this.pageSize}&select=title,price`)
        .then(async (res) => {
          const products = await res.json()
          this.items = [...this.items, ...products['products']]
          console.log(this.items)
          this.totalCount = products['total']
        })
        .then(console.log);
    } catch (error) {
      console.log(error)
    }
  }

  public async onScrollLoadData() {
    const nativeElement= this.uiElement?.nativeElement
    console.log(this.uiElement)
    if(nativeElement && nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight  &&  this.items.length !== this.totalCount){
      await this.getItems(this.pageIndex, this.pageIndex);
      this.pageIndex +=1;
    }
  }

}
