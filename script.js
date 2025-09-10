// Toggle menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

(function(){
  emailjs.init("5FjlumIPc2shZV4BT"); // ganti dengan user id kamu
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_jrdmpgd', 'template_wkwyduc', this)
    .then(() => {
      alert('Pesan berhasil dikirim!');
    }, (error) => {
      alert('Gagal mengirim pesan: ' + JSON.stringify(error));
    });
});