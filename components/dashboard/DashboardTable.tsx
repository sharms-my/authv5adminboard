import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

function DashboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Pro</TableCell>
          <TableCell>2024-04-16</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default DashboardTable;
