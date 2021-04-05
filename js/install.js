let deferredInstallPrompt = null;
const installButton = document.getElementById('installButton');
if (installButton !== null) {
  installButton.addEventListener('click', installPWA);
}else{console.log("button is not found");}

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute('hidden');
}

function installPWA(evt) {
  console.log("installation request");
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);
  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
  console.log('App was installed.', evt);
}
