import React, {Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Header, Input, Button, Icon, Avatar } from 'react-native-elements';
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let flexDirection='row'; let alignSelf='flex-start';
        if(this.props.right){
            flexDirection = 'row-reverse';
            alignSelf = 'flex-end'
        }
        return (  
            <View style={{padding:'2%',margin:'3%',borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 10, backgroundColor: "#FEFEFE", width: '75%' ,marginTop: '6%', flexDirection , justifyContent: 'flex-start', alignSelf, flexWrap: 'wrap', }}>

                <View style={{marginLeft: '5%',marginRight:'5%',}}>

                    <Avatar
                        size="medium"
                        rounded
                        title="MT"
                        activeOpacity={0.7}
                    />
                </View>

                < View style={{ width: '65%'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>
                    my name is khan, hfklfkljkdlj;ldajvs;lvjcl;asj;lvj;zj;vlj;lzvj
                    my name is khan, hfklfkljkdlj;ldajvs;lvjcl;asj;lvj;zj;vlj;
                    my name is khan, hfklfkljkdlj;ldajvs;lvjcl;asj;lvj;zj;vlj;lzvj my name is khan, hfklfkljkdlj;ldajvs;lvjcl;asj;lvj;zj;vlj;lzvj
                    </Text>
                </View>



               


            </View>
        );
    }
}
 
export default Message;