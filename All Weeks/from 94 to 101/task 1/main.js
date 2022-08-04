      window.onload = function () {
                for (let i = 0; i < document.links.length; i++) {
          let link = document.links[i];
          if (link.classList.contains("open") && link.textContent === "Elzero")
            link.click();
        }
      };