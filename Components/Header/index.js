import React from 'react'
import{FacebookOutlined, MailOutlined, InstagramOutlined, TwitterOutlined} from '@ant-design/icons';
import styles from './Header.module.css'
import Link from 'next/link';
import { Menu,Popover } from 'antd';

function Header() {

  const trek = (
    <Menu>
      <Menu.Item key={1}>
        <a href="/">Manaslu Circuit</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a href="/">ABC Trek</a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a href="/">Mardi Himal</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a href="/">Poonhill Trek</a>
      </Menu.Item>
      <Menu.Item key={5}>
        <a href="/">Khaptad Trek</a>
      </Menu.Item>
    </Menu>
  );
  const tour = (
    <Menu>
      <Menu.Item key={1}>
        <a href="/">kathmandu</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a href="/">Pokhara</a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a href="/">sauraha</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a href="/">Butwal</a>
      </Menu.Item>
      <Menu.Item key={5}>
        <a href="/">Bhakatapur</a>
      </Menu.Item>
    </Menu>
  );
  const biking = (
    <Menu>
      <Menu.Item key={1}>
        <a href="/">Gosaikunda Trail</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a href="/">shivapuri Trail</a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a href="/">Gorkha Trail</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a href="/">Mustang Trail</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a href="/">Manang Trail</a>
      </Menu.Item>
    </Menu>
  );
  const adventure = (
    <Menu>
      <Menu.Item key={1}>
        <a href="/">Rafting</a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a href="/">Bunjee</a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a href="/">Canoying</a>
      </Menu.Item>
      <Menu.Item key={4}>
        <a href="/">Hunting</a>
      </Menu.Item>
    </Menu>
  );
    return (
        <div className={styles.main}>
           <div className={styles.wrapper}>
                <div className={styles.info}>
              <div className={styles.leftbar}>
                  <InstagramOutlined/>
                  <FacebookOutlined/>
                  <TwitterOutlined/>
                  <MailOutlined/>
              </div>
               <div className={styles.rightbar}>
              <Link href="/sign up"><a>Sign Up</a></Link>
              <Link href="/login"><a>Login</a></Link>
              <Link href="/currency"><a>Currency</a></Link>
              <div>
                  <form><input class="search-bar" type="text" name="searchTerm" placeholder="Search"/></form>
                  </div>
              </div>
              </div>
            </div>
            <div className={styles.navwrapper}>
              <div className={styles.navbar}> 
                <div className={styles.logo}>
                  <img src="/logo.png" width='100px' height='70px'/> 
                 </div> 
                   <div className={styles.navmenu}>
                     <Link href="/home"><span className={styles.dropdown}>Home</span></Link>
                    <Popover content={trek} placement="bottom">
                      <span className={styles.dropdown}>Trekking</span></Popover>
                    <Popover content={tour} placement="bottom">
                      <span className={styles.dropdown}>Tours</span></Popover>
                      <Popover content={biking} placement="bottom">
                      <span className={styles.dropdown}>Mountain Biking</span></Popover>
                      <Popover content={adventure} placement="bottom">
                      <span className={styles.dropdown}>More Adventure</span></Popover>
                     <Link href="/travel update"><span className={styles.dropdown}>Travel update</span></Link>
                     <Link href="/blog"><span className={styles.dropdown}>Blog</span></Link>  
                     </div>
                     </div> 
            </div>
        </div>
    )
}

export default Header
