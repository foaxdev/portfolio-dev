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
        <button class="header__toggle js-toggle-btn" type="button"><?=$lang[$language]["closeOpenMenu"];?></button>
        <ul class="languages-list">
          <li class="languages-list__item"><button class="languages-list__button languages-list__button--russian" type="button"><?=$lang[$language]["russian"];?></button></li>
          <li class="languages-list__item"><button class="languages-list__button languages-list__button--english" type="button"><?=$lang[$language]["english"];?></button></li>
          <li class="languages-list__item"><button class="languages-list__button languages-list__button--japanese" type="button"><?=$lang[$language]["japanese"];?></button></li>
        </ul>
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
      <h2 class="contacts__header"><?=$lang[$language]["contacts"];?></h2>
      <a class="contacts__link contacts__link--telegram" href="https://web.telegram.org/#/im?p=@foaxdev">
        Telegram
        <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="#039be5" r="12"/><path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"/></svg>
      </a>
      <a class="contacts__link contacts__link--facebook" href="https://www.facebook.com/foaxdev">
        Facebook
        <svg width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.196 112.196" style="enable-background: new 0 0 112.196 112.196;" xml:space="preserve"><g><circle style="fill: #3b5998;" cx="56.098" cy="56.098" r="56.098"/><path style="fill: #ffffff;" d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"/></g></svg>
      </a>
      <a class="contacts__link" href="mailto:synthbeing@icloud.com">synthbeing@icloud.com</a>

      <div class="copyrights">Telegram <?=$lang[$language]["iconIsMadeBy"];?> <a class="copyrights__link" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> <?=$lang[$language]["from"];?> <a class="copyrights__link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div class="copyrights">Facebook <?=$lang[$language]["iconIsMadeBy"];?> <a class="copyrights__link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> <?=$lang[$language]["from"];?> <a class="copyrights__link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
  </body>
</html>
