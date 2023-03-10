import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Before() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href='/demo/before/target'>Click to redirect, ref='/demo/before/target', which click works but openIn new tab landed wrongly</Link>
      </div>
      <div className={styles.description}>
        <Link href='/before/target'>Click to redirect, ref='/before/target' (click won't work)</Link>
      </div>
    </main>
  )
}
