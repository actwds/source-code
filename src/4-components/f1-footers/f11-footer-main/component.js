import { createL21 } from "../../l2-logos/l21-logo-primary/component";

export const createF11 = () => {

  const logo = createL21({
    colour: "white",
    type: "horizontal",
    alt: "ACT Government",
  });

  return `
<div class="act-flex act-flex-middle-dark-grey">
  <div class="act-flex__container">
    <div class="act-flex__grid">

      <div class="act-flex__row">
        <div class="act-col__cw-3">
          <div class="act-box">
            <div class="act-footer-nav">
            <h4>Bunburung</h4>
            <ul>
              <li>Galu</li>
              <li>Bimbiang</li>
              <li>Dyindan</li>
              <li>Bunduluk</li>
              <li>Bural</li>
            </ul>
            </div>
          </div>
        </div>
        <div class="act-col__cw-3">
          <div class="act-box">
            <div class="act-footer-nav">
              <h4>Wirria</h4>
              <ul>
                <li>Dulwa</li>
                <li>Guginya</li>
                <li>Budyan</li>
                <li>Dimbiang</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="act-col__cw-3">
          <div class="act-box">
            <div class="act-footer-nav">
              <h4>Gurubun</h4>
              <ul>
                <li>Daramoolen</li>
                <li>Yerradhang</li>
                <li>Gummiuk</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="act-col__cw-3">
          <div class="act-box">
            <div class="act-footer-nav">
              <h4>Karrugang</h4>
              <ul>
                <li>Gamburra</li>
                <li>Yumba<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="act-flex__row">
        <div class="act-col__cw-12">
          <div class="act-box">
            <div class="act-footer-main">
              <div class="act-footer-main__container">
                <div class="act-footer-main__content">
                  <p>
                    <a class="" href="#" target="_blank" title="Accessibility">Accessibility</a>
                    <a class="" href="#" target="_blank" title="Privacy">Privacy</a>
                    <a class="" href="#" target="_blank" title="Disclaimer">Disclaimer</a>
                    <a class="" href="#" target="_blank" title="Copyright">Copyright</a>
                    <a class="" href="#" target="_blank" title="Sitemap">Sitemap</a>
                  </p>
                </div>
                <div class="act-footer-main__content">
                  <div class="act-footer-main__socials">
                    <h5>Follow us</h5>
                    <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Facebook">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Twitter">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Linkedin">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a class="act-footer-main__socials__icon" href="#" target="_blank" title="YouTube">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`;
};
