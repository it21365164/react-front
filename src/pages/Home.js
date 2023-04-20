import React from 'react'
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <div>
            <section class="home">
                <div class="content">
                    <div class="carousel">
                        <div class="carousel-inner">
                            <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                            <div class="carousel-item">
                                <img src="assert/image/banner-1.png" />

                                <div class="text">
                                    <h1>WEDDINGS AND EVENTS</h1>
                                    <p>Come and see the details about the most comfortable and beautiful hall that suits your heart here.</p>
                                    <div class="flex">
                                        <button class="primary-btn">View More Details</button>
                                        <button class="secondary-btn">BOOK NOW</button>
                                    </div>
                                </div>

                            </div>

                            <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                            <div class="carousel-item">
                                <img src="assert/image/banner-2.png" />

                                <div class="text">
                                    <h1>WEDDINGS AND EVENTS</h1>
                                    <p>Come and see the details about the most comfortable and beautiful hall that suits your heart here.</p>
                                    <div class="flex">
                                        <button class="primary-btn">View More Details</button>
                                        <button class="secondary-btn">BOOK NOW</button>
                                    </div>
                                </div>

                            </div>
                            <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                            <div class="carousel-item">
                                <img src="assert/image/banner-3.png" />

                                <div class="text">
                                    <h1>WEDDINGS AND EVENTS</h1>
                                    <p>Come and see the details about the most comfortable and beautiful hall that suits your heart here.</p>
                                    <div class="flex">
                                        <button class="primary-btn">View More Details</button>
                                        <button class="secondary-btn">BOOK NOW</button>
                                    </div>
                                </div>

                            </div>
                            <label for="carousel-3" class="carousel-control prev control-1">‹</label>
                            <label for="carousel-2" class="carousel-control next control-1">›</label>
                            <label for="carousel-1" class="carousel-control prev control-2">‹</label>
                            <label for="carousel-3" class="carousel-control next control-2">›</label>
                            <label for="carousel-2" class="carousel-control prev control-3">‹</label>
                            <label for="carousel-1" class="carousel-control next control-3">›</label>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ---------------------------------------------------------------------------- --> */}

            <div className="container">

                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new1.jpg" alt />
                    </div>
                    <Link to="/asterbanquethall">
                        <div className="content">
                            <h2>Aster Banquet Hall</h2>
                            <p>With an ornate and rich interior,
                                Aster Banquet Hall resembles grand palatial
                                elegance with its spacious setting.
                                As a coveted space among banquet halls in Kegoll,
                                the venue is perfect for gala events,
                                dinner dances and grand occasions. </p>
                        </div>
                    </Link>
                </div>

                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new2.jpg" alt />
                    </div>
                    <Link to="/thegreenbanquets">
                        <div className="content">

                            <h2>The Green Banquets</h2>
                            <p>Step into one of the finest wedding reception halls in Kegoll.
                                The Green Banquets is tailor-made for family gatherings and
                                special occasions of grandeur, experience the old world charm
                                of this unique event hall. </p>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new3.jpeg" alt />
                    </div>
                    <Link to="/KNIGHTSBRIDGE">
                        <div className="content">

                            <h2>KNIGHTSBRIDGE</h2>
                            <p>The Knightsbridge is tailor-made for impactful
                                board meetings in Kegoll. The spacious room offers
                                complete privacy and comfort, with state of the art facilities
                                and plenty of natural light.</p>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new4.jpg" alt />
                    </div>
                    <Link to="/hummingbirdhall">
                        <div className="content">
                            <h2>Hummingbird Hall</h2>
                            <p>The hotel Hummingbird Hall offers an elegant location to
                                host almost any function; from elegant wedding receptions,
                                sophisticated dinner parties, to trade shows, concerts, cocktails or anything
                                that may require a celebratory atmosphere.</p>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new5.jpeg" alt />
                    </div>
                    <Link to="/asterbanquethall">
                        <div className="content">
                            <h2>Hummingbird Hall</h2>
                            <p>The hotel Hummingbird Hall offers an elegant location
                                to host almost any function; from elegant wedding receptions,
                                sophisticated dinner parties, to trade shows, concerts, cocktails or anything
                                that may require a celebratory atmosphere. </p>
                        </div>
                    </Link>
                </div>
                <div className="box">
                    <div className="imgBox">
                        <img src="\assert\image\myImg\new7.jpeg" alt />
                    </div>
                    <Link to="/asterbanquethall">
                        <div className="content">
                            <h2>KNIGHTSBRIDGE</h2>
                            <p>     The Knightsbridge is tailor-made for impactful board meetings in Kegoll.
                                The spacious room offers complete privacy and comfort, with state of the art
                                facilities and plenty of natural light. </p>
                        </div>
                    </Link>
                </div>
            </div>




        </div>
    )
}
