import React, { Component } from 'react';
import {View,Text, ScrollView,StyleSheet,Image, TouchableOpacity,Picker} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { Header, Button ,Divider } from 'react-native-elements';
import ListItem from './ListItem';
import Check from './checkmark';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
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
            <View style={{backgroundColor:'#F4F4F4'}}>
         
         <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

<Collapse>
    <CollapseHeader>
      <View style={{marginTop:'10%',marginLeft:'5%',alignItems:'flex-end'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#676767',marginRight:'10%'}}>Post Category</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
    
    <View style={{marginTop:'5%',marginLeft:'4%'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#676767'}}>All Posts</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:15}}>

    <View style={{width:'50%'}}>
    <Check title="Blog" />
      <Check title="Deals" />
      <Check title="For Sale" />
      <Check title="Housing" />
      <Check title="Lost and Found" />
      <Check title="Random" />
      <Check title="Wish list" />
    </View>

    <View style={{marginLeft:'5%',width:'50%',marginRight:'10%'}}>
      <Check title="Campus"/>
      <Check title="Events" />
      <Check title="Group" />
      <Check title="Jobs" />
      <Check title="News" />
      <Check title="Service" />
    </View>
      </View>
    </CollapseBody>
</Collapse>


<View>
<AccordionList
        list={this.state.list}
        header={this._head}
        body={this._body}
        />
        </View>


<ListItem title="Latest Posts" style={{alignSelf:'flex-end',marginRight:'10%'}} />
<Divider style={{ backgroundColor:"#676767",marginTop:5,marginBottom:5 }} />
<ListItem title="Most Saved Posts" style={{alignSelf:'flex-end',marginRight:'10%'}} />
<Divider style={{ backgroundColor:'#676767',marginTop:5,marginBottom:5}} />
<ListItem title="Most Likes Posts" style={{alignSelf:'flex-end',marginRight:'10%'}} />
<Divider style={{ backgroundColor:'#676767',marginTop:5,marginBottom:5  }} />
            
<Text>{'\n'}</Text>
<TouchableOpacity>
<Button containerStyle={{marginHorizontal:100}} title="Apply Filter"></Button>
</TouchableOpacity>


            </View>
);
        }

    }

 
export default Filter;
