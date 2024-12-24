import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Navbar/>
        <SideNav/>
      {children}
    </div>
  )
}

export default layout
