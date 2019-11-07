import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import { SearchBar,ListItem,Icon,ButtonGroup } from 'react-native-elements';
class Eight extends Component {
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
    
        
}


    render() { 
       
    
        return (  
   
            <View>
 
<View style={{justifyContent:'space-between'}}>
    {this.state.list.map((l, i) => (
        <ListItem
        key={i}
        title={l.name}
        rightIcon={{ name: l.icon, type: 'entypo'}}
        bottomDivider
        accessibilityComponentType/>
        ))}
     
         </View>

   </View>            


        );
    
    }
    
}

 
export default Eight;