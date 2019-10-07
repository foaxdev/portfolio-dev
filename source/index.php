<?php
require_once("helpers.php");
require_once("lang.php");
require_once("portfolio.php");
require_once("graphic-editors.php");
require_once("certificates.php");
require_once("functions.php");

$language = "en";
$page_title = $LANG[$language]["title"];

if (isset($_GET["lang"])) {
  if (isLanguageExist($_GET["lang"], $languages)) {
    $language = $_GET["lang"];
  } else {
    $language = "en";
  }
}

$page_content = include_template("main.php", [
  "lang" => $LANG,
  "language" => $language,
  "portfolio" => $portfolio,
  "graphic_editors" => $graphic_editors,
  "certificates" => $certificates
]);

$layout_content = include_template("layout.php", ["content" => $page_content, "page_title" => $page_title, "lang" => $LANG, "language" => $language]);

print($layout_content);
