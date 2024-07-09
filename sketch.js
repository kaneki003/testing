const density = "@#w∲$10?!:-,.  ";

let video;
let asciiDiv;

function setup() {
  //   createCanvas(400, 400);
  noCanvas();
  video = createCapture(VIDEO);
  // video.size(100, 50);
  video.size(200, 72);
  asciiDiv = createDiv();
  video.hide();
}

function draw() {
  video.loadPixels();
  let asciiImage = " ";

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") {
        asciiImage += "&nbsp;";
      } else {
        asciiImage += c;
      }
      //   row += ;
    }
    asciiImage += "<br>";

    // createDiv(row);
  }
  asciiDiv.html(asciiImage);
}
