@echo off
echo Initialisation du site vitrine...

:: Dossiers publics
mkdir public
mkdir public\images
mkdir public\images\projets

:: Dossiers source
mkdir src
mkdir src\assets
mkdir src\assets\fonts
mkdir src\assets\styles
mkdir src\components
mkdir src\pages
mkdir src\scripts

:: Fichiers publics
type nul > public\favicon.ico
type nul > public\robots.txt

:: Fichiers CSS/JS
type nul > src\assets\styles\main.css
type nul > src\scripts\main.js

:: Composants HTML
type nul > src\components\Header.html
type nul > src\components\Footer.html
type nul > src\components\Navbar.html

:: Pages HTML
type nul > src\pages\index.html
type nul > src\pages\apropos.html
type nul > src\pages\parcours.html
type nul > src\pages\contact.html

:: README et .gitignore
type nul > README.md
type nul > .gitignore

echo Structure minimale créée avec succès !
pause