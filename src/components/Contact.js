import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Contact = () => {
	return(
		<div
		className="contactContainer">
			 <h1 className="sectionTitle"> Let's stay in touch</h1>
			    <p> If you like my work or want to chat, please contact me through email, phone, or social media.</p>
					<div className="iconContainer">
					<a href="https://www.linkedin.com/in/lisa-jo/"><FontAwesomeIcon icon={['fab', 'linkedin']}  transform="grow-6"/>    </a>
					<a href="https://www.instagram.com/notheaveragejo/"><FontAwesomeIcon icon={['fab', 'instagram']} transform="grow-6"/></a>
					<a href="https://www.facebook.com/lisaanne.jo"> <FontAwesomeIcon icon={['fab', 'facebook-square']} transform="grow-6"/></a>
					<a href="https://github.com/nottheaveragejo">
					<FontAwesomeIcon icon={['fab', 'github-alt']} transform="grow-6"/>
					</a>
					</div>
					<div>
						Phone: 516-491-1375
					</div>
   			  		 <form action="https://formspree.io/lisaxjo@gmail.com" method="POST" >
            			 <input class="in" type="text" name="name" placeholder="Your name"/>
            			  <input class="in" type="text" name="_replyto" placeholder="Your email" />
			              <input class="in" type="hidden" name="_subject" value="New submission!" />
			              <textarea name="message" placeholder="Test Message"></textarea>
			              <input class="btn" type="submit" value="Send"/>

         	 		 </form>

		</div>
		)
}

export default Contact
