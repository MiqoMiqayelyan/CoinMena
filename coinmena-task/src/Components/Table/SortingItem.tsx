/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

type SortingItemType = {
    label: string,
    sortBy: string,
    tableSortKey: string,
    onSortClick: (value: string) => void;
}

const SortingItem = ({
  label,
  onSortClick,
  sortBy,
  tableSortKey,
}: SortingItemType) => {
  const [sorting, setSorting] = useState({
    isSort: false,
    down: false,
  });

  const handleClick = () => {
    setSorting((state) => ({
      ...state,
      isSort: true,
      down: !state.down,
    }));

    onSortClick(sortBy);
  };

  useEffect(() => {
    const isSame = tableSortKey !== sortBy && tableSortKey !== '';

    if (isSame) {
      setSorting({
        isSort: false,
        down: false,
      });
    }
  }, [tableSortKey]);

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={handleClick}
      onClick={handleClick}
      className="sorting"
    >
      <p>
        {label}
      </p>
      {sorting.isSort
        ? (sorting.down)
          ? <FontAwesomeIcon icon={faArrowDown} />
          : <FontAwesomeIcon icon={faArrowUp} />
        : null}
    </div>
  );
};

export default SortingItem;
