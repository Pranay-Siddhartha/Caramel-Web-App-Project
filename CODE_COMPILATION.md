## Website Code Compilation

This document compiles all HTML, CSS, and JavaScript files from the project for reporting purposes.

### HTML

#### index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Caramel</title>
    <link rel="icon" href="Brand Logo.png" type="image/x-icon" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link href='https://fonts.googleapis.com/css?family=Roboto Slab:400,700|Pacifico' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <style>
        html,
        body {
            overflow-x: hidden;
            max-width: 100vw;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Roboto Slab', serif;
            margin: 0;
            background: linear-gradient(135deg, #f8e8ff 0%, #ffe5e0 100%);
        }

        .header-bar {
            width: 100vw;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 30px 40px 0 30px;
            z-index: 20;
        }

        .header-bar .logo {
            max-width: 220px;
            height: auto;
            filter: drop-shadow(0 2px 8px #66339955);
            animation: floatLogo 3s ease-in-out infinite;
        }

        @keyframes floatLogo {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        .header-bar .nav-btns {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .header-bar .nav-btn,
        .login-btn {
            padding: 12px 36px;
            font-size: 1.1em;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 2px 8px #66339933;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            display: inline-block;
            margin-left: 8px;
        }

        .header-bar .nav-btn:hover,
        .login-btn:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.07);
            box-shadow: 0 4px 16px #66339955;
        }

        .user-display {

            font-weight: bold;
            margin-left: 8px;
            color: #663399;

        }

        @media (max-width: 767px) {
            .header-bar {
                flex-direction: column;
                align-items: center;
                padding: 20px 0 0 0;
            }

            .header-bar .nav-btn,
            .login-btn {
                margin-top: 16px;
                width: 80vw;
                font-size: 1.2em;
            }
        }

        .main {
            max-width: 100vw;
            overflow-x: hidden;
            position: relative;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, #66339999 0%, #e0c3fc55 100%);
            z-index: 1;
            border-radius: 0 0 40px 40px;
        }

        .WelcomePop {
            position: relative;
            z-index: 2;
        }

        .WelcomePop p {
            font-size: 6em;
            margin: 54px 0 70px 0;
            color: #fff;
            text-shadow: 0 4px 24px #663399, 0 2px 8px #e0c3fc;
            font-weight: bold;
            font-family: 'Pacifico', cursive;
            letter-spacing: 2px;
        }

        .Direct {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .Direct button {
            padding: 28px 70px;
            font-size: 2.2em;
            border: none;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 2px 8px #66339933;
            transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
            font-family: 'Roboto Slab', serif;
        }

        .Direct button:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.07) rotate(-2deg);
            box-shadow: 0 4px 16px #66339955;
        }

        .parallax {
            min-height: 400px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 60px 20px;
            color: #3b3232;
            border-radius: 40px;
            margin: 40px 0;
            box-shadow: 0 4px 24px #66339922;
            will-change: background-position;
            position: relative;
            overflow: hidden;
        }

        .parallax::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, #fff8 0%, #e0c3fc33 100%);
            z-index: 0;
            border-radius: 40px;
        }

        .CaramelIntro {
            background: linear-gradient(120deg, #e0c3fc 0%, #f8e8ff 100%);
            border: 2px solid #663399;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            border-radius: 40px;
            box-shadow: 0 2px 16px #e0c3fc55;
            position: relative;
            z-index: 1;
        }

        .CaramelIntro img {
            border-radius: 200px;
            max-width: 90%;
            height: auto;
            box-shadow: 0 2px 16px #66339933;
            transition: transform 0.3s;
        }

        .CaramelIntro img:hover {
            transform: scale(1.05) rotate(-2deg);
        }

        .CaramelIntro p {
            font-size: 1.3em;
            text-align: center;
            color: #663399;
            font-weight: 500;
        }

        .CaramelIntro a {
            font-weight: lighter;
            color: #3b3232;
        }

        .footer {
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            padding: 60px 20px 30px 20px;
            text-align: center;
            border-radius: 40px 40px 0 0;
            box-shadow: 0 -2px 16px #66339933;
            margin-top: 60px;
        }

        .footer img {
            max-width: 100%;
            height: auto;
            margin: 20px auto;
            filter: drop-shadow(0 2px 8px #e0c3fc);
        }

        .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 40px;
        }

        .footer-social {
            margin: 24px 0 0 0;
        }

        .footer-social a {
            color: #fff;
            margin: 0 12px;
            font-size: 2em;
            transition: color 0.2s;
        }

        .footer-social a:hover {
            color: #e0c3fc;
        }

        @media (min-width: 768px) {
            .CaramelIntro {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }

            .CaramelIntro p {
                flex: 1;
                padding: 60px;
            }

            .CaramelIntro img {
                flex: 1;
                max-width: 300px;
            }

            .footer-container {
                flex-direction: row;
                padding: 0 100px;
            }

            .Direct button {
                font-size: 1.2em;
            }
        }

        @media (max-width: 767px) {
            .CaramelIntro p {
                padding: 20px;
            }

            .parallax {
                min-height: 250px;
            }

            .Direct button {
                width: 80%;
            }
        }
    </style>
</head>

<body>
    <div class="header-bar">
        <a href="index.html">
        <img src="Caramel-removebg-preview.png" alt="Caramel Logo" class="logo">
        </a>
        <div class="nav-btns">
            <a href="login.html" id="login-btn" class="nav-btn">Login</a>
            <span id="user-display" class="user-display"></span>
            <button id="logout-btn" class="nav-btn" style="display:none;">Logout</button>
        </div>
    </div>
    <div class="main"
        style="background-image: url('desert food.jpg'); min-height: 100vh; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; position:relative; border-radius: 0 0 40px 40px;">
        <div class="hero-overlay"></div>
        <div class="WelcomePop" data-aos="fade-down" data-aos-delay="200"
            style="width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <p
                style="font-size: 5em; margin: 0 0 64px 0; color: #fff; text-shadow: 0 4px 24px #663399, 0 2px 8px #e0c3fc; font-weight: bold; text-align: center;">
                More than a popsicle.</p>
            <div class="Direct" data-aos="fade-up" data-aos-delay="400" style="margin-top: 0;">
                <button type="button" onclick="window.location.href='orders.html'">Order Now</button>
                <button type="button" onclick="window.location.href='dineout.html'">Dine Out</button>
                <button type="button" onclick="window.location.href='chatbot.html'">Caramel taste finder</button>
            </div>
        </div>
    </div>

    <section class="parallax" style="background-image: url('dessert food2.jpg');">
        <h1 class="CaramelIntro">
            <p data-aos="fade-left" data-aos-delay="600">
                About Caramel.<br><br>
                <a>Caramel is a class-leading bakery producer providing a diverse range of sweet delicacies renowned by
                    the best cuisines around the world.</a>
            </p>
            <img src="Caramel.png" alt="Caramel" data-aos="fade-right" data-aos-delay="800">
        </h1>
    </section>

    <section class="parallax" style="background-image: url('desertbake.jpg');">
        <h1 class="CaramelIntro">
            <p data-aos="fade-left" data-aos-delay="700">
                Masters Behind the Art<br><br>
                <a>Our experienced handpicked bakers have continued to deliver the perfect taste with their years of
                    relentless perseverance and unwavered skill here at Caramel.</a>
            </p>
            <img src="bakers.jpg" alt="Bakers" data-aos="fade-right" data-aos-delay="900">
        </h1>
    </section>

    <section class="parallax" style="background-image: url('donuts.webp');">
        <h1 class="CaramelIntro">
            <p data-aos="fade-left" data-aos-delay="800">
                Caramel. Around the World<br><br>
                <a>Originating from Russia and serving over 72 countries, Caramel was able to establish itself as a
                    global-level flagship bakery producer revered by people from different ethnicities.</a>
            </p>
            <img src="WorldMap purp.png" alt="World Map" data-aos="fade-right" data-aos-delay="1000">
        </h1>
    </section>

    <div class="footer">
        <div class="footer-container">
            <img src="Brand Logo.png" alt="Brand Logo" width="200px">
            <img src="Caramel-removebg-preview.png" alt="Caramel Text Logo" width="200px">
        </div>
        <div class="footer-social">
            <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
        <p style="margin-top:24px;">Caramel and Caramel logo are registered trademarks of Caramel & Co.</p>
        <p>Established 2001. All rights reserved.</p>
    </div>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({
            duration: 400
        });

        // Smooth parallax effect for all .parallax sections
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateParallax() {
            var parallaxEls = document.querySelectorAll('.parallax');
            parallaxEls.forEach(function (el) {
                var speed = 0.4;
                var offset = el.offsetTop;
                var targetY = (lastScrollY - offset) * speed;
                var currentY = parseFloat(el.dataset.bgY) || 0;
                var newY = currentY + (targetY - currentY) * 0.15;
                el.style.backgroundPosition = 'center ' + newY + 'px';
                el.dataset.bgY = newY;
            });
            ticking = false;
        }

        function onScrollOrResize() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);
        document.addEventListener('DOMContentLoaded', updateParallax);

        document.addEventListener('DOMContentLoaded', function () {
            const loginBtn = document.getElementById('login-btn');
            const userDisplay = document.getElementById('user-display');
            const logoutBtn = document.getElementById('logout-btn');
            const username = localStorage.getItem('username');
            if (username) {
                if (loginBtn) loginBtn.style.display = 'none';
                if (userDisplay) {
                    userDisplay.textContent = "Hi, " + username;
                    userDisplay.style.display = 'inline-block';
                }
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
            } else {
                if (userDisplay) userDisplay.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'none';
                if (loginBtn) loginBtn.style.display = 'inline-block';
            }
            if (logoutBtn) {
                logoutBtn.onclick = function () {
                    localStorage.removeItem('username');
                    window.location.reload();
                }
            }
        });
    </script>
