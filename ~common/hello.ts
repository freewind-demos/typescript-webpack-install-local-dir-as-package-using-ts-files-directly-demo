import {capitalize} from 'lodash';

export function hello(name: string) {
  console.log(`Hello, ${capitalize(name)}!`);
}