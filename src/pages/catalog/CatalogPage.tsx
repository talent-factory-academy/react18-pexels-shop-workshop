import React, { useLayoutEffect, useState } from 'react';
import { useSearchQuery } from './store/search/search.api';
import { useDispatch, useSelector } from 'react-redux';
import { search } from './store/search/search-filters.store';
import { getFilters } from './store/search/search-filters.selectors';
import { VideoPlayer } from './components/VideoPlayer';
import { CatalogItem } from './components/CatalogItem';
import { Spinner } from '../../shared/Spinner';

export const CatalogPage: React.FC = () => {
  const [text, setText] = useState<string>('girls')
  const filters = useSelector(getFilters)
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setText(filters.text)
  }, [filters]);

  const {
    data, error,isFetching,
  } = useSearchQuery(filters.text, {
    refetchOnMountOrArgChange: false,
  })

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(search(text))
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value)
  }

  return (
    <div className="container mx-auto text-center">
      { error && <div>Error...</div>}

      {/* Search Form */}
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={onChangeHandler}
          className="rounded-xl m-3 text-2xl h-16 w-96 border-slate-300 ring-pink-500 focus:border-pink-500 text-center"
          type="text"
          placeholder="Search topic"
        />
      </form>

      {/*Spinner*/}
      { isFetching &&  <Spinner />}

      {/*List*/}
      <div className="gap-8 mx-6 sm:columns-2 md:columns-3 ">
        {data?.map(v => <CatalogItem item={v}  key={v.id} />) }
      </div>

      {/*Video Player*/}
      <VideoPlayer />
    </div>
  )
};

