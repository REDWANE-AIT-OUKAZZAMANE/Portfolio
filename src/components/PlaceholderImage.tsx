import React from 'react';

interface PlaceholderImageProps {
  title: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ title, className = '' }) => {
  // Generate a consistent color based on the title
  const getColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  const bgColor = getColor(title);
  
  return (
    <div 
      className={`w-full h-full ${className}`}
      style={{ backgroundColor: bgColor }}
    />
  );
};

export default PlaceholderImage; 