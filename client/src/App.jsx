import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import channelListContainer from './components/channelListContainer';
import channelContainer from './components/channelContainer';

const apiKey = '1319618';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app_wrapper'>
      <Chat client={client} theme='team light'>  
        <channelListContainer/>

        <channelContainer/>
      </Chat>
    </div>
  )
}

export default App
