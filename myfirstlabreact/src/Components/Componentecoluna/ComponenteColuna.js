// import  ico1 from '../../images/icon1.png';
// import  ico2 from '../../images/icon2.png';
// import  ico3 from '../../images/icon3.png';
// import  ico4 from '../../images/icon4.png';

import './ComponenteColuna.css';

// let matrizIcones = [ico1, ico2, ico3, ico4];

function ComponenteColuna (props) {
    return (
        <article className="colunaArticle" >
            <img className="colArtImg" src={JSON.parse(props.imagem)}/>
            {/* <img className="colArtImg" src={matrizIcones[props.imagem]}/> */}
            <h1 className="colArtTit">{props.titulo}</h1>
            <p className="colArtTex">{props.textual}</p>            
        </article>
    )
}
export default ComponenteColuna;
