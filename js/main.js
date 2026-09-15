document.addEventListener("DOMContentLoaded", () => {

  const cursor = document.querySelector(".soft-cursor");
  const preview = document.querySelector(".index-preview");
  const previewImage = preview
    ? preview.querySelector("img")
    : null;

  const menuItems = document.querySelectorAll(".menu-item");


  /* ========================================
     CURSOR POSITION
  ========================================= */

  document.addEventListener("mousemove", (event) => {

    if (!cursor) return;

    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    document.body.classList.add("cursor-visible");

  });


  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-visible");
  });


  /* ========================================
     MENU ITEMS
  ========================================= */

  menuItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

      /* agrandir le curseur */

      if (cursor) {
        cursor.classList.add("is-hovering");
      }


      /* afficher l'image */

      const imageSource = item.dataset.preview;

      if (preview && previewImage && imageSource) {

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
         si l'image risque de sortir à droite,
         elle apparaît à gauche du curseur
      */

      if (
        x + previewWidth + 50 >
        window.innerWidth
      ) {

        x = x - previewWidth - 60;

      }


      /*
         si elle risque de sortir en bas,
         elle remonte
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

  });


  /* ========================================
     CLICK
  ========================================= */

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

});


/*.  message pour le work in progress site web */ 

const siteNote = document.querySelector(".site-note");
const siteNoteClose = document.querySelector(".site-note-close");

if (siteNote && siteNoteClose) {
  siteNoteClose.addEventListener("click", () => {
    siteNote.classList.add("is-hidden");
  });
}

/*-------------------------------------------------*/