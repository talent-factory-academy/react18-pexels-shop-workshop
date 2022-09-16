import clsx from 'clsx';
import React, {  useState } from 'react';
import { Spinner } from '../../../shared/components/Spinner';

import { FiltersState } from '../store/filters/search-filters.store';
import { Video } from '../../../model/pexels-video-response';

interface VideoFiltersProps {
  data: Video[] | undefined;
  loading: boolean;
  filters: FiltersState;
  onChangeFilter: (filters: FiltersState) => void;
}

export function VideoFilters(props: VideoFiltersProps) {
  const [formData, setFormData] = useState<FiltersState>(props.filters)

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onChangeFilter(formData);
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-2 sm:flex-row justify-between items-center my-5 mx-6 sm:mx-0"
    >
      {/* left col: Search Video by Text */}
      <div className="flex">
        <input
          value={formData.text}
          onChange={e => setFormData(s => ({...s, text: e.target.value }))}
          className="form-control w-full sm:w-96"
          type="text"
          placeholder="Search topic and press ENTER"
        />
        { props.loading &&  <Spinner />}
      </div>

      {/* right col: Paginator */}
      {
        props.data?.length ?
          <div className="text-right flex gap-2 justify-end">
            {
              ['21', '40', '80'].map(item =>
                <div
                  key={item}
                  className={clsx(
                    'border-2 border-slate-300 p-2 rounded-lg cursor-pointer',
                    { 'bg-slate-300': item === props.filters.totalItems }
                  )}
                  onClick={() => props.onChangeFilter({ ...formData, totalItems: item })}
                > {item} </div>)
            }
          </div> : null
      }
    </form>
)}

