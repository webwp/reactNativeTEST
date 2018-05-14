import React from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux';

import Index from './routes/index';
import User from './routes/User/index';

import indexPage from './routes/indexPage';

const mapData = [
  {
    key:'index',
    initial:true,
    component:()=>import('./routes/index'),
    renderTitle:'首页'
  },
  {
    key:'user',
    component:()=>import('./routes/User/index'),
    renderTitle:'会员中心'
  },
];
const scenes = Actions.create(
  <Scene key="root">
        <Scene key='index' initial={true} hideNavBar={true} component={indexPage} title="首页"/>
        <Scene key='user' initial={false} component={User} title="用户中心"/>
  </Scene>
);

export default scenes;