import React from 'react';

import tshirtImagem from '../../assets/tshirt.png'
import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href='#'>Compartilhar</a>
        <a href='#'>Vender um igual</a>
      </Row>

      <Panel>
        <Column>
        <Gallery>
          <img alt='T-shirt'  src={tshirtImagem} />
        </Gallery>

        <Info />
        </Column>
        
        

        <Column>
        <ProductAction />
        <SellerInfo />


        <WarratySection />
        <WarratySection />
        <WarratySection />
        </Column>
      </Panel>
      
    </Container>
  );
};

const WarratySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="titlle">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o seu produto ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="titlle">Garantia com o vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a>Saiba mais spbre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus blandit ligula, ullamcorper semper nulla semper non. 
    In hac habitasse platea dictumst. Nam tristique tincidunt bibendum. Donec lacus odio, interdum ut dignissim sed, dignissim eget lectus. Sed hendrerit elit sed lectus tincidunt laoreet. Fusce sit amet pretium augue, a ornare erat.
    <br />
    <br />
    Itens inclusos: <br />
    -1x LED <br />
    -1x LED <br />
    -1x LED <br />
    -1x LED <br />
    <br />
    Fusce non iaculis urna. Integer accumsan, nunc vitae ultricies commodo, mi elit fringilla odio, a fringilla dolor sem id magna. Proin eu gravida tellus. 
    In a sapien eget quam mollis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
    


  </Description>
)

export default Product;
