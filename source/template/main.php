<main>
  <section class="about-me" id="about-me">
    <h1 class="visually-hidden"><?=$lang[$language]["portfolioOfIK"];?></h1>
    <div class="about-me__wrap">
      <picture>
        <source type="image/webp" media="(min-width: 768px)" srcset="img/kovalchuk-desktop.webp">
        <source type="image/webp" srcset="img/kovalchuk-mobile.webp">

        <source media="(min-width: 768px)" srcset="img/kovalchuk-desktop.jpg">
        <img class="about-me__image" src="img/kovalchuk-mobile.jpg" alt="<?=$lang[$language]["profilePicture"];?>" width="100" height="95">
      </picture>
      <div class="about-me__info-wrap">
        <b class="about-me__name"><?=$lang[$language]["myName"];?></b>
        <p class="about-me__age"><?=$lang[$language]["myAges"];?></p>
        <p class="about-me__location"><?=$lang[$language]["myLocation"];?></p>
        <p class="about-me__profession"><?=$lang[$language]["myPosition"];?></p>
      </div>
    </div>
  </section>
  <section class="what-i-use" id="what-i-use">
    <h2 class="heading"><?=$lang[$language]["technologies"];?></h2>
    <ul class="tech-list">
      <li class="tech-list__item">HTML 5 + CSS 3 + JS</li>
      <li class="tech-list__item"><?=$lang[$language]["bem"];?></li>
      <li class="tech-list__item">Gulp.JS</li>
      <li class="tech-list__item"><?=$lang[$language]["cross-browserMarkups"];?></li>
      <li class="tech-list__item"><?=$lang[$language]["progressiveEnhancement"];?></li>
      <li class="tech-list__item"><?=$lang[$language]["accessibility"];?></li>
      <li class="tech-list__item"><?=$lang[$language]["animation"];?></li>
      <li class="tech-list__item">Git</li>
    </ul>
  </section>
  <section class="portfolio" id="portfolio">
    <h2 class="heading"><?=$lang[$language]["portfolio"];?></h2>
    <ul class="markups-list">
      <?php foreach ($portfolio as $project_name => $work): ?>
      <li class="markups-list__item">
        <picture>
          <source type="image/webp" srcset="img/portfolio/preview-<?=$project_name;?>.webp">

          <img class="markups-list__image" src="img/portfolio/preview-<?=$project_name;?>.jpg" alt="<?=$lang[$language]["previewOfMarkup"];?> <?=$lang[$language][$project_name]["title"];?>" width="270" height="199">
        </picture>
        <div class="markups-list__links-wrap">
          <a class="markups-list__link" href="<?=$work["prod-link"];?>"><?=$lang[$language]["demo"];?></a>
          <a class="markups-list__link" href="<?=$work["source-link"];?>"><?=$lang[$language]["sourceCode"];?></a>
        </div>
        <div class="markups-list__description-wrap">
          <button class="markups-list__description-button" type="button"><?=$lang[$language]["description"];?></button>
          <div class="markups-list__description markups-list__description--hidden"><?=$lang[$language][$project_name]["description"];?></div>
        </div>
      </li>
      <?php endforeach; ?>
    </ul>
  </section>
  <section class="editors" id="editors">
    <h2 class="heading"><?=$lang[$language]["availableGraphicEditors"];?></h2>
    <ul class="graphic-editors-list">
      <?php foreach ($graphic_editors as $editor => $title): ?>
      <li class="graphic-editors-list__item">
        <picture>
          <source type="image/webp" srcset="img/graphic-editors/logo-<?=$editor;?>.png">

          <img class="graphic-editors-list__image" src="img/graphic-editors/logo-<?=$editor;?>.png" alt="<?=$title;?> <?=$lang[$language]["logotype"];?>" width="60" height="60">
        </picture>
        <span class="graphic-editors-list__title"><?=$title;?></span>
      </li>
      <?php endforeach; ?>
    </ul>
  </section>
  <section class="education" id="education">
    <h2 class="heading"><?=$lang[$language]["education"];?></h2>
    <p class="education__description"><?=$lang[$language]["currentlyIStudyIn"];?>.</p>
    <p class="education__description"><?=$lang[$language]["specialisation"];?>.</p>
    <p class="education__description"><?=$lang[$language]["hereIs"];?><a class="education__link" href="https://htmlacademy.ru/profile/foaxdev"><?=$lang[$language]["link"];?></a><?=$lang[$language]["toMyStudentsAccount"];?>.</p>
    <b class="education__description"><?=$lang[$language]["achievedCertification"];?>:</b>
    <ul class="certificates-list">
      <?php foreach ($certificates as $title => $link): ?>
      <li class="certificates-list__item">
        <a class="certificates-list__link" href="<?=$link;?>">
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcset="img/certificates/<?=$title;?>-tablet.webp">
            <source type="image/webp" srcset="img/certificates/<?=$title;?>-mobile.webp">

            <source media="(min-width: 768px)" srcset="img/certificates/<?=$title;?>-tablet.png">
            <img class="certificates-list__image" src="img/certificates/<?=$title;?>-mobile.png" alt="<?=$lang[$language][$title];?> <?=$lang[$language]["certificate"];?>" width="125" height="175">
          </picture>
          <p class="certificates-list__title"><?=$lang[$language][$title];?></p>
        </a>
      </li>
      <?php endforeach; ?>
    </ul>
  </section>
</main>
