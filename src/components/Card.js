import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGetAttractionByIDQuery } from "../services/attraction";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function CardDetail() {
  const text = useSelector((state) => state.text);
  const attraction = useSelector((state) => state.attraction.value);
  const { data, error, isLoading } = useGetAttractionByIDQuery(attraction);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Card sx={{ maxWidth: "auto" }}>
          <CardMedia sx={{ height: 300 }} image={data.attraction.coverimage} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.attraction.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.attraction.detail}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