</body>

</html>
```

#### chatbot.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Caramel Taste Chatbot</title>
    <link rel="icon" href="Brand Logo.png" type="image/x-icon" />
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f8e8ff, #ffe8f8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }

        .logo {
            width: 120px;
            margin-bottom: 20px;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
            }
        }

        .chat-container {
            width: 90%;
            max-width: 600px;
            background: #ffffffd9;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            padding: 30px;
            backdrop-filter: blur(10px);
        }

        .chat-log {
            max-height: 300px;
            overflow-y: auto;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 10px;
            margin-bottom: 20px;
            background: #fafafa;
        }

        .chat-log p {
            margin: 10px 0;
        }

        .input-box {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .text-input-box {
            display: flex;
        }

        input[type="text"] {
            flex: 1;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin-right: 10px;
            font-size: 1em;
        }

        button {
            padding: 12px 20px;
            border: none;
            background-color: #663399;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #5a2d85;
        }

        .option-buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        #order-btn {
            display: none;
            margin-top: 15px;
            text-align: center;
        }

        #order-btn a {
            display: inline-block;
            background-color: #ff69b4;
            color: white;
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        #order-btn a:hover {
            background-color: #e0559f;
        }
    </style>
</head>

<body>

    <a href="index.html">
        <img src="Caramel-removebg-preview.png" alt="Caramel Logo" class="logo" />
    </a>

    <div class="chat-container">
        <div class="chat-log" id="chat-log">
            <p><strong>Caramel Bot:</strong> Hi! Tell me what flavors or desserts you love, and I’ll suggest something
                from
                Caramel for you!</p>
        </div>
        <div class="input-box">
            <div class="text-input-box">
                <input type="text" id="user-input" placeholder="I like chocolate, creamy stuff..." />
                <button onclick="handleUserInput()">Send</button>
            </div>
            <div class="option-buttons" id="option-buttons" style="display: none;">
                <button onclick="askAnother()">Yes</button>
                <button onclick="endChat()">No</button>
            </div>
            <div id="order-btn">
                <a href="orders.html">Go to Orders Page</a>
            </div>
        </div>
    </div>

    <script>
        const chatLog = document.getElementById("chat-log");

        function scrollToBottom() {
            chatLog.scrollTop = chatLog.scrollHeight;
        }

        document.getElementById("user-input").addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                handleUserInput();
            }
        });

        function handleUserInput() {
            const input = document.getElementById('user-input');
            const userText = input.value.trim();
            if (!userText) return;

            chatLog.innerHTML += `<p><strong>You:</strong> ${userText}</p>`;
            scrollToBottom();

            const text = userText.toLowerCase();
            let response = "";

            const keywords = ["chocolate", "caramel", "nut", "coffee", "berry", "cream", "lemon", "citrus", "orange", "custard", "fruity", "ice cream", "frozen", "cake", "birthday", "mocha"];
            const matched = keywords.filter(k => text.includes(k));

            if (matched.length >= 2) {
                if (text.includes("caramel") && text.includes("chocolate")) {
                    response = "How about our Caramel Choco Crunch Tart? 🍫🍯";
                } else if (text.includes("nut") && text.includes("chocolate")) {
                    response = "Our Nutty Chocolate Brownie is a perfect match! 🥜🍫";
                } else if (text.includes("coffee") && text.includes("caramel")) {
                    response = "You’ll love our Caramel Macchiato Cake! ☕🍯";
                } else if (text.includes("berry") && text.includes("cream")) {
                    response = "Berry Cream Parfait is made for you! 🍓🍮";
                } else if (text.includes("lemon") && text.includes("berry")) {
                    response = "Try our Lemon Blueberry Cheesecake! 🍋🫐";
                } else {
                    response = "Sorry, we don’t have products with that combination.";
                }

            } else if (matched.length === 1) {
                if (text.includes("chocolate")) {
                    response = "You might love our Double Chocolate Fudge Cake or Belgian Choco Truffle! 🍫";
                } else if (text.includes("fruity") || text.includes("berry")) {
                    response = "Try our Mixed Berry Tart or Mango Passion Cheesecake! 🍓🥭";
                } else if (text.includes("cream") || text.includes("custard")) {
                    response = "Vanilla Custard Cream Roll and Creamy Éclair are perfect for you! 🍮";
                } else if (text.includes("nut") || text.includes("caramel")) {
                    response = "Check out our Caramel Nut Fudge Brownie and Walnut Torte! 🥜";
                } else if (text.includes("coffee") || text.includes("mocha")) {
                    response = "You’ll enjoy our Mocha Coffee Layer Cake or Espresso Cream Puffs! ☕";
                } else if (text.includes("citrus") || text.includes("lemon") || text.includes("orange")) {
                    response = "Try our Lemon Zest Bars or Orange Blossom Tart for a tangy treat! 🍋🍊";
                } else if (text.includes("ice cream") || text.includes("frozen")) {
                    response = "How about our Pistachio Ice Cream Sandwiches or Frozen Strawberry Delight? 🍦";
                } else if (text.includes("cake") || text.includes("birthday")) {
                    response = "Explore our Signature Birthday Cakes and Custom Layered Cakes! 🎂";
                } else {
                    response = "Sorry, we don’t have that flavor in our menu.";
                }

            } else {
                response = "Sorry, we don’t have products with that combination.";
            }

            chatLog.innerHTML += `<p><strong>Caramel Bot:</strong> ${response}</p>`;
            scrollToBottom();

            if (!response.startsWith("Sorry")) {
                chatLog.innerHTML += `<p><strong>Caramel Bot:</strong> Wanna know another product?</p>`;
                document.getElementById('option-buttons').style.display = 'flex';
                input.disabled = true;
                scrollToBottom();
            }
        }

        function askAnother() {
            chatLog.innerHTML += `<p><strong>Caramel Bot:</strong> Sure! Tell me another flavor you like. 😊</p>`;
            document.getElementById('option-buttons').style.display = 'none';
            const input = document.getElementById('user-input');
            input.disabled = false;
            input.value = "";
            input.focus();
            scrollToBottom();
        }

        function endChat() {
            chatLog.innerHTML += `<p><strong>Caramel Bot:</strong> Thanks for chatting! Hope you find your perfect treat. 🎉</p>`;
            document.getElementById('option-buttons').style.display = 'none';
            document.getElementById('order-btn').style.display = 'block';
            scrollToBottom();
        }
    </script>

</body>

</html>
```

