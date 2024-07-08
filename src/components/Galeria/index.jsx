import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagen from "./Imagen";
import Tag from "./Tags";

const GaleriaContainer = styled.div`
  display: flex;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const SectionFluida = styled.section`
  flex-grow: 1;
`;

const Galeria = ({
  fotos = [],
  setTag,
  fotoSeleccionada,
  alAlternarFavorito,
}) => {
  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SectionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => (
              <Imagen
                foto={foto}
                key={foto.id}
                alSolicitarZoom={fotoSeleccionada}
                alAlternarFavorito={alAlternarFavorito}
              />
            ))}
          </ImagenesContainer>
        </SectionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
