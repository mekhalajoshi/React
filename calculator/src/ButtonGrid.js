import React, { Component } from 'react';
import {styles} from './Style';
import Button from '@material-ui/core/Button';

export default class ButtonGrid extends Component  {
    constructor(){
        super();

        this.handleNumber = this.handleNumber.bind(this);

    }

    handleEquals = () => {
        this.props.evaluate();
    }

    handleNumber = (val) => {
        this.props.onClick(val);
    }

    render(){
        return(
            <div style = {styles.buttonGrid}>
                <div>
                <Button onClick={()=> this.props.onClick('1')}  variant="text" style = {styles.button}> 1</Button>
                <Button onClick={()=>this.handleNumber('2')}  variant="text"style = {styles.button}> 2</Button>
                <Button onClick={()=>this.handleNumber('3')}  variant="text" style = {styles.button}> 3</Button>
                <Button onClick={()=>this.handleNumber('+')}  variant="text" style = {styles.button}> +</Button>
                </div>
                <div>
                <Button onClick={()=>this.handleNumber('4')} variant="text" style = {styles.button}> 4</Button>
                <Button onClick={()=>this.handleNumber('5')} variant="text" style = {styles.button}> 5</Button>
                <Button onClick={()=>this.handleNumber('6')} variant="text" style = {styles.button}> 6</Button>
                <Button onClick={()=>this.handleNumber('-')} variant="text" style = {styles.button}>-</Button>
                </div>
                <div>
                <Button onClick={()=>this.handleNumber('7')} variant="text" style = {styles.button}> 7</Button>
                <Button onClick={()=>this.handleNumber('8')} variant="text" style = {styles.button}> 8</Button>
                <Button onClick={()=>this.handleNumber('9')} variant="text" style = {styles.button}> 9</Button>
                <Button onClick={()=>this.handleNumber('*')} variant="text" style = {styles.button}> *</Button>
                </div>
                <div>
                <Button onClick={()=>this.handleNumber('0')} variant="text" style = {styles.button}> 0</Button>
                <Button variant="text" style = {styles.button}> c</Button>
                <Button onClick={this.handleEquals} variant="text" style = {styles.button}> =</Button>
                <Button onClick={()=>this.handleNumber('/')} variant="text" style = {styles.button}> /</Button>
                </div>
            </div>
        );
    }
}