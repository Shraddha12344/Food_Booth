import React from 'react';
import { Col, Row, Tabs } from 'antd';
import FoodCard from './FoodCard';
import {EnvironmentOutlined} from '@ant-design/icons';
import {StarOutlined} from '@ant-design/icons';
import {AppstoreOutlined} from '@ant-design/icons';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    icon: <EnvironmentOutlined />,
    label: 'NearBy',
    children:
    <Col>
      <Row>
         <Col span={8}>
           <FoodCard>

           </FoodCard>
         </Col>

         <Col span={8}>
           <FoodCard>
            
           </FoodCard>
         </Col>

         <Col span={8}>
           <FoodCard>
            
           </FoodCard>
         </Col>

      </Row>

      <Row>
         <Col span={8}>
           <FoodCard>

           </FoodCard>
         </Col>

         <Col span={8}>
           <FoodCard>
            
           </FoodCard>
         </Col>

         <Col span={8}>
           <FoodCard>
            
           </FoodCard>
         </Col>
         
      </Row>
    </Col>
  },
  {
    key: '2',
    label: 'Promotion',
    icon: < EnvironmentOutlined/>,
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'NewComers',
    children: 'Content of Tab Pane 3',
  },

  {
    key: '4',
    label: 'Best Seller',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '5',
    label: 'Top Rated',
    icon: <StarOutlined />,
    children: 'Content of Tab Pane 2',
  },
  {
    key: '6',
    label: 'All',
    icon: <AppstoreOutlined />,
    children: 'Content of Tab Pane 3',
  },
];
const FoodTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default FoodTabs;