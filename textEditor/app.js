document.getElementById('heading').innerHTML = localStorage['title'] || 'Write here!' //default text
document.getElementById('content').innerHTML = localStorage['text'] || 'This text will be saved every second'; // default text

setInterval(function(){
  localStorage['title'] = document.getElementById('heading').innerHTML;
  localStorage['text'] = document.getElementById('content').innerHTML;
}, 1000);
