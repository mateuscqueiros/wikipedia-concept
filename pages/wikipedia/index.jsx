import styles from '@styles/wikipedia/style.module.scss';

export default function Wikipedia() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.inner}>

          <div className={styles.logo}>
            <img src="/images/wikipedia/logo_wikipedia.png"></img>
          </div>
          <div>
            <div className={styles.links}>
              <ul>
                <li>
                  <img src="/images/wikipedia/icons/language.png" />
                  Language
                </li>
                <li>
                  <img src="/images/wikipedia/icons/star.png" />
                  Watch
                </li>
                <li>
                  <img src="/images/wikipedia/icons/history.png" />
                  History
                </li>
                <li>
                  <img src="/images/wikipedia/icons/edit.png" />

                  Edit
                </li>
              </ul>
            </div>
            
          </div>
          <div className={styles.menu}>
              <div className={styles.inner}>
                <img src="/images/wikipedia/icons/menu.png" />
              </div>
            </div>
          </div>
        
      </div>
      <main>
        
          <div className={styles.head}>
            <img src="/images/wikipedia/jobs_2.jpg" />
          </div>
          <div className={styles.inner}>
            <article>
                <h1>Steve Jobs</h1>
                <div className={styles.info}>
                  <ul>
                    <li>
                      <span>Nascimento: </span>
                      24 de fevereiro de 1955
                    </li>
                    <li>
                      <span>Morte: </span>
                      5 de outubro de 2011
                    </li>
                    <li>
                      <span>Fortuna: </span>
                      8 bilhões
                    </li>
                    <li>
                      <span>Ocupação: </span>
                      Ex-presidente da Apple Inc.
                    </li>
                  </ul>
                </div>
                <div className={styles.main_text}>
                  <p>Steven Paul Jobs (São Francisco, Califórnia, 24 de fevereiro de 1955 — Palo Alto, Califórnia, 5 de outubro de 2011) foi um inventor, empresário e magnata americano no setor da informática. Notabilizou-se como co-fundador, presidente e diretor executivo da Apple Inc. e por revolucionar seis indústrias: computadores pessoais, filmes de animação, música, telefones, tablets e publicações digitais. Além de sua ligação com a Apple, foi diretor executivo da empresa de animação por computação gráfica Pixar e acionista individual máximo da The Walt Disney Company. Morreu no dia 5 de outubro de 2011, aos 56 anos de idade, devido a um câncer pancreático.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos vitae ratione quaerat fugiat doloribus nihil? Rerum quo eum, repellendus eveniet Lorem dolor, maxime iste quasi aspernatur ipsum molestiae, vel dolore.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae animi voluptatibus recusandae, ipsum cumque architecto quia, repudiandae cum enim molestias excepturi voluptatem optio sequi? Quaerat cupiditate blanditiis aliquam deleniti.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus. Lorem ipsum dolor tur adipisicing elit. DolVoluptate, repudiandae possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus.os illum. Voluptate, repudiandae possimus. </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus.</p>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, impedit suscipit. Omnis amet maiores a expedita, tempore dolor sequi quis aliquid ipsum illo temporibus aperiam quos illum. Voluptate, repudiandae possimus.</p>
              
                  
                </div>
            </article>
        </div>
        
      </main>

      <footer>
        <div className={styles.inner}>
          Made by Mateus Queirós. @mt.ces
        </div>
      </footer>
      
    </div>
  )
}
