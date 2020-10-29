import React, { Component } from 'react';
// import Content from '../shared/components/Content';
// import Footer from '../shared/components/Footer';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
            <meta charset="UTF-8"/>
            <meta name="description" content="Ogani Template"/>
            <meta name="keywords" content="Ogani, unica, creative, html"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Superbuy - Inicio</title>

            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet"/>

            <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/elegant-icons.css" type="text/css"/>
            <link rel="stylesheet" href="css/nice-select.css" type="text/css"/>
            <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/slicknav.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/style.css" type="text/css"/>
        </head>

        <div className="humberger__menu__overlay"></div>
        <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
                <a href="#"><img src="img/logo.png" alt=""/></a>
            </div>
            <div className="humberger__menu__cart">
                <ul>
                    <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                    <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                </ul>
                <div className="header__cart__price">item: <span>$160.00</span></div>
            </div>
            <div className="humberger__menu__widget">
                <div className="header__top__right__language">
                    <img src="img/language.png" alt=""/>
                    <div>Español</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                        <li><a href="#">Español</a></li>
                    </ul>
                </div>
                <div className="header__top__right__auth">
                    <a href="#"><i className="fa fa-user"></i> Iniciar</a>
                </div>
            </div>
            <nav className="humberger__menu__nav mobile-menu">
                <ul>
                    <li className="active"><a href="./index.html">Inicio</a></li>
                    <li><a href="./Tienda/shop-grid.html">Tienda</a></li>
                    <li><a href="#">Páginas</a>
                        <ul className="header__menu__dropdown">
                            <li><a href="./Tienda/shop-details.html">Detalles de la tienda</a></li>
                            <li><a href="./shoping-cart.html">Carrito de compras</a></li>
                            <li><a href="./checkout.html">Ingreso</a></li>
                            <li><a href="./blog-details.html">Blog: Detalles</a></li>
                        </ul>
                    </li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./contact.html">Contacto</a></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="header__top__right__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-pinterest-p"></i></a>
            </div>
            <div className="humberger__menu__contact">
                <ul>
                    <li><i className="fa fa-envelope"></i> contacto@superbuy.com</li>
                    <li>El mejor sitio de compras</li>
                </ul>
            </div>
        </div>

            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li><i className="fa fa-envelope"></i> contacto@superbuy.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="img/language.png" alt=""/>
                                        <div>Español</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Español</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    <div className="header__top__right__auth">
                                        <a href="./Login.html"><i className="fa fa-user"></i> Iniciar sesión</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><a href="../App.js">Inicio</a></li>
                                    <li><a href="./Tienda/shop-grid.html">Tienda</a></li>
                                    <li><a href="#">Páginas</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href="./Tienda/shop-details.html">Detalle de la tienda</a></li>
                                            <li><a href="./Tienda/shoping-cart.html">Shoping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./Blog/blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contacto</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                                </ul>
                                <div className="header__cart__price">Carrito: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>

        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hero__categories">
                            <div class="hero__categories__all">
                                <i class="fa fa-bars"></i>
                                <span>Todas las categorías</span>
                            </div>
                            <ul>
                                <li><a href="#">Alimentos</a></li>
                                <li><a href="#">Muebles</a></li>
                                <li><a href="#">Ropa</a></li>
                                <li><a href="#">Electrónica</a></li>
                                <li><a href="#">Exterior</a></li>
                                <li><a href="#">Bebés</a></li>
                                <li><a href="#">Mascotas</a></li>
                                <li><a href="#">Celulares</a></li>
                                <li><a href="#">Computación</a></li>
                                <li><a href="#">Plantas</a></li>
                                <li><a href="#">Construcción</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="hero__search">
                            <div class="hero__search__form">
                                <form action="#">
                                    <div class="hero__search__categories">
                                        Todas las categorías
                                        <span class="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" class="site-btn">BUSCAR</button>
                                </form>
                            </div>
                            <div class="hero__search__phone">
                                <div class="hero__search__phone__icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="hero__search__phone__text">
                                    <h5>+54 11-2346-2346</h5>
                                    <span>soporte las 24hs</span>
                                </div>
                            </div>
                        </div>
                        <div class="hero__item set-bg" img={"img/hero/banner2.jpg"} href="./index.html">
                        <a href="./index.html"><img src="img/hero/banner2.jpg" alt=""/></a>
                            <div class="hero__text">
                                <span>ALIMENTOS FRESCOS</span>
                                <h2>Todos los miércoles <br />-30%</h2>
                                <p>Sin límite de cantidad y envío gratis</p>
                                <a href="#" class="primary-btn">COMPRE AHORA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                <h5><a href="#">Electrodomésticos</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                <h5><a href="#">Carnes</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                <h5><a href="#">Vegetables</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                <h5><a href="#">Bebidas</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                <h5><a href="#">Ropa</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Nuestros productos</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">Textiles</li>
                                <li data-filter=".oranges">Alimentos</li>
                                <li data-filter=".fresh-meat">Mundo bebé</li>
                                <li data-filter=".vegetables">Vegetales orgánicos</li>
                                <li data-filter=".fastfood">Todo mascotas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-1.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Zapatilla mujer T 35/41 color gris/rosa</a></h6>
                                <h5>$4900.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-2.png" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Remera unisex T/S-M-L-XL colores varios</a></h6>
                                <h5>$790.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-3.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Pantalón Jean masculino T 40/52</a></h6>
                                <h5>$3400.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-4.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Bikini floral T 1/4 varios motivos</a></h6>
                                <h5>$1100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-5.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Medias pack por 24 T 1/2 varios motivos</a></h6>
                                <h5>$1800.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-6.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Ojotas pack por 12 T 35/43 varios colores</a></h6>
                                <h5>$1900.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-7.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Panchas masculino T 37/44 colores negro/gris</a></h6>
                                <h5>$2400.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg">
                                <img src="img/featured/feature-8.jpg" alt=""/>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Gorro lana pack por 9 colores naranja/verde militar</a></h6>
                                <h5>$550.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="img/banner/banner-1.jpg" alt=""
                                />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src="img/banner/banner-2.jpg" alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Últimos productos</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Pava eléctrica</h6>
                                            <span>$1700.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Pan dulce</h6>
                                            <span>$450.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Chocolate con maní</h6>
                                            <span>$160.00</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Sidra</h6>
                                            <span>$260.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Budín</h6>
                                            <span>$120.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Árbol de navidad</h6>
                                            <span>$2400.00</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Productos mejores puntuados</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Televisor 50' 4k</h6>
                                            <span>$38000.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Krocks</h6>
                                            <span>$3550.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Toallas</h6>
                                            <span>$270.00</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Computadora</h6>
                                            <span>$45000.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Lotería</h6>
                                            <span>$230.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Monitor</h6>
                                            <span>$17000.00</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Reseñas de Productos</h4>
                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Sábanas</h6>
                                            <span>$2550.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Naranjas</h6>
                                            <span>$60.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Carne de cerdo</h6>
                                            <span>$170.00</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="latest-prdouct__slider__item">
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Frutillas</h6>
                                            <span>$80.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Pescado</h6>
                                            <span>$90.00</span>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-product__item">
                                        <div className="latest-product__item__pic">
                                            <img src="img/latest-product/lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="latest-product__item__text">
                                            <h6>Milanesa de carne</h6>
                                            <span>$120.00</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>Últimas entradas del Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-1.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> Oct 20,2020</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">Receta de cocina fácil: Sopa paraguaya</a></h5>
                                <p>Elaborada con productos cotidianos </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-2.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> Oct 4,2020</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">Desayuno: Infusión con frutas y legumbres</a></h5>
                                <p>Cómo preparar un desayuno completo y rico en fibras, enterate más en la nota. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="img/blog/blog-3.jpg" alt=""/>
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> Sep 14,2020</li>
                                    <li><i className="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="#">Argentina: los mejores productos agrícolas</a></h5>
                                <p>La importancia de vivir en un país agrícola y aprovechar sus cultivos. </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html"><img src="img/logo.png" alt=""/>
                                </a>
                            </div>
                            <ul>
                                <li>Dirección: Avenida Corrientes 3405, CABA, Buenos Aires</li>
                                <li>Teléfono: +54 11-2346-2346</li>
                                <li>Email: contacto@superbuy.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Links útiles</h6>
                            <ul>
                                <li><a href="#">Acerca de nosotros</a></li>
                                <li><a href="#">Acerca de nuestra tienda</a></li>
                                <li><a href="#">Seguro de compra</a></li>
                                <li><a href="#">Información de entregas</a></li>
                                <li><a href="#">Política de privacidad</a></li>
                                <li><a href="#">Mapa del sitio</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Quiénes somos</a></li>
                                <li><a href="#">Nuestros servicios</a></li>
                                <li><a href="#">Proyectos</a></li>
                                <li><a href="#">Contacto</a></li>
                                <li><a href="#">Innovación</a></li>
                                <li><a href="#">Testimonios</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Unirse al boletín de noticias</h6>
                            <p>Únete con tu Email para recibir las novedades y ofertas.</p>
                            <form action="#">
                                <input type="text" placeholder="Ingrese su mail"/>
                                <button type="submit" className="site-btn">Suscribirse</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text"><p>
                                <script>document.write(new Date().getFullYear());</script> Todos los derechos reservados | Este template fué hecho con <i className="fa fa-heart" aria-hidden="true"></i> por <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p></div>
                                <div className="footer__copyright__payment"><img src="img/payment-item.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="root"></div>
            </div>
            </footer>

            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.nice-select.min.js"></script>
            <script src="js/jquery-ui.min.js"></script>
            <script src="js/jquery.slicknav.js"></script>
            <script src="js/mixitup.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/main.js"></script>


        </div>
        )
    }
}

export default App;
