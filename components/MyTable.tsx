import { Table } from "semantic-ui-react";
import Flag from "react-world-flags";
import { Key } from "react";
import { MyTableProps } from "../types/props.types";
import { University } from "../types/university.types";

export const MyTable = ({ results }: MyTableProps) => (
  <Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Country</Table.HeaderCell>
        <Table.HeaderCell>University name</Table.HeaderCell>
        <Table.HeaderCell>Web Page</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {results?.map((res: University, index: Key) => (
        <Table.Row key={index}>
          <Table.Cell>
            <Flag className="flag" height="30" code={res.alpha_two_code} />
          </Table.Cell>
          <Table.Cell>
            <p className="text-md">{res.name}</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-md">
              <a href={res.web_pages}>{res.web_pages}</a>
            </p>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
