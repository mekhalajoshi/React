import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {styles} from './Style';




export default class Display extends Component  {
    render(){
        return(
            <div>
                <Card style = {styles.card}>
                    <CardContent>
                        
                            {this.props.equation}
                        
                        <Divider />
                        
                            {this.props.result}
                        
                    </CardContent>
                </Card>
            </div>
        );
    }
}