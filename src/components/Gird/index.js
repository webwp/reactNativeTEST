import React , { Component } from 'react';
import { Grid } from 'antd-mobile';
import { Text,View,StyleSheet,Image } from 'react-native';

class Index extends Component {
    render(){
        return(
            <Grid 
                itemStyle={styles.bgColor} 
                data={this.props.data} 
                hasLine={false}  
                renderItem={dataItem=>(
                    <View style={styles.txtCenter}>
                        <Image source={require('../../assets/images/Chargingpile.png')} style={styles.imgSet} />
                        <Text style={styles.setText}>{dataItem.text}</Text>
                    </View>
                )}
            
            />
        )
    }
}
const styles = StyleSheet.create({
    bgColor:{
        backgroundColor:'white'
    },
    txtCenter:{
        alignItems:'center',
        padding:12.5
    },
    imgSet:{

    },
    setText:{
        paddingTop:6
    }
})
export default Index;