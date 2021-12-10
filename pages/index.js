import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <h1>Welcome to Crypto Tracker</h1>
        <p>We provide you bunch of cryptocurrencies details. Please click below to get started.</p>
        <Link href="cryptos">
          <a>Get Started</a>
        </Link>
      </div>
      <p>@copyright cryptotraker, 2021</p>
    </div>
  )
}
