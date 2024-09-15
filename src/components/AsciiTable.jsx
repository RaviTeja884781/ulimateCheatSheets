import React from "react";
import { Table } from "react-ui-essentials";

const AsciiTable = ({ asciiData }) => {
  const categories = Object.keys(asciiData);
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
                <Table.Cell isHeader>Character</Table.Cell>
                <Table.Cell isHeader>Description</Table.Cell>
                <Table.Cell isHeader>Dec</Table.Cell>
                <Table.Cell isHeader>Oct</Table.Cell>
                <Table.Cell isHeader>Hex</Table.Cell>
                <Table.Cell isHeader>Bin</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {asciiData[category].map((char) => (
                <Table.Row key={char.code}>
                  <Table.Cell>{char.char}</Table.Cell>
                  <Table.Cell>{char.description}</Table.Cell>
                  <Table.Cell>{char.Dec}</Table.Cell>
                  <Table.Cell>{char.Oct}</Table.Cell>
                  <Table.Cell>{char.Hex}</Table.Cell>
                  <Table.Cell>{char.Bin}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default AsciiTable;
