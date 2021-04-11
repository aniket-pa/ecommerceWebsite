import react from 'react';
import PreviewItem from '../preview-item/preview-item.component';
import './preview.component.styles.scss';

const PreviewCollection = ({title,items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title"> {title} </h1>
            <div className="preview">
                
                {
                    items.filter( (item)=>  item.id <=4)
                    .map( ({id , ...otherComponentProps})=>(
                            <PreviewItem key={id} {...otherComponentProps} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default PreviewCollection;