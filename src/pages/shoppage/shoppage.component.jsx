import React from 'react';
import PreviewCollection from '../../components/previewcomponet/Preview.component';
import Shop_Data from './shop-Data';


class ShopPage extends React.Component{
        constructor(props){
            super(props);
            this.state={
                collections:Shop_Data
            }
        }

    render(){
        const {collections}= this.state;
        return (
            <div>
                {
                    collections.map( ({title,items})=>(
                            <PreviewCollection title={title} items={items} />
                    ) )
                }
            </div>
        )
    }
}

export default ShopPage;