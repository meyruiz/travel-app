import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(items: any[], category: string): unknown {

    if (category === "all") {
      return items;
    }

    // return the filtered array
    return items.filter(item => {
      if (item && item['category']) {
        return item['category'].includes(category);
      }
      return false;
    });
   }
  }
