import React, {useState} from 'react'
import Pagination from './Pagination'
import { data } from "./data";
const Feed = () => {
    // const [posts,setPosts]=useState([]);
    // const [page, setPage] = useState(1);
    // useEffect(()=>{

    //   fetch(`https://reqres.in/api/users?page=${page}`)
    //   .then(res=>res.json())
    //   .then(json=>setPosts([...posts,...json.data]))
      
      
    // },[page]);

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 6;
  
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
 

    return (
        <div className='main'>
          <div className='side'></div>
           <div> 
             {  
              currentPost.map((post,i)=>(
                <div className='container' key={i}>
               <div className='wrapper'>
               <img src={post.avatar} alt='avatar' />
              
               
               <div className='name'><h3>{post.first_name} {post.last_name}</h3></div>
               <div className='email'><h5>{post.email}</h5></div>
               </div>
                
                
                </div>
              ))                  
           }

    <div className='page_no'>
           <Pagination 
       postPerPage={postPerPage}
       totalPost={data.length}
       paginate={paginate}
     />        </div>
     </div>
        </div>
    )
}

export default Feed


         
     


