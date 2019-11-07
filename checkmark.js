import React, { Component } from 'react';
import { Header, ListItem } from 'react-native-elements';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {  selected: false }
    }
    render() { 
        return (
            <TouchableOpacity onPress={() => this.setState({ selected: !this.state.selected })}>
            <View style={this.props.style}>
                {this.state.selected ? 
                   <ListItem style={{fontSize:18,fontWeight:'bold',color:'#676767',backgroundColor:'#676767',marginRight:'15%'}} title={this.props.title} checkmark/>
                :
                <Text style={{fontSize:18,fontWeight:'bold',color:'#676767'}}>{this.props.title}</Text>
                }
                   </View>
            </TouchableOpacity>
          );
    }
}
 
export default Check;
