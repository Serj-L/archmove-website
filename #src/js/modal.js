const siginBtn = document.querySelector(".header__search-sign-link--sign-in");
const signinModal = document.querySelector(".modal-sign-in");
const signinModalWindow = document.querySelector(".modal-sign-in__wrapper");
const modalCloseBtn = document.querySelector(".btn-close");
const modalCreateNewAccBtn = document.querySelector(".modal-button-create-new-acc");
const modalStaySignedLink = document.querySelector(".modal-sign-in__stay-signed-forgot");
const modalSigninClose = () => {
    showScroll();
    signinModal.classList.remove("active");
    signinModalWindow.classList.remove("active");
};

if (signinModal) {

    siginBtn.addEventListener("click", function () {
        signinModal.classList.add("active");
        signinModalWindow.classList.add("active");

        if (signinModal.classList.contains("active")) {
            hideScroll();
        } else {
            showScroll();
        }
    });

    modalCloseBtn.addEventListener("click", function () {
        modalSigninClose();
    });

    modalCreateNewAccBtn.addEventListener("click", function () {
        modalSigninClose();
    });

    modalStaySignedLink.addEventListener("click", function () {
        modalSigninClose();
    });

    signinModal.addEventListener("click", function (event) {
        if (event.target.closest(".modal-sign-in__wrapper")) {
            return;
        }
        else {
            modalSigninClose();
        }
    });

}