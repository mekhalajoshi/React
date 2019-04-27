import React, { Component } from 'react';
import {styles} from './Style';




export default class Display extends Component  {
    render(){
        return(
            <div>
                        <div>
                            {this.props.equation}
                        </div>
                        <div style = {styles.result}>
                            {this.props.result}
                        </div>
                        
            </div>
        );
    }
}