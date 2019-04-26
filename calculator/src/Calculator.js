import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import {styles} from './Style';
import * as math from 'mathjs';




export default class Calculator extends Component {


    constructor(){
        super();

        this.state = {
            equation:'',
            result:''
        };
        this.addToEquation = this.addToEquation.bind(this);
        this.evaluate = this.evaluate.bind(this);
    }

    evaluate = () => {
        this.setState({result : math.eval(this.state.equation)});
    }
 
    
    
    addToEquation= (val) => {
        
        const newEq = this.state.equation + val;
        this.setState({equation : newEq});
       
    }
    
    render() {
        return(
            <div style = {styles.centerWrapper}>
                <Paper style={styles.paperStyle} elevation={1}>
                    <Display equation={this.state.equation} result={this.state.result} />
                    <ButtonGrid evaluate = {this.evaluate} onClick = {this.addToEquation}/>
                    
                </Paper>
            </div>
        );
    }
}