#### Checkout.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Checkout | Caramel</title>
    <link rel="icon" href="Brand Logo.png" type="image/x-icon" />
    <link href='https://fonts.googleapis.com/css?family=Roboto Slab' rel='stylesheet'>
    <style>
        body {
            font-family: 'Roboto Slab', serif;
            background: linear-gradient(120deg, #f8e8ff 0%, #ffe5e0 100%);
            margin: 0;
            min-height: 100vh;
        }

        .header-bar {
            width: 100vw;
            max-width: 100vw;
            box-sizing: border-box;
            position: sticky;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 40px 0 30px;
            z-index: 20;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(6px);
            box-shadow: 0 2px 16px #e0c3fc33;
        }

        .header-bar .logo {
            max-width: 180px;
            height: auto;
            filter: drop-shadow(0 2px 8px #66339955);
        }

        .nav-btns {
            display: flex;
            gap: 22px;
            align-items: center;
        }

        .nav-btn {
            padding: 10px 30px;
            font-size: 1em;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 2px 8px #66339933;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s, transform 0.2s;
            display: inline-block;
        }

        .nav-btn:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.07);
        }

        .user-display {
            font-weight: bold;
            margin-left: 8px;
            color: #663399;
        }

        .checkout-container {
            background: #fff;
            max-width: 500px;
            margin: 60px auto 0 auto;
            border-radius: 24px;
            box-shadow: 0 4px 24px #e0c3fc55;
            padding: 36px 28px 28px 28px;
        }

        .checkout-title {
            color: #663399;
            font-size: 2.2em;
            font-weight: bold;
            text-align: center;
            margin-bottom: 24px;
        }

        .cart-summary {
            margin-bottom: 24px;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            border-bottom: 1px solid #e0c3fc;
            padding-bottom: 8px;
        }

        .cart-item-name {
            color: #663399;
            font-weight: bold;
        }

        .cart-item-qty {
            color: #3b3232;
            font-size: 0.95em;
        }

        .cart-item-total {
            color: #3b3232;
            font-weight: bold;
        }

        .cart-total {
            text-align: right;
            color: #663399;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 18px;
        }

        .checkout-form label {
            display: block;
            margin-top: 16px;
            color: #663399;
            font-weight: bold;
        }

        .checkout-form input,
        .checkout-form textarea {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            border: 1px solid #e0c3fc;
            border-radius: 8px;
            font-size: 1em;
        }

        .checkout-form button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            margin-top: 24px;
            transition: background 0.3s, transform 0.2s;
        }

        .checkout-form button:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.04);
        }

        .success-message {
            color: #27ae60;
            font-weight: bold;
            text-align: center;
            margin-top: 18px;
        }
    </style>
</head>

<body>
    <div class="header-bar">
        <img src="Caramel-removebg-preview.png" alt="Caramel Logo" class="logo">
        <div class="nav-btns">
            <a href="login.html" id="login-btn" class="nav-btn">Login</a>
            <span id="user-display" class="user-display"></span>
            <button id="logout-btn" class="nav-btn" style="display:none;">Logout</button>
        </div>
    </div>
    <div class="checkout-container">
        <div class="checkout-title">Checkout</div>
        <div class="cart-summary" id="cart-summary"></div>
        <form class="checkout-form" id="checkout-form">
            <label for="name">Name</label>
            <input type="text" id="name" required>
            <label for="address">Address</label>
            <textarea id="address" rows="3" required></textarea>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" required pattern="[0-9\-+\s()]{7,}">
            <button type="submit">Place Order</button>
        </form>
        <div class="success-message" id="success-message" style="display:none;">
            Thank you for your order!<br>
            <a href="index.html" id="home-btn"
                style="display:inline-block;margin-top:18px;padding:10px 32px;background:linear-gradient(90deg,#663399 60%,#e0c3fc 100%);color:#fff;border:none;border-radius:20px;font-size:1.1em;font-weight:bold;text-decoration:none;transition:background 0.3s,transform 0.2s;">Home</a>
        </div>
    </div>
    <script>
        // Header login/logout logic
        document.addEventListener('DOMContentLoaded', function () {
            const loginBtn = document.getElementById('login-btn');
            const userDisplay = document.getElementById('user-display');
            const logoutBtn = document.getElementById('logout-btn');
            const username = localStorage.getItem('username');
            if (username) {
                if (loginBtn) loginBtn.style.display = 'none';
                if (userDisplay) {
                    userDisplay.textContent = "Hi, " + username;
                    userDisplay.style.display = 'inline-block';
                    userDisplay.style.color = '#663399';
                }
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
            } else {
                if (userDisplay) userDisplay.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'none';
                if (loginBtn) loginBtn.style.display = 'inline-block';
            }
            if (logoutBtn) {
                logoutBtn.onclick = function () {
                    localStorage.removeItem('username');
                    window.location.reload();
                }
            }
        });

        // Render cart summary
        function getCart() {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        }
        function setCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        function renderCartSummary() {
            const cart = getCart();
            const cartSummary = document.getElementById('cart-summary');
            if (!cart.length) {
                cartSummary.innerHTML = "<p style='color:#663399;text-align:center;'>Your cart is empty.</p>";
                document.getElementById('checkout-form').style.display = 'none';
                return;
            }
            let html = "";
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.qty;
                html += `
                    <div class="cart-item">
                        <div>
                            <span class="cart-item-name">${item.name}</span>
                            <span class="cart-item-qty"> x${item.qty}</span>
                        </div>
                        <div class="cart-item-total">$${(item.price * item.qty).toFixed(2)}</div>
                    </div>
                `;
            });
            html += `<div class="cart-total">Total: $${total.toFixed(2)}</div>`;
            cartSummary.innerHTML = html;
        }
        renderCartSummary();

        // Checkout form logic with required field check
        document.getElementById('checkout-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const address = document.getElementById('address').value.trim();
            const phone = document.getElementById('phone').value.trim();
            if (!name || !address || !phone) {
                alert("Please give the required field");
                return;
            }
            // You can send order data to server here if needed
            setCart([]);
            renderCartSummary();
            document.getElementById('checkout-form').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        });
    </script>
</body>

</html>
```

#### dineout.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dine Out | Caramel</title>
    <link rel="icon" href="Brand Logo.png" type="image/x-icon" />
    <link href='https://fonts.googleapis.com/css?family=Roboto Slab' rel='stylesheet'>
    <style>
        body {
            font-family: 'Roboto Slab', serif;
            margin: 0;
            background: linear-gradient(135deg, #f8e8ff 0%, #ffe5e0 100%);
        }

        .dine-header {
            text-align: center;
            padding: 40px 20px 10px 20px;
            color: #663399;
            font-size: 3em;
            font-weight: bold;
            text-shadow: 0 2px 8px #e0c3fc;
        }

        .locations-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
            padding: 30px 10px 60px 10px;
        }

        .location-card {
            background: linear-gradient(120deg, #e0c3fc 0%, #f8e8ff 100%);
            border-radius: 30px;
            box-shadow: 0 2px 16px #e0c3fc55;
            padding: 30px 20px;
            max-width: 340px;
            text-align: center;
            transition: transform 0.2s;
        }

        .location-card:hover {
            transform: scale(1.04);
            box-shadow: 0 6px 24px #66339933;
        }

        .location-card img {
            width: 100%;
            max-width: 250px;
            border-radius: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 12px #66339922;
        }

        .location-title {
            font-size: 1.4em;
            color: #663399;
            margin-bottom: 10px;
            font-weight: bold;
        }

        .location-desc {
            color: #3b3232;
            font-size: 1.1em;
            margin-bottom: 10px;
        }

        .booking-form {
            margin-top: 20px;
            background: #fff8;
            border-radius: 20px;
            padding: 18px 10px 10px 10px;
            box-shadow: 0 2px 8px #e0c3fc55;
        }

        .booking-form label {
            display: block;
            margin: 10px 0 4px 0;
            color: #663399;
            font-weight: bold;
        }

        .booking-form input,
        .booking-form select {
            width: 90%;
            padding: 8px;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1em;
            font-family: 'Roboto Slab', serif;
        }

        .booking-form button {
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 30px;
            font-size: 1.1em;
            cursor: pointer;
            margin-top: 8px;
            transition: background 0.3s;
        }

        .booking-form button:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
        }

        .booking-success {
            color: #2e7d32;
            font-weight: bold;
            margin-top: 10px;
        }

        @media (max-width: 900px) {
            .locations-container {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>

<body>
    <div
        style="position:fixed;top:16px;right:16px;z-index:1000;display:flex;gap:12px;align-items:center;background:#fff;border-radius:28px;box-shadow:0 2px 12px #66339922;padding:8px 18px;">
        <a href="index.html"
            style="order:1;padding:10px 32px;background:linear-gradient(90deg,#663399 60%,#e0c3fc 100%);color:#fff;border:none;border-radius:20px;font-size:1.1em;font-weight:bold;text-decoration:none;box-shadow:0 2px 8px #66339933;transition:background 0.3s,transform 0.2s;">Home</a>
        <button id="logout-btn-fixed"
            style="order:2;padding:10px 32px;background:linear-gradient(90deg,#e0c3fc 0%,#663399 100%);color:#fff;border:none;border-radius:20px;font-size:1.1em;font-weight:bold;box-shadow:0 2px 8px #66339933;cursor:pointer;transition:background 0.3s,transform 0.2s;display:none;">Logout</button>
    </div>
    <div class="dine-header">Dine Out Locations & Table Booking</div>
    <div class="locations-container">
        <div class="location-card">
            <img src="Dine Out/Dine - In image 1.jpg" alt="Caramel Downtown">
            <div class="location-title">Caramel Downtown</div>
            <div class="location-desc">123 Main Street, City Center<br>Open: 8am - 10pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Caramel Downtown')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 2.jpg" alt="Caramel Lavender Hill">
            <div class="location-title">Caramel Lavender Hill</div>
            <div class="location-desc">789 Lavender Hill, Uptown<br>Open: 9am - 11pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Caramel Lavender Hill')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 3.jpg" alt="Caramel Riverside">
            <div class="location-title">Caramel Riverside</div>
            <div class="location-desc">456 Riverside Ave, Near River Park<br>Open: 7am - 9pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Caramel Riverside')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>

        <!-- Additional Dine-In Locations -->
        <div class="location-card">
            <img src="Dine Out/Dine - In image 4.jpg" alt="Caramel Heights">
            <div class="location-title">Caramel Heights</div>
            <div class="location-desc">555 Heights Blvd, Westside<br>Open: 10am - 10pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Caramel Heights')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 5.jpg" alt="Blueberry Haven">
            <div class="location-title">Blueberry Haven</div>
            <div class="location-desc">123 Blueberry Lane, Midtown<br>Open: 7am - 8pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Blueberry Haven')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 6.jpg" alt="World Map Bakery">
            <div class="location-title">World Map Bakery</div>
            <div class="location-desc">456 Globe St, Downtown<br>Open: 8am - 10pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'World Map Bakery')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 7.jpg" alt="Caramel Express">
            <div class="location-title">Caramel Express</div>
            <div class="location-desc">789 Expressway, Riverside<br>Open: 6am - 6pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Caramel Express')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
        <div class="location-card">
            <img src="Dine Out/Dine - In image 8.jpg" alt="Sunrise Sweets">
            <div class="location-title">Sunrise Sweets</div>
            <div class="location-desc">321 Morning Ave, Eastside<br>Open: 5am - 3pm</div>
            <form class="booking-form" onsubmit="return bookTable(event, 'Sunrise Sweets')">
                <label>Name</label>
                <input type="text" name="name" required>
                <label>Date</label>
                <input type="date" name="date" required>
                <label>Time</label>
                <input type="time" name="time" required>
                <label>Guests</label>
                <select name="guests" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                </select>
                <button type="submit">Book Table</button>
                <div class="booking-success" style="display:none;"></div>
            </form>
        </div>
    </div>
    <script>
        function bookTable(event, location) {
            event.preventDefault();
            var form = event.target;
            var name = form.name.value;
            var date = form.date.value;
            var time = form.time.value;
            var guests = form.guests.value;
            var msg = `Thank you, ${name}! Your table at ${location} is booked for ${date} at ${time} for ${guests} guest(s).`;
            var successDiv = form.querySelector('.booking-success');
            successDiv.textContent = msg;
            successDiv.style.display = 'block';
            form.reset();
            setTimeout(() => { successDiv.style.display = 'none'; }, 6000);
            return false;
        }
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const loginBtn = document.getElementById('login-btn');
            const userDisplay = document.getElementById('user-display');
            const logoutBtn = document.getElementById('logout-btn');
            const logoutBtnFixed = document.getElementById('logout-btn-fixed');
            const username = localStorage.getItem('username');
            if (username) {
                if (loginBtn) loginBtn.style.display = 'none';
                if (userDisplay) {
                    userDisplay.textContent = "Hi, " + username;
                    userDisplay.style.display = 'inline-block';
                }
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
                if (logoutBtnFixed) {
                    logoutBtnFixed.style.display = 'inline-block';
                    logoutBtnFixed.textContent = 'Logout';
                }
            } else {
                if (userDisplay) userDisplay.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'none';
                if (logoutBtnFixed) {
                    logoutBtnFixed.style.display = 'inline-block';
                    logoutBtnFixed.textContent = 'Login';
                }
                if (loginBtn) loginBtn.style.display = 'inline-block';
            }
            if (logoutBtn) {
                logoutBtn.onclick = function () {
                    localStorage.removeItem('username');
                    window.location.reload();
                }
            }
            if (logoutBtnFixed) {
                logoutBtnFixed.onclick = function () {
                    if (logoutBtnFixed.textContent === 'Logout') {
                        localStorage.removeItem('username');
                        logoutBtnFixed.textContent = 'Login';
                        if (userDisplay) userDisplay.style.display = 'none';
                    } else {
                        window.location.href = 'login.html';
                    }
                }
            }
        });
    </script>
</body>

</html>
```

