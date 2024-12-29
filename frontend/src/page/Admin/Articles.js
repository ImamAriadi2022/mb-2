import React from 'react';
import ArticleList from '../../components/Articles/ArticleList';
import ArticleForm from '../../components/Articles/ArticleForm';

function Articles() {
  return (
    <div>
      <h1>Manage Articles</h1>
      <ArticleList />
      <ArticleForm />
    </div>
  );
}

export default Articles;
