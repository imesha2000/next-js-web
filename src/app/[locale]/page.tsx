import { useTranslations } from 'next-intl';
import React from 'react'

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations('IndexPage');
  return (
    <div className='flex items-center justify-between w-full px-6 py-4' >
      {t('title')}
      {t('description')}
    </div>
  )
}

export default home
