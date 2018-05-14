import React,{Component} from 'react';
import { View,Text,ScrollView,StyleSheet } from 'react-native';
import { WhiteSpace } from 'antd-mobile';

import Cd from './cd';
import Header from './header';
import GirdIndex from './grid';
import IndexRemind from './indexRemind';
import IndexTravel from './indexTravel';
import IndexInfo from './indexInfo';

class Index extends Component{
    render(){
        return(
            <View>
            <Header />
            <ScrollView>
            
                 
                 <Cd />
                 <GirdIndex />
                 <WhiteSpace />
                 <IndexRemind />
                 <WhiteSpace />
                 <IndexTravel />
                 <WhiteSpace />
                 <IndexInfo />
                 <WhiteSpace />
                 <WhiteSpace />
                 <WhiteSpace />
                 <WhiteSpace />
                 <View style={styles.footerStyle}>
                     <Text style={styles.footerStyleText}>我是底线君，到底了</Text>
                 </View>
            
            </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bgColor:{
        padding:12.5,
        backgroundColor:'white'
    },
    footerStyle:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        borderTopWidth:1,
        borderTopColor:"#dbdbdb",
        justifyContent: 'center',
        alignItems:'center'
    },
    footerStyleText:{
        flexDirection:'row',
        marginTop:-8,
        paddingLeft:12.5,
        paddingRight:12.5,
        backgroundColor:"#F2F2F2",
        color:"#ccc"
        
    }
})

export default Index;