import { Columns } from 'ngx-easy-table';

/* eslint-disable max-lines, id-blacklist */
export interface Cms {
  name: string;
  division: string;
  languages: string;
  email: string;
  website: string;
  phone: string;
  fax: string;
  // responsibilityInformation: string;
  // hrbInformation: string;
  // isActive: boolean;
  // date?: string;
  // level?: string;
  // imgUrl?: string;
}

export const columns: Columns[] = [
  { key: 'name', title: 'Name' },
  { key: 'division', title: 'Division' },
  { key: 'languages', title: 'Languages' },
  { key: 'email', title: 'Email' },
  { key: 'website', title: 'Website' },
  { key: 'phone', title: 'Phone' },
  { key: 'fax', title: 'Fax' },
  // { key: 'responsibilityInformation', title: 'Responsibility Information' },
  // { key: 'hrbInformation', title: 'Hrd Information' },
  // { key: 'isActive', title: 'Active' },
];

export const data = [
  {
    name: 'Deanne Contreras',
    division: 'test',
    languages: 'en',
    email: 'test@gmail.com',
    website: 'https://test.com',
    phone: '+1 (949) 527-2108',
    fax: '9999',
    // responsibilityInformation: 'test',
    // hrbInformation: 'test',
    // isActive: true,
    // imgUrl: 'https://i.imgur.com/GLqxxnn.png',
    // age: 36,
    // address: { street: 'Some street', number: 12 },
  },
  
];