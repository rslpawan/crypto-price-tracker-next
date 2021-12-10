import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Crypto.module.css'

function Cryptos() {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState('Please wait...')
    const [data, setData] = useState([]);
    
    const getData = () => {

        fetch('https://data.messari.io/api/v1/assets')
        .then(res => res.json())
        .then(res => setData(res.data))
        .catch(res => {
            alert("Something went wrong with the api. Please contact the developer.")
            router.push('/')
        })

    }

    getData()

    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.contaierhead}>
                    <Link href="/">
                        <h1>CRYPTO TRACKER</h1>
                    </Link>
                    <p>Below we have list of top 20 Cryptocurriences listed in the world. Pleaes go through your favourite one.</p>
                </div>
                <div className={styles.card}>
                    <ul>
                        {
                            data?
                            data.map((item, index) => {
                                return <li className={styles.listItem} key={index}>
                                    <div><p>{item.name}</p> <p>Name</p></div>
                                     <div><p>{item.symbol}</p> <p>Symbol</p></div>
                                    <div><p>{item.metrics.marketcap.rank}</p> <p>Rank</p></div>
                                    <div><p>{item.metrics.marketcap.current_marketcap_usd}</p> <p>Market Cap</p></div>
                                    <div><p>{item.metrics.market_data.price_usd}</p> <p>Price</p></div>
                                </li>
                            })
                            :
                            <p>No data found! Please visit the site tomorrow.</p>
                        }
                        {
                            !data.length > 0? isLoading:null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cryptos
