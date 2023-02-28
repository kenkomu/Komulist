//import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Link from "next/link";

export default function Home() {
  return (
     <div>

      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi. Ullam odit autem quod dolorem libero nam, itaque sit commodi a natus consectetur, vel dolorum quae dicta neque temporibus suscipit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam in aut debitis alias sit libero. Dolores exercitationem at quis vitae, cum quisquam! Suscipit sint molestias laboriosam velit hic accusantium.</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja
      </Link>
     </div>
     
   
  )
}
