import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HtmlComment extends Component {
    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(el);
        el.outerHTML = `<!-- ${this.props.text} -->`;
    }
    render() {
        return <div />;
    }
}

export default HtmlComment;
