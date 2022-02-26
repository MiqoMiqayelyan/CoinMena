import { tableType } from './index';
import SortingItem from './SortingItem';

type TableHeaderType = {
  fields: tableType['fieldsForHeader']
  sortKey?: string,
  onSortClick?: (value: string) => void;
}

const TableHeader = ({ fields, onSortClick, sortKey }: TableHeaderType) => (
  <thead>
    <tr>
      {fields?.map((field) => {
        const {
          name, label, sortable, sortBy,
        } = field;

        return (
          <th key={name}>
            {sortable
              ? (
                <SortingItem
                  tableSortKey={sortKey}
                  sortBy={sortBy}
                  onSortClick={onSortClick}
                  label={label}
                />
              )
              : label}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default TableHeader;
