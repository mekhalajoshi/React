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
        this.handleEquals = this.handleEquals.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleEquals = () => {
        const eq = this.state.equation;
        let answer = this.makeValid(this.state.equation);
        
        this.setState({
            result : math.eval(answer),
            equation : ''
        });
    }
 
    clear = () => {

        let equ = this.state.equation;
        const eq = equ.slice(0, equ.length-1);
        let answer =this.makeValid(eq);
        if(answer==='')
            this.setState({
                result : '',
                equation : '',
            });
        else    
            this.setState({
                result : math.eval(answer),
                equation : eq
            });
        
    }

    makeValid= (eq) => {
        
        let answer = '';
        
            if(eq.endsWith('/')||eq.endsWith('*')||eq.endsWith('-')||eq.endsWith('+') )
                answer = eq.slice(0, eq.length-1);
            else
                answer = eq;
        
        return answer;
    }

    addToEquation= (val) => {
        
        const newEq = this.state.equation + val;
        if(!isNaN(val))
            this.setState({ 
                equation : newEq,
                result : math.eval(newEq)
            });
        else
            this.setState({ 
                equation : newEq
            });

    }

    render() {
        return(
            <div style = {styles.paperWrapper} >
                <Paper style={styles.paperStyle}  >
                    <div style = {styles.displayWrapper}>
                    <Display equation={this.state.equation} result={this.state.result} />
                    </div>
                    <div style = {styles.buttonGridWrapper}>
                    <ButtonGrid clear = {this.clear} evaluate = {this.handleEquals} onClick = {this.addToEquation}/>
                    </div>
                    
                </Paper>
            </div>
        );
    }
}