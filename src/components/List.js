import React from "react";
import Video from "./Video";
import Article from "./Article";
import New from "./New";
import Popular from "./Popular";
import Wrapper from "./Wrapper";


export default function List(props) {
    return props.list.map(item => {        
        let WithWrapper;    

        if (item.views < 100) {
            WithWrapper = Wrapper(New, item);
            return <WithWrapper item={item} />
        }
        if (item.views > 1000) {
            WithWrapper = Wrapper(Popular, item);
            return <WithWrapper item={item} />
        }
        switch (item.type) {
            case 'video':
                return (
                    <Video item={item} />
                );

            case 'article':
                return (
                    <Article item={item} />
                );
        }
    });
};