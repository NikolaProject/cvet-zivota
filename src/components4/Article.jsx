const Article = ({text, orderNumber, onClick}) => {
    return (
        <div className='mb-2 flex text-gray-500 h-[77px] p-5  rounded-md border-gray-100 border-[1px]' onClick={onClick}>
            <p className='font-velikaslova p-2 text-zuta'>{`${orderNumber}.`}</p>
            <p className='pl-2 '>{text}</p>
        </div>);
        
}

export default Article;