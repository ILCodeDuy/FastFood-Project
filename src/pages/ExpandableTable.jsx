import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Parent Row 1',
    children: [
      { id: 11, name: 'Child Row 1.1' },
      { id: 12, name: 'Child Row 1.2' },
    ],
  },
  {
    id: 2,
    name: 'Parent Row 2',
    children: [
      { id: 21, name: 'Child Row 2.1' },
      { id: 22, name: 'Child Row 2.2' },
    ],
  },
];

const ExpandableTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <tr
                onClick={() => handleRowClick(row.id)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="py-2 px-4 border-b">{row.id}</td>
                <td className="py-2 px-4 border-b">{row.name}</td>
              </tr>
              {expandedRows.includes(row.id) &&
                row.children.map((child) => (
                  <tr key={child.id} className="bg-gray-50">
                    <td className="py-2 px-4 border-b pl-8">{child.id}</td>
                    <td className="py-2 px-4 border-b">{child.name}</td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;