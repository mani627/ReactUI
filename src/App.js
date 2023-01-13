
import './App.css';
import "./Home.css"
import MyBackgroundImage from './image/pexels-pixabay-39284.jpg';
import footer from './image/footer.png'
import fb from "./image/fb.png"
import tw from "./image/tw.png"
import u from "./image/u.png"


function App() {




  let phone = <i className='fa fa-phone' style={{ color: "white", width: "auto", display: "block", height: "auto", fontSize: "0.8rem", transform: 'rotate(90deg)' }}></i>







  return (
    <div className="App" style={{ maxHeight: "100vh" }}>

      {/* header */}
      <div className='nav'>
        {/* header left */}
        <div className='nav_left'>

          <span className="nav_left_first">
            <i className='fa fa-location-arrow' style={{ color: "white", width: "auto", display: "block", height: "auto", fontSize: "0.8rem" }}></i>
            &nbsp; 35,Badkhal Rd, Sector 27A, Faridabad, Haryana</span>



          <span className='nav_left_second'>

            <i className='fa fa-clock' style={{ color: "white", width: "auto", display: "block", height: "auto", fontSize: "0.8rem" }}></i>
            &nbsp;Mon - sat 9.00 am to 6.00 pm
          </span>

        </div>


        {/* header right */}
        <div className='nav_right'>
          <span className='nav_right_first'>
            <i className='fa fa-mail-bulk' style={{ color: "white", width: "auto", display: "block", height: "auto", fontSize: "0.8rem" }}></i>
            &nbsp;&nbsp;test@gmail.com
          </span>
          <span className='nav_right_second'>
            {phone}
            &nbsp;&nbsp;012-34566
          </span>
        </div>
      </div>


      {/* nav header */}
      <div className='nav_menu'>
        {/* first image*/}
        <span className='nav_menu_left'>
          <img src={require("./image/logo.png")} style={{ height: "40px", width: "40px" }} />
          <span className='nav_menu_left_logoname'> &nbsp;EX SQUARED</span>
        </span>

        {/* second navs*/}
        <span className='nav_menu_center'>
          <span className='nav_menu_center_first_active'>Home</span>
          <span className='nav_menu_center_remain'>Services</span>
          <span className='nav_menu_center_remain'>WhyEx2</span>
          <span className='nav_menu_center_remain'>Portfolio</span>
          <span className='nav_menu_center_remain'>Auto</span>
          <span className='nav_menu_center_remain'>Blog</span>
          <span className='nav_menu_center_remain'>Contact</span>

        </span>

        {/* third */}

        <span className='nav_menu_end'>
          <div className='nav_menu_end_first'>
            <img src={require("./image/menu.png")} style={{ height: "30px", width: "30px" }} />
          </div>
          <div className='nav_menu_end_second'>
            <img src={require("./image/share.png")} className='share_btn' />
          </div>
        </span>


      </div>


      {/* heroic */}
      <div className='hero_img'>
        <div className='heroic_left'>
          <div className="heroic_left_build_title">BUILD YOUR BUSINESS WITH PROFESSIONAL </div>
          <span className='heroic_left_best_title'>Best Creative Team With Smart Ideas</span>
          <div className='heroic_left_wehelp_title'>We help our clients make lasting improvements their performance and realize most important business goals</div>
          <button className="button_demo" >contact us  <i className='fa fa-calendar' style={{ color: "white", display: "inline", fontSize: "0.8rem" }}></i></button>

        </div>
      </div>

      {/* heroic under */}
      <div className='heroic_under_nav'>
        <div className='heroic_under_nav_left'>Need experince business consultant</div>
        <div className='heroic_under_nav_right'>share your idea  &nbsp;<b style={{ display: "inline", width: "auto", height: "auto" }}>></b></div>
      </div>

      {/* who why */}
      <div className='whoweare'>
        {/* left */}
        <div className='whoweare_left'>
          <span  className='whoweare_title' ><hr style={{ height: "3%", width: "20%", backgroundColor: "#11a3de", }} /> &nbsp;WHO WE ARE </span>

          <span style={{ height: "10%", width: "88%", textAlign: "start", wordBreak: "break-word", fontWeight: "bold", fontSize: "1.7rem" }}>Pellentesque habitant morbi tristique senectus et </span>
          <span style={{ height: "10%", maxWidth: "80%", textAlign: "start", marginTop: "10%", fontSize: "0.9rem", lineHeight: "150%", color: "grey" }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo</span>
        </div>


        {/* right */}
        <div className='whoweare_right'>
          <span className='whyEX2' ><hr style={{ height: "3%", width: "20%", backgroundColor: "#11a3de", }} /> &nbsp;WHY EX2 </span>

          <div style={{ fontSize: "0.8rem" }}>
            <ul className='whyEX2_ul'>
              <li style={{ textAlign: "start", fontSize: "0.9rem", }}>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi</li>
              <li style={{ textAlign: "start", fontSize: "0.9rem" }}>a, ultricies in, diam. Sed arcu. Cras consequat.</li>
              <li style={{ textAlign: "start", fontSize: "0.9rem" }}>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,</li>
              <li style={{ textAlign: "start", fontSize: "0.9rem", width: "70%", lineHeight: "130%" }}>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,, euismod in, pharetra</li>
              <li style={{ textAlign: "start", fontSize: "0.9rem", marginTop: "2%" }}>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,</li>
              <li style={{ textAlign: "start", fontSize: "0.9rem" }}>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue,</li>
            </ul>
          </div>


        </div>
      </div>



      {/* services */}
      <div className='our_services'>
        <p style={{ height: "10%", display: "flex", justifyContent: "center", alignItems: "center", letterSpacing: "2px", color: "#11a3de" }}> <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} />&nbsp; WE OFFER &nbsp; <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} /> </p>
        <p style={{ height: "10%", fontWeight: "bold", fontSize: "1.7rem" }}>OUR SERVICES</p>
        <p className='our_servicespara'>Pellentesque habit fames uam, temport amet, ante. amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt </p>

        {/* boxes */}
        <div className='our_servicesfour'>
          <div className='services_box1 our_servicesbox'>
            <div style={{ height: "25%", width: "90%", backgroundColor: "#11a3de", position: 'absolute', bottom: "0px", margin: "auto", display: "flex", alignItems: "center", paddingLeft: "10%", fontSize: "0.9rem", fontWeight: "bold", color: "white" }}>Data Analysis</div>
          </div>
          <div className='services_box2 our_servicesbox'>
            <div style={{ height: "25%", width: "90%", backgroundColor: "#11a3de", position: 'absolute', bottom: "0px", margin: "auto", display: "flex", alignItems: "center", paddingLeft: "10%", fontSize: "0.9rem", fontWeight: "bold", color: "white" }}>Virtual Experince</div>
          </div>
          <div className='services_box3 our_servicesbox'>
            <div style={{ height: "25%", width: "90%", backgroundColor: "#11a3de", position: 'absolute', bottom: "0px", margin: "auto", display: "flex", alignItems: "center", paddingLeft: "10%", fontSize: "0.9rem", fontWeight: "bold", color: "white" }}>Web Development</div>
          </div>
          <div className='services_box4 our_servicesbox'>
            <div style={{ height: "25%", width: "90%", backgroundColor: "#11a3de", position: 'absolute', bottom: "0px", margin: "auto", display: "flex", alignItems: "center", paddingLeft: "10%", fontSize: "0.9rem", fontWeight: "bold", color: "white" }}>Mobile</div>
          </div>
        </div>
      </div>


      {/* explore */}
      <div style={{ height: "93%", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingBottom: "13.4%" }}>
        <p style={{ height: "10%", display: "flex", justifyContent: "center", alignItems: "center", letterSpacing: "2px", color: "#11a3de" }}> <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} />&nbsp; LOREM IPSUM DOLLAR &nbsp; <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} /> </p>
        <p style={{ height: "10%", fontWeight: "bold", fontSize: "1.7rem" }}>EXPLORE OUR CASE STUDY</p>
        <p className='explore_para'>Pellentesque habit fames uam, temport amet, ante. amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt </p>

        {/* boxes */}
        <div className='explore_three'>

          
          <div className='services_box1 explore_box' >
            <div className='explore_box_under'>
              <div style={{ textAlign: "start", height: "30%", marginTop: "15%", fontWeight: "bold" }}>DATA ANALYSIS</div>
              <div className='explore_box_under_para'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae</div>
              <button className="button_demo2" >Read More</button>
            </div>
          </div>

           <div className='services_box2 explore_box' >
            <div  className='explore_box_under'>
              <span style={{ textAlign: "start", height: "30%", marginTop: "15%", fontWeight: "bold" }}>VIRTUAL EXPERINCE</span>
              <span className='explore_box_under_para'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</span>
              <button className="button_demo2" >Read More</button>
            </div>
          </div>

          <div className='services_box4 explore_box' style={{  backgroundImage: `url(${MyBackgroundImage})` }}>
            <div  className='explore_box_under'>
              <span style={{ textAlign: "start", height: "30%", marginTop: "15%", fontWeight: "bold" }}>WEB DEVELOPMENT</span>
              <span className='explore_box_under_para'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae</span>
              <button className="button_demo2" >Read More</button>
            </div>
          </div> 
        </div>
      </div>

      {/* transparent */}

      <div className='divider' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: "70%", width: "70%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={require("./image/girl.jpg")} alt="Avatar" style={{ height: "90px", width: "90px", borderRadius: "50%", objectFit: "cover" }}></img>
          <span className='perfect_para '>Its the perfect solution for our business. Venor is the most valuable business resources we have EVER purchased. We have seen amazing result already.</span>
          <span style={{ height: "10%", marginTop: "4%", color: "white", letterSpacing: "2px", fontWeight: "bold" }}>Smith</span>
          <span style={{ height: "10%", marginTop: "0%", color: "white", fontSize: "0.8rem" }}>Project Manager - Company Name</span>
        </div>
      </div>



      {/* latest blog */}
      <div style={{ height: "90%", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingBottom: "13.4%" }}>
        <p style={{ height: "10%", display: "flex", justifyContent: "center", alignItems: "center", letterSpacing: "2px", color: "#11a3de" }}> <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} />&nbsp; TIPS & NEWS &nbsp; <hr style={{ height: "3%", width: "6%", backgroundColor: "#11a3de" }} /> </p>
        <p style={{ height: "10%", fontWeight: "bold", fontSize: "1.7rem" }}>OUR LATEST BLOG</p>
        <p className='tips_para'>Pellentesque habit fames uam, temport amet, ante. amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt </p>

        {/* boxes */}
        <div className='tips_box'>
          <div className='services_box1 servicebox_inside' >
            <div className='technologycreatebtn'>technology.create</div>
            <div style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", height: "105%", width: "90%", position: 'absolute', bottom: "-105%", margin: "auto", display: "flex", justifyContent: "center", paddingLeft: "10%", flexDirection: "column" }}>
              <span style={{ textAlign: "start", height: "30%", width: "70%", fontWeight: "bold", lineHeight: "150%", fontSize: "1.1rem" }}>Lorem ipsum dolor sit amet, consectetuer</span>
              <span style={{ textAlign: "start", height: "45%", width: "80%", color: "grey", lineHeight: "130%" }}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt kirt</span>
              <span style={{ width: "80%", height: '10%', textAlign: "start", fontSize: "0.8rem" }}>
                <i className='fa fa-clock' style={{ color: "#11a3de", width: "auto", display: "inline", height: "auto", fontSize: "0.8rem" }}></i>
                &nbsp; November 28,2020 By Lorom</span>
            </div>
          </div>

          <div className='services_box2 servicebox_inside' >
            <div className='technologycreatebtn'>technology.create</div>
            <div style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", height: "105%", width: "90%", position: 'absolute', bottom: "-105%", margin: "auto", display: "flex", justifyContent: "center", paddingLeft: "10%", flexDirection: "column" }}>
              <span style={{ textAlign: "start", height: "30%", width: "70%", fontWeight: "bold", lineHeight: "150%", fontSize: "1.1rem" }}>Lorem ipsum dolor sit amet, consectetuer</span>
              <span style={{ textAlign: "start", height: "45%", width: "80%", color: "grey", lineHeight: "130%" }}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt kirt</span>
              <span style={{ width: "80%", height: '10%', textAlign: "start", fontSize: "0.8rem" }}>
                <i className='fa fa-clock' style={{ color: "#11a3de", width: "auto", display: "inline", height: "auto", fontSize: "0.8rem" }}></i>
                &nbsp; November 28,2020 By Lorom</span>
            </div>
          </div>

          <div className='services_box4 servicebox_inside' style={{ backgroundImage: `url(${MyBackgroundImage})` }}>
            <div className='technologycreatebtn'>technology.create</div>
            <div style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", height: "105%", width: "90%", position: 'absolute', bottom: "-105%", margin: "auto", display: "flex", justifyContent: "center", paddingLeft: "10%", flexDirection: "column" }}>
              <span style={{ textAlign: "start", height: "30%", width: "70%", fontWeight: "bold", lineHeight: "150%", fontSize: "1.1rem" }}>Lorem ipsum dolor sit amet, consectetuer</span>
              <span style={{ textAlign: "start", height: "45%", width: "80%", color: "grey", lineHeight: "130%" }}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt kirt</span>
              <span style={{ width: "80%", height: '10%', textAlign: "start", fontSize: "0.8rem" }}>
                <i className='fa fa-clock' style={{ color: "#11a3de", width: "auto", display: "inline", height: "auto", fontSize: "0.8rem" }}></i>
                &nbsp; November 28,2020 By Lorom</span>
            </div>
          </div>
        </div>
      </div>
      <br /><br />


      {/* contact */}
      <div className='footer_with_img' style={{  backgroundImage: `url(${footer})` }}>
        <div className='footer_inside'>

          <div style={{ flex: 1, lineHeight: "220%", textAlign: "start" }}>

            {/* logo footer */}
            <span style={{ height: "auto", width: "70%", marginBottom: "3%", marginLeft: "0%", display: "flex", alignItems: "center", justifyContent: "start" }}>
              <img src={require("./image/logo.png")} style={{ height: "40px", width: "40px" }} />

              <span style={{ height: "auto", width: "auto", fontSize: "1.7rem", fontWeight: "bold", color: "white" }}> &nbsp;EX SQUARED</span>
            </span>
            <address style={{ fontSize: "0.9rem", color: "white", fontStyle: "normal", width: "80%", lineHeight: "200%" }}>

              <img src={require("./image/phone.png")} style={{ height: "17px", width: "17px" }} />
              &nbsp; &nbsp; 088-8765<br />
              <img src={require("./image/mail.png")} style={{ height: "17px", width: "17px" }} />&nbsp; &nbsp;test@gmail.com<br />

              <img src={require("./image/gps.png")} style={{ height: "17px", width: "17px" }} />&nbsp; &nbsp;35,Badkhal Rd, Sector 27A, Faridabad,
              Haryana 1210001<br />

              <img src={require("./image/time.png")} style={{ height: "17px", width: "17px" }} />&nbsp; &nbsp;Mon -Sat:9.00 am to 6.00 pm<br />
              {/* social div */}
              <div style={{ width: "44%", height: "16%", alignItems: "center", display: "flex", justifyContent: "space-between", marginTop: "3%" }}>
                <span style={{ backgroundColor: "#11a3de", width: "29%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={fb} style={{ height: "30px", width: "30px" }} />
                </span>
                <span style={{ backgroundColor: "#11a3de", width: "29%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={tw} style={{ height: "30px", width: "30px" }} />
                </span>
                <span style={{ backgroundColor: "#11a3de", width: "29%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={u} style={{ height: "30px", width: "30px" }} />
                </span>
              </div>
            </address>

          </div>

          <div className='footer_links'>
            <h2 style={{ display: "inline", color: "white", letterSpacing: "2px", fontSize: "1.3rem" }}>Links</h2>
            <ul className='footer_ul'>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Home</li>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Our Services</li>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Why EX2</li>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Contact</li>
            </ul>
          </div>


          <div style={{ flex: 0.5, textAlign: "start" }}>
            <h2 style={{ display: "inline", color: "white", letterSpacing: "2px", fontSize: "1.3rem", opacity: "0" }}>Links</h2>
            <ul className='footer_ul2'>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Portfolio</li>
              <li style={{ fontSize: "0.9rem", color: "white" }}>Blog</li>
              <li style={{ fontSize: "0.9rem", color: "white" }}>About Us</li>

            </ul>
          </div>

          <div className='newslettermain'>
            <h2 className='newsletter'>News Letter</h2>
            <p style={{ width: "80%", height: "50%", display: "flex", alignItems: "center", fontSize: "0.9rem", lineHeight: "160%", color: "white" }}>Recieve Latest case studies and data on email,lead gen, and gen social media along with EX2India Marketing updates and promotions.</p>
            <div className='footerinput_div'>
              <input type={"text"} style={{ width: "60%", height: "50%", paddingLeft: "2%", marginTop: "1%", backgroundColor: "#282828", borderColor: "transparent" }} placeholder={"Your mail"} />
              <button className="button_demo3" style={{ maxWidth: "30%", height: '50%', marginLeft: "2%" }}>Read More</button>
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className='last_footer'>

          EX2 Solutions India Pvt Ltd.All rights reserved.Concept by <span style={{ width: "auto", height: "auto", color: "#11a3de" }}> &nbsp;repute</span>

        </footer>
      </div>


    </div>
  );
}

export default App;
