import { Paper } from "@mui/material";
import bookImage from '../../images/Image-10@2x.png';
import './Book.css';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function Book() {
    return (
        <div className="book-outer">
            <Paper>
                <div className="book-in-paper">
                    <div className="book-image-holder">
                        <img src={bookImage} width='60%'/>
                    </div>
                    <div className="book-detail-holder">
                        <div className="book-book-name-text">
                            Don't Make Me Think
                        </div>
                        <div className="book-author-name-text">
                            by Steve Krug
                        </div>
                        <div className="book-rating-n-comments">
                            <div className="book-rating">
                                4.5
                                <StarRateIcon fontSize="8px"/>
                            </div>
                            <div className="book-comment">
                                (20)
                            </div>
                        </div>
                        <div className="book-price">
                            <div className="book-price-right">
                                Rs. 1500
                            </div>
                            <div className="book-price-wrong">
                                Rs. 2000
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
}