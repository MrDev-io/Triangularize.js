$.fn.trianglarize = function(options) {
    var settings = $.extend(
      {
        triHeight: 100,
        spacingV: 0,
        spacingH: 0,
        triColor: "#00DDFF",
        triColorU: "#DD00FF",
        startUpsdwn: false
      },
      options
    );
    var triHeight = settings.triHeight; 
    var startUpsdwn = settings.startUpsdwn;
    var spacingV = settings.spacingV;
    var spacingH = settings.spacingH;
    var triColor = settings.triColor;
    var triColorU = settings.triColorU;
  
    var triWidth = triHeight / Math.sqrt(3) * 2;
    triCountH = this.width() / triWidth + 1;
    triCountV = this.height() / triHeight;
    for (i = 0; i < triCountV; i++) {
      var upsdwn = startUpsdwn;
      var offset = 0;
      var hOffset = 0; 
      var offset = 0 - triWidth / 2; 
      for (j = 0; j < triCountH * 2; j++) {
        if (upsdwn) {
          var tmp = i * triHeight + spacingV*i;
          this.append(
            '<div class="upsdwn-triangle" style="top: ' +
              tmp +
              "px; left: " +
              ((j * (triWidth / 2)) + offset + (spacingH*j)) +
              'px;"></div>'
          );
        } else {
          var tmp = i * triHeight + spacingV*i; 
          this.append(
            '<div class="triangle" style="top: ' +
              tmp +
              "px; left: " +
              ((j * (triWidth / 2)) + offset + (spacingH*j)) +
              'px;"></div>'
          );
        }
        upsdwn = !upsdwn;
      }
      startUpsdwn = !startUpsdwn;
    }
    $(".triangle").css("border-left", triWidth / 2 + "px solid transparent");
    $(".triangle").css("border-right", triWidth / 2 + "px solid transparent");
    $(".triangle").css("border-bottom", triHeight + "px solid " + triColor);
    $(".upsdwn-triangle").css(
      "border-left",
      triWidth / 2 + "px solid transparent"
    );
    $(".upsdwn-triangle").css(
      "border-right",
      triWidth / 2 + "px solid transparent"
    );
    $(".upsdwn-triangle").css(
      "border-top",
      triHeight + "px solid " + settings.triColorU
    );
    return this;
  };