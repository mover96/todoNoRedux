import * as React from "react";
import { connect } from 'react-redux';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        connect();
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}