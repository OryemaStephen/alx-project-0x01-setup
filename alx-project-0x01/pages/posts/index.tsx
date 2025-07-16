import Header from '@/components/layout/Header'
import React from 'react'

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header />
      <h1 className="text-7xl font-thin">Posts Page</h1>
    </div>
  )
}

export default Posts