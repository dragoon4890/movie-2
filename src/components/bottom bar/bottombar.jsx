"use client"

import styles from "./bottombar.module.css";
import Link from "next/link";
import { useState } from "react";
import { IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';
import { ticketOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';

const Bottombar = () => {
  const [active, setActive] = useState(0);

  const Menus = [
    { name: "/", icon: homeOutline },
    { name: "/location", icon: locationOutline },
    { name: "/ticket", icon: ticketOutline },
    { name: "/user", icon: personOutline }
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.container}>

        {/* First Menu */}
        <div key={30} className={styles.botom} onClick={() => setActive(0)}>
          <span key={10} className={`${styles.box} ${active === 0 ? styles[`acti${0}`] : ''}`}></span>
          <Link key={30} href={Menus[0].name} className={`${styles.links} ${active === 0 ? styles.active : ''}`}>
            <IonIcon icon={Menus[0].icon} className={styles.img} />
          </Link>
        </div>

        {/* Second Menu */}
        <div key={31} className={styles.botom} onClick={() => setActive(1)}>
          <span key={11} className={`${styles.box} ${active === 1 ? styles[`acti${1}`] : ''}`}></span>
          <Link key={31} href={Menus[1].name} className={`${styles.links} ${active === 1 ? styles.active : ''}`}>
            <IonIcon icon={Menus[1].icon} className={styles.img} />
          </Link>
        </div>

        {/* Third Menu */}
        <div key={32} className={styles.botom} onClick={() => setActive(2)}>
          <span key={12} className={`${styles.box} ${active === 2 ? styles[`acti${2}`] : ''}`}></span>
          <Link key={32} href={Menus[2].name} className={`${styles.links} ${active === 2 ? styles.active : ''}`}>
            <IonIcon icon={Menus[2].icon} className={styles.img} />
          </Link>
        </div>

        {/* Fourth Menu */}
        <div key={33} className={styles.botom} onClick={() => setActive(3)}>
          <span key={13} className={`${styles.box} ${active === 3 ? styles[`acti${3}`] : ''}`}></span>
          <Link key={33} href={Menus[3].name} className={`${styles.links} ${active === 3 ? styles.active : ''}`}>
            <IonIcon icon={Menus[3].icon} className={styles.img} />
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Bottombar;
