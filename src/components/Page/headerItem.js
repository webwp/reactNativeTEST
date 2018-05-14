import React , { Component } from 'react';

import { View , Text , StyleSheet , Image , Dimensions } from 'react-native';

class Hs extends Component{
    render(){
        return(
        <View style={styles.containt}>
            <View style={styles.headerTitle}>
                <View style={[styles.headerLeft,styles.lineHeights]}>
                    <Image source={require('../../assets/images/titleicon.png')} style={styles.ImageStyle}/> 
                </View>
                <View  style={styles.headerCenter}>
                    <Text style={styles.lineHeights}>{this.props.title}</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.lineHeights}>{this.props.more}</Text>
                </View>
            </View>
        </View>
        )
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    containt:{
        flexDirection:'row',
        width:width,
        backgroundColor:'white',
    },
    headerTitle:{
        width:width,
        flexDirection:'row',
        lineHeight:42,
        height:42,
        
        borderBottomColor:"#ddd",
        borderBottomWidth:1
    },
    headerLeft:{
        width:20,
        alignItems:'center'
    },
    headerCenter:{
        width:width-80,
    },
    headerRight:{
        width:60,
        alignItems:'center'
    },
    lineHeights:{
        lineHeight:42,
    },
    h:{
        height:150
    },
    ImageStyle:{
        marginTop:15,
    }
})
export default Hs;