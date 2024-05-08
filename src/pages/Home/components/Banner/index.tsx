import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";
import { BannerContainer, BannerDescription, BannerDescriptionCircle, BannerImage, BannerText, BannerWrapper } from "./styles";

export function Banner() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <BannerDescription>
            <ul>
              <li>
                <BannerDescriptionCircle color="yellow-dark">
                  <ShoppingCartSimple weight="fill" />
                </BannerDescriptionCircle>
                Compra simples e segura
              </li>
              <li>
                <BannerDescriptionCircle color="yellow">
                  <Timer weight="fill" />
                </BannerDescriptionCircle>
                Entrega rápida e rastreada
              </li>
            </ul>
            <ul>
              <li>
                <BannerDescriptionCircle color="gray">
                  <Package weight="fill" />
                </BannerDescriptionCircle>
                Embalagem mantém o café intacto
              </li>
              <li>
                <BannerDescriptionCircle color="purple">
                  <Coffee weight="fill" />
                </BannerDescriptionCircle>
                O café chega fresquinho até você
              </li>
            </ul>
          </BannerDescription>
        </BannerText>
        <BannerImage src="/images/coffee-delivery-cup.svg" />
      </BannerContainer>
    </BannerWrapper>
  )
}