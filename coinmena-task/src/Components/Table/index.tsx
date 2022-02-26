import { ReactNode, useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

import './style.css';

export interface tableType {
  fieldsForBody: {
    name?: string,
    label?: string,
    actions?: ReactNode
  }[];
  fieldsForHeader: {
    name: string,
    label: string,
    sortable?: boolean,
    sortBy?: string,
  }[]
  tableClass?: string;
  sortKey?: string;
  onSortClick?: (value: string) => void;
}
// TODO make Table much beautiful
const Table = ({
  fieldsForBody,
  tableClass,
  fieldsForHeader,
  onSortClick,
} : tableType) => {
  const [sortBy, setSortBy] = useState('');
  const handleSortingChange = (value: string) => {
    setSortBy(value);
    onSortClick(value);
  };

  return (
    <table className={tableClass}>
      <TableHeader sortKey={sortBy} onSortClick={handleSortingChange} fields={fieldsForHeader} />
      <TableBody fields={fieldsForBody} />
    </table>
  );
};

export default Table;
