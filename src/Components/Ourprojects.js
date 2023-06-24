import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { MdFavorite } from 'react-icons/md'
import { BsFillShareFill } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'
import { workproject } from './Data/Data';
import '../Components/Scss/Ourproject.scss'
import {BsArrowDownRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperButton } from "./SwiperButton";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineArrowRight } from "react-icons/ai";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Ourprojects() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (


        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }}
            className="swiper-back"
        >
            <div className="work-images">
                {workproject.map((map) => {
                    return (
                        <SwiperSlide className="res-slide" style={{paddingTop:'60px'}}>
                            <Card className='card-parent' style={{borderRadius:'8   px',width:'100%',background:'#01141D'}}>
                          
                              <div>
                                <img src={map.img} alt="" />
                              </div>
                                <div className='content-back' style={{background:'#01141D',padding:'0px 10px'}}>
                                <CardContent>
                                <div style={{display:'flex'}}>
                                    <div >
                                    <h3 style={{fontSize:'22px',color:'white'}}>{map.h3}</h3>
                                    </div>
                                    {/* <div>
                                        <BsArrowDownRight/> <span>Live Preview</span>
                                    </div> */}
                                </div>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {/* <IconButton aria-label="add to favorites">
                                        <MdFavorite style={{color:'white'}}/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <BsArrowDownRight style={{color:'white'}} />
                                    </IconButton> */}
                                    {/* <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <MdExpandMore style={{color:'white'}} />
                                    </ExpandMore> */}
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>

                                    </CardContent>
                                </Collapse>
                                </div>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </div>

            <div className="buttons" style={{ padding: "20px 0 20px 0", float: 'right' }}>
               <SwiperButton/>
            </div>
        </Swiper>
    );
}