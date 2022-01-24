import './style.css';

const Projeto = ({url, title}) => {

  return(
    <div className="grid-item">
      <iframe src={url} title={title}></iframe>
      <h3>{title}</h3>
    </div>
  )
}

export default Projeto;