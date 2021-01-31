import $ from "jquery";
import SignaturePad from "signature_pad/dist/signature_pad";

let wrapper = document.querySelector(".signature");
// let savePNGButton = wrapper.querySelector("[data-action='save-png']");
// let clearButton = wrapper.querySelector("[data-action='clear']");
// let canvas = wrapper.querySelector("canvas");
//
// let options = {
//     // It"s Necessary to use an opaque color when saving image as JPEG;
//     // this option can be omitted if only saving as PNG or SVG
//     backgroundColor: "rgb(255, 255, 255)",
//     penColor: "rgb(0, 0, 0)"
// };
// let signatureImg = wrapper.querySelector(".signature-img");
// let signaturePad = new SignaturePad(canvas, options);
//
// // Adjust canvas coordinate space taking into account pixel ratio,
// // to make it look crisp on mobile devices.
// // This also causes canvas to be cleared.
// function resizeCanvas() {
//     // When zoomed out to less than 100%, for some very strange reason,
//     // some browsers report devicePixelRatio as less than 1
//     // and only part of the canvas is cleared then.
//     let ratio =  Math.max(window.devicePixelRatio || 1, 1);
//
//     // This part causes the canvas to be cleared
//     canvas.width = canvas.offsetWidth * ratio;
//     canvas.height = canvas.offsetHeight * ratio;
//     canvas.getContext("2d").scale(ratio, ratio);
//
//     // This library does not listen for canvas changes, so after the canvas is automatically
//     // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
//     // canvas looks empty, because the internal data of this library wasn"t cleared. To make sure
//     // that the state of this library is consistent with visual state of the canvas, you
//     // have to clear it manually.
//     signaturePad.clear();
// }
//
// // On mobile devices it might make more sense to listen to orientation change,
// // rather than window resize events.
// window.onresize = resizeCanvas;
// resizeCanvas();
//
// function download(dataURL, filename) {
//     let blob = dataURLToBlob(dataURL);
//     let url = window.URL.createObjectURL(blob);
//
//     let a = document.createElement("a");
//     a.style = "display: none";
//     a.href = url;
//     a.download = filename;
//
//     document.body.appendChild(a);
//     a.click();
//
//     window.URL.revokeObjectURL(url);
// }
//
// clearButton.addEventListener("click", function (event) {
//     console.log(this.closest(".signature"));
//     let currentWrap = this.closest(".signature");
//     currentWrap.querySelector(".signature-img").src = "";
//     // currentWrap.querySelector("canvas").clear();
//     signaturePad.clear();
// });
//
//
// savePNGButton.addEventListener("click", function (event) {
//     if (signaturePad.isEmpty()) {
//         alert("Please provide a signature first.");
//     } else {
//         let dataURL = signaturePad.toDataURL();
//         console.log(dataURL);
//         this.closest(".signature").querySelector(".signature-img").src = dataURL;
//         // download(dataURL, "signature.png");
//     }
// });


  
  $(document).ready(function () {
$('.signature-pad').each(function () {
    var signaturePad = new SignaturePad(document.getElementById(this.id), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
    })
});
});
