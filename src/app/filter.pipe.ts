import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(contacts: any[], searchText: string): any[] {
    if (!contacts) return [];
    if (!searchText) return contacts;
    searchText = searchText.toLowerCase();
    return contacts.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }
}
