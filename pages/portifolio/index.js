import React from "react";
import { Container, Content, MainText, ViewCarousel } from "./styles";
import TextyAnim from "rc-texty";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

function goToLink(item) {
  if (item === 0) {
    return window.open(
      "https://play.google.com/store/apps/details?id=br.com.newesmirna.skyz"
    );
  } else if (item === 1) {
    return window.open(
      "https://play.google.com/store/apps/details?id=com.keylive"
    );
  } else if (item === 2) {
    return window.open("https://github.com/zecampos/app-downz");
  }
}

export default function Portifolio() {
  return (
    <Container>
      <Content>
        <MainText>
          <TextyAnim type="left" mode="smooth" onEnd={(type) => {}}>
            Portifolio
          </TextyAnim>
        </MainText>
        <ViewCarousel>
          <Carousel
            showArrows={true}
            showIndicators
            infiniteLoop
            autoPlay
            // onChange={onChange}
            onClickItem={goToLink}
            // onClickThumb={onClickThumb}
          >
            <div>
              <img src="/images/portifolioesmirna1.png" />

              <p className="legend">Esmirna App</p>
            </div>
            <div>
              <img src="/images/keyliveportifolio2.png" />
              <p className="legend">Keylive</p>
            </div>
            <div>
              <img src="/images/downzportifolio1.png" />
              <p className="legend">DownZ</p>
            </div>
          </Carousel>
        </ViewCarousel>
      </Content>
    </Container>
  );
}
