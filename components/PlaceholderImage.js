import React from 'react'

const PlaceholderImage = ({ width, height, text }) => {
  return (
    <div></div>
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox={`0 0 ${width} ${height}`}
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <rect width={width} height={height} fill="#cccccc" />
    //   <text
    //     x="50%"
    //     y="50%"
    //     dominantBaseline="middle"
    //     textAnchor="middle"
    //     fill="#333333"
    //     fontSize="20"
    //     fontFamily="Arial, sans-serif"
    //   >
    //     {text}
    //   </text>
    // </svg>
  )
}

export default PlaceholderImage