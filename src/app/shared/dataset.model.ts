export class Dataset {
  label: string;
  data: any[];

  constructor(label: string) {
    this.label = label;
    this.data = [];
  }
}