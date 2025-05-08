"use client"
import React, { useState } from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export default function Sidebar() {
  // const [activeKey, setActiveKey] = useState<number>;

  // const handleToggle = (key: number) => {
  //     setActiveKey(prevKey =>(prevKey === key ? null : key) )
  // }

  return (
    <CAccordion className='flex flex-col justify-between h-full text-center text-sm'>
    <CAccordionItem itemKey={1} className='h-[25%]'>
      <CAccordionHeader>Trending Crimes</CAccordionHeader>
      <CAccordionBody>
        <text>jhbdudicjkbidjkbdc</text>
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem itemKey={2} className='h-[25%]'>
      <CAccordionHeader>theft </CAccordionHeader>
      <CAccordionBody>
      <text>jhebhjcd chhd</text>
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem itemKey={3} className='h-[25%]'> 
      <CAccordionHeader>helicopters</CAccordionHeader>
      <CAccordionBody>
      <text>jhebhjcd chdj</text>
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
  )
}

