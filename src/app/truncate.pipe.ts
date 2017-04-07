import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, amount: number) {
    let truncateLength = 40;

    if (amount) {
      truncateLength = amount;
    }

    if (value.length > truncateLength) {
      return value.substring(0, truncateLength) + '…';
    } else {
      return value;
    }
  }
}