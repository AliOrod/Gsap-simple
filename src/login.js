document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // گرفتن اطلاعات ورودی
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // چک کردن لاگین موفق (مثلا با استفاده از شرط ساده)
    if (username === "user@gmail.com" && password === "pass") {
      // افزودن کلاس زوم به عکس
      document.getElementById("image").classList.add("zoomed");

      // انتقال به صفحه جدید بعد از یک تأخیر کوتاه برای نمایش افکت
      setTimeout(function () {
        window.location.href = "./newpage.html";
      }, 2000);
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  });
