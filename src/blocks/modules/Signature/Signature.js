import $ from "jquery";
import SignaturePad from "signature_pad/dist/signature_pad";

$(document).ready(function () {
    const signature = $(".signature-pad");
    const options = {
        // It"s Necessary to use an opaque color when saving image as JPEG;
        // this option can be omitted if only saving as PNG or SVG
        backgroundColor: "rgb(255, 255, 255)",
        penColor: "rgb(17 49 80)"
    };
    $("#Signatures-tab").on('shown.bs.tab', function(){
        signature.each(function () {
            const canvas = this;
            const wrapper = this.closest(".signature");
            const savePNGButton = wrapper.querySelector("[data-action='save-png']");
            const clearButton = wrapper.querySelector("[data-action='clear']");
            const sigImg = this.closest(".signature").querySelector(".signature-img");
            clearButton.addEventListener("click", function (event) {
                signaturePad.clear();
                sigImg.src = "";
                sigImg.classList.add("d-none");
            });
            savePNGButton.addEventListener("click", function (event) {
                let dataURL = signaturePad.toDataURL();
        
                if (signaturePad.isEmpty()) {
                    sigImg.classList.add("d-none");
                    alert("Please provide a signature first.");
                } else {
                    console.log(dataURL);
                    sigImg.classList.remove("d-none");
                    sigImg.src = dataURL;
                    // download(dataURL, "signature.png");
                }
            });
            function resizeCanvas() {
                // When zoomed out to less than 100%, for some very strange reason,
                // some browsers report devicePixelRatio as less than 1
                // and only part of the canvas is cleared then.
                let ratio = Math.max(window.devicePixelRatio || 1, 1);
                canvas.width = canvas.offsetWidth * ratio;
                canvas.height = canvas.offsetHeight * ratio;
                canvas.getContext("2d").scale(ratio, ratio);
            }
    
            // On mobile devices it might make more sense to listen to orientation change,
            // rather than window resize events.
            window.onresize = resizeCanvas(this);
            resizeCanvas(this);
    
            let signaturePad = new SignaturePad(document.getElementById(this.id), options);
        });
    });
    
});
