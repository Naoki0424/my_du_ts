export interface CsvType {
    header: string[];
    data: string[][];
    name: string;
    checked: boolean;
}

export class CsvType{
  constructor(table: string[][], name: string, checked = false) {
    this.header = table[0]
    this.data = table.slice(1)
    this.name = name
    this.checked = checked
  }
}