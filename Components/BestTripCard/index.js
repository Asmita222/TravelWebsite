import React from 'react'
import { TabPane,Tabs} from 'antd';
import styles from '../organism/SpecialityList/speciality.module.css';
import TourList from '../organism/TourList';
import TrekkingList from '../organism/TrekkingList';
import AdventureList from '../organism/AdventureList';

function BestTripCard() {
    const { TabPane } = Tabs;    
       
    return (
        <div>
            <h1 className={styles.h1}>BEST SELLING TRIPS</h1>
             <Tabs defaultActiveKey="1" centered>
    <TabPane tab="NEPAL TOUR" key="1" className={styles.tab}>
      <TourList/>
    </TabPane>
    <TabPane tab="NEPAL TREKKING" key="2">
      <TrekkingList/>
    </TabPane>
    <TabPane tab="MORE ADVENTURE" key="3">
      <AdventureList/>
    </TabPane>
  </Tabs>
        </div>
    )
}

export default BestTripCard