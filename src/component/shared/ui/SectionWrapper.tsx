import React from 'react'

interface SectionWrapperProps {
    children: React.ReactNode;
    }

const SectionWrapper:React.FC<SectionWrapperProps> = ({children}) => {
  return (
    <div className='mx-auto max-w-[1500px]'>
{children}
    </div>
    
  )
}

export default SectionWrapper