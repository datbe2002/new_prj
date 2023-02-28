export interface ISearch {
  onChange?: (value: any) => void;
  onClick?: (value: any) => void;
  classNames?: string;
  placeholder?: string;
  onSearch?: (value: any) => void;
  name: string;
  onFinish?: (value: any) => void;
  formItems?: {
    name: string;
    label: string;
    element: React.ReactNode;
    width?: 'w-50' | 'w-100';
  }[];
}
