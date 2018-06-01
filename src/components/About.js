import React from 'react';
import TeamMember from './TeamMember';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>

          <p>
            N.exchange is a fast, reliable and fully transparent cryptocurrency exchange built by crypto enthusiasts, for crypto
            enthusiasts.
          </p>
          <p>We are a group of multi-national, multi-disciplinary cryptocurrency professionals.</p>
          <p>
            Our team came together to make this platform after seeing firsthand the need for a fast and reliable exchange on the crypto
            market.
          </p>
          <p>
            We pride ourselves on total transparency: Everything is viewable through our API, starting from order lists and ending with our
            coin reserves.{' '}
          </p>
          <p>
            N.exchange is built on several core values that guide our team in our day to day operations. Among them are complete
            transparency, a strive to help make cryptocurrency as accessible as possible, and a passion for open source.
          </p>
        
          <div id="team-members" className="row">
            <TeamMember
              id="oleg"
              name="Oleg Belousov"
              country="IL"
              fullCountryName="Israel"
              description="Multidisciplinary coder. Aspiring innovator with a deep passion
                for open source and making the world better, step by step, every single day."
              social={{
                linkedin: 'https://www.linkedin.com/in/oleg-belousov-b4112145/',
                twitter: 'https://twitter.com/iooleg',
                medium: 'https://medium.com/@IoOleg',
                github: 'https://github.com/BeOleg',
              }}
            />

            <TeamMember
              id="sarunas"
              name="Šarūnas Ažna"
              country="LT"
              fullCountryName="Lithuania"
              description="Backend developer and physicist. Animation fan, cryptocurrencies
                enthusiast and plays the saxophone."
              social={{
                linkedin: 'https://www.linkedin.com/in/%C5%A1ar%C5%ABnas-a%C5%BEna-102220b2/',
                github: 'https://github.com/SarunasAzna',
              }}
            />

            <TeamMember
              id="you"
              name="Noda Hikaru"
              country="063-japan"
              fullCountryName="Japan"
              description={
                <div>
                  <p>
                    Full-Stack Developer, blockchain back-end expert,
                    Passion to develop web product including blockchain, cryptocurrency back-end, front-end. 
                  </p>
                </div>
              }
              social={{
                linkedin: 'https://www.linkedin.com/in/noda-hikaru-6a4806142/',
                github: 'https://github.com/ninjat003',
                twitter:'https://twitter.com/hondai_like365'
              }}
            />

            <TeamMember
              id="karolis"
              name="Karolis Ramanauskas"
              country="LT"
              fullCountryName="Lithuania"
              description="Full-stack developer. Entrepreneur by heart. Enjoys bringing products
                to life through code."
              social={{
                linkedin: 'https://www.linkedin.com/in/karolisram/',
                github: 'https://github.com/superkarolis/',
                medium: 'https://medium.com/@karolisram',
                twitter: 'https://twitter.com/superkarolis',
                rss: 'https://www.karolisram.com/',
              }}
            />

            <TeamMember
              id="justas"
              name="Justas Ažna"
              country="LT"
              fullCountryName="Lithuania"
              description="DevOps orchestrator. Shuffling Docker, Swarm & Kubernetes. Proponent
                for micro-component design and seamless scalability."
              social={{
                linkedin: 'https://www.linkedin.com/in/justasazna/',
                github: 'https://github.com/reederz',
              }}
            />

            <TeamMember
              id="paulina"
              name="Paulina Bagińska"
              country="PL"
              fullCountryName="Poland"
              description="Product management magician.
                Loves to build and improve product usability.
                Blockchain novice.
                Women in tech supporter and recreational weight lifter."
              social={{
                linkedin: 'https://www.linkedin.com/in/baginskapaulina/',
                twitter: 'https://twitter.com/PaulinaBGGC',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
