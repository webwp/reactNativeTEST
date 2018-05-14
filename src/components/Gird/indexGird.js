import React , { Component } from 'react';
import { Grid } from 'antd-mobile';
import { Text,View,StyleSheet,Image,Dimensions } from 'react-native';

class Index extends Component {
    render(){
        return(
            <Grid 
                itemStyle={styles.bgColor} 
                columnNum={this.props.row}
                data={this.props.data} 
                hasLine={true}  
                renderItem={dataItem=>(
                    <View style={styles.txtCenter}>
                        <View style={styles.listLeft}>
                            <Text style={styles.lineH}>{dataItem.text}</Text>
                            <Text style={[styles.lineH,styles.setTextStyle]}>{dataItem.mack}</Text>
                        </View>
                        <View style={styles.listRight}>
                            <Image source={require('../../assets/images/Chargingpile.png')} style={styles.imgSet} />
                        </View>
                        
                    </View>
                )}
            
            />
        )
    }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    bgColor:{
        backgroundColor:'white',
        height:90
    },
    txtCenter:{
        flexDirection:'row',
        padding:12.5,
    },
    imgSet:{
        width:60,
        height:60
    },
    lineH:{
        lineHeight:24
    },
    setTextStyle:{
        color:"#ccc",
        fontSize:12
    },
    setText:{
        paddingTop:12.5
    },
    listLeft:{
        width:(width/2)*0.6,
        paddingTop:10
    },
    listRight:{
        width:(width/2)*0.4,
    }
})
export default Index;