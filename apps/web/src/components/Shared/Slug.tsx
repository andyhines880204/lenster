import cn from '@lenster/ui/cn';
import type { FC } from 'react';

interface SlugProps {
  slug: string;
  prefix?: string;
  className?: string;
}

const Slug: FC<SlugProps> = ({ slug, prefix, className = '' }) => {
  return (
    <span
      className={cn(
        'from-brand-600 dark:from-brand-400 bg-gradient-to-r to-pink-600 bg-clip-text text-transparent dark:to-pink-400',
        className
      )}
    >
      {prefix}
      {slug}
    </span>
  );
};

export default Slug;
