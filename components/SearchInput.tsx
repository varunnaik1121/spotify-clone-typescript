'use client';
import qs from 'query-string';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import Input from './Input';
const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);
  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: '/search',
      query,
    });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen!"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
