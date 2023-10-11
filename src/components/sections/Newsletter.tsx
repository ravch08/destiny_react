const Newsletter = () => {
	return (
		<section id="newsletter" aria-labelledby="Newsletter">
			<div className="container">
				<div className="section-heading text-center">
					<h2>Still confused ? Try a 7-day free trial now</h2>
					<p>
						Don't worry, we won't need your credit card details. Just enter your email address and
						we'll take care of the rest.
					</p>

					<form className="newsletter-input">
						<input type="email" placeholder="Join the waiting list" required />
						<button type="submit" className="btn-newsletter">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
