import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Card_Section_Two = () => {
    return (
        <>
            <div className="card_access">


                <Swiper

                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{paddingBottom:"20px"}}
                >
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Apple iPhone 14 Pro Max</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>4,633</span> <del>5,099</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Sony PlayStation 5 Console</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>1,840</span> <del>2,099</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>T500 Bluetooth Full Touch</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>19.50</span> <del>22.99</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>KIKO MILANO Double Touch Liquid</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>59.50</span> <del>88.00</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Apple iPhone 11 White 128GB</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>1,949</span> <del>2,300</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1669221709/N30107462A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>RockStar Official GTA V</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>59.00</span> <del>72.99</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1687430456/N52953363A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Samsung Galaxy A73 Dual Sim</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>1,688</span> <del>1,832</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1662647998/N53348815A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Apple AirPods Pro (2nd Generation)</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>769</span> <del>949</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1687430441/N52535496A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Samsung Galaxy S22 Ultra</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>2,399</span> <del>6,089</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1686132010/N53346628A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Apple iPhone 14 Pro Blue</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>2,629</span> <del>3,099</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1667497500/N51445769A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Apple AirPods (3rd Generation)</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>676</span> <del>979</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: "25px",paddingRight:"20px" }} className='cardMain'>
                        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "10px", width: "120%" }} className='card_1'>
                            <CardActionArea className='Card_12'>
                                <CardMedia
                                    component="img"
                                    // width = {"20%"}
                                    // height="80"
                                    image="https://f.nooncdn.com/p/v1686137294/N53375387A_1.jpg?format=avif&width=240"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        <h3>Honor X9a Dual Sim Quad</h3>
                                        <p>AED <span style={{ fontWeight: "700" }}>928</span> <del>1,299</del><br /><center><img style={{ width: "50%" }} src="https://f.nooncdn.com/s/app/com/noon/images/marketplace-en.png" alt="" /></center></p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>



                </Swiper>



            </div>


        </>
    )
}

export default Card_Section_Two