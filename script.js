function generateCard() {
  const name = document.getElementById("companyName").value;
  const personName = document.getElementById("personName").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("contact").value;
  const phone = document.getElementById("phone").value;
  const bgColor = document.getElementById("bgColor").value;
  const fontColor = document.getElementById("fontColor").value;
  const logoFile = document.getElementById("logoInput").files[0];

  if (!name || !address || !email || !phone || !personName) {
    alert("Please fill in all fields!");
    return;
  }

  if (logoFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("cardLogo").src = e.target.result;
    };
    reader.readAsDataURL(logoFile);
  }

  document.getElementById("cardCompanyName").textContent = name;
  document.getElementById("cardPersonName").textContent = personName;
  document.getElementById("cardAddress").textContent = address;
  document.getElementById("cardContact").textContent = ` ${email} |  ${phone}`;

  const card = document.getElementById("card");
  card.style.setProperty('--card-bg', bgColor);
  card.style.setProperty('--card-font', fontColor);

  document.getElementById("cardOutput").style.display = "block";
}

