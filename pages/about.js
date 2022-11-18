import React from "react";
import Header from '../common/header';
import Footer from '../common/footer';
import Navbar from '../common/navbar';
import styles from '../styles/About.module.css';
import Image from "next/image";
import Head from "next/head";
const About = () => {
    return (
        <div>
            <Head>
                <title>hello</title>
            </Head>
            <Header />
            <Navbar />
            <h2 className={styles.main}>Hi This is about page.</h2>
            <Image src="/D.jpg" width={400} height={200} />
            <Footer />
        </div>
    )
}
export default About