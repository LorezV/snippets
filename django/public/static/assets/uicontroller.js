function onInputFocus(element) {
    element.parentNode.querySelector(".cross").style.display = "block";
}

function onInputBlur(element) {
    setTimeout(_onInputBlur, 100, element)
}

function _onInputBlur(element) {
    element.parentNode.querySelector(".cross").style.display = "none";
}

function menuItemControl(target) {
    target.querySelector(".menu-link__desc").classList.toggle("active");
}
function clearSearchInput(target){
    target.parentNode.querySelector(".input_field").value = "";
}

function closeImageViewer(elem) {
    elem.parentNode.style.display = "none";
    elem.parentNode.innerHTML = "";
}
function onInputOnImage(target) {
    imageview = document.querySelector(".image-viewer")
    imageview.style.display = "flex";
    src = target.getAttribute("src")
    imageview.innerHTML = '<button class="close" onclick="closeImageViewer(this)">X</button> \
    <img src="./' + src + '" alt="" class="fullimage">'
}

function showFullImage(image) {
    
}