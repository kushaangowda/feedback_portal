import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./Home.css"
import ChartComponent from './Chart';

export default function Home() {
  return (
    <div className="Home">
      <div className="product__info">
        <Card className="card__image">
          <CardMedia
            className="card__media"
            component="img"
            src="https://images.fonearena.com/blog/wp-content/uploads/2018/06/Redmi-6-Pro.jpg"
            alt="Image description"
          />
          <CardContent className="card__content">
            <Typography variant="h6" component="div" className="card__text" >
              Redmi 6 pro
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{width: "50%", margin: "auto"}}>
        <ChartComponent className="pie__chart"/>
      </div>
    </div>
  );
}
