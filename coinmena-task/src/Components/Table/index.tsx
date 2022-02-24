import { ReactNode } from 'react';
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
    label: string
  }[]
  tableClass?: string;
}
// TODO make Table much beautiful
const Table = ({ fieldsForBody, tableClass, fieldsForHeader } : tableType) => (
  <div>
    <table className={tableClass}>
      <TableHeader fields={fieldsForHeader} />
      <TableBody fields={fieldsForBody} />
    </table>
  </div>
);

export default Table;
