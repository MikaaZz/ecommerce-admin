import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const inactiveLink = 'flex gap-1 p-1';
  const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg';

  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="text-white p-4 pr-0">
      <Link href={''} className="flex gap-1 mb-4 mr-4">
        Logo VZ
        <span>VZ Original</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link
          href={'/'}
          className={pathname === '/' ? activeLink : inactiveLink}
        >
          <i>Icon</i>
          Dashboard
        </Link>
        <Link
          href={'/products'}
          className={pathname.includes('/products') ? activeLink : inactiveLink}
        >
          <i>Icon</i>
          Products
        </Link>
        <Link
          href={'/orders'}
          className={pathname.includes('/orders') ? activeLink : inactiveLink}
        >
          <i>Icon</i>
          Orders
        </Link>
        <Link
          href={'/settings'}
          className={pathname.includes('/settings') ? activeLink : inactiveLink}
        >
          <i>Icon</i>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
