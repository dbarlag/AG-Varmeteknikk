import { motion } from 'motion/react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite]';

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}

export function FAQSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-white border border-zinc-200 rounded-xl p-6"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-6 rounded-full" variant="circular" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl border border-zinc-200 p-6"
        >
          <Skeleton className="h-4 w-24 mb-3" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-4/5 mb-4" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-2/3 mb-4" variant="text" />
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TechnicalGuideSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-zinc-50 rounded-xl p-6 border border-zinc-200"
        >
          <div className="flex items-start gap-3 mb-4">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="h-6 w-full" />
          </div>
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-3/4 mb-4" variant="text" />
          <div className="space-y-2 mb-5">
            {[1, 2, 3, 4].map((j) => (
              <Skeleton key={j} className="h-4 w-full" variant="text" />
            ))}
          </div>
          <Skeleton className="h-4 w-40" />
        </motion.div>
      ))}
    </div>
  );
}

export function CaseStudySkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl border border-zinc-200 p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="w-12 h-12 rounded-lg" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((j) => (
              <div key={j}>
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-4 w-full mb-2" variant="text" />
                <Skeleton className="h-4 w-full mb-2" variant="text" />
                <Skeleton className="h-4 w-2/3" variant="text" />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
