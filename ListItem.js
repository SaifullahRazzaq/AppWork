import React, { Component } from 'react';
import { Header,Icon } from 'react-native-elements';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  selected: false }
    }
    render() { 
        return (
            <TouchableOpacity onPress={() => this.setState({ selected: !this.state.selected })}>
            <View style={this.props.style}>

                {this.state.selected ? 
                <View style={{flexDirection:'row'}}>

                <Icon
                 name='check'
                type='feather'
                color='#676767'
                size={20}
                />
                <Text style={{fontSize:18,fontWeight:'bold',color:'#676767'}}>{this.props.title}</Text>
                </View>
                :
                <Text style={{fontSize:18,fontWeight:'bold',color:'#676767'}}>{this.props.title}</Text>
                }
                   </View>
            </TouchableOpacity>
          );
    }
}
 
export default ListItem;
