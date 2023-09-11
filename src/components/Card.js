import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardDetail() {
  return (
    <Card sx={{ maxWidth: 'auto' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://th.bing.com/th/id/R.c5fd4561e256fe2c805ba9ead2759644?rik=nTuEiIUbA%2bLVPw&pid=ImgRaw&r=0"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Detail
        </Typography>
      </CardContent>
    </Card>
  );
}