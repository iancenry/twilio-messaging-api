let messageFrom = document.getElementById('messageForm');

const sendMessage = async (e) => {
  e.preventDefault();

  const sender = document.getElementById('sender');
  const message = document.getElementById('message');

  const formData = {
    sender: sender.value,
    message: message.value,
  };

  if (sender.value === '' || message.value === '') {
    // throw error
    alert('Ensure you input a value in both fields!');
  } else {
    const response = await fetch('http://localhost:5000/api/message/send', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const result = await response.json();
    console.log(result);
  }

  sender.value = '';
  message.value = '';
};
messageFrom.addEventListener('submit', sendMessage);
