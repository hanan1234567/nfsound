import React from 'react'
import { Pagination } from 'antd'
import './store.css'

const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a></a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

const PaginationCust = () => {
  return (
    <div className='paginationcss'>
        <Pagination total={50} itemRender={itemRender} />
    </div>
  )
}

export default PaginationCust