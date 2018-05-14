import React , { Component } from 'react';
import { View , Text , StyleSheet } from "react-native";

import HeaderItem from '../../components/Page/headerItem';
import IndexList from '../../components/List/indexList';

const data = [ { icon: '../../assets/images/home/home/Chargingpile.png',
text: '交通违法查询' ,mack:'查机动车违章'},
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '电动车电子证' ,mack:'南宁车辆 执行出示' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '驾驶证信息' ,mack:'实时查分 执行出示' },
{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
text: '行驶证信息', mack:'桂A车辆 执行出示' }];

class IndexTraval extends Component{
    render(){
        return(
          <View style={styles.Overflow}>
                <HeaderItem title="资讯" more="更多" />
                <View style={styles.mt}>
                    <IndexList data={data} row={2} />
                </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    mt:{
        marginTop:-1,
        marginBottom:-1
    },
    Overflow:{
        overflow: 'hidden'
    }
})
export default IndexTraval;