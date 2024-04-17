// folders are not publically accessible until there's a page file inside
// 'use client'; // this component will be included in javascript bundle. If this component is dependent on other componenets those other componenets will automatically become client components -- does not need to be repeated
// we want to render serverside as much as possible though
import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css';
// look at postcss.config.mjs
// the styles and classes are generated uniquely

const ProductCard = () => {
  return (
    // <div className={styles.card}></div> using imported module css
    <div className='p-1 bg-sky-200 text-white text-xl hover:bg-sky-400'>
      <AddToCart/>
    </div>
  )
}

export default ProductCard

