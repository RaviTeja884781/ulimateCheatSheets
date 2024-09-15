import React from "react";
import { Code, Table } from "react-ui-essentials";

const HttpStatusCodes = ({ httpStatusCodes }) => {
  const categories = Object.keys(httpStatusCodes);
  return (
    <div className="p-16">
      {categories.map((category) => (
        <div className="p-2" key={category}>
          <h2 className="text-2xl font-medium p-2 mb-4 bg-slate-50 shadow-sm rounded-sm">
            {category}
          </h2>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell isHeader>Code</Table.Cell>
                <Table.Cell isHeader>Status</Table.Cell>
                <Table.Cell isHeader>Description</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {httpStatusCodes[category].map((status) => (
                <Table.Row key={status.code}>
                  <Table.Cell>
                    <Code>{status.code}</Code>
                  </Table.Cell>
                  <Table.Cell>{status.status}</Table.Cell>
                  <Table.Cell>{status.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default HttpStatusCodes;
