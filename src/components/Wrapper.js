import React, { useState } from 'react';
import Video from './Video';
import Article from './Article';

export default function Wrapper(Component, item) {
        
    return class Wrapper extends React.Component {
        
        render() {
            let type = item.type;
            let children;
            
            if (type === 'video') {
                children = <Video item={item}/>
            }
            if (type === 'article') {
                children =  <Article item={item}/>
            }
            
            return (
            <Component  children={children} />
        )
        }
    }
}
