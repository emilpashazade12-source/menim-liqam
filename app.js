// --- SƏHİFƏLƏR ARASI İDARƏETMƏ ---
function navigateTo(viewName) {
  const views = ['dashboard', 'squad', 'league'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.add('hidden');
  });

  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) activeView.classList.remove('hidden');
}

// --- AUTH MODAL TAB SWAP ---
function switchAuthTab(tab) {
  const loginBox = document.getElementById('login-box');
  const signupBox = document.getElementById('signup-box');
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');

  if (tab === 'login') {
    loginBox.classList.remove('hidden');
    signupBox.classList.add('hidden');
    tabLogin.className = "px-5 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-white transition-all";
    tabSignup.className = "px-5 py-2 text-xs font-semibold rounded-lg text-slate-400 hover:text-white transition-all";
  } else {
    loginBox.classList.add('hidden');
    signupBox.classList.remove('hidden');
    tabSignup.className = "px-5 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-white transition-all";
    tabLogin.className = "px-5 py-2 text-xs font-semibold rounded-lg text-slate-400 hover:text-white transition-all";
  }
}

// --- LOGIN & SIGNUP ACTIONS ---
function handleLogin(e) {
  e.preventDefault();
  const authScreen = document.getElementById('auth-screen');
  authScreen.classList.add('hidden');
}

function handleSignup(e) {
  e.preventDefault();
  const nameInput = document.getElementById('signup-name').value;
  if(nameInput) {
    document.getElementById('user-display-name').innerText = nameInput;
    document.getElementById('dash-user-name').innerText = nameInput.split(' ')[0];
  }
  document.getElementById('auth-screen').classList.add('hidden');
}

function handleGoogleAuth() {
  document.getElementById('auth-screen').classList.add('hidden');
}

// --- DƏVƏT KODUNU KOPYALAMAQ ---
function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert(`Dəvət kodu kopyalandı: ${code}`);
}

// --- MÜRACİƏTLƏRİ QƏBUL / RƏDD ETMƏK ---
function approvePlayer(btn) {
  const parent = btn.closest('.bg-slate-950');
  if (parent) {
    parent.style.opacity = '0.5';
    btn.innerText = "Qəbul olundu";
    btn.disabled = true;
  }
}

function declinePlayer(btn) {
  const parent = btn.closest('.bg-slate-950');
  if (parent) parent.remove();
}

// --- DƏVƏT KODU İLƏ DAXİL OLMAQ ---
function handleJoinCode(e) {
  e.preventDefault();
  const code = document.getElementById('invite-code-input').value;
  if(code.toUpperCase().startsWith('TM')) {
    alert(`Komandaya qoşulmaq üçün müraciət göndərildi (${code})`);
    navigateTo('squad');
  } else if(code.toUpperCase().startsWith('LG')) {
    alert(`Liqaya qoşulmaq üçün müraciət göndərildi (${code})`);
    navigateTo('league');
  } else {
    alert("Keçərsiz dəvət kodu!");
  }
}
