import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const Newsletter = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-indigo-200">
            <Header />
                <div className="max-w-6xl mx-2 md:mx-auto text-xs md:text-base h-screen">
                    <p className="flex flex-wrap text-green-200 font-cursive text-xl justify-center md:text-4xl">
                    Newsletter
                    </p>
                    <p>NO SPAM - we promise</p>
                    
                    <div id="mc_embed_signup">
                        <form action="https://royalridges.us19.list-manage.com/subscribe/post?u=d6682e52d267116550d3ff4d7&amp;id=c9cb660a15" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL">Subscribe</label>
                            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d6682e52d267116550d3ff4d7_c9cb660a15" tabindex="-1" value=""></div>
                                <div class="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Newsletter;