#### htmltest.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### login.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Caramel</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto Slab:400,700|Pacifico' rel='stylesheet'>
    <style>
        body {
            font-family: 'Roboto Slab', serif;
            background: linear-gradient(135deg, #f8e8ff 0%, #ffe5e0 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background: #fff;
            padding: 40px 30px;
            border-radius: 24px;
            box-shadow: 0 4px 24px #66339922;
            min-width: 320px;
        }

        .login-container h2 {
            font-family: 'Pacifico', cursive;
            color: #663399;
            text-align: center;
            margin-bottom: 24px;
        }

        .login-container label {
            display: block;
            margin-bottom: 8px;
            color: #663399;
            font-weight: bold;
        }

        .login-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 18px;
            border: 1px solid #e0c3fc;
            border-radius: 8px;
            font-size: 1em;
        }

        .login-container button {
            width: 100%;
            padding: 12px;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
        }

        .login-container button:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.04);
        }

        #login-error {
            color: #c0392b;
            font-weight: bold;
            margin-bottom: 10px;
            display: none;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="login-container">
        <h2>Login to Caramel</h2>
        <form id="login-form">
            <div id="login-error"></div>
            <label for="username">Username</label>
            <input type="text" id="username" required autocomplete="username">
            <label for="password">Password</label>
            <input type="password" id="password" required autocomplete="current-password">
            <button type="submit">Login</button>
        </form>
    </div>
    <script>
        document.getElementById('login-form').addEventListener('submit', async function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('login-error');
            errorDiv.style.display = "none";
            errorDiv.textContent = "";

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                if (data.success) {
                    localStorage.setItem('username', username);
                    window.location.href = "index.html";
                } else {
                    errorDiv.textContent = "Invalid credentials";
                    errorDiv.style.display = "block";
                }
            } catch (err) {
                errorDiv.textContent = "Server error. Please try again.";
                errorDiv.style.display = "block";
            }
        });
    </script>
</body>

</html>
```

#### logout.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Logged Out</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: #e0c3fc;
        }

        .logout-message {
            background: #fff;
            padding: 40px 60px;
            border-radius: 20px;
            box-shadow: 0 2px 16px #66339933;
            text-align: center;
        }

        .logout-message a {
            display: inline-block;
            margin-top: 20px;
            color: #663399;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
    </head>

<body>
    <div class="logout-message">
        <h2>You have been logged out.</h2>
        <a href="index.html">Return to Home</a>
    </div>
    <script>
        localStorage.removeItem('username');
    </script>
</body>

</html>
```

