import React, { Component } from 'react';
import {styles} from './Style';
import Button from '@material-ui/core/Button';

export default class ButtonGrid extends Component  {

    handleClear = () => {
        this.props.clear();
    }

    handleEquals = () => {
        this.props.evaluate();
    }


    render(){
        return(
            <div style = {styles.buttonGrid}>
                <div>
                <Button onClick={()=> this.props.onClick('1')}  variant="text" style = {styles.button}> 1</Button>
                <Button onClick={()=> this.props.onClick('2')}  variant="text"style = {styles.button}> 2</Button>
                <Button onClick={()=> this.props.onClick('3')}  variant="text" style = {styles.button}> 3</Button>
                <Button onClick={()=> this.props.onClick('+')}  variant="text" style = {styles.button}> +</Button>
                </div>
                <div>
                <Button onClick={()=> this.props.onClick('4')} variant="text" style = {styles.button}> 4</Button>
                <Button onClick={()=> this.props.onClick('5')} variant="text" style = {styles.button}> 5</Button>
                <Button onClick={()=> this.props.onClick('6')}variant="text" style = {styles.button}> 6</Button>
                <Button onClick={()=> this.props.onClick('-')}variant="text" style = {styles.button}>-</Button>
                </div>
                <div>
                <Button onClick={()=> this.props.onClick('7')} variant="text" style = {styles.button}> 7</Button>
                <Button onClick={()=> this.props.onClick('8')} variant="text" style = {styles.button}> 8</Button>
                <Button onClick={()=> this.props.onClick('9')} variant="text" style = {styles.button}> 9</Button>
                <Button onClick={()=> this.props.onClick('*')} variant="text" style = {styles.button}> *</Button>
                </div>
                <div>
                <Button onClick={()=> this.props.onClick('0')} variant="text" style = {styles.button}> 0</Button>
                <Button onClick={this.handleClear} variant="text" style = {styles.button}> c</Button>
                <Button onClick={this.handleEquals} variant="text" style = {styles.button}> =</Button>
                <Button onClick={()=> this.props.onClick('/')} variant="text" style = {styles.button}> /</Button>
                </div>
            </div>
        );
    }
}