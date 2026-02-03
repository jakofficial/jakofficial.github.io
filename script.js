
    // TYPING STYLING

var typed = new Typed (".text", {
  strings: ["Frontend Developer", "Web Designer", "Freelancer"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 500,
  loop: true,
  smartBackSpace: true
}) 


    // GIVING FORM GMAIL ACCESS


  const form = document.getElementById("contactForm");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submit

    // get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // build email body
    const subject = encodeURIComponent("New Contact Message from Website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // open email app
    window.location.href =
      `mailto:jakofficial35@gmail.com?subject=${subject}&body=${body}`;
  });












  const emailBox = document.getElementById("emailBox");

  emailBox.addEventListener("click", function () {
    const email = "jakofficial35@gmail.com";
    const subject = "Website Inquiry";

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=" + encodeURIComponent(email) +
      "&su=" + encodeURIComponent(subject);

    window.open(gmailURL, "_blank");
  });