import { Component } from "react";
import GridFadeProduct from "../LayoutProducts/GridFadeProduct";
import React, { useState, useEffect } from "react";
function TrendingProduct() {
  const products = [1, 2, 3, 4];

  return (
    
          <div id="hometab" className="home-tab my-40 my-sm-25 bottom-to-top hb-animate-element">
            <div className="container">
              <div className="row">
                <div className="tt-title d-inline-block float-none w-100 text-center">Trending Products</div>
                <div className="tabs">
                  <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#ttfeatured-main" id="featured-tab">
                        <div className="tab-title">Featured</div>
                      </a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ttnew-main" id="new-tab">
                        <div className="tab-title">Latest</div>
                      </a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ttbestseller-main" id="bestseller-tab">
                        <div className="tab-title">Bestseller</div>
                      </a></li>
                  </ul>
                </div>
                <div className="tab-content float-left w-100">
                  <div className="tab-pane active float-left w-100" id="ttfeatured-main" role="tabpanel" aria-labelledby="featured-tab">
                    <section id="ttfeatured" className="ttfeatured-products">
                      <div className="ttfeatured-content products grid owl-carousel" id="owl1">
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/01.jpg" alt={1} height={501} width={385} />
                                <img src="img/products/02.jpg" alt={2} className="second_image img-responsive" height={501} width={385} /> </a>
                              <ul className="countdown1 countdown">
                                <li><span className="days">00</span>
                                  <p className="days_text">Days</p>
                                </li>
                                <li><span className="hours">00</span>
                                  <p className="hours_text">Hours</p>
                                </li>
                                <li><span className="minutes">00</span>
                                  <p className="minutes_text">Minutes</p>
                                </li>
                                <li><span className="seconds">00</span>
                                  <p className="seconds_text">Seconds</p>
                                </li>
                              </ul>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Merino Small Dress</a>
                                </h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/02.jpg" alt={2} height={501} width={385} />
                                <img src="img/products/03.jpg" alt={3} className="second_image img-responsive" height={501} width={385} /> </a>
                              <div className="flags">
                                <div className="sale">sale</div>
                                <div className="new">new</div>
                              </div>
                              <ul className="countdown countdown2">
                                <li><span className="days">00</span>
                                  <p className="days_text">Days</p>
                                </li>
                                <li><span className="hours">00</span>
                                  <p className="hours_text">Hours</p>
                                </li>
                                <li><span className="minutes">00</span>
                                  <p className="minutes_text">Minutes</p>
                                </li>
                                <li><span className="seconds">00</span>
                                  <p className="seconds_text">Seconds</p>
                                </li>
                              </ul>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Tropical Shirt Dress</a>
                                </h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/03.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/04.jpg" alt={4} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Shoulder Embroidered
                                    Bodysuit</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/04.jpg" alt={4} height={501} width={385} />
                                <img src="img/products/05.jpg" alt={5} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Checked Polo Collar
                                    T-shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/05.jpg" alt={5} height={501} width={385} />
                                <img src="img/products/06.jpg" alt={6} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Crochet Detail
                                    Lightweight Top</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/06.jpg" alt={6} height={501} width={385} />
                                <img src="img/products/07.jpg" alt={7} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Girls Floral Print
                                    Jumpsuit</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/07.jpg" alt={7} height={501} width={385} />
                                <img src="img/products/08.jpg" alt={8} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Girls Striped Fit and
                                    Flare Dress</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/08.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/09.jpg" alt={9} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Juventus Henley Neck
                                    Jersey</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="tab-pane float-left w-100" id="ttnew-main" role="tabpanel" aria-labelledby="new-tab">
                    <section id="ttnew" className="ttnew-products">
                      <div className="ttnew-content products grid owl-carousel" id="owl2">
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/01.jpg" alt={1} height={501} width={385} />
                                <img src="img/products/02.jpg" alt={2} className="second_image img-responsive" height={501} width={385} /> </a>
                              <ul className="countdown1 countdown">
                                <li><span className="days">00</span>
                                  <p className="days_text">Days</p>
                                </li>
                                <li><span className="hours">00</span>
                                  <p className="hours_text">Hours</p>
                                </li>
                                <li><span className="minutes">00</span>
                                  <p className="minutes_text">Minutes</p>
                                </li>
                                <li><span className="seconds">00</span>
                                  <p className="seconds_text">Seconds</p>
                                </li>
                              </ul>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Printed Dugaree with
                                    T-Shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/02.jpg" alt={2} height={501} width={385} />
                                <img src="img/products/03.jpg" alt={3} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Printed Polo Collar
                                    T-shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/03.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/04.jpg" alt={4} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Burgundy Small
                                    Dresss</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/04.jpg" alt={4} height={501} width={385} />
                                <img src="img/products/05.jpg" alt={5} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Merino Small Dress</a>
                                </h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/05.jpg" alt={5} height={501} width={385} />
                                <img src="img/products/06.jpg" alt={6} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Arkun Bordeaux
                                    Blouse</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/06.jpg" alt={6} height={501} width={385} />
                                <img src="img/products/07.jpg" alt={7} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Medium Denim
                                    Overshirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/07.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/08.jpg" alt={8} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="#">Long
                                    Sleeves Cotton Polo</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/08.jpg" alt={8} height={501} width={385} />
                                <img src="img/products/09.jpg" alt={9} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Long Sleeves Cotton
                                    Polo</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="tab-pane float-left w-100" id="ttbestseller-main" role="tabpanel" aria-labelledby="bestseller-tab">
                    <section id="ttbestseller" className="ttbestseller-products">
                      <div className="ttbestseller-content products grid owl-carousel" id="owl3">
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/01.jpg" alt={1} height={501} width={385} />
                                <img src="img/products/02.jpg" alt={2} className="second_image img-responsive" height={501} width={385} /> </a>
                              <ul className="countdown1 countdown">
                                <li><span className="days">00</span>
                                  <p className="days_text">Days</p>
                                </li>
                                <li><span className="hours">00</span>
                                  <p className="hours_text">Hours</p>
                                </li>
                                <li><span className="minutes">00</span>
                                  <p className="minutes_text">Minutes</p>
                                </li>
                                <li><span className="seconds">00</span>
                                  <p className="seconds_text">Seconds</p>
                                </li>
                              </ul>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Slim-fit Leaf-Print
                                    Linen Shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-toggle="modal" data-target="#product_view" disabled="disabled"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/02.jpg" alt={2} height={501} width={385} />
                                <img src="img/products/03.jpg" alt={3} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Women Floral Print
                                    Lounge T-Shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/03.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/04.jpg" alt={4} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Women Striped Shirt
                                    Dress</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/04.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/05.jpg" alt={5} className="second_image img-responsive" height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Women Solid Bodycon
                                    Dress</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/05.jpg" alt={3} height={501} width={385} />
                                <img src="img/products/06.jpg" alt={6} className="second_image img-responsive" height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Printed V-Neck
                                    T-shirt</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/06.jpg" alt={3} height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Solid Straight Kurta</a>
                                </h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/07.jpg" alt={3} height={501} width={385} /> </a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Tropical Shirt Dress</a>
                                </h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-toggle="modal" data-target="#product_view" disabled="disabled"> <i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-layouts">
                          <div className="product-thumb">
                            <div className="image zoom">
                              <a href="product-details.html">
                                <img src="img/products/08.jpg" alt={3} height={501} width={385} /></a>
                            </div>
                            <div className="thumb-description">
                              <div className="caption">
                                <h4 className="product-title text-capitalize"><a href="product-details.html">Shoulder Embroidered
                                    Bodysuit</a></h4>
                              </div>
                              <div className="rating">
                                <div className="product-ratings d-inline-block align-middle">
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                  <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                                </div>
                              </div>
                              <div className="price">
                                <div className="regular-price">$100.00</div>
                                <div className="old-price">$150.00</div>
                              </div>
                              <div className="button-wrapper">
                                <div className="button-group text-center">
                                  <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add
                                      to cart</span></button>
                                  <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                                  <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                                  <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                                      View</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

}
export default TrendingProduct;
