import { Row, Col, Image } from "react-bootstrap";
import image18 from './images/18.jpg';
import image19 from './images/19.jpg';
import image20 from './images/20.jpg';
import tag from './images/tag.png';
import image29 from './images/29.png';
import image30 from './images/30.png';
import image31 from './images/31.png';
import image32 from './images/32.png';
import image33 from './images/33.png';
import image34 from './images/34.png';
import image35 from './images/35.png';
import image36 from './images/36.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import offer from './images/offer.png';

function VegetablesBannerRight(){
    return(
        <div className="w3l_banner_nav_right">
			<div className="w3l_banner_nav_right_banner5">
				<h3>Best Deals For New Products<span className="blink_me"></span></h3>
			</div>
			<div className="w3l_banner_nav_right_banner3_btm">
                <Row>
				<Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid src={image18} alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Fruits & Vegetables</h4>
					<ol>
						<li>sunt in culpa qui officia</li>
						<li>commodo consequat</li>
						<li>sed do eiusmod tempor incididunt</li>
					</ol>
				</Col>
				<Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid src={image19} alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Dry Fruits</h4>
					<ol>
						<li>enim ipsam voluptatem officia</li>
						<li>tempora incidunt ut labore et</li>
						<li>vel eum iure reprehenderit</li>
					</ol>
				</Col>
				<Col md={4} className="w3l_banner_nav_right_banner3_btml">
					<div className="view view-tenth">
						<Image fluid src={image20} alt=" " className="img-responsive" />
						<div className="mask">
							<h4>Grocery Store</h4>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
						</div>
					</div>
					<h4>Vegetables</h4>
					<ol>
						<li>dolorem eum fugiat voluptas</li>
						<li>ut aliquid ex ea commodi</li>
						<li>magnam aliquam quaerat</li>
					</ol>
				</Col>
				<div className="clearfix"> </div>
                </Row>
			</div>
			<div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_veg">
				<h3 className="w3l_fruit">Fruits & Vegetables</h3>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive"/></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image29} alt=" " className="img-responsive" /></a>
											<p>Fresh Bananas (1 kg)</p>
											<h4>$10.00 <span>$12.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="Fresh Bananas" />
													<input type="hidden" name="amount" value="10.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image30} alt=" " className="img-responsive" /></a>
											<p>fresh cauliflower (2 no's)</p>
											<h4>$5.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh cauliflower" />
													<input type="hidden" name="amount" value="5.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image31} alt=" " className="img-responsive" /></a>
											<p>fresh brinjal bharta (1 kg)</p>
											<h4>$2.00 <span>$3.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh brinjal bharta" />
													<input type="hidden" name="amount" value="2.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image32} alt=" " className="img-responsive" /></a>
											<p>fresh sweet lime (500 gm)</p>
											<h4>$6.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh sweet lime" />
													<input type="hidden" name="amount" value="6.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<div className="clearfix"> </div>
                    </Row>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image9} alt=" " className="img-responsive" /></a>
											<p>fresh spinach (palak)</p>
											<h4>$2.00 <span>$3.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh spinach" />
													<input type="hidden" name="amount" value="2.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image10} alt=" " className="img-responsive" /></a>
											<p>fresh mango dasheri (1 kg)</p>
											<h4>$5.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh mango dasheri" />
													<input type="hidden" name="amount" value="5.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image11} alt=" " className="img-responsive" /></a>
											<p>fresh apple red (1 kg)</p>
											<h4>$6.00 <span>$8.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh apple red" />
													<input type="hidden" name="amount" value="6.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image12} alt=" " className="img-responsive" /></a>
											<p>fresh broccoli (500 gm)</p>
											<h4>$4.00 <span>$6.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh broccoli" />
													<input type="hidden" name="amount" value="4.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<div className="clearfix"> </div>
                    </Row>
				</div>
				<div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
                    <Row>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image33} alt=" " className="img-responsive" /></a>
											<p>fresh basket onion (1 kg)</p>
											<h4>$5.00 <span>$7.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh basket onion" />
													<input type="hidden" name="amount" value="5.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image34} alt=" " className="img-responsive" /></a>
											<p>fresh muskmelon (1 kg)</p>
											<h4>$4.00 <span>$5.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh muskmelon" />
													<input type="hidden" name="amount" value="4.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="tag"><Image fluid src={tag} alt=" " className="img-responsive" /></div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image35} alt=" " className="img-responsive" /></a>
											<p>fresh mushroom (500 ml)</p>
											<h4>$11.00 <span>$15.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh mushroom" />
													<input type="hidden" name="amount" value="11.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<Col md={3} className="w3ls_w3l_banner_left">
						<div className="hover14 column">
						<div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
							<div className="agile_top_brand_left_grid_pos">
								<Image fluid src={offer} alt=" " className="img-responsive" />
							</div>
							<div className="agile_top_brand_left_grid1">
								<figure>
									<div className="snipcart-item block">
										<div className="snipcart-thumb">
											<a href="single.html"><Image fluid src={image36} alt=" " className="img-responsive" /></a>
											<p>fresh strawberry (1 pc)</p>
											<h4>$7.00 <span>$9.00</span></h4>
										</div>
										<div className="snipcart-details">
											<form action="#" method="post">
												<fieldset>
													<input type="hidden" name="cmd" value="_cart" />
													<input type="hidden" name="add" value="1" />
													<input type="hidden" name="business" value=" " />
													<input type="hidden" name="item_name" value="fresh strawberry" />
													<input type="hidden" name="amount" value="7.00" />
													<input type="hidden" name="discount_amount" value="1.00" />
													<input type="hidden" name="currency_code" value="USD" />
													<input type="hidden" name="return" value=" " />
													<input type="hidden" name="cancel_return" value=" " />
													<input type="submit" name="submit" value="Add to cart" className="button" />
												</fieldset>
											</form>
										</div>
									</div>
								</figure>
							</div>
						</div>
						</div>
					</Col>
					<div className="clearfix"> </div>
                    </Row>
				</div>
			</div>
		</div>
    )
}

export default VegetablesBannerRight;