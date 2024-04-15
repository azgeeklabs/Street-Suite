import './BlogForm.css';

const BlogForm = ({classname})=>{
    return(

             <div className={`flex md:gap-4 sm:gap-2 md:py-5 sm:py-3 bottomBorder ${classname}`}>
                <div className='md:w-1/2 sm:w-2/5'>
                <div className='divForImgSm md:h-28 sm:h-20'>
                    
                </div>
                </div>

                <div className="md:w-1/2 sm:w-3/5 ">
                <div className="similarBlogs flex flex-col md:gap-3 sm:gap-2">
                <h5>China Kicks U.S Butt In The Latest Whatever</h5>
                <div className="bluecolor">
                    <h6>25 MINS AGO</h6>
                </div>
                </div>
                </div>

                </div>

   
    )
}

export default BlogForm