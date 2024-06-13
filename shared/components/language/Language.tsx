'use client';

import { useRouter } from '@/shared/lib';
// Components & Styles
import { Globe } from 'lucide-react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '..';

function Language(): JSX.Element {
  const router = useRouter();

  const toggleLanguage = (locale: string) => {
    router.replace('/', { locale });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Globe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[2.5rem]'>
        <DropdownMenuItem onClick={() => toggleLanguage('es')}>ES</DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleLanguage('en')}>EN</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Language;
