import Image from "next/image";
import s from "./page.module.scss";
import Link from "next/link";
import {TransparentBtn} from "@/UI/Buttons/TransparentBtn/TransparentBtn";
import {PlanYourTripCard} from "@/components/PlanYourTripCard/PlanYourTripCard";
import planTrip from '@/assets/img/planTrip.svg'
import {BigCard} from "@/components/BigCard/BigCard";
import flights from '@/assets/img/flights.svg'
import letter from '@/assets/img/letter.svg'
import {BtnMintGreen} from "@/UI/Buttons/BtnMintGreen/BtnMintGreen";


export default function Home() {
    return (
        // <div className={s.general}>
        <div className={s.container}>
            <div>

                <div className={s.landingSlider}>
                    <h2>Helping Others</h2>

                    <h1>LIVE & TRAVEL</h1>
                </div>

            </div>
            {/*</div>*/}
            <section className={s.sectionGeneral}>
                <div className={s.flightsStays}>
                    <div className={s.flightsStaysBlock}>
                        <Link href={'/flights'}>Flights</Link>
                        <Link href={'/stays'}>Stays</Link>
                    </div>
                </div>

            </section>

            <section className={s.planYourTrip}>
                <div className={s.planYourTripContainer}>
                    <div className={s.planYourTripTopBlock}>
                        <div>
                            <h1>Plan your perfect trip</h1>
                            <p>Search Flights & Places Hire to our most popular destinations</p>
                        </div>
                        <TransparentBtn title={'See more options'} href={'/see-more-options'}></TransparentBtn>

                    </div>
                    <div className={s.gridContainer}>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                        <PlanYourTripCard src={planTrip} alt={'plan trip'} title={'Turkey'}></PlanYourTripCard>
                    </div>
                </div>
            </section>

            <section className={s.bigCardsSection}>
                <div className={s.bigCardsContainer}>

                    <BigCard
                        className={s.flightsBigCardFirst}
                        title={'Flights'}
                        href={'#'}
                        description={'Search Flights & Places Hire to our most popular destinations'}
                        btnTitle={'Show Flights'}
                        src={letter}
                        alt={'big card'}
                        children={<BtnMintGreen title={'Find Flights'} href={'#'}></BtnMintGreen>}>
                    </BigCard>

                    <BigCard
                        children={<BtnMintGreen title={'Find Hotel'} href={'#'}></BtnMintGreen>}
                        className={s.flightsBigCardSecond}
                        title={'Hotels'}
                        href={'#'}
                        description={'Search Hotels & Places Hire to our most popular destinations'}
                        btnTitle={'Show Hotels'}
                        src={letter}
                        alt={'big card'}>
                    </BigCard>
                </div>
            </section>


        </div>
    );
}
