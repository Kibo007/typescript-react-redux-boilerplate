import * as React from 'react';
const styles = require('./hello.scss');
// import styles from './hello.scss';


export interface HelloProps {
  compiler: string;
  framework: string;
}

interface StringArray {
  [index: number]: string;
}


function identity<T>(arg: T): T {
  return arg;
}

const Hello = (props: HelloProps) => (
  <h1 className={styles.coolClass}>
    Hello from {props.compiler} and {props.framework} {identity<string>('test')}!
  </h1>
);

export default Hello;