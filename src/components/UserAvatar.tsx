import React from 'react';
import { getInitials, getAvatarColor } from '../lib/userUtils';

interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-32 h-32 text-2xl',
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  imageUrl,
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);
  const initials = getInitials(name);
  const backgroundColor = getAvatarColor(name);

  const shouldShowInitials = !imageUrl || imageError;

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-semibold text-white ${className}`}
      style={{ backgroundColor: shouldShowInitials ? backgroundColor : 'transparent' }}
    >
      {shouldShowInitials ? (
        <span>{initials}</span>
      ) : (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full rounded-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
};