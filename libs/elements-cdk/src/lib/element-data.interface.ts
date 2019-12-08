// 一个元素的数据
export interface IElementOptions {
  tag?: string;
  slot?: string;
  innerHTML?: string;
  innerText?: string;
  class?: {
    [name: string]: boolean;
  };
  style?: {
    [name: string]: string;
  };
  attributes?: {
    [name: string]: number | string | any;
  };
}

export interface IElementData {
  children: IElementData[];
}
