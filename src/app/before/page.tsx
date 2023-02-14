import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Before() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href='/demo/before/target'>Click to redirect /demo/before/target, which click and openIn new tab has different behavior</Link>
      </div>
      <div className={styles.description}>
        <Link href='/before/target'>Click to redirect /before/target (works properly)</Link>
      </div>
    </main>
  )
}
