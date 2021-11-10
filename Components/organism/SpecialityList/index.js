import React from 'react'
import {Card,Button} from 'antd';
import styles from './speciality.module.css';

function SpecialityList() {
    const data = [
        {
            image:'TrishuliRafting.jpg',
          title: 'Rafting',
        },
        {
            image:'Paragliding.jpg',
          title: 'Paragliding',
        },
        { image:'MountainFlight.jpg',
          title: 'Mountain Flight',
        },
        {
            image:'Bunjee.jpg',
          title: 'Bunjee',
        },
        { image:'CyclingTour.jpg',
          title: 'Cycling',
        },
      
      ];
    return (
        <div>
             <h1 className={styles.h1}>BEST TRIP</h1>
            <div className={styles.row}>
                {
                    data?.map((item,index)=>(
                        
                        <div className={styles.cardWrapper}>
        
        
        <Card size="small" cover={<img src={`/${item.image}`} width={300} height={300} />
 
     
     
                    }
     className={styles.card}
     hoverable
      >
       {/* <strong className={styles.title}>{item.title}</strong> */}
       <Button type="primary">{item.title}</Button>
       
        </Card>
       </div>

           ))
            }

              </div>
        </div>
    )
}

export default SpecialityList
