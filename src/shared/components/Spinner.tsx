import React  from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className="flex  items-center m-3">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="black"/>
          <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="black"/>
        </svg>
      </div>
    </div>
  )
};
