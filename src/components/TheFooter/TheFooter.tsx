import s from './TheFooter.module.scss'
import Image from "next/image";
import logo from "@/assets/img/logoBlack.svg";

import facebookIcon from '@/assets/img/facebookIcon.svg';
import twitterIcon from '@/assets/img/twitterIcon.svg';
import youtubeIcon from '@/assets/img/youtubeIcon.svg';
import instagramIcon from '@/assets/img/instagramIcon.svg';


import newsLetter from '@/assets/img/newsLetter.svg';
import {NewsLetterInput} from "@/UI/inputs/NewsLetterInput";
import {BtnBlackishGreen} from "@/UI/Buttons/BtnBlackishGreen/BtnBlackishGreen";


const destinationsLinks = [
    {name: 'Canada', href: '/Canada'},
    {name: 'Alaksa', href: '/Alaksa'},
    {name: 'France', href: '/France'},
    {name: 'Iceland', href: '/Iceland'},
]

const activitiesLinks = [
    {name: 'Northern Lights', href: '/Northern-Lights'},
    {name: 'Cruising & sailing', href: '/cruising-and-sailing'},
    {name: 'Multi-activities', href: '/multi-activities'},
    {name: 'Kayaing', href: '/kayaing'},
]
const travelBlogsLinks = [
    {name: 'Bali Travel Guide', href: '/Bali-Travel-Guide'},
    {name: 'Sri Lanks Travel Guide', href: '/Sri-Lanks-Travel-Guide'},
    {name: 'Peru Travel Guide', href: '/Peru-Travel-Guide'},
    {name: 'USA Travel Guide', href: '/USA-Travel-Guide'},
]

const aboutUsLinks = [
    {name: 'Our Story', href: '/our-story'},
    {name: 'Work with us', href: '/work-with-us'},

]

const contactUsLinks = [
    {name: 'Send a message', href: '/send-a-message'},
    {name: 'Leave a feedback', href: '/leave-a-feedback'},

]

export const TheFooter = () => {
    return (
        <footer className={s.footer}>
            <div className={s.newsLetterBlock}>
                <div >
                    <h1>Subscribe <br/> Newsletter</h1>
                    <h3>The Travel</h3>
                    <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                    <NewsLetterInput/>
                    <BtnBlackishGreen title={'Subscribe'}></BtnBlackishGreen>

                </div>

                <Image src={newsLetter}
                       alt={'News Letter'}
                       width={400}
                       height={305}

                />
            </div>
            <div className={s.container}>
                <div className={s.iconsBlockGeneral}>
                    <Image src={logo}
                           alt={'logo'}
                           width={120}
                           height={40}

                    />

                    <div className={s.iconsBlock}>
                        <Image src={facebookIcon}
                               alt={'facebookIcon'}
                               width={20}
                               height={20}
                        />

                        <Image src={twitterIcon}
                               alt={'twitterIcon'}
                               width={20}
                               height={20}
                        />
                        <Image src={youtubeIcon}
                               alt={'youtubeIcon'}
                               width={20}
                               height={20}
                        />
                        <Image src={instagramIcon}
                               alt={'instagramIcon'}
                               width={20}
                               height={20}
                        />

                    </div>
                </div>

                <div className={s.footerLinks}>


                    <div>
                        <h3>Our Destinations</h3>

                        {
                            destinationsLinks.map((destinationsLink) => {
                                return (

                                    <ul>
                                        <li><a href={destinationsLink.href}>{destinationsLink.name}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>


                    <div>
                        <h3>Our Activities</h3>

                        {
                            activitiesLinks.map((activitiesLink) => {
                                return (

                                    <ul>
                                        <li><a href={activitiesLink.href}>{activitiesLink.name}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>


                    <div>
                        <h3>Travel Blogs</h3>

                        {
                            travelBlogsLinks.map((travelBlogsLink) => {
                                return (

                                    <ul>
                                        <li><a href={travelBlogsLink.href}>{travelBlogsLink.name}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h3>About Us</h3>

                        {
                            aboutUsLinks.map((aboutUsLink) => {
                                return (

                                    <ul>
                                        <li><a href={aboutUsLink.href}>{aboutUsLink.name}</a></li>
                                    </ul>
                                )
                            })
                        }
                    </div>

                   <div>
                       <h3>Contact Us</h3>

                       {
                           contactUsLinks.map((contactUsLink) => {
                               return (

                                   <ul>
                                       <li><a href={contactUsLink.href}>{contactUsLink.name}</a></li>
                                   </ul>
                               )
                           })
                       }
                   </div>

                </div>

            </div>
        </footer>
    )
}