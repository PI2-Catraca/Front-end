import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/admin/abc">
          <a>Go to pages/post/[pid].js</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
