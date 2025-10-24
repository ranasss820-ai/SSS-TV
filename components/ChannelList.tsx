import React from 'react';
import ChannelCard from './ChannelCard';
import type { Channel } from '../types';

interface ChannelListProps {
  channels: Channel[];
  onSelectChannel: (channel: Channel) => void;
  activeChannelName: string;
}

const ChannelList: React.FC<ChannelListProps> = ({ channels, onSelectChannel, activeChannelName }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 sm:gap-6 justify-items-center">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.name}
          channel={channel}
          onClick={onSelectChannel}
          isActive={channel.name === activeChannelName}
        />
      ))}
    </div>
  );
};

export default ChannelList;