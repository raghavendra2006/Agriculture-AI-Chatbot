document.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded');
  const messages = document.getElementById('messages');
  const input = document.getElementById('msg');
  const sendBtn = document.getElementById('sendBtn');

  function addMessage(who, text) {
    const el = document.createElement('div');
    el.className = 'message ' + who;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    el.appendChild(bubble);
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  async function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;
    addMessage('user', msg);
    input.value = '';
    sendBtn.disabled = true;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: msg})
      });
      if (!res.ok) throw new Error('Network response not ok');
      const data = await res.json();
      addMessage('bot', data.response || 'No response');
    } catch (err) {
      console.error(err);
      addMessage('bot', 'Error connecting to server');
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  }

  sendBtn && sendBtn.addEventListener('click', sendMessage);
  input && input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // IMAGE ANALYSIS FEATURE
  const imageForm = document.getElementById('image-form');
  if (imageForm) {
    imageForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const fileInput = document.getElementById('image-input');
      const resultDiv = document.getElementById('image-result');
      if (!fileInput.files.length) {
        resultDiv.textContent = 'Please select an image!';
        return;
      }
      const formData = new FormData();
      formData.append('image', fileInput.files[0]);
      resultDiv.textContent = 'Analyzing...';
      try {
        const res = await fetch('/api/image-analyze', {method:'POST', body:formData});
        const data = await res.json();
        if (data.label && data.advice) {
          resultDiv.innerHTML = `<b>Diagnosis:</b> ${data.label} <br/><b>Advice:</b> ${data.advice}`;
        } else if(data.error) {
          resultDiv.textContent = 'Invalid image or format!';
        } else {
          resultDiv.textContent = 'No result.';
        }
      } catch (err) {
        resultDiv.textContent = 'Error analyzing image.';
      }
    });
  }
});

