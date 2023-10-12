/* eslint-disable no-undef */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Dialogdetail from "./Dialog";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useGetAttractionByIDQuery } from "../services/attraction";
import { useGetAllAttractionsQuery } from "../services/attraction";
import {
  selectAt,
  setAttractionID,
} from "../features/attracttions/attractionSlice";

export default function Tabledata({ api }) {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllAttractionsQuery();
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Id</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="right">Latitude</TableCell>
                <TableCell align="right">Longitude</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ alignItems: "center" }}
                  >
                    <Avatar
                      alt="Travis Howard"
                      sx={{ margin: "auto" }}
                      src={row.coverimage}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.latitude}</TableCell>
                  <TableCell align="right">{row.longitude}</TableCell>
                  <TableCell align="right">
                    <Dialogdetail
                      name={row.name}
                      detail={row.detail}
                      coverimage={row.coverimage}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => dispatch(setAttractionID(row.id))}>
                      click
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}
