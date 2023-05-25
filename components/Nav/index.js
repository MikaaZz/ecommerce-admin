import Link from 'next/link';

export default function Nav() {
  const inactiveLink = 'flex gap-1 p-1'
  const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg'

  return (
    <aside className="text-white p-4 pr-0">
      <Link href={''} className="flex gap-1 mb-4 mr-4">
        Logo VZ
        <span>VZ Original</span>
      </Link>
      <nav className='flex flex-col gap-2'>
        <Link href={'/'} className={activeLink}>
          <i>Icon</i>
          Dashboard
        </Link>
        <Link href={'/orders'} className={inactiveLink}>
          <i>Icon</i>
          Orders
        </Link>
        <Link href={'/products'} className={inactiveLink}>
          <i>Icon</i>
          Products
        </Link>
        <Link href={'/settings'} className={inactiveLink}>
          <i>Icon</i>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
