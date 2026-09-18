document.addEventListener("DOMContentLoaded", () => {

  const cursor = document.querySelector(".soft-cursor");
  const preview = document.querySelector(".index-preview");
  const previewImage = preview
    ? preview.querySelector("img")
    : null;

  const menuItems = document.querySelectorAll(".menu-item");

  /*
     On vérifie si l'appareil possède réellement
     un pointeur de type souris.
  */

  const hasFinePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;


  /* ========================================
     CURSOR — DESKTOP ONLY
  ========================================= */

  if (hasFinePointer) {

    document.addEventListener("mousemove", (event) => {

      if (!cursor) return;

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      document.body.classList.add("cursor-visible");

    });


    document.addEventListener("mouseleave", () => {

      document.body.classList.remove("cursor-visible");

    });

  }


  /* ========================================
     MENU ITEMS
  ========================================= */

  menuItems.forEach((item) => {

    /*
       Les effets hover sont uniquement
       utilisés avec une vraie souris.
    */

    if (hasFinePointer) {

      item.addEventListener("mouseenter", () => {

        /* agrandir le curseur */

        if (cursor) {
          cursor.classList.add("is-hovering");
        }


        /* afficher l'image */

        const imageSource = item.dataset.preview;

        if (
          preview &&
          previewImage &&
          imageSource
        ) {

          previewImage.src = imageSource;

          preview.classList.add("is-visible");

        }

      });


      item.addEventListener("mousemove", (event) => {

        if (!preview) return;


        const previewWidth = 165;
        const previewHeight = 115;

        let x = event.clientX;
        let y = event.clientY;


        /*
           Si l'image risque de sortir à droite,
           elle apparaît à gauche du curseur.
        */

        if (
          x + previewWidth + 50 >
          window.innerWidth
        ) {

          x = x - previewWidth - 60;

        }


        /*
           Si l'image risque de sortir en bas,
           elle remonte.
        */

        if (
          y + previewHeight + 50 >
          window.innerHeight
        ) {

          y = y - previewHeight - 50;

        }


        preview.style.left = `${x}px`;
        preview.style.top = `${y}px`;

      });


      item.addEventListener("mouseleave", () => {

        if (cursor) {
          cursor.classList.remove("is-hovering");
        }

        if (preview) {
          preview.classList.remove("is-visible");
        }

      });

    }

  });


  /* ========================================
     CLICK — DESKTOP ONLY
  ========================================= */

  if (hasFinePointer) {

    document.addEventListener("mousedown", () => {

      if (cursor) {
        cursor.classList.add("is-clicking");
      }

    });


    document.addEventListener("mouseup", () => {

      if (cursor) {
        cursor.classList.remove("is-clicking");
      }

    });

  }


  /* ========================================
     SITE NOTE
  ========================================= */

  const siteNote = document.querySelector(".site-note");
  const siteNoteClose = document.querySelector(".site-note-close");

  if (siteNote && siteNoteClose) {

    siteNoteClose.addEventListener("click", () => {

      siteNote.classList.add("is-hidden");

    });

  }

});


/* ========================================
   BACK / FORWARD NAVIGATION
======================================== */

/*
   Sur mobile, Safari et d'autres navigateurs
   peuvent restaurer la homepage depuis leur
   cache lorsqu'on utilise le bouton "retour".

   On remet donc les éléments interactifs
   dans leur état normal.
*/

window.addEventListener("pageshow", () => {

  const cursor = document.querySelector(".soft-cursor");
  const preview = document.querySelector(".index-preview");

  document.body.classList.remove("cursor-visible");


  if (cursor) {

    cursor.classList.remove(
      "is-hovering",
      "is-clicking"
    );

  }


  if (preview) {

    preview.classList.remove("is-visible");

  }


  /*
     On s'assure que les éléments du menu
     ne restent pas dans un état temporaire.
  */

  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {

    item.classList.remove(
      "is-hovering",
      "is-active"
    );

  });

});