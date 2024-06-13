'use client';

import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import NextLink from 'next/link';
// Constants
import { routes } from '@/shared/constants';
// Styles
import styles from './Navbar.module.css';
// Components
import { Button, ThemeToggle } from '..';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/shared/states';

function Navbar(): JSX.Element {
  const pathname = usePathname();
  const open = useSidebar((s) => s.open);

  const isOnPathname = useCallback(
    (routeName: string) => {
      if (routeName.toLowerCase() === 'home' && pathname === '/') return true;
      if (pathname.includes(routeName.toLowerCase())) {
        return true;
      }
      return false;
    },
    [pathname]
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        {routes.map((route) => (
          <div className={styles['link-container']} key={route.name}>
            <NextLink
              className={`${styles.link} ${
                isOnPathname(route.name) ? styles['link__selected'] : ''
              }`}
              href={route.path}
            >
              {route.name}
            </NextLink>
            <div
              className={`${styles['link__underline']} ${
                isOnPathname(route.name) ? styles['link__underline--selected'] : ''
              }`}
            />
          </div>
        ))}
      </div>
      <Button
        className={styles['sidebar-button']}
        name='sidebar'
        variant='outline'
        size='icon'
        onClick={open}
      >
        <Menu className='h-4 w-4' />
      </Button>
      <ThemeToggle />
    </nav>
  );
}
export default Navbar;
