import React from 'react'

const SectionTitle = ({paragraph, header}) => {
  return (
    <div className="section-title">
        <p>{paragraph}</p>
        <h2>{header}</h2>
    </div>
  )
}

export default SectionTitle