import React, { Component } from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import head from './assets/icons/macys.png';

import search from './assets/icons/icon-search.png';
import account from './assets/icons/icon-account.png';
import bag from './assets/icons/icon-bag.png';

import menu from './assets/icons/icon-menu.png';

import line from './assets/line.png';

import hero1 from './assets/hero/large-banner1.png';
import hero2 from './assets/hero/large-banner2.png';
import hero3 from './assets/hero/large-banner3.png';

import stores from './assets/icons/icon-stores.png';
import bops from './assets/icons/icon-bops.png';
import stylist from './assets/icons/icon-stylist.png';

import beauty from './assets/edit/large-beauty.png';
import fashion from './assets/edit/large-fashion.png';
import home from './assets/edit/large-home.png';

import tag from './assets/icons/tag-icon.png';

import carousel_img1 from "./assets/carousel1/jax-redDress.png";
import carousel_img2 from "./assets/carousel1/jax-embroidered.png";
import carousel_img3 from "./assets/carousel1/bardot-dress.png";
import carousel_img4 from "./assets/carousel1/styleco-dress.png";
import carousel_img5 from "./assets/carousel1/ralph-lauren.png";
import carousel_img6 from "./assets/carousel1/guess-dress.png";
import carousel_img7 from "./assets/carousel1/vince-camuto.png";

import personalize from './assets/personalize/large-personalize.png';

import ig1 from './assets/instagram/ig1.png'
import ig2 from './assets/instagram/ig2.png'
import ig3 from './assets/instagram/ig3.png'
import ig4 from './assets/instagram/ig4.png'
import ig5 from './assets/instagram/ig5.png'
import ig6 from './assets/instagram/ig6.png'

import modal from './assets/modals/modal.png'
import modal2 from './assets/modals/plate-modal.png'
import modal3 from './assets/modals/dress-modal.png'
import modal4 from './assets/modals/shoes-modal.png'
import modal5 from './assets/modals/red-modal.png'

import close from './assets/modals/icon-close.png'

import carousel2_img1 from "./assets/carousel2/michaelKors-shoe.jpeg";
import carousel2_img2 from "./assets/carousel2/steveMadden-shoe.jpeg";
import carousel2_img3 from "./assets/carousel2/vinceCamuto-top.jpeg";
import carousel2_img4 from "./assets/carousel2/xscape-dress.jpeg";

import bloomingdales from "./assets/brands/bloomingdales.png";
import bluemercury from "./assets/brands/bluemercury.png";
import story from "./assets/brands/story.png";

import us from './assets/US.gif';
import social from './assets/footer/Macys-social.png';


import './App.css';

Modal.setAppElement('body');

class App extends Component {

  constructor() {
    super();

    this.state = {
      navOpen: false,
      tagIsOpen1: true,
      hideIsOpen1: false,
      tagsAreOpen1: false,
      tagIsOpen2: true,
      hideIsOpen2: false,
      tagsAreOpen2: false,
      tagIsOpen3: true,
      hideIsOpen3: false,
      tagsAreOpen3: false,
      modalIsOpen: false,
      modalIsOpen2: false,
      modalIsOpen3: false,
      modalIsOpen4: false,
      modalIsOpen5: false
    };

    this.openNav = this.openNav.bind(this);

    this.openTag1 = this.openTag1.bind(this);
    this.closeTag1 = this.closeTag1.bind(this);
    this.otherTag1 = this.otherTag1.bind(this);
    this.closeOtherTag1 = this.closeOtherTag1.bind(this);

    this.openTag2 = this.openTag2.bind(this);
    this.closeTag2 = this.closeTag2.bind(this);
    this.otherTag2 = this.otherTag2.bind(this);
    this.closeOtherTag2 = this.closeOtherTag2.bind(this);

    this.openTag3 = this.openTag3.bind(this);
    this.closeTag3 = this.closeTag3.bind(this);
    this.otherTag3 = this.otherTag3.bind(this);
    this.closeOtherTag3 = this.closeOtherTag3.bind(this);

    // this.closeTags = this.closeTags.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);

    this.openModal4 = this.openModal4.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);

    this.openModal5 = this.openModal5.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
  }

  openNav() {
    this.setState({navOpen: !this.state.navOpen});
  }

  openTag1() {
    if (this.state.hideIsOpen1 === true) {
      this.setState({tagIsOpen1: false});
    } else {
      this.setState({tagIsOpen1: true});
    }
  }

  closeTag1() {
    this.setState({tagIsOpen1: false});
  }

  otherTag1() {
    this.setState({tagsAreOpen1: true, hideIsOpen1: true, tagIsOpen1: false});
  }

  closeOtherTag1() {
    this.setState({tagsAreOpen1: false, hideIsOpen1: false, tagIsOpen1: true});
  }

  openTag2() {
    if (this.state.hideIsOpen2 === true) {
      this.setState({tagIsOpen2: false});
    } else {
      this.setState({tagIsOpen2: true});
    }
  }

  closeTag2() {
    this.setState({tagIsOpen2: false});
  }

  otherTag2() {
    this.setState({tagsAreOpen2: true, hideIsOpen2: true, tagIsOpen2: false});
  }

  closeOtherTag2() {
    this.setState({tagsAreOpen2: false, hideIsOpen2: false, tagIsOpen2: true});
  }

  openTag3() {
    if (this.state.hideIsOpen3 === true) {
      this.setState({tagIsOpen3: false});
    } else {
      this.setState({tagIsOpen3: true});
    }
  }

  closeTag3() {
    this.setState({tagIsOpen3: false});
  }

  otherTag3() {
    this.setState({tagsAreOpen3: true, hideIsOpen3: true, tagIsOpen3: false});
  }

  closeOtherTag3() {
    this.setState({tagsAreOpen3: false, hideIsOpen3: false, tagIsOpen3: true});
  }

  // closeTags() {
  //   this.setState({tagIsOpen1: false, tagIsOpen2: false, tagIsOpen3: false});
  // }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal2() {
    this.setState({modalIsOpen2: true});
  }

  closeModal2() {
    this.setState({modalIsOpen2: false});
  }

  openModal3() {
    this.setState({modalIsOpen3: true});
  }

  closeModal3() {
    this.setState({modalIsOpen3: false});
  }

  openModal4() {
    this.setState({modalIsOpen4: true});
  }

  closeModal4() {
    this.setState({modalIsOpen4: false});
  }

  openModal5() {
    this.setState({modalIsOpen5: true});
  }

  closeModal5() {
    this.setState({modalIsOpen5: false});
  }

  responsive = {
    0: { items: 1 },
    360: { items: 2 },
    720: {items: 3 },
    1024: { items: 4 }
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const handleDragStart = (e) => e.preventDefault();
 
    const select_items = [
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img1} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">JAX</p>
          <p className="secondText">Off-The-Shoulder Lace Dress</p>
          <p className="price"><s className="old_price">$138</s> $79.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img2} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">JAX</p>
          <p className="secondText">Mixed Lace & Embroidered...</p>
          <p className="old_price">$68.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img3} className="yours-custom-class" alt="carousel" onClick={this.openModal3} />
        <div className="text_wrapper">
          <p className="legend">BARDOT</p>
          <p className="secondText">Lace Illusion Halter Dress</p>
          <p className="old_price">$119</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img4} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">STYLE & CO</p>
          <p className="secondText">Petite Cross-Back Printed Swing...</p>
          <p className="price"><s className="old_price">$49.50</s> $37.12</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img5} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">RALPH LAUREN</p>
          <p className="secondText">Ruffled Overlay V-back Sheath Dress</p>
          <p className="old_price"><s className="old_price">$130</s> $79.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img6} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">GUESS</p>
          <p className="secondText">Dayana Eyelet-Lace High-Low Dres</p>
          <p className="old_price"><s className="old_price">$90</s> $49.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel_img7} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">VINCE CAMUTO</p>
          <p className="secondText">Off-The-Shoulder Flounced Crepe Dress</p>
          <p className="old_price">$119</p>
        </div>
      </div>
    ];

    const bottom_items = [
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel2_img1} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">MICHAEL KORS</p>
          <p className="secondText">Damita Platform Wedge Sandals</p>
          <p className="price"><s className="old_price">$99</s> $79.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel2_img2} className="yours-custom-class" alt="carousel" onClick={this.openModal4} />
        <div className="text_wrapper">
          <p className="legend">STEVE MADDEN</p>
          <p className="secondText">Women&rsquo;s Kimmie Flatform...</p>
          <p className="old_price">$69.99</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel2_img3} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">VINCE CAMUTO</p>
          <p className="secondText">Off-The-Shoulder Tassel-Detail Top</p>
          <p className="price"><s className="old_price">$99</s> $39.53</p>
        </div>
      </div>,
      <div onDragStart={handleDragStart} className="each_select">
        <img src={carousel2_img4} className="yours-custom-class" alt="carousel" />
        <div className="text_wrapper">
          <p className="legend">XSCAPE</p>
          <p className="secondText">Ruffled High-Low Dress</p>
          <p className="old_price">$179</p>
        </div>
      </div>
    ];

    var customStyles = {
      overlay : {
         backgroundColor       : 'rgba(0, 0, 0, 0.4)',
        },
        content : {
          position              : 'absolute',
          width                 : '40%',
          height                : '78%',
          top                   : '50%',
          left                  : '50%',
          transform             : 'translate(-50%, -50%)',
          overflow              : 'auto',
        }
    };

  return (
      <div className="App">
        <header className="Macys-header">
          <div className="large-header">
            <div className="header-wrapper">
              <img src={head} className="Macys-logo" id="Macys-large" alt="logo" />
              <div className="search-container">
                <form>
                  <img src={search} className="search-logo" id="large-search" alt="logo" />
                  <input type="text" placeholder="What are you looking for?" name="search" className="search" />
                </form>
              </div>
              <div id="large-header-container">
                <p className="account-text">Login</p>
                <img src={account} className="account-logo" id="large-account" alt="logo" />
                <img src={bag} className="bag-logo" id="large-bag" alt="logo" />
              </div>
            </div>
            <div className="navbar">
              <a href="#" className="navitem">WOMEN</a>
              <a href="#" className="navitem">MEN</a>
              <a href="#" className="navitem">KIDS & BABY</a>
              <a href="#" className="navitem">HOME</a>
              <a href="#" className="navitem">SHOES</a>
              <a href="#" className="navitem">BEAUTY</a>
              <a href="#" className="navitem">ACCESSORIES</a>
              <a href="#" className="navitem">SALE & CLEARANCE</a>
            </div>
          </div>

          <div className="med-header">
            <div className="med-header-wrapper">
              <div className="menu" id="med-menu">
                <img src={menu} className="menu-logo" alt="logo" onClick={this.openNav} />
                <div className={this.state.navOpen ? 'navbar_span med_nav' : 'navbar_span med_nav hidden'}>
                  <a href="#" className="navitem">WOMEN</a>
                  <a href="#" className="navitem">MEN</a>
                  <a href="#" className="navitem">KIDS & BABY</a>
                  <a href="#" className="navitem">HOME</a>
                  <a href="#" className="navitem">SHOES</a>
                  <a href="#" className="navitem">BEAUTY</a>
                  <a href="#" className="navitem">ACCESSORIES</a>
                  <a href="#" className="navitem">SALE & CLEARANCE</a>
                </div>
              </div>
              <div className={this.state.navOpen ? 'Macys-logo nodisplay' : 'Macys-logo'} id="Macys-med" >
                <img src={head} alt="logo" />
              </div>
              <div id="med-header-container">
                <img src={search} className="search-logo" id="med-search" alt="logo" />
                <img src={account} className="account-logo" id="med-account" alt="logo" />
                <img src={bag} className="bag-logo" id="med-bag" alt="logo" />
              </div>
            </div>
          </div>

          <div className="small-header">
            <div className="small-header-wrapper">
              <div id="small-logo">
                <div className="menu" id="small-menu">
                  <img src={menu} className="menu-logo" alt="logo" onClick={this.openNav} />
                  <div className={this.state.navOpen ? 'navbar_span small_nav' : 'navbar_span small_nav hidden'}>
                    <a href="#" className="navitem">WOMEN</a>
                    <a href="#" className="navitem">MEN</a>
                    <a href="#" className="navitem">KIDS & BABY</a>
                    <a href="#" className="navitem">HOME</a>
                    <a href="#" className="navitem">SHOES</a>
                    <a href="#" className="navitem">BEAUTY</a>
                    <a href="#" className="navitem">ACCESSORIES</a>
                    <a href="#" className="navitem">SALE & CLEARANCE</a>
                  </div>
                </div>
                <img className={this.state.navOpen ? 'Macys-logo nodisplay' : 'Macys-logo'} id="Macys-small" src={head} alt="logo" />
              </div>
              <div id="small-header-container">
                <img src={search} className="search-logo" id="small-search" alt="logo" />
                <img src={account} className="account-logo" id="small-account" alt="logo" />
                <img src={bag} className="bag-logo" id="small-bag" alt="logo" />
              </div>
            </div>

          </div>
        </header>

        <div className="Macys-banner">
          <Slider {...settings}>
            <div className='wrapper'>
              <img src={hero1} className="hero1" alt="hero" />
              <div className='hero_text' id='hero_text1'>
              </div>
            </div>
            <div className='wrapper'>
              <img src={hero2} className="hero2" alt="hero" />
              <div className='hero_text' id='hero_text2'>
              </div>
            </div>
            <div className='wrapper'>
              <img src={hero3} className="hero3" alt="hero" />
              <div className='hero_text' id='hero_text3'>
              </div>
            </div>
            </Slider>
        </div>

        <div className="Macys-body">
          <div className="inStore">
            <div className="store" id="store1">
              <img src={stores} alt="logo" />
              <p>Preferred Store</p>
              <a href="#">Macy&rsquo;s Union Square Store</a>
            </div>
            <div className="store" id="store2">
              <img src={bops} alt="logo" />
              <p>Free pick up in store</p>
              <a href="#">Start shopping</a>
            </div>
            <div className="store" id="store3">
              <img src={stylist} alt="logo" />
              <p>my stylist@macy&rsquo;s</p>
              <a href="#">Book an appointment</a>
            </div>
          </div>

          <div className="edit">
            <p className="edit_text">Get inspired by the Edit</p>
            <div className="first_row">
              <div className="edit_para" id="edit1">
                <div className="fashion_wrapper">
                  <img src={fashion} className="tall" alt="store" />
                  <div className={this.state.tagIsOpen1 ? 'tag_button1 hover1' : 'tag_button1 hover1 hidden'} id="start_tag1" onClick={this.otherTag1}>
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">View products</p>
                  </div>
                  <div className={this.state.tagsAreOpen1 ? 'tag_button1 hover1' : 'tag_button1 hover1 hidden'} id="close_tag1" onClick={this.closeOtherTag1} >
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">Hide</p>
                  </div>
                  <div className={this.state.tagsAreOpen1 ? 'tags_wrapper1' : 'tags_wrapper1 hidden'}>
                    <img src={tag} className="tag tags" id="tag1_1" alt="logo" />
                    <img src={tag} className="tag tags" id="tag1_2" alt="logo" />
                    <img src={tag} className="tag tags" id="tag1_3" alt="logo" />
                  </div>
                </div>
                <div className="edit_title">
                  <p className="title_bold"><i>Find your summer style</i></p>
                  <p className="edit_subtitle">Our Fashion Director&rsquo;s picks to buy, love and wear all season. From vacation to beath time to family + friend time, see what Cassandra jones, Head of Macy&rsquo;s Fashion Office, loves now!</p>
                </div>
              </div>
              <div className="edit_para" id="edit2">
                <div className="beauty_wrapper">
                  <img src={beauty} className="tall" alt="store" />
                  <div className={this.state.tagIsOpen2 ? 'tag_button2 hover2' : 'tag_button2 hover2 hidden'} id="start_tag2" onClick={this.otherTag2}>
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">View products</p>
                  </div>
                  <div className={this.state.tagsAreOpen2 ? 'tag_button2 hover2' : 'tag_button2 hover2 hidden'} id="close_tag2" onClick={this.closeOtherTag2} >
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">Hide</p>
                  </div>
                  <div className={this.state.tagsAreOpen2 ? 'tags_wrapper2' : 'tags_wrapper2 hidden'}>
                    <img src={tag} className="tag tags" id="tag2_1" alt="logo" />
                    <img src={tag} className="tag tags" id="tag2_2" alt="logo" />
                    <img src={tag} className="tag tags" id="tag2_3" alt="logo" />
                    <img src={tag} className="tag tags" id="tag2_4" alt="logo" />
                    <img src={tag} className="tag tags" id="tag2_5" alt="logo" />
                    <img src={tag} className="tag tags" id="tag2_6" alt="logo" />
                  </div>
                </div>
                <div className="edit_title">
                  <p className="title_bold"><i>Elements of beauty</i></p>
                  <p className="edit_subtitle">The latest trend in beauty focuses on all things anti-pollution, natural ingredients and the latest & greatest SPF laden essentials to protect your skin.</p>
                </div>
              </div>
            </div>
            <div className="second_row">
              <div id="edit3">
                <div className="home_wrapper">
                  <img src={home} className="short" alt="store" />
                  <div className={this.state.tagIsOpen3 ? 'tag_button3 hover3' : 'tag_button3 hover3 hidden'} id="start_tag3" onClick={this.otherTag3}>
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">View products</p>
                  </div>
                  <div className={this.state.tagsAreOpen3 ? 'tag_button3 hover3' : 'tag_button3 hover3 hidden'} id="close_tag3" onClick={this.closeOtherTag3} >
                    <img src={tag} className="tag open_tag" alt="logo" />
                    <p className="tag_text">Hide</p>
                  </div>
                  <div className={this.state.tagsAreOpen3 ? 'tags_wrapper3' : 'tags_wrapper3 hidden'}>
                    <img src={tag} className="tag tags" id="tag3_1" alt="logo" />
                    <img src={tag} className="tag tags" id="tag3_2" alt="logo" onClick={this.openModal2} />
                    <img src={tag} className="tag tags" id="tag3_3" alt="logo" />
                    <img src={tag} className="tag tags" id="tag3_4" alt="logo" />
                    <img src={tag} className="tag tags" id="tag3_5" alt="logo" />
                    <img src={tag} className="tag tags" id="tag3_6" alt="logo" />
                  </div>
                </div>
                <div className="edit_title">
                  <p className="title_bold"><i>Farmhouse kitchen</i></p>
                  <p className="edit_subtitle">This season, we&rsquo;re gathering around the table with whimscal and decorative pieces that are both nostalgic and of the moment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="select">
            <div className="select_header">
              <div className="line-wrapper">
                <img src={line} className="line" alt="line" />
              </div>
              <div className="text_line">
                <p className="line_title"><i>Selected for You</i></p>
                <p className="line_subtitle">Based on your recent purchases</p>
              </div>
              <div className="line-wrapper">
                <img src={line} className="line" alt="line" />
              </div>
            </div>
            <AliceCarousel mouseTracking items={select_items} controlsStrategy="responsive" responsive={this.responsive} disableDotsControls={true} animationType="fadeout" />
          </div>

          <div className="personalize">
            <div className="person_img">
              <img src={personalize} />
            </div>
          </div>

          <div className="instagram">
            <p className="ins_header"> Shop our Instagram </p>
            <div className="floated_img" >
              <a><img src={ig1} alt="ins" /></a>
              <a><img src={ig2} alt="ins" onClick={this.openModal} /></a>
              <a><img src={ig3} alt="ins" /></a>
            </div>
            <div className="floated_img">
              <a><img src={ig4} alt="ins" /></a>
              <a><img src={ig5} alt="ins" /></a>
              <a><img src={ig6} alt="ins" onClick={this.openModal5} /></a>
            </div>
            <p className="ins_header"><a href="https://www.instagram.com/macys/" target="_blank"> Follow us @macys </a></p>
          </div>

          <div className="bottom_carousel">
            <div className="select_header">
              <div className="line-wrapper">
                <img src={line} className="line" alt="line" />
              </div>
              <div className="text_line">
                <p className="line_title"><i>Trending Now</i></p>
                <p className="line_subtitle">Popular with others</p>
              </div>
              <div className="line-wrapper">
                <img src={line} className="line" alt="line" />
              </div>
            </div>
            <AliceCarousel mouseTracking items={bottom_items} controlsStrategy="responsive" responsive={this.responsive} disableDotsControls={true} animationType="fadeout" />
          </div>

          <div className="shop_bottom">
            <p className="shop_text">Shop Our Brands</p>
            <div className="brand_wrapper">
              <a href="https://www.bloomingdales.com/" target="_blank"><img src={bloomingdales} alt="brand" /></a>
              <a href="https://bluemercury.com/" target="_blank"><img src={bluemercury} alt="brand" /></a>
              <a href="#"><img src={story} alt="brand" /></a>
            </div>
          </div>

          <div className="ins">
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal">
              <div className="modal">
                <img src={close} className="close" id="close1" onClick={this.closeModal} />
                <img src={modal} className="modal_img" id="first_modal" />
              </div>
            </Modal>
          </div>

          <div className="ins">
            <Modal
              isOpen={this.state.modalIsOpen2}
              onRequestClose={this.closeModal2}
              style={customStyles}
              contentLabel="Example Modal">
              <div className="modal">
                <img src={close} className="close" id="close2" onClick={this.closeModal2} />
                <img src={modal2} className="modal_img" id="second_modal" />
              </div>
            </Modal>
          </div>

          <div className="ins">
            <Modal
              isOpen={this.state.modalIsOpen3}
              onRequestClose={this.closeModal3}
              style={customStyles}
              contentLabel="Example Modal">
              <div className="modal">
                <img src={close} className="close" id="close3" onClick={this.closeModal3} />
                <img src={modal3} className="modal_img" id="third_modal" />
              </div>
            </Modal>
          </div>

          <div className="ins">
            <Modal
              isOpen={this.state.modalIsOpen4}
              onRequestClose={this.closeModal4}
              style={customStyles}
              contentLabel="Example Modal">
              <div className="modal">
                <img src={close} className="close" id="close4" onClick={this.closeModal4} />
                <img src={modal4} className="modal_img" id="fourth_modal" />
              </div>
            </Modal>
          </div>

          <div className="ins">
            <Modal
              isOpen={this.state.modalIsOpen5}
              onRequestClose={this.closeModal5}
              style={customStyles}
              contentLabel="Example Modal">
              <div className="modal">
                <img src={close} className="close" id="close5" onClick={this.closeModal5} />
                <img src={modal5} className="modal_img" id="fifth_modal" />
              </div>
            </Modal>
          </div>

        </div>


        <footer className="Macys-footer">
          <div id="footer-redesign-row-1" class="">
            <div id="footer-redesign-row-1-panels-container">
              <div id="customerService">
                <label class="checkbox-label" for="customer-service-checkbox" tabindex="0" aria-expanded="false">
                  <ul class="customer-service-checkbox">
                    <li class="title">Customer Service</li>
                    <span class="plusminus-icon">+</span>
                    <li class="customer-service-checkbox-item"><a href="https://www.customerservice-macys.com/app?cm_sp=navigation-_-bottom_nav-_-help_faqs">Help &amp; FAQs</a></li>
                    <li class="customer-service-checkbox-item"><a href="https://www.macys.com/service/order-status?cm_sp=navigation-_-bottom_nav-_-order_tracking">Order Tracking</a></li>
                    <li class="customer-service-checkbox-item"><a href="//www.macys.com/service/shipping/index.jsp?cm_sp=navigation-_-bottom_nav-_-shipping_delivery" id="shippingInformation">Shipping &amp; Delivery</a></li>
                    <li class="customer-service-checkbox-item"><a href="//www.macys.com/service/returns/index.jsp?cm_sp=navigation-_-bottom_nav-_-return">Returns</a></li>
                    <li class="customer-service-checkbox-item"><a href="//www.macys.com/service/contactus/index.jsp?cm_sp=navigation-_-bottom_nav-_-contact_us">Contact Us</a></li>
                    <li class="customer-service-checkbox-item"><a href="//www.macys.com/service/index_es.jsp?cm_sp=navigation-_-bottom_nav-_-para_ayuda">Para Ayuda</a></li>
                    <li class="customer-service-checkbox-item">
                      <div class="footer-flag">
                        <img id="footerFlag" src={us} data-blzsrc="/feo-cdn/y/T/uko-huQ1g.png" title="US" alt="US current selected country" /><script blzsys="1" type="text/javascript">aFeoOverrideAttrRead('img', 'src')</script>
                        <a id="href_changeCountry" href="//www.macys.com/international/context?cm_sp=navigation-_-bottom_nav-_-change_country">Change Country</a>
                      </div>
                    </li>
                  </ul>
                </label>
              </div>
              <div id="creditCard">
                <label class="checkbox-label" for="credit-card-checkbox" tabindex="0" aria-expanded="false">
                  <ul class="credit-card-checkbox">
                    <li class="title">Macy&rsquo;s Credit Card</li>
                    <span class="plusminus-icon">+</span>
                    <li class="credit-card-checkbox-item"><a id="footerMacyscc" href="//www.macys.com/my-credit/gateway/?cm_sp=creditcardlanding_credit_gateway-_-bottom_nav-_-macys_credit_card&acquisitionOrigin=GlbNavFooterGateway" class="macys-card-services">Macy&rsquo;s Card Services</a></li>
                    <li class="credit-card-checkbox-item"><a id="footerPayBill" href="//www.macys.com/creditservice/creditacct/paybill?cm_sp=creditcardlanding_credit_gateway-_-bottom_nav-_-pay_bill_online" class="pay-bill-online">Pay Your Credit Card Bill</a></li>
                    <li class="credit-card-checkbox-item"><a href="//www.macys.com/creditservice/marketing/benefits?cm_sp=navigation-_-bottom_nav-_-cardholder_benefits" class="view-credit-account">Cardholder Benefits</a></li>
                    <li class="credit-card-checkbox-item"><a id="footerApplySave" href="//www.macys.com/ce/creditservice/marketing/main?cm_sp=macys_account-_-macys_credit_card-_-apply_and_learn&acquisitionOrigin=GlbNavFooterLnApply" class="apply-now-save">Apply for Macy&rsquo;s Credit Card</a></li>
                  </ul>
                </label>
              </div>
              <div id="stores">
                <label class="checkbox-label" for="our-stores-checkbox" tabindex="0" aria-expanded="false">
                  <ul class="our-stores-checkbox">
                    <li class="title">Our Stores</li>
                    <span class="plusminus-icon">+</span>
                    <li class="our-stores-checkbox-item"><a id="footerLocationHr" href="https://l.macys.com/stores.html?cm_sp=navigation-_-bottom_nav-_-stores">Stores &amp; Services</a></li>
                    <li class="our-stores-checkbox-item"><a id="footerLocationHr" href="//www.macys.com/shop/store/search?cm_sp=navigation-_-bottom_nav-_-store_locations_hours">Locations &amp; Hours</a></li>
                    <li class="our-stores-checkbox-item"><a id="storeEventFooterHref" href="//www.macys.com/shop/store/eventsearch?cm_sp=navigation-_-bottom_nav-_-store_events">Store Events</a></li>
                    <li class="our-stores-checkbox-item"><a href="http://macys.circularhub.com/pub/macys?type=1&cm_sp=navigation-_-bottom_nav-_-catalogs">Catalogs</a></li>
                    <li class="our-stores-checkbox-item"><a href="https://www.customerservice-macys.com/app/answers/detail/a_id/4055?cm_sp=navigation-_-bottom_nav-_-tell_us_what_you_think">Tell Us What You Think</a></li>
                    <li class="our-stores-checkbox-item"><a href="https://www.macysbackstage.com?cm_sp=navigation-_-bottom_nav-_-macys_backstage">Macy&rsquo;s Backstage</a></li>
                    <li class="our-stores-checkbox-item"><a href="//www.macys.com/campaign/social?campaign_id=180&channel_id=1&cm_sp=navigation-_-bottom_nav-_-mystylist">My Stylist Personal Shopping</a></li>
                  </ul>
                </label>
              </div>
              <div id="macysinc">
                <label class="checkbox-label" for="macys-inc-checkbox" tabindex="0" aria-expanded="false">
                  <ul class="macys-inc-checkbox">
                    <li class="title">Macy&rsquo;s Inc.</li>
                    <span class="plusminus-icon">+</span>
                    <li class="macys-inc-checkbox-item"><a target="_new" href="http://www.macysinc.com?cm_sp=navigation-_-bottom_nav-_-macys">Corporate Site</a></li>
                    <li class="macys-inc-checkbox-item"><a href="javascript:pop('http://www.macysjobs.com/macys/index_flash.asp')" id="macysJobs">MacysJOBS</a></li>
                    <li class="macys-inc-checkbox-item"><a href="javascript:pop('http://www.macysinc.com/pressroom/')">Press Room</a></li>
                    <li class="macys-inc-checkbox-item"><a href="javascript:pop('http://www.macysinc.com/ir/')">Investors</a></li>
                  </ul>
                </label>
              </div>
              <div id="stayconnected">
                <a href="//www.macys.com/m/campaign/social/macys-mobile-social-reviews?cm_sp=navigation-_-bottom_nav-_-stayconnected" class="title">Stay Connected</a>
                <img src={social} className="social-logo" alt="footer" />
              </div>
            </div>
          </div>
          <div id="footer-redesign-row-2">
            <div class="copyright">
              <p>© 2018 macys.com is a registered trademark. All rights reserved. Macys.com, LLC, 680 Folsom St. San Francisco, CA 94107.</p>
              <p>Macy&rsquo;s Credit and Customer Service, PO Box 8113, Mason, Ohio 45040. Request our <a href="/service/contact/index.ognc?defaultSubject=MAIN&amp;DefaultRegarding=ADDRESS#formstart" id="">corporate name &amp; address by email.</a>
              </p>
            </div>
            <div class="legal">
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/40/" class="standard">Privacy Notice &#124;</a>
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/595#adv" class="standard">Interest Based Ads &#124;</a>
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/595#california" class="standard">CA Privacy Rights &#124;</a>
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/39/" class="standard">Legal Notice &#124;</a>
              <a href="http://macysinc.com/social-responsibility/customer-bill-of-rights/default.aspx" class="standard">Customer Bill of Rights &#124;</a>
              <a href="http://macysinc.com/social-responsibility/human-trafficking/default.aspx" class="standard">CA Transparency in Supply Chains &#124;</a>
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/137" class="standard">Product Recalls &#124;</a>
              <a href="https://www.customerservice-macys.com/app/answers/detail/a_id/14/" class="standard">Pricing Policy &#124;</a>
              <a href="/cms/slp/2/Site-Index" class="standard">Site Map</a>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
