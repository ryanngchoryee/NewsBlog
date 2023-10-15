import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NewsCarouselProps } from '../models/props';
import '../css/news-carousel.css'
import Container from 'react-bootstrap/esm/Container'
import { Button, Image } from 'react-bootstrap';

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
    if (news.length > 0) {
        return (
            <Container fluid className='news-container'>
                <h1 className='title'>Top 3 News</h1>
                <Carousel slide={false} interval={3000}>
                    {news.map((newsItem) => {
                        return (
                            <Carousel.Item key={newsItem.article_id}>
                                <Image className='carousel-image' src={newsItem.image_url == null ? '/assets/image-not-found.png' : newsItem.image_url} />
                                <Carousel.Caption className='caption-container'>
                                    <h4 className='caption-title'>{newsItem.title}</h4>
                                    <p className='caption-description'>{newsItem.description}</p>
                                    <a className="caption-link" href={newsItem.link} target='_blank' rel="noreferrer">Read more...</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Container>
        )
    }
    else {
        return (
            <Container fluid className='news-container'>
                <h1 className='title'>No news found, please try other filter</h1>
            </Container>
        )
    }
}

export default NewsCarousel;