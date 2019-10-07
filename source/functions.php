<?php

function isLanguageExist($language, $all_languages) {
  return in_array($language, $all_languages, true);
}
