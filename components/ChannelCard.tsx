import React from 'react';
import type { Channel } from '../types';

interface ChannelCardProps {
  channel: Channel;
  onClick: (channel: Channel) => void;
  isActive: boolean;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, onClick, isActive }) => {
  const activeClasses = isActive 
    ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-black' 
    : 'ring-1 ring-gray-800';

  return (
    <div
      onClick={() => onClick(channel)}
      className="flex flex-col items-center gap-2 cursor-pointer group transition-all duration-300 ease-in-out"
      role="button"
      aria-pressed={isActive}
      aria-label={`Select channel: ${channel.name}`}
    >
      <div 
        className={`w-24 h-24 sm:w-28 sm:h-28 bg-gray-900 rounded-full flex items-center justify-center p-1 transition-all duration-300 group-hover:bg-gray-800 ${activeClasses}`}
      >
        <img 
          src={channel.logo} 
          alt={`${channel.name} logo`} 
          className="max-w-full max-h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300" 
          loading="lazy"
        />
      </div>
      <div className="w-24 sm:w-28 text-sm sm:text-base font-medium text-center truncate text-gray-300 group-hover:text-white">
        {channel.name}
      </div>
    </div>
  );
};

export default ChannelCard;