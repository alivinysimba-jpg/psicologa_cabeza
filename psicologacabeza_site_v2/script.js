// script.js - form handling with optional Formspree support
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

function encodeMailto(name, email, phone, message){
  const subject = encodeURIComponent('Consulta desde sitio web - ' + name);
  const body = encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\nTeléfono: ' + phone + '\n\nMensaje:\n' + message);
  return `mailto:${form.dataset.mailto}?subject=${subject}&body=${body}`;
}

form.addEventListener('submit', async function(e){
  e.preventDefault();
  status.textContent = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if(!name || !email || !message){
    status.textContent = 'Por favor completa los campos obligatorios.';
    return;
  }

  // If form action is set (e.g., Formspree), submit by fetch
  if(form.action && form.action.includes('formspree.io')){
    status.textContent = 'Enviando...';
    try{
      const data = new FormData(form);
      const res = await fetch(form.action, {method: 'POST', body: data, headers: {'Accept': 'application/json'}});
      if(res.ok){
        form.reset();
        status.textContent = 'Mensaje enviado. Te responderé pronto.';
      } else {
        const json = await res.json();
        status.textContent = json.error || 'Error al enviar el mensaje.';
      }
    } catch(err){
      status.textContent = 'Error de red. Intenta de nuevo.';
    }
    return;
  }

  // Fallback: open mail client
  const mailto = encodeMailto(name, email, phone, message);
  window.location.href = mailto;
  status.textContent = 'Se abrirá tu correo para enviar el mensaje. Si no se abre, envía un correo a ' + form.dataset.mailto;
});

// WhatsApp from header button (link) and form button
document.getElementById('whatsappForm').addEventListener('click', function(){
  const name = (form.name.value || 'Interesad@').trim();
  const phone = (form.phone.value || '').trim();
  const message = (form.message.value || '').trim();
  if(!form.name.value || !form.message.value){
    status.textContent = 'Indica tu nombre y un mensaje antes de enviar por WhatsApp.';
    return;
  }
  const waNumber = '34677874376';
  const text = `Hola, soy ${encodeURIComponent(name)}.%0ATeléfono: ${encodeURIComponent(phone)}%0A%0A${encodeURIComponent(message)}`;
  const url = `https://wa.me/${waNumber}?text=${text}`;
  window.open(url, '_blank');
});
