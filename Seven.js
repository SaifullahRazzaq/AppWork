import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import { SearchBar,ListItem,Icon,ButtonGroup } from 'react-native-elements';
import Fifth from './fifth';
import Sixth from './Sixth';
import Eight from './Eight';

class Seven extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            selectedIndex: 2,
            list : [
                {
                  name: 'University of Pittsburgh',
                icon:'dots-three-vertical',
                },
                  {
                    name: 'University of Panascala',
                    icon:'dots-three-vertical'
                 
                },
             
                {
                    name: 'University of Platsburgh',
                    icon:'dots-three-vertical'
                 
                },
          
                {
                    name: 'University of Purdure',
                    icon:'dots-three-vertical'
                 
                },
          
                {
                    name: 'University of Pepperdine',
                    icon:'dots-three-vertical'
                 
                },
          
              ]
         }
         this.updateIndex = this.updateIndex.bind(this);
        
}
renderComponent()
{
    const {selectedIndex}=this.state;
    if(selectedIndex==0)
    {
        console.log("0")
        return <Eight/>
    }
    else if(selectedIndex==1)
    {
        console.log("1")
        return <Sixth/>
    }
    else if (selectedIndex==2){
        return <Fifth/>
    }
}
updateIndex (selectedIndex) {
  
  this.setState({selectedIndex})
 }
    render() { 
        const buttons = ['Campus', 'Users', 'Posts']
        const { selectedIndex } = this.state
        const { search } = this.state;

        return (  
   
            <View>
  <SearchBar
  platform="ios"
        placeholder="Search Follwers..."
        onChangeText={this.updateSearch}
        value={search}
        />    

<ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      underlayColor="silver"
      containerStyle={{height: 40}}
    />
    {this.renderComponent()}
   </View>            


        );
    
    }
    
}

 
export default Seven;