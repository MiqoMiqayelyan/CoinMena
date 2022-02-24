import { ReactNode } from 'react';
import { tableType } from './index';

type TableBodyType = {
    fields: tableType['fieldsForBody']
};

type fieldType = {
    [key: string]: string
}

const TableBody = ({ fields }: TableBodyType) => (
  <tbody>
    {fields?.map((field: fieldType) => (
      <tr key={field.name}>
        {Object.keys(field).map((key) => (
          <td key={field[key]}>
            {field[key]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
