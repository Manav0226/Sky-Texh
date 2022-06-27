const firebaseConfig = {
    apiKey: "AIzaSyD9BWh5ujjbNJZOErfaknCVYsC6tBCqazM",
  authDomain: "sky-tech-fbb25.firebaseapp.com",
  databaseURL: "https://sky-tech-fbb25-default-rtdb.firebaseio.com",
  projectId: "sky-tech-fbb25",
  storageBucket: "sky-tech-fbb25.appspot.com",
  messagingSenderId: "19581909060",
  appId: "1:19581909060:web:867393bb38f5e32e71a411"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var last = getElementVal("last");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var address1 = getElementVal("address1");
    var address2 = getElementVal("address2");
    var city = getElementVal("city");
    var state = getElementVal("state");
    var zip = getElementVal("zip");
    var country = getElementVal("country");
    var date = getElementVal("date");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, last, emailid, phone, address1, address2, city, state, zip, country, date, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, last, emailid, phone, address1, address2, city, state, zip, country, date, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      last: last,
      emailid: emailid,
      phone: phone,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      country: country,
      date: date,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  const submit = document.getElementById("submit");
  const input = document.getElementById("name");

  input.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submit.disabled = false;

    if(value === ""){
      submit.disabled = true;
    }
  })