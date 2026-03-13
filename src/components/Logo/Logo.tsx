import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="Trash Pandas Logo"
      width={512}
      height={82}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[256px] w-full h-10.25', className)}
      src="/logo-white.png"
    />
  )
}
