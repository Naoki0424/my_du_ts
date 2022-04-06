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

export interface PackageCardType {
  title: string;
  text: string;
}

export class PackageCardType {
  constructor(title: string, text: string) {
    this.title = title
    this.text = text
  }
}

export const tabContentType = {
  DemoTab: 0,
  PackageTab: 1,
  PandasTab: 2
  
}

export const comparisonOperatorList = [
  "==",
  "is not Null",
  "<>"
]

export const testColumnList = [
  "col001",
  "col002"
]
