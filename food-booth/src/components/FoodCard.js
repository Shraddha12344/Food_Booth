import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const FoodCard = () => (
  <Card
    hoverable = {true}
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"/>}
  >
    <Meta title="Burger" description="www.FoodBooth.com" />
  </Card>
);
export default FoodCard;
