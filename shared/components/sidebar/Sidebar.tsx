'use client';

import { useTranslations } from 'next-intl';
import { useSidebar } from '@/shared/states';
// Components & Styles
import styles from './Sidebar.module.css';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../ui/Drawer';
import { Button } from '../ui/Button';
import { routes } from '@/shared/constants';
import { X } from 'lucide-react';
import { Link } from '@/shared/lib';

function Sidebar(): JSX.Element {
  const t = useTranslations('navbar');
  const toggle = useSidebar((s) => s.toggle);
  const isOpen = useSidebar((s) => s.isOpen);
  const close = useSidebar((s) => s.close);

  return (
    <Drawer open={isOpen} onOpenChange={toggle} direction='right'>
      <DrawerContent className={styles.sidebar}>
        <div className={styles.sidebar__content}>
          <DrawerHeader>
            <DrawerTitle>Gabriel</DrawerTitle>
          </DrawerHeader>
          <DrawerDescription className={styles.sidebar__links}>
            {routes.map((route, i) => (
              <Link className={styles.link} key={i} href={route.path} onClick={close}>
                {t(route.name)}
              </Link>
            ))}
          </DrawerDescription>
        </div>
        <DrawerClose className={styles.sidebar__close} asChild>
          <Button className='p-2' variant='outline'>
            <X />
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
export default Sidebar;