#### orders.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order | Caramel</title>
    <link rel="icon" href="Brand Logo.png" type="image/x-icon" />
    <link href='https://fonts.googleapis.com/css?family=Roboto Slab' rel='stylesheet'>
    <style>
        body {
            font-family: 'Roboto Slab', serif;
            margin: 0;
            background: linear-gradient(120deg, #f8e8ff 0%, #ffe5e0 100%);
            min-height: 100vh;
        }

        .header-bar {
            width: 100vw;
            max-width: 100vw;
            box-sizing: border-box;
            position: sticky;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 40px 0 30px;
            z-index: 20;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(6px);
            box-shadow: 0 2px 16px #e0c3fc33;
        }

        .header-bar .logo {
            max-width: 180px;
            height: auto;
            filter: drop-shadow(0 2px 8px #66339955);
        }

        .nav-btns {
            display: flex;
            gap: 22px;
            align-items: center;
        }

        .nav-btn {
            padding: 10px 30px;
            font-size: 1em;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: 0 2px 8px #66339933;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s, transform 0.2s;
            display: inline-block;
        }

        .nav-btn:hover {
            background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
            transform: scale(1.07);
        }

        .order-header {
            text-align: center;
            padding: 60px 20px 20px 20px;
            color: #663399;
            font-size: 3.2em;
            font-weight: bold;
            text-shadow: 0 2px 16px #e0c3fc;
            letter-spacing: 2px;
        }

        .orders-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 48px 36px;
            padding: 40px 10px 80px 10px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .order-card {
            background: linear-gradient(120deg, #e0c3fc 0%, #f8e8ff 100%);
            border-radius: 36px;
            box-shadow: 0 4px 24px #e0c3fc55, 0 1.5px 8px #66339922;
            padding: 36px 24px 30px 24px;
            max-width: 320px;
            min-width: 260px;
            text-align: center;
            transition: transform 0.22s cubic-bezier(.4, 2, .6, 1), box-shadow 0.22s;
            position: relative;
            overflow: hidden;
        }

        .order-card:before {
            content: "";
            position: absolute;
            top: -60px;
            left: -60px;
            width: 120px;
            height: 120px;
            background: radial-gradient(circle, #e0c3fc88 60%, transparent 100%);
            z-index: 0;
        }

        .order-card:hover {
            transform: translateY(-10px) scale(1.045);
            box-shadow: 0 10px 32px #66339933, 0 2px 16px #e0c3fc77;
        }

        .order-card img {
            width: 210px;
            height: 150px;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: 18px;
            box-shadow: 0 2px 12px #66339922;
            display: block;
            margin-left: auto;
            margin-right: auto;
            background: #e0c3fc;
            border: 3px solid #fff;
            position: relative;
            z-index: 1;
        }

        /* Special adjustment for bakers.jpg to ensure perfect alignment */
        .order-card img[alt="Baker's Choice Box"] {
            object-position: center top;
        }

        .order-title {
            font-size: 1.35em;
            color: #663399;
            margin-bottom: 8px;
            font-weight: bold;
            letter-spacing: 1px;
            z-index: 1;
            position: relative;
        }

        .order-desc {
            color: #3b3232;
            font-size: 1.08em;
            margin-bottom: 10px;
            z-index: 1;
            position: relative;
        }

        .order-price {
            color: #fff;
            background: linear-gradient(90deg, #663399 60%, #e0c3fc 100%);
            font-size: 1.15em;
            font-weight: bold;
            border-radius: 16px;
            padding: 7px 18px;
            display: inline-block;
            margin-top: 8px;
            box-shadow: 0 1px 6px #66339922;
            z-index: 1;
            position: relative;
        }

        @media (max-width: 1100px) {
            .orders-container {
                gap: 32px 16px;
            }
        }

        @media (max-width: 900px) {
            .orders-container {
                flex-direction: column;
                align-items: center;
                gap: 32px 0;
            }
        }

        @media (max-width: 600px) {
            .order-header {
                font-size: 2em;
                padding: 36px 10px 10px 10px;
            }

            .orders-container {
                padding: 20px 2px 40px 2px;
            }

            .order-card {
                max-width: 98vw;
                min-width: 0;
                padding: 18px 6px 18px 6px;
            }

            .order-card img {
                width: 90vw;
                max-width: 220px;
                height: 120px;
            }
        }
    </style>
</head>

<body>
    <!-- Place this inside the <body> tag at the top of every page -->
    <div class="header-bar">
        <a href="index.html">
        <img src="Caramel-removebg-preview.png" alt="Caramel Logo" class="logo">
        </a>
        <div class="nav-btns">
            <a href="login.html" id="login-btn" class="nav-btn">Login</a>
            <span id="user-display" class="user-display"></span>
            <a href="index.html" id="home-btn" class="nav-btn" style="display:inline-block;">Home</a>
            <button id="logout-btn" class="nav-btn" style="display:none;">Logout</button>
        </div>
    </div>
    <div class="order-header">Order Your Favorites</div>
    <div class="orders-container">
        <div class="order-card">
            <img src="desert food.jpg" alt="Classic Caramel Donut">
            <div class="order-title">Classic Caramel Donut</div>
            <div class="order-desc">Soft, fluffy donut glazed with our signature caramel sauce.</div>
            <div class="order-price">$2.99</div>
        </div>
        <div class="order-card">
            <img src="donuts.webp" alt="Assorted Donuts">
            <div class="order-title">Assorted Donuts</div>
            <div class="order-desc">A box of 6 assorted donuts with a variety of toppings and fillings.</div>
            <div class="order-price">$8.99</div>
        </div>
        <div class="order-card">
            <img src="desertbake.jpg" alt="Baker's Special">
            <div class="order-title">Baker's Special</div>
            <div class="order-desc">A surprise treat from our master bakers, changes daily!</div>
            <div class="order-price">$4.50</div>
        </div>
        <div class="order-card">
            <img src="dessert food2.jpg" alt="Sweet Platter">
            <div class="order-title">Sweet Platter</div>
            <div class="order-desc">A selection of our best-selling sweets, perfect for sharing.</div>
            <div class="order-price">$12.00</div>
        </div>
        <div class="order-card">
            <img src="dreamcake.webp" alt="Caramel Dream Cake">
            <div class="order-title">Caramel Dream Cake</div>
            <div class="order-desc">Rich, moist cake layered with caramel and topped with a silky caramel glaze.</div>
            <div class="order-price">$5.99</div>
        </div>
        <div class="order-card">
            <img src="bakers.jpg" alt="Baker's Choice Box">
            <div class="order-title">Baker's Choice Box</div>
            <div class="order-desc">A curated box of 8 pastries, handpicked by our bakers for the day.</div>
            <div class="order-price">$14.99</div>
        </div>
        <!-- Additional Locations -->
        <div class="order-card">
            <img src="Caramel.png" alt="Blueberry Haven">
            <div class="order-title">Blueberry Haven</div>
            <div class="order-desc">123 Blueberry Lane, Midtown<br>Open: 7am - 8pm</div>
            <div class="order-price">Contact: (555) 123-4567</div>
        </div>
        <div class="order-card">
            <img src="Caramel.png" alt="World Map Bakery">
            <div class="order-title">World Map Bakery</div>
            <div class="order-desc">456 Globe St, Downtown<br>Open: 8am - 10pm</div>
            <div class="order-price">Contact: (555) 987-6543</div>
        </div>
        <div class="order-card">
            <img src="Caramel.png" alt="Caramel Express">
            <div class="order-title">Caramel Express</div>
            <div class="order-desc">789 Expressway, Riverside<br>Open: 6am - 6pm</div>
            <div class="order-price">Contact: (555) 246-8101</div>
        </div>
        <div class="order-card">
            <img src="Caramel.png" alt="Sunrise Sweets">
            <div class="order-title">Sunrise Sweets</div>
            <div class="order-desc">321 Morning Ave, Eastside<br>Open: 5am - 3pm</div>
            <div class="order-price">Contact: (555) 369-1212</div>
        </div>
    </div>
    <!-- Floating Cart Button -->
    <button id="cart-btn"
        style="position:fixed;bottom:32px;right:32px;z-index:1000;background:#663399;border:none;border-radius:50%;width:60px;height:60px;box-shadow:0 4px 16px #66339955;display:flex;align-items:center;justify-content:center;cursor:pointer;">
        <img src="cart.png" alt="Cart" style="width:32px;height:32px;object-fit:contain;">
        <span id="cart-count"
            style="position:absolute;top:8px;right:8px;background:#e0c3fc;color:#663399;border-radius:50%;padding:2px 8px;font-size:0.8em;font-weight:bold;">0</span>
    </button>

    <!-- Cart Modal -->
    <div id="cart-modal"
        style="display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.4);z-index:2000;align-items:center;justify-content:center;">
        <div
            style="background:#fff;border-radius:24px;max-width:400px;width:90vw;padding:32px 20px;box-shadow:0 4px 32px #66339955;position:relative;">
            <h2 style="color:#663399;text-align:center;margin-bottom:18px;">Your Cart</h2>
            <div id="cart-items"></div>
            <div id="cart-total" style="margin:18px 0;font-weight:bold;color:#663399;text-align:right;"></div>
            <button id="checkout-btn"
                style="width:100%;padding:12px;background:linear-gradient(90deg,#663399 60%,#e0c3fc 100%);color:#fff;border:none;border-radius:20px;font-size:1.1em;font-weight:bold;cursor:pointer;margin-top:10px;">Proceed
                to Checkout</button>
            <button id="close-cart"
                style="position:absolute;top:10px;right:18px;background:none;border:none;font-size:1.5em;color:#663399;cursor:pointer;">&times;</button>
        </div>
    </div>

    <div id="contact"
        style="margin-top: 120px; padding: 60px 20px; background: #f8e8ff; border-radius: 36px; box-shadow: 0 2px 16px #e0c3fc33; max-width: 700px; margin-left: auto; margin-right: auto; text-align: center;">
        <h2 style="color: #663399; font-size: 2em; margin-bottom: 18px;">Contact Us</h2>
        <p style="color: #3b3232; font-size: 1.1em;">Email: info@caramelbakery.com<br>Phone: (555) 123-4567<br>123
            Caramel Lane, Sweet City</p>
    </div>
    <script>
        // --- Cart Logic ---
        const products = [
            { name: "Classic Caramel Donut", price: 2.99, img: "desert food.jpg" },
            { name: "Assorted Donuts", price: 8.99, img: "donuts.webp" },
            { name: "Baker's Special", price: 4.50, img: "desertbake.jpg" },
            { name: "Sweet Platter", price: 12.00, img: "dessert food2.jpg" },
            { name: "Caramel Dream Cake", price: 5.99, img: "Caramel.png" },
            { name: "Baker's Choice Box", price: 14.99, img: "bakers.jpg" }
        ];

        function getCart() {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        }
        function setCart(cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        function updateCartCount() {
            const cart = getCart();
            document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
        }
        function addToCart(product) {
            let cart = getCart();
            const idx = cart.findIndex(item => item.name === product.name);
            if (idx > -1) {
                cart[idx].qty += 1;
            } else {
                cart.push({ ...product, qty: 1 });
            }
            setCart(cart);
            updateCartCount();
        }
        function renderCartModal() {
            const cart = getCart();
            const cartItemsDiv = document.getElementById('cart-items');
            if (cart.length === 0) {
                cartItemsDiv.innerHTML = "<p style='color:#663399;text-align:center;'>Your cart is empty.</p>";
                document.getElementById('cart-total').textContent = "";
                document.getElementById('checkout-btn').disabled = true;
                return;
            }
            let html = "";
            let total = 0;
            cart.forEach((item, i) => {
                total += item.price * item.qty;
                html += `
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                        <div>
                            <span style="color:#663399;font-weight:bold;">${item.name}</span>
                            <span style="color:#3b3232;font-size:0.95em;"> x${item.qty}</span>
                        </div>
                        <div>
                            <button onclick="removeFromCart(${i})" style="background:none;border:none;color:#c0392b;font-size:1.2em;cursor:pointer;">&minus;</button>
                            <span style="margin:0 8px;">$${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    </div>
                `;
            });
            cartItemsDiv.innerHTML = html;
            document.getElementById('cart-total').textContent = "Total: $" + total.toFixed(2);
            document.getElementById('checkout-btn').disabled = false;
        }
        function removeFromCart(idx) {
            let cart = getCart();
            if (cart[idx].qty > 1) {
                cart[idx].qty -= 1;
            } else {
                cart.splice(idx, 1);
            }
            setCart(cart);
            renderCartModal();
            updateCartCount();
        }
        window.removeFromCart = removeFromCart; // Make available to inline onclick

        document.addEventListener('DOMContentLoaded', function () {
            // Add "Add to Cart" buttons to product cards
            const orderCards = document.querySelectorAll('.order-card');
            orderCards.forEach((card, i) => {
                if (i < products.length) { // Only for products, not locations
                    const btn = document.createElement('button');
                    btn.textContent = "Add to Cart";
                    btn.style = "margin-top:12px;width:100%;padding:10px;background:linear-gradient(90deg,#663399 60%,#e0c3fc 100%);color:#fff;border:none;border-radius:16px;font-size:1em;font-weight:bold;cursor:pointer;transition:background 0.3s;";
                    btn.onmouseover = function () { btn.style.background = "linear-gradient(90deg,#e0c3fc 0%,#663399 100%)"; };
                    btn.onmouseout = function () { btn.style.background = "linear-gradient(90deg,#663399 60%,#e0c3fc 100%)"; };
                    btn.onclick = function () { addToCart(products[i]); };
                    card.appendChild(btn);
                }
            });

            // Cart button logic
            document.getElementById('cart-btn').onclick = function () {
                document.getElementById('cart-modal').style.display = 'flex';
                renderCartModal();
            };
            document.getElementById('close-cart').onclick = function () {
                document.getElementById('cart-modal').style.display = 'none';
            };
            document.getElementById('checkout-btn').onclick = function () {
                window.location.href = "checkout.html";
            };

            updateCartCount();
        });

        // --- Existing login/logout logic ---
        document.addEventListener('DOMContentLoaded', function () {
            const loginBtn = document.getElementById('login-btn');
            const userDisplay = document.getElementById('user-display');
            const logoutBtn = document.getElementById('logout-btn');
            const homeBtn = document.getElementById('home-btn');
            const username = localStorage.getItem('username');
            if (username) {
                if (loginBtn) loginBtn.style.display = 'none';
                if (userDisplay) {
                    userDisplay.textContent = "Hi, " + username;
                    userDisplay.style.display = 'inline-block';
                    userDisplay.style.color = '#663399';
                }
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
            } else {
                if (userDisplay) userDisplay.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'none';
                if (loginBtn) loginBtn.style.display = 'inline-block';
            }
            if (logoutBtn) {
                logoutBtn.onclick = function () {
                    localStorage.removeItem('username');
                    window.location.reload();
                }
            }
            // Home button is always visible, no extra logic needed
        });
    </script>
</body>

</html>
```

### CSS

#### internship.css
```css
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
        left: -20px;
    }

    100% {
        opacity: 1;
        left: 40px;
    }
}

@keyframes slideInAnimation {
    0% {
        width: 0%;
        opacity: 0;
        height: 30%;
    }

    100% {
        width: 60%;
        opacity: 1;
        height: 30%;
    }
}

body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* -----------------------------------
   HEADER + NAVIGATION + LOGO
------------------------------------- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 30px;
    background-blend-mode: darken;
    background-attachment: fixed;
}

ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 20px;
    text-shadow: 2px 2px 2px black;
    margin: 0;
    padding: 0;
}

li {
    padding: 10px;
}

li a {
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-bottom: 2px solid white;
    color: ghostwhite;
}

li a:hover {
    border-bottom: 5px solid aliceblue;
    border-radius: 5px;
    color: aliceblue;
    transition: 0.2s linear;
}

/* -----------------------------------
   LOGO STYLING
------------------------------------- */
.Logo {
    max-width: 200px;
    height: auto;
}

/* -----------------------------------
   WELCOME SECTION
------------------------------------- */
.WelcomePop {
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    font-size: 3.5rem;
    text-align: center;
    color: antiquewhite;
    text-shadow: 2px 2px black;
    padding: 20px;
}

/* -----------------------------------
   MAIN BACKGROUND
------------------------------------- */
.main {
    background-image: url("desert food.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

/* -----------------------------------
   INPUTS & BUTTONS
------------------------------------- */
input {
    background: transparent;
    margin: 15px 25px;
    padding: 5px 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 1rem;
    border: 2px solid #3b3232e5;
    font-weight: bold;
}

button {
    font-family: 'Roboto Slab', serif;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 10px;
    font-size: 1rem;
    cursor: pointer;
}

/* -----------------------------------
   CARAMEL INTRO
------------------------------------- */
.CaramelIntro {
    margin: 0 auto;
    padding: 20px;
    background-blend-mode: color-burn;
    border-radius: 40px;
    max-width: 90%;
    text-align: center;
}

/* -----------------------------------
   DIRECT BUTTONS
------------------------------------- */
.Direct {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;

}

/* -----------------------------------
   HAMBURGER MENU (Mobile Placeholder)
------------------------------------- */
.bar1,
.bar2,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
}

/* -----------------------------------
   USER DISPLAY
------------------------------------- */
.user-display {
    background: linear-gradient(90deg, #e0c3fc 0%, #663399 100%);
    color: #fff;
    font-weight: bold;
    padding: 10px 28px;
    border-radius: 20px;
    box-shadow: 0 2px 8px #66339933;
    letter-spacing: 1px;
    margin-left: 10px;
    font-size: 1.1em;
    border: 2px solid #fff;
    transition: background 0.3s, color 0.3s;
}

.user-display:hover {
    background: linear-gradient(90deg, #663399 0%, #e0c3fc 100%);
    color: #663399;
}

/* -----------------------------------
   RESPONSIVE MEDIA QUERIES
------------------------------------- */
@media (max-width: 768px) {
    .WelcomePop {
        font-size: 2.5rem;
    }

    .CaramelIntro {
        font-size: 1rem;
    }

    nav {
        flex-direction: column;
        text-align: center;
    }

    ul {
        flex-direction: column;
        align-items: center;
    }

    .Direct {
        flex-direction: column;
    }

    .Logo {
        margin: 0 auto;
        display: block;
    }
}
```

#### style.css
```css
@import url(
'https://fonts.googleapis.com/css?family=Big+Shoulders+Text:100, 300, 400, 500, 600, 700, 800, 900&display=swap');

/* font-family: 'Big Shoulders Text', cursive; */

.nav-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    z-index: 100;
    left: 0;
    width: 100%;
    padding: 0;
}

.nav-flex-row li {
    text-decoration: none;
    list-style-type: none;
    padding: 20px 15px;
}

.nav-flex-row li a {
    font-family: 'Big Shoulders Text', cursive;
    color: #000;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 300;
}

.nav-flex-row li a:hover {
    background: #E7E7E7;
}

.section-intro {
    height: 820px;
    background-image: url(img/foddiee.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section-intro h1 {
    text-align: center;
    color: #000;
    font-size: 4em;
    font-weight: 700;
}

.section-intro header {
    display: flex;
    flex: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.link-to-book-wrapper {
    flex: 1;
}

.about-section {
    display: flex;
    align-items: center;
    background-color: #f3f3f3c0;
    padding: 50px 30px;
}

.link-to-book {
    color: #ffffff;
    display: block;
    border: 2px solid #ffffff;
    padding: 5px 10px;
}

a.link-to-book:hover {
    background-color: #ffffff;
    color: #95999e;
    text-decoration: none;
}

.about-section p,
.about-section h3 {
    text-align: center;
    width: 60%;
    margin: auto;
    font-family: 'Big Shoulders Text', cursive;
    font-size: 1.8em;
    text-transform: uppercase;
}

.carousel-inner {
    height: 700px;
}

.row-flex {
    display: flex;
    flex-direction: row;
}

.flex-column-form {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 30px 20px;
}

.btn.btn-primary {
    font-family: 'Big Shoulders Text', cursive;
    color: #ffffff;
    background-color: #95999e;
    text-transform: uppercase;
    font-size: 16px;
    padding: 5px 10px;
    letter-spacing: 2px;
    border: 0;
}

.btn.btn-primary:hover {
    background-color: #747474;
}

.opening-time,
.contact-address {
    flex: 1;
    margin: 30px 20px;
    font-size: 1.2em;
}

.form-group p {
    font-size: 1.2em;
}

.opening-time p span,
.contact-address p span {
    display: block;
}

@media (min-width:577px) and (max-width: 800px) {

    .section-intro {
        height: 500px;
    }

    .about-section p,
    .about-section h3 {
        font-size: 20px;
    }

    .carousel-inner {
        height: auto;
    }

    .row-flex {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 576px) {
    .section-intro {
        height: 300px;
    }

    .about-section {
        padding: 30px;
    }

    .section-intro h1 {
        font-size: 2em;
    }

    .about-section p,
    .about-section h3 {
        font-size: 15px;
    }

    .carousel-inner {
        height: auto;
    }

    .row-flex {
        display: flex;
        flex-direction: column;
    }

    .row-flex h3 {
        font-size: 25px;
        text-align: center;
    }

    .form-group p {
        font-size: 15px;
    }

    .opening-time p span,
    .contact-address p span {
        font-size: 15px;
        text-align: center;
    }

}

.carousel-item img {
    background-repeat: no-repeat;
    background-size: cover;
}
```

### JavaScript / Node

#### server.js
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple in-memory user (for demo)
const USERS = [
  { username: 'Pranay', password: 'password123' },
  { username: 'user', password: 'testpass' },
  
];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid username or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

#### internship.js
```javascript
// (File currently empty)
```


