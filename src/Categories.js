import React from "react";

const Categories = ({ post }) => {
  return (
    <article key={post.di} className='menu-item'>
      <img src={post.img} className="photo"></img>
      <div className="item-info">
        <header>
          <h4>{post.title}</h4>
          <h4 className="price">{post.price}</h4>
        </header>
        <p className="item-text">{post.desc}</p>
      </div>
    </article>
  );
};

export default Categories;
