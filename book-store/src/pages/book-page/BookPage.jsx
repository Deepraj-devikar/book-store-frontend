import { Breadcrumbs, Button, Container, Link } from "@mui/material";
import Header from "../../components/header/Header";
import './BookPage.css';
import smallImage from '../../images/Image-2@2x.png'
import bigImage from '../../images/Image-23@2x.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Textarea from '@mui/joy/Textarea';
import Feedback from "../../components/feedback/Feedback";

export default function BookPage() {
    return (
        <div>
            <Header />
            <Container>
                <div className="book-page-breadcrum-n-content">
                    <div className="book-page-breadcrum">
                        <Breadcrumbs>
                            <Link underline="hover" color="inherit" href="/dashboard" sx={{
                                textAlign: 'left',
                                font: 'normal normal normal 12px/16px Roboto',
                                letterSpacing: '0px',
                                color: '#9D9D9D',
                                opacity: 1
                            }}>
                                Home
                            </Link>
                            <Link underline="hover" color="text.primary" sx={{
                                textAlign: 'left',
                                font: 'normal normal normal 12px/16px Roboto',
                                letterSpacing: '0px',
                                color: '#0A0102',
                                opacity: 1
                            }}>
                                Book(04)
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="book-page-image-detail-feedback">
                        <div className="book-page-image">
                            <div className="book-page-small-images">
                                <div className="book-page-small-image-holder-active">
                                    <img src={smallImage} width='80%'/>
                                </div>
                                <div className="book-page-small-image-holder">
                                    <img src={smallImage} width='80%'/>
                                </div>
                            </div>
                            <div className="book-page-big-image-n-buttons">
                                <div className="book-page-big-image">
                                    <img src={bigImage} width='80%'/>
                                </div>
                                <div className="book-page-image-buttons">
                                    <Button sx={{
                                        width: '100%',
                                        background: '#A03037 0% 0% no-repeat padding-box',
                                        borderRadius: '2px',
                                        opacity: 1,
                                        color: '#fff'
                                    }}>
                                        NOTIFY ME
                                    </Button>
                                    <Button sx={{
                                        width: '100%',
                                        background: '#333333 0% 0% no-repeat padding-box',
                                        borderRadius: '2px',
                                        opacity: 1,
                                        color: '#fff'
                                    }}>
                                        <div className="book-page-image-burron-wishlit">
                                            <FavoriteIcon />
                                            WISHLIST
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="book-page-detail-feedback">
                            <div className="book-page-info">
                                <div className="book-page-book-name">
                                    UX For DUMMIES
                                </div>
                                <div className="book-page-author-name">
                                    by Steve Krug
                                </div>
                                <div className="book-page-rating-n-comments">
                                    <div className="book-page-rating">
                                        4.5
                                        <StarRateIcon fontSize="16px"/>
                                    </div>
                                    <div className="book-page-comment">
                                        (20)
                                    </div>
                                </div>
                                <div className="book-page-price">
                                    <div className="book-page-price-right">
                                        Rs. 1500
                                    </div>
                                    <div className="book-page-price-wrong">
                                        Rs. 2000
                                    </div>
                                </div>
                            </div>
                            <div className="book-page-horizontal-line"></div>
                            <div className="book-page-book-detail">
                                <ul>
                                    <li>
                                        <div className="book-page-book-detail-key">
                                            Book Detail
                                        </div>
                                        <div className="book-page-book-detail-value">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estundefined
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="book-page-horizontal-line"></div>
                            <div className="book-page-feedback">
                                <div className="book-page-feedback-title">
                                    Customer Feedback
                                </div>
                                <div className="book-page-feedback-input">
                                    <div className="book-page-feedback-input-title">
                                        Overall Rating
                                    </div>
                                    <div className="book-page-feedback-input-stars">
                                        <StarOutlineIcon />
                                        <StarOutlineIcon />
                                        <StarOutlineIcon />
                                        <StarOutlineIcon />
                                        <StarOutlineIcon />
                                    </div>
                                    <div className="book-page-feedback-input-textarea">
                                        <Textarea name="review" placeholder="Write your review" variant="soft" fullWidth={true}/>
                                    </div>
                                    <div className="book-page-feedback-input-button">
                                        <Button variant="contained" sx={{
                                            textTransform: 'none'
                                        }}>
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                                <div className="book-page-feedback-got">
                                    <Feedback />
                                    <Feedback />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}