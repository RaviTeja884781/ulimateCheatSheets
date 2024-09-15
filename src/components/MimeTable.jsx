import React from "react";
import { Code, Table } from "react-ui-essentials";

const MimeTable = ({ mimeData }) => {
  return (
    <div className="p-16">
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell isHeader>Type</Table.Cell>
            <Table.Cell isHeader>Full Form</Table.Cell>
            <Table.Cell isHeader>Extensions</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {mimeData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>{item.full_form}</Table.Cell>
              <Table.Cell>
                {item.extensions.map((item) => (
                  <Code key={item}>{item}</Code>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MimeTable;
