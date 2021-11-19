import React, { useEffect, useReducer, useCallback, useRef, useState } from 'react';
import Mycomponent from './cart';
import Itemcard from './itemCard';

function Home() {
  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }

  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }

  

  

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

  // make API calls
  useEffect(() => {
    imgDispatch({ type: 'FETCHING_IMAGES', fetching: true })
    fetch(`https://fakestoreapi.com/products?page=${pager.page}&limit=10`)  
      .then(data => data.json())
      .then(images => {
        imgDispatch({ type: 'STACK_IMAGES', images })
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
      })
      .catch(e => {
        // handle error
        imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
        return e
      })
  }, [imgDispatch, pager.page])

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);

  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            pagerDispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [pagerDispatch]
  );

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);




  return (
    <div className="">
      <nav className="navbar d-flex justify-content-center bg-secondary sticky-top  ">
        <div className="containe text-centerr">
          <a className="navbar-brand text-center" href="/#">
            <h2 className="text-center text-dark">Fresh Stock</h2>
            
          </a>
        </div>
      </nav>

      <div id='images' className="container">
      <div className="component">
      <Mycomponent />
      </div>
        <div className="row">
          {imgData.images.map((item, index) => {
            const { title, image,  category, price} = item
            return (
              <Itemcard 
              image={image} 
              title={title} 
              category={category}
              price={price}  
              key={index} 
              item={item} 
              /> 
              
            )
          })}
        </div>
      </div>

      {imgData.fetching && (
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-white">Getting products</p>
        </div>
      )}
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
    </div>
  );
}

export default Home;
