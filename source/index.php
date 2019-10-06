<?php
require_once("helpers.php");
require_once("lang.php");
require_once("portfolio.php");
require_once("graphic-editors.php");
require_once("certificates.php");

$language = "en";
$page_title = $LANG[$language]["title"];

$page_content = include_template("main.php", [
  "lang" => $LANG,
  "language" => $language,
  "portfolio" => $portfolio,
  "graphic_editors" => $graphic_editors,
  "certificates" => $certificates
]);

$layout_content = include_template("layout.php", ["content" => $page_content, "page_title" => $page_title, "lang" => $LANG, "language" => $language]);

print($layout_content);
