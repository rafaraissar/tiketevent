"use client"
import styles from "./Detailpage.module.css";
import  "./Detailpage.css";
import Image from 'next/image';
import Link from "next/link";
import { MdOutlineShareLocation } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { Tabs } from "@geist-ui/core";
import Stickypage from "./sticky";

export default function Detailpage() {
    
        const [value, setValue] = useState('1')
        const switchHandler = () => setValue('2')
        const changeHandler = val => setValue(val)
    return (
        <>
          <div className={styles.contenheader}>
     
          <div className={styles.contenheaderimgbackground}>
            <div className={styles.contentitemshare}>
            <Link title="Share" href="/her" className={styles.contentitemsharelink}>
                           <AiOutlineShareAlt   className={styles.contentitemshareicon}/>
                           Share
                           </Link>  
                           <Link title="Share" href="/her" className={styles.contentitemsharelink}>
                           <FiHeart   className={styles.contentitemlikeicon}/>
                        Like
                           </Link>  
            </div>
      
          <Image 
                alt="background"
                 width="0"
                 height="0"
                 sizes="100vw"
                 priority
                 src="/event/2.jpg" 
      className={styles.contenheaderimgbackgroundimg} 
    />
            </div>  
            </div>
           <div className={styles.contenthome}>
        <div className={styles.contentitemimg}>
        <Image
                      className={styles.contenheaderimgcontentimg}
                      width="0"
                      height="0"
                      sizes="100vw"
                      alt="event"
                      src="/event/2.jpg" 
                    />
                         <div className={styles.contentitemtext}>
                           <h1>Festival Pesta Rakyart</h1>
                       
          <Link href="/her" className={styles.contentitemtag}>event</Link>
                        <p>Bandung, Jawa Barat | 23 Januari 2023</p>
                        <p>Rp. 213.000, -</p>
                        <div   id="tiket" className={styles.contentitemtiketid}>
                            </div>
                        <div className={styles.contentitembutton}>
                   
                        <Link href="/her"  className={styles.contentitemshareloc}>
                        <MdOutlineShareLocation className={styles.contentitemsharelocicon} />View on Map
                          </Link>  <a onClick={switchHandler} href=" #tiket"   className={styles.contentitembuy}>
                       Buy a Ticket
                          </a> </div></div>
            </div>
            </div>
            <div className={styles.contentcontent}>
            <div className={styles.contentitem}>
            <div className={styles.contentitemtab}>

            <Tabs  className={styles.contentitemtabtext} align="center"value={value} onChange={changeHandler}>
        <Tabs.Item   label="Deskripsi" value="1">
        HTTP is stateless, but not sessionless.HTTP is stateless, but not sessionless.<br />HTTP is stateless, but not sessionless. 
            </Tabs.Item>
        <Tabs.Item  label="Tiket" value="2">Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.</Tabs.Item>
      </Tabs>
            </div>

            </div>
           

            <Stickypage/>
            </div>
        </>
     
    )
  }
  