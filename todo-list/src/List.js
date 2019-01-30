import React, { Component } from 'react';
import Button from './Button';
export default class List extends Component {

   
    render() {
        const { onClick, list } = this.props;
        if ({ list }) {
            return (
                <div >
                    <ul  Style="list-style-type:none;" >{list.map((item,index) =>
                        <li  key={index}>
                            


                                <div class="ui left labeled button">
                                <Button onClick = {()=>onClick(index)} className="ui green button" text = "Done"></Button>
                                <h3 className ="ui basic label">{item}</h3>
                                </div>
                                




                        </li>
                    )}
                    </ul>
                </div>
            );
        }


    }
}
