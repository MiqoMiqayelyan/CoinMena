import { tableType } from './index';

type TableHeaderType = {
  fields: tableType['fieldsForHeader']
}

const TableHeader = ({ fields }: TableHeaderType) => (
  <thead>
    <tr>
      {fields?.map((field) => {
        const { name, label } = field;

        return (
          <th key={name}>
            {label || ''}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default TableHeader;
