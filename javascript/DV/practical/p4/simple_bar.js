window.onload = function () {
  context = document.getElementById("mycanvas");

  theContext = context.getContext("2d");
  jQuery.get("data.txt", function (data) {
    //process text file line by line
    var textByLine = data.split("\n");
    names = [];
    marks = [];

    var i = 0;
    for (i = 1; i < textByLine.length; i++) {
      m = textByLine[i].split(",");

      names.push(m[0]);
      marks.push(parseInt(m[1]));
    }

    console.log(marks);
    colors = ["blue", "green", "brown", "yellow"];

    var x = 50;
    var y = 75;
    widthx = 80;

    widthy = 80;
    theContext.font = "25px Oswald";
    theContext.strokeText("Students Marks Comaprision", 50, 50);
    for (i = 0; i < names.length; i++) {
      alpha = 0.5 + i * 0.01;

      theContext.font = "15px Roman";
      theContext.strokeText(names[i], x, widthy / 2 + widthy + i * 140);

      theContext.stroke();

      theContext.fillStyle = `rgb(
            ${Math.floor(255 - 40 * i)},
            ${Math.floor(255 - 40 * i * 2)},
            0)`;
      theContext.fillRect(
        x + 50,
        y + i * 140,
        widthx + marks[i] + i * 20,
        widthy
      );

      theContext.fillStyle = "grey";
    }
  });
};
