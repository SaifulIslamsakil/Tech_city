

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form>
                    <header className="footer-title">Newsletter</header> 
                    <fieldset className="form-control w-52 md:w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered md:w-full " /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
</footer>
        </div>
    );
};

export default Footer;