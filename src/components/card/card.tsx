import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const Mycard:React.FC<{img:any}>=(props)=>{
    return <>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bunny shirt
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I'ts made prue cotton and i's brand in oue telugu indestry 
          AlluArjun brand person for zodo brand
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" size="small">Add To Cart</Button>
      <Button variant="contained" size="small">Buy</Button>
      </CardActions>
    </Card></>
}

export { Card };
