import abdellah from "./picts/abdellah.jpg";
import styled from "styled-components";
import BookmanOldStyle from "./Bookman/BookmanOldStylBoldItalic.ttf";

const Roundpic = styled.img`
  background: transparent;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  width: 50px;
  height: 50px;
  z-index: 1;
`;
const Overlay = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(37, 230, 79, 0.3);
  transition: 0.5s ease;
  z-index: 10;
  position: absolute;
`;
const PicWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  transition: 0.5s ease;
  margin-bottom: -20px;
`;
const Textwrapper = styled.div`
  margin-top: 40px;
  width: 90%;
  height: 40%;
  text-align: center;
  color: white;
`;
const Small = styled.div`
  margin-top: 1em;
  height: 40%;
  font-size: 12px;
  font-weight: 900;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const BKman = styled.div`
  font-family: BookmanOS;
  font-size: 15px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.52);
  @font-face {
    font-family: BookmanOS;
    font-style: italic;

    font-weight: 900;
    src: url(${BookmanOldStyle});
  }
`;
const BodyWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: rgba(191, 255, 250, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: cyan;
    transition: 0.6s;
  }
`;

const Body = styled.body``;

function ref5() {
  return (
    <Body>
      <a href="https://www.linkedin.com/in/abdellah-fihri-767326152/">
        <BodyWrapper>
          <PicWrapper>
            <Overlay />
            <Roundpic src={abdellah} alt="abdellahpict" />
          </PicWrapper>
          <Textwrapper>
            <BKman>
              "Benedikt, <br />loves
              <br />
              to code."
            </BKman>
            <Small>Abdellah</Small>
          </Textwrapper>
        </BodyWrapper>
      </a>
    </Body>
  );
}
export default ref5;
