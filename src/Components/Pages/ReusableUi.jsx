import React from 'react'

const ReusableUi = () => {
  return (
    <div className="header" >
      <h1>Reusable UI Component</h1>

      <p className="para">
       Reusable UI Components are pre-built interface elements that can be used multiple 
       times across different pages and projects, reducing development time and maintaining consistency.
      </p>

      <h2 className="feature">Features</h2>
      <ul className="content">
        <li>Reusability - Write once and use multiple times ,Reduces code duplication.</li>
        <li>Modularity - Each component has a specific purpose ,Easy to maintain and update.</li>
        <li>Customizable - Accepts props/parameters for different content and styles. Example: Button text, color, size, and icon.</li>
        <li>Consistent Design - Maintains the same look and feel throughout the application ,Improves user experience.</li>
        <li>Scalability - Easy to extend with new features ,Suitable for small and large applications.</li>
        <li>Maintainability - Changes made in one component reflect wherever it is used ,Simplifies debugging and updates.</li>
        <li>Performance Optimization - Reduces redundant code ,Can be optimized using techniques like memoization.</li>
      </ul>
    </div>
  )
}

export default ReusableUi
