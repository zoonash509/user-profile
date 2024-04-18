import React, { FC } from 'react'

const ChevronDown: FC<{ className?: string, onClick?: (e: unknown) => void }> = ({ onClick, className }) => (
  <svg
    className={className}
    onClick={onClick}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 9L12 15L18 9" stroke="#9A9EB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default ChevronDown
