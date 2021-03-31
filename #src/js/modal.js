const signinBtns = document.querySelectorAll(".sign-in-js-button");
const signupBtns = document.querySelectorAll(".sign-up-js-button");
const consultationBtns = document.querySelectorAll(".consultation-js-button");
const signinModal = document.querySelector(".modal-sign-in");
const signupModal = document.querySelector(".modal-sign-up");
const consultationModal = document.querySelector(".modal-consultation");
const signinModalWindow = document.querySelector(".modal-sign-in__wrapper");
const signupModalWindow = document.querySelector(".modal-sign-up__wrapper");
const consultationModalWindow = document.querySelector(".modal-consultation__wrapper");
const modalCloseBtns = document.querySelectorAll(".btn-close");
const modalCloseLinks = document.querySelectorAll(".modal-close-link-js");
const modalSigninClose = () => {
    showScroll();
    signinModal.classList.remove("active");
    signinModalWindow.classList.remove("active");
};
const modalSignupClose = () => {
    showScroll();
    signupModal.classList.remove("active");
    signupModalWindow.classList.remove("active");
};
const modalConsultationClose = () => {
    showScroll();
    consultationModal.classList.remove("active");
    consultationModalWindow.classList.remove("active");
};

if (signinModal) {

    if (signinBtns.length > 0) {
        signinBtns.forEach(signinBtn => {
            signinBtn.addEventListener("click", function (e) {
                signinModal.classList.add("active");
                signinModalWindow.classList.add("active");

                if (signinModal.classList.contains("active")) {
                    hideScroll();
                } else {
                    showScroll();
                }
            });
        });
    }

    if (modalCloseBtns.length > 0) {
        modalCloseBtns.forEach( modalCloseBtn => {
            modalCloseBtn.addEventListener("click", function (e) {
                modalSigninClose();
            });
        });
    }

    if (signupBtns.length > 0) {
        signupBtns.forEach( signupBtn => {
            signupBtn.addEventListener("click", function (e) {
                modalSigninClose();
            });
        });
    }

    if (modalCloseLinks.length > 0) {
        modalCloseLinks.forEach( modalCloseLink => {
            modalCloseLink.addEventListener("click", function (e) {
                modalSigninClose();
            });
        });
    }

    signinModal.addEventListener("click", function (event) {
        if (event.target.closest(".modal-sign-in__wrapper")) {
            return;
        }
        else {
            modalSigninClose();
        }
    });

}

if (signupModal) {

    if (signupBtns.length > 0) {
        signupBtns.forEach(signupBtn => {
            signupBtn.addEventListener("click", function (e) {
                signupModal.classList.add("active");
                signupModalWindow.classList.add("active");

                if (signupModal.classList.contains("active")) {
                    hideScroll();
                } else {
                    showScroll();
                }
            });
        });
    }

    if (modalCloseBtns.length > 0) {
        modalCloseBtns.forEach( modalCloseBtn => {
            modalCloseBtn.addEventListener("click", function (e) {
                modalSignupClose();
            });
        });
    }

    if (signinBtns.length > 0) {
        signinBtns.forEach( signinBtn => {
            signinBtn.addEventListener("click", function (e) {
                modalSignupClose();
            });
        });
    }

    if (modalCloseLinks.length > 0) {
        modalCloseLinks.forEach( modalCloseLink => {
            modalCloseLink.addEventListener("click", function (e) {
                modalSignupClose();
            });
        });
    }

    signupModal.addEventListener("click", function (event) {
        if (event.target.closest(".modal-sign-up__wrapper")) {
            return;
        }
        else {
            modalSignupClose();
        }
    });

    if (consultationModal) {

        if (consultationBtns.length > 0) {
            consultationBtns.forEach(consultationBtn => {
                consultationBtn.addEventListener("click", function (e) {
                    consultationModal.classList.add("active");
                    consultationModalWindow.classList.add("active");

                    if (consultationModal.classList.contains("active")) {
                        hideScroll();
                    } else {
                        showScroll();
                    }
                });
            });
        }

        if (modalCloseBtns.length > 0) {
            modalCloseBtns.forEach( modalCloseBtn => {
                modalCloseBtn.addEventListener("click", function (e) {
                    modalSignupClose();
                });
            });
        }

        consultationModal.addEventListener("click", function (event) {
            if (event.target.closest(".modal-sign-up__wrapper")) {
                return;
            }
            else {
                modalConsultationClose();
            }
        });
    }

}