"use client"
import React, { useState } from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export default function Sidebar() {
  // const [activeKey, setActiveKey] = useState<number>;

  // const handleToggle = (key: number) => {
  //     setActiveKey(prevKey =>(prevKey === key ? null : key) )
  // }

  return (
    <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <a
      href="#"
      aria-current="true"
      className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
    >
      Crimes Near Me
    </a>
    <a
      href="#"
      className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      Something
    </a>
    <a
      href="#"
      className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      SOMETHING
    </a>
    <a
      href="#"
      className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      Settings
    </a>
  </div>
  
  )
}

