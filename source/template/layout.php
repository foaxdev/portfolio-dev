<!DOCTYPE html>
<html lang="<?=$language;?>">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?=$lang[$language]["title"];?></title>
    <link rel="stylesheet" href="css/style.min.css">
    <link rel="preload" href="fonts/opensans.woff2" as="font">
    <link rel="preload" href="fonts/opensansbold.woff2" as="font">

    <script src="js/script.min.js" defer></script>

    <script src="js/picturefill.min.js" async></script>
  </head>
  <body>
    <header class="header">
      <div class="header__wrap">
        <div class="header__top-wrap">
          <button class="header__toggle js-toggle-btn" type="button"><?=$lang[$language]["closeOpenMenu"];?></button>
          <ul class="languages-list">
            <li class="languages-list__item"><a class="languages-list__button languages-list__button--japanese" href="?lang=ja"><?=$lang[$language]["japanese"];?></a></li>
            <li class="languages-list__item"><a class="languages-list__button languages-list__button--english" href="?lang=en"><?=$lang[$language]["english"];?></a></li>
            <li class="languages-list__item"><a class="languages-list__button languages-list__button--russian" href="?lang=ru"><?=$lang[$language]["russian"];?></a></li>
          </ul>
        </div>
        <nav class="main-nav js-nav">
          <ul class="nav-list">
            <li class="nav-list_item"><a class="nav-list_link" href="#about-me"><?=$lang[$language]["aboutMe"];?></a></li>
            <li class="nav-list_item"><a class="nav-list_link" href="#what-i-use"><?=$lang[$language]["whatIUse"];?></a></li>
            <li class="nav-list_item"><a class="nav-list_link" href="#portfolio"><?=$lang[$language]["portfolio"];?></a></li>
            <li class="nav-list_item"><a class="nav-list_link" href="#education"><?=$lang[$language]["education"];?></a></li>
            <li class="nav-list_item"><a class="nav-list_link" href="#contacts"><?=$lang[$language]["contacts"];?></a></li>
          </ul>
        </nav>
      </div>
    </header>

    <?=$content; ?>

    <footer class="contacts" id="contacts">
      <h2 class="heading"><?=$lang[$language]["contacts"];?></h2>
      <div class="contacts__links-wrap">
        <a class="contacts__link contacts__link--telegram" href="https://web.telegram.org/#/im?p=@foaxdev">
          Telegram
          <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="#039be5" r="12"/><path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"/></svg>
        </a>
        <a class="contacts__link contacts__link--facebook" href="https://www.facebook.com/foaxdev">
          Facebook
          <svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196" style="enable-background: new 0 0 112.196 112.196;" xml:space="preserve"><g><circle style="fill: #3b5998;" cx="56.098" cy="56.098" r="56.098"/><path style="fill: #ffffff;" d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"/></g></svg>
        </a>
        <a class="contacts__link contacts__link--stack-overflow" href="https://stackoverflow.com/users/9496492/irina-kovalchuk?tab=profile">
          Stack Overflow
          <svg width="30" height="30" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#ff9800"><path d="m6.444 14.839 10.338 2.196.433-2.089-10.338-2.212z"/><path d="m6.215 17.571h10.566v2.127h-10.566z"/><path d="m7.8 9.831 9.572 4.526.887-1.944-9.577-4.538z"/><path d="m17.373 14.358-.001-.001-.001.001z"/></g><path d="m2 15.429v8.571h18.992v-8.571h-2.113v6.428h-14.766v-6.428z" fill="#757575"/><path d="m10.453 5.063 8.109 6.873 1.346-1.65-8.109-6.873z" fill="#ff9800"/><path d="m22 8.587-6.302-8.587-1.691 1.286 6.302 8.587z" fill="#ff9800"/></svg>
        </a>
        <a class="contacts__link contacts__link--linkedin" href="https://www.linkedin.com/in/irina-kovalchuk-945370174/">
          LinkedIn
          <svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 112.196 112.196" style="enable-background:new 0 0 112.196 112.196;" xml:space="preserve">
<g>
  <circle style="fill:#007AB9;" cx="56.098" cy="56.097" r="56.098"/>
  <g>
    <path style="fill:#F1F2F2;" d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"/>
  </g>
</g>
</svg>
        </a>
        <a class="contacts__link contacts__link--kwork" href="https://kwork.ru/user/foax">
          Kwork
          <img src="img/kwork.png" width="30" height="30" alt="">
        </a>
      </div>
      <a class="contacts__link contacts__link--email" href="mailto:synthbeing@icloud.com">synthbeing@icloud.com</a>
      </footer>
  </body>
</html>
