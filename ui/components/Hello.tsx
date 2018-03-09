import * as React from 'react'

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
    <h1>Hello from {props.compiler} and {props.framework} {identity<string>('test')}!</h1>
);

export default Hello;