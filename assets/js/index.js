function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

setInterval(() => {

  if (document.getElementById('open-ar-dialog-btn') && !document.getElementById('open-pnl-send-to-dealer')) {
    const pnl_send_button = document.createElement("button");
    pnl_send_button.classList.add('MuiButtonBase-root', 'MuiButton-root', 'MuiButton-outlined', 'MuiButton-outlinedPrimary');
    pnl_send_button.type = 'button';
    pnl_send_button.id = 'open-pnl-send-to-dealer';
    pnl_send_button.innerHTML = `<span class="MuiButton-label"><span class="MuiButton-startIcon MuiButton-iconSizeMedium"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg></span>Send to dealer</span><span class="MuiTouchRipple-root"></span>`;
    pnl_send_button.style.backgroundColor = 'white';
    pnl_send_button.style.width = '100%';
    pnl_send_button.onclick = () => {
      sendToDealerStep = 0;
    };
    const button_wrapper = document.createElement('div');
    button_wrapper.style.position = 'relative';
    button_wrapper.style.minWidth = '12rem';
    button_wrapper.appendChild(pnl_send_button);
    document.getElementById('open-ar-dialog-btn').parentElement.parentElement.appendChild(button_wrapper);
  }

  if (document.getElementById('change-location-btn')) {
    document.getElementById('change-location-btn').parentElement.parentElement.parentElement.style.display = 'none';
  }

}, 800);


// Send to dealer step by step pipeline
let sendToDealerStep = -1;

setInterval(() => {
  if (sendToDealerStep < 0 || sendToDealerStep > 3) return;
  if (sendToDealerStep === 0) {
    if (!document.getElementById('open-share-dialog-btn')) return;
    document.getElementById('open-share-dialog-btn').click();
    sendToDealerStep = 1;
  }
  if (sendToDealerStep === 1) {
    const xpath = "//p[text()='Email or Mobile Phone']";
    const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (!matchingElement) return;
    const b = matchingElement.parentElement.parentElement;
    if (b.disabled) return;
    b.click();
    sendToDealerStep = 2;
  }
  if (sendToDealerStep === 2) {
    const e = document.querySelector("input[name='recipient']");
    if (!e) return;

    // const dealer_address = 'test@mechstack.dev';
    const dealer_address = 'pnlstoragebuildings@yahoo.com';
    setNativeValue(e, dealer_address);

    e.parentElement.parentElement.style.height = '0';
    e.parentElement.parentElement.style.left = '-10000px';
    document.querySelector('.MuiGrid-justify-content-xs-center').style.display = 'none';
    document.querySelector("textarea[name='message']").required = true;
    document.querySelector("textarea[name='message']").placeholder = 'Your phone or email';

    const shareButton = document.evaluate("//div[contains(@class, 'MuiDialogActions-root')]//span[text()='Share']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    shareButton.innerText = 'Send';
    shareButton.parentElement.onclick = () => {
      sendToDealerStep = -1;
    };

    sendToDealerStep = 3;
  }
  if (sendToDealerStep === 3) {
    if (document.querySelector("textarea[name='message']").innerHTML.length < 3) {
      const e = document.evaluate("//div[contains(@class, 'MuiDialogActions-root')]//span[text()='Send']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement;
      e.disabled = true;
      e.classList.add('Mui-disabled');
    }
    else {
      const e = document.evaluate("//div[contains(@class, 'MuiDialogActions-root')]//span[text()='Send']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.parentElement;
      e.disabled = false;
      e.classList.remove('Mui-disabled');
    }
  }
}, 200);
