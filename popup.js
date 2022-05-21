let addBionic = document.getElementById("bionic");

function bionic() {

  function wrapString(str) {
    const output = [];
    str.split(' ')
      .forEach(word => {
          const newWord = [];
          for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            const wrapper = document.createElement('span');
            wrapper.dataset.content = wrapper.innerHTML = letter;
            if ((i + 1) <= ((word.length / 2) + 1) && word.length > 2) {
                wrapper.style.fontWeight = '600';
            } else {
              wrapper.style.fontWeight = '400';
            }
            newWord.push(wrapper.outerHTML);
          }
          output.push(newWord.join(''));
      });
    return output.join(' ');
  }

  const spans = document.querySelectorAll('span');
  spans.forEach(el => {
      el.innerHTML = wrapString(el.innerText)
      el.style.lineHeight = '2';
      el.style.fontFamily = '"Helvetica", "Arial", sans-serif';
  });
  
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(el => {
    el.innerHTML = wrapString(el.innerText)
    el.style.lineHeight = '2';
    el.style.fontFamily = '"Helvetica", "Arial", sans-serif';
  })
  
  const asides = document.querySelectorAll('aside');
  asides.forEach(el => {
    el.innerHTML = wrapString(el.innerText)
    el.style.lineHeight = '2';
    el.style.fontFamily = '"Helvetica", "Arial", sans-serif';
  })
  
  const labels = document.querySelectorAll('label');
  labels.forEach(el => {
    el.innerHTML = wrapString(el.innerText)
    el.style.lineHeight = '2';
    el.style.fontFamily = '"Helvetica", "Arial", sans-serif';
  })
};

addBionic.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
console.log(tab);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: bionic,
  });
});

