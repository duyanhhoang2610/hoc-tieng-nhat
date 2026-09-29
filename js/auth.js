// Quản lý Dữ liệu Nguời dùng bằng LocalStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// 1. Đăng ký tài khoản
function handleRegister(e) {
  e.preventDefault();
  const username = document.getElementById('regUser').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPass').value;

  const users = getUsers();
  if (users[username]) {
    alert("⚠️ Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác.");
    return;
  }

  users[username] = { email, password };
  saveUsers(users);

  alert("🎉 Đăng ký tài khoản thành công! Trang web sẽ làm mới (reload) lại.");
  window.location.reload(); // Reload trang khi đăng ký thành công
}

// 2. Đăng nhập
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;

  const users = getUsers();
  // Cho phép tài khoản Demo hoặc tài khoản đã đăng ký trong localStorage
  if ((username === 'demo' && password === '123') || (users[username] && users[username].password === password)) {
    localStorage.setItem('currentUser', username);
    checkAuth();
  } else {
    alert("❌ Tài khoản hoặc mật khẩu không chính xác!");
  }
}

// 3. Quên mật khẩu - Gửi mã OTP qua Email
let generatedOTP = null;
let resetUser = null;

function sendOTP(e) {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim();
  const users = getUsers();
  
  const foundUser = Object.keys(users).find(u => users[u].email === email);
  if (!foundUser) {
    alert("⚠️ Email này chưa được đăng ký trong hệ thống!");
    return;
  }

  resetUser = foundUser;
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Giả lập gửi Email xác nhận OTP
  alert(`📩 [MÔ PHỎNG EMAIL SENT]\nMã xác thực OTP gửi tới email (${email}) của bạn là: ${generatedOTP}`);
  
  document.getElementById('otpStep').style.display = 'block';
  document.getElementById('requestOtpForm').style.display = 'none';
}

function verifyOTPAndReset(e) {
  e.preventDefault();
  const inputOTP = document.getElementById('otpInput').value.trim();
  const newPass = document.getElementById('newPassInput').value;

  if (inputOTP !== generatedOTP) {
    alert("❌ Mã OTP không chính xác!");
    return;
  }

  const users = getUsers();
  users[resetUser].password = newPass;
  saveUsers(users);

  alert("✅ Đổi mật khẩu thành công! Vui lòng đăng nhập lại.");
  
  // Reset form
  document.getElementById('otpStep').style.display = 'none';
  document.getElementById('requestOtpForm').style.display = 'block';
  switchAuthForm('login');
}

// 4. Đăng xuất
function logout() {
  localStorage.removeItem('currentUser');
  checkAuth();
}

// 5. Kiểm tra trạng thái Đăng nhập
function checkAuth() {
  const user = localStorage.getItem('currentUser');
  const authSec = document.getElementById('authSection');
  const appSec = document.getElementById('appSection');
  const userNav = document.getElementById('userNav');

  if (user) {
    authSec.style.display = 'none';
    appSec.style.display = 'block';
    userNav.innerHTML = `
      <span>👤 Xin chào, <strong>${user}</strong></span>
      <button class="btn-logout" onclick="logout()">Đăng xuất</button>
    `;
    initApp(); // Khởi tạo ứng dụng học tập
  } else {
    authSec.style.display = 'flex';
    appSec.style.display = 'none';
    userNav.innerHTML = '';
  }
}
