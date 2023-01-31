const ArticleDescription = ({ textArray }) => {
    return (
        <>
            <p className='font-velikaslova text-4xl mb-10 mt-10'>Sistem ocenjivanja duhovne čistoće</p>
            <p className='md:max-w-[468px]'>
                {textArray.map((text, i) => <span key={i}><span>{text}</span><br /><br /></span>)}
            </p>
        </>);
}

export default ArticleDescription;