import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { Header, Input, Button, Icon } from 'react-native-elements';

function Third() {
    return (
        <View style={styles.container}>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'CAMPUSGRUv', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={{ flexDirection: "row" }}>
                <Input style={{ width: '60%' }}
                    placeholder='Post Category'
                    rightIcon={<Image source={require('../Asset/left-arrow.png')} style={{ width: 15, height: 15, marginRight: 10 }} />}
                />
            </View>

            <View style={{ backgroundColor: '#F4F4F4' }}>
                <View>
                    <Text style={{ color: "#C3C3C3", fontWeight: 'bold', marginTop: '4%', marginLeft: '5%', fontSize: 18 }}>POST IMAGE(add up to 3)</Text>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    {/* <Icon style={{width:90,height:90}}
  name='add-a-photo'
  type='MaterialIcons'
  color='grey'
  
/> */}
                    <Image source={require('../Asset/Capture.jpg')} style={{ width: 90, height: 90, marginTop: '3%', marginLeft: '8%' }} />
                    <Image source={require('../Asset/Capture.jpg')} style={{ width: 90, height: 90, marginTop: '3%', marginLeft: '8%' }} />
                    <Image source={require('../Asset/Capture.jpg')} style={{ width: 90, height: 90, marginTop: '3%', marginLeft: '8%' }} />
                </View>

                <View>
                    <Text style={{ color: "#C3C3C3", fontWeight: 'bold', marginTop: '4%', marginLeft: '3%', fontSize: 18 }}>Post Title</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={{ marginLeft: '2.5%', marginTop: '2%', textAlign: 'center', height: 50, borderWidth: 2, borderColor: '#FEFEFE', borderRadius: 10, backgroundColor: "#FEFEFE", width: '95%' }} />
                </View>


                <View>
                    <Text style={{ color: "#C3C3C3", fontWeight: 'bold', marginTop: '4%', marginLeft: '3%', fontSize: 18 }}>POST DESCRIPTION (option)</Text>
                    <TextInput underlineColorAndroid='transparent'
                        style={{ padding: 80, marginTop: '2%', textAlign: 'center', height: 50, borderWidth: 2, borderColor: '#FEFEFE', borderRadius: 10, backgroundColor: "#FEFEFE", width: '95%', marginLeft: 10 }} />
                </View>
            </View>

            <Button containerStyle={{ width: 150, alignSelf: 'center', marginTop: 5 }}
                title="Post"
                type="solid"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
});

export default Third; 