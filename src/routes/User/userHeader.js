import React,{Component } from 'react';
import { View , Text , Image , StyleSheet , Dimensions , ImageBackground } from 'react-native';

class UserHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin:true
        }
    }
    render(){
        return (
            <View>
                <ImageBackground style={styles.userHeader} source={require('../../assets/images/me_bg.png')} >
                    <View style={styles.infoHeader}>
                         <View style={styles.flLeft}><Text style={styles.textColor}>消息</Text></View>
                         <View style={styles.flRight}><Text style={styles.textColor}>设置</Text></View>
                    </View>
                    <View style={styles.userInfoHeader}>
                        <View style={styles.userImg}>
                            <ImageBackground source={require('../../assets/images/me_nor.png')} style={styles.userPortrait} />
                        </View>
                        <View style={styles.userInfoText}>
                            <Text style={[styles.lineHeight,styles.styleText]}>{this.state.login ? "大王叫我来巡山":'未登录'}</Text>
                            <Text>{this.state.login ? <Text>登录/注册</Text>:<Text>认证用户</Text>}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    userHeader:{
        height:160,
        width:'100%',
    },
    infoHeader:{
        flexDirection:'row',
        marginLeft:12.5,
        marginRight:12.5,
        marginTop:32,
        position:'relative'
    },
    flLeft:{
        position:'absolute',
        left:0,
    },
    flRight:{
        position:'absolute',
        right:0,
    },
    textColor:{
        color:'#f8f8f8'
    },
    userInfoHeader:{

        flex:1,
        flexDirection:'row',
        marginLeft:12.5,
        marginRight:12.5,
        marginTop:30
    },
    userPortrait:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#f2f2f2',
        overflow:'hidden'
    },
    userImg:{
        display:'flex',
        width:width*0.3,
        alignItems:'center'
    },
    userInfoText:{
        display:'flex',
        width:width*0.7,
        paddingTop:10
    },
    lineHeight:{
        lineHeight:32
    },
    styleText:{
        fontWeight:'bold'
    }
})

export default UserHeader;