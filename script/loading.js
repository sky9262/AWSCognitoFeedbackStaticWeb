
    // Show loading image
    function showLoading() {
        var loadingEl = document.createElement("div");
        loadingEl.id = "loading";
        loadingEl.style.position = "fixed";
        loadingEl.style.top = "0";
        loadingEl.style.left = "0";
        loadingEl.style.width = "100%";
        loadingEl.style.height = "100%";
        loadingEl.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        loadingEl.style.zIndex = "9999";
  
        var spinnerEl = document.createElement("div");
        spinnerEl.className = "spinner";
        spinnerEl.style.position = "absolute";
        spinnerEl.style.top = "50%";
        spinnerEl.style.left = "50%";
        spinnerEl.style.transform = "translate(-50%, -50%)";
  
        var spinnerInnerEl = document.createElement("div");
        spinnerInnerEl.className = "spinner-inner";
        spinnerInnerEl.style.height = "200px";
        spinnerInnerEl.style.width = "200px";
        spinnerInnerEl.style.backgroundImage = "url('https://cdn.dribbble.com/users/141019/screenshots/1450029/hourglass.gif')";
        spinnerInnerEl.style.backgroundRepeat = "no-repeat";
        spinnerInnerEl.style.backgroundPosition = "center";
        spinnerInnerEl.style.backgroundSize = "cover";
        spinnerEl.appendChild(spinnerInnerEl);
  
        loadingEl.appendChild(spinnerEl);
  
        document.body.appendChild(loadingEl);
      }
      // Hide loading image
      function removeLoading() {
    var loadingEl = document.getElementById("loading");
    if (loadingEl) {
      document.body.removeChild(loadingEl);
    }
  }
    