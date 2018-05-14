import React , { Component } from 'react';
import { View,Text,Image , StyleSheet,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
class IndexRemind extends Component{
    render(){
        return(
            <View style={styles.remind}>
                <View style={styles.leftWidth}>
                    <Image source={require('../../assets/images/msg.png')} style={styles.left_box} />
                </View>
                <View style={[styles.centerWidth]}>
                     <Text style={styles.lineH}>·  服务提醒</Text>
                     <Text style={styles.lineH}>·  服务提醒</Text>
                </View>
                <View style={styles.rightWidth}>
                     {/* <Image source={require('')} /> */}
                     <Text>></Text>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    remind:{
        backgroundColor:'white',
        padding:12.5,
        flexDirection:'row',
    },
    left_box:{
        marginTop:8,
    },
    leftWidth:{
        display:'flex',
        width:width*0.2,
    },
    centerWidth:{
        display:'flex',
        width:width*0.7
    },
    rightWidth:{
        display:'flex',
        width:width*0.1
    },
    lineH:{
        lineHeight:24
    }
})

export default IndexRemind;