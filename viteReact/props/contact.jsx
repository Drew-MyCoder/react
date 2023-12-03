function Contact({img, email, phone, name,}) {
    return (
      <div className="contact-card">
              <img src={img}/>
              <h3>{name}</h3>
              <div className="info-group">
                  <img src={phoneiconLogo} />
                  <p>{phone}</p>
              </div>
              <div className="info-group">
                  <img src={mailiconLogo} />
                  <p>{email}</p>
              </div>
          </div>
    )
  }
  
  
  function App() {
    return (
        <div className="contacts">
            <Contact 
                img={mrwhiskersonLogo} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={fluffykinsLogo}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={felixLogo}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={pumpkinLogo}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
  }