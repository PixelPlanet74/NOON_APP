import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card_Section_One = () => {
    return (
        <>
            <div className="maincontainer">

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className="col_1">
                            <h2>More reasons to shop</h2>
                            <div className="col1212">
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif" alt="" />
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif" alt="" />
                            </div>
                            <div className="col1212">
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif" alt="" />
                                <img width={"50%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif" alt="" />
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="col_1">
                            <div className="col1010">
                                <h2>Mega deals</h2>
                                <button>ALL DEALS</button>
                            </div>
                            <div className="col1011" style={{ display: "flex" }}>
                                <Card className='btnClass' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            // width = {"20%"}
                                            // height="80"
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020847V/45/_/1698930155/640da032-9952-4e34-88b5-80f4711cbe63.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Xiaomi Poco C65 Black
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card className='btnClass' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            // width = {"20%"}
                                            // height="80"
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pnsku/N53437240A/45/_/1694760182/fef39d70-943d-4962-a62b-f09196c604ab.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Apple AirPods Pro <br />(2nd Generation)
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className="col1011" style={{ display: "flex" }}>
                                <Card className='btnClass' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            // width = {"20%"}
                                            // height="80"
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pzsku/Z6520654951A4D595739CZ/45/_/1666972694/db7456fe-ffce-474d-9b40-89bcbf0dd603.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                LEGO City Stunt Show
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card className='btnClass' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia className='cardMedia'
                                            component="img"
                                            // width = {"20%"}
                                            // height="80"
                                            image="https://f.nooncdn.com/products/tr:n-t_240/pzsku/ZB01B36BA5C7C53A0F44FZ/45/_/1695817125/a67929ed-a2c8-4762-90c3-e7b36a32c8d4.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography className='textClass' variant="body2" color="text.secondary">
                                                Prime by javaudan 6 in 1
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="col_1">
                            <h2>In focus</h2><br />
                            <img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif" alt="" />
                            <br /><br /><img width={"100%"} src="https://f.nooncdn.com/mpcms/EN0001/assets/1b352827-1fc9-40cd-8d51-4f0b28b8f389.png?format=avif" alt="" />
                        </div>
                    </Grid>



                </Grid>





            </div>





        </>
    )
}

export default Card_Section_One