import React, { Component } from 'react';

export default class List extends Component {
    render() {
        const { list } = this.props;
        if ({ list }) {
            return (
                <div >
                    <ul>{list.map((item,index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                    </ul>
                </div>
            );
        }


    }
}


