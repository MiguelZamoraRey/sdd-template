/**
 * FEAT-007: Datos de los ajedrecistas famosos.
 * Array en orden cronológico (AC-2).
 * Para añadir un ajedrecista: agrega un objeto al final del array
 * y coloca su imagen en src/assets/players/<nombre-en-kebab-case>.jpg
 */

export interface Player {
  /** Nombre completo del ajedrecista */
  name: string;
  /** Período o logro principal, e.g. "Campeón mundial 1972–1975" */
  years: string;
  /** Nacionalidad */
  nationality: string;
  /** Descripción breve: estilo de juego e importancia histórica (2–3 frases) */
  description: string;
  /**
   * Nombre del archivo de imagen en src/assets/players/.
   * Si no existe la imagen, se mostrará un placeholder con las iniciales.
   */
  image: string;
}

export const players: Player[] = [
  {
    name: 'Paul Morphy',
    years: 'Dominó el ajedrez mundial (1857–1859)',
    nationality: 'Estadounidense',
    description:
      'Considerado el primer genio del ajedrez moderno, Morphy revolucionó el juego con un estilo brillante y agresivo basado en el desarrollo rápido de las piezas. Nunca fue derrotado en una partida seria y se retiró del ajedrez con tan solo 21 años, dejando un legado imperecedero.',
    image: 'paul-morphy.jpg',
  },
  {
    name: 'Wilhelm Steinitz',
    years: 'Primer campeón mundial oficial (1886–1894)',
    nationality: 'Austro-estadounidense',
    description:
      'Steinitz fue el fundador de la escuela posicional del ajedrez y el primer campeón mundial oficial de la historia. Su enfoque científico del juego transformó el ajedrez de un arte intuitivo a una disciplina estratégica basada en principios sólidos.',
    image: 'wilhelm-steinitz.jpg',
  },
  {
    name: 'Emanuel Lasker',
    years: 'Campeón mundial (1894–1921)',
    nationality: 'Alemán',
    description:
      'Lasker ostentó el título mundial durante 27 años, el reinado más largo de la historia. Matemático y filósofo de formación, era conocido por su juego psicológico y su capacidad para adaptarse al estilo de cada rival, convirtiendo cada partida en una batalla de voluntades.',
    image: 'emanuel-lasker.jpg',
  },
  {
    name: 'José Raúl Capablanca',
    years: 'Campeón mundial (1921–1927)',
    nationality: 'Cubano',
    description:
      'Apodado "La máquina de ajedrez", Capablanca poseía un instinto natural para el juego que le permitía ver la solución correcta de forma casi instantánea. Su juego de finales era de una limpieza y precisión que muchos consideran insuperada hasta hoy.',
    image: 'jose-raul-capablanca.jpg',
  },
  {
    name: 'Alexander Alekhine',
    years: 'Campeón mundial (1927–1935, 1937–1946)',
    nationality: 'Ruso-francés',
    description:
      'Alekhine fue un atacante brillante y creativo que combinó la profundidad posicional con combinaciones tácticas de asombrosa belleza. Es el único campeón mundial que murió sin haber perdido el título y dejó una colección de partidas que siguen siendo estudiadas como obras de arte.',
    image: 'alexander-alekhine.jpg',
  },
  {
    name: 'Bobby Fischer',
    years: 'Campeón mundial (1972–1975)',
    nationality: 'Estadounidense',
    description:
      'Fischer fue el ajedrecista más dominante de su era, alcanzando una diferencia de puntos ELO sin precedentes respecto al resto del mundo. Su victoria sobre Boris Spassky en 1972 convirtió la partida de ajedrez en un símbolo de la Guerra Fría y lo elevó a la categoría de leyenda global.',
    image: 'bobby-fischer.jpg',
  },
  {
    name: 'Anatoly Karpov',
    years: 'Campeón mundial (1975–1985)',
    nationality: 'Ruso',
    description:
      'Karpov es el maestro de la restricción y el control posicional. Su estilo, aparentemente sencillo pero de una profundidad enorme, le permitió acumular más victorias en torneos que ningún otro jugador de la historia. Dominó el ajedrez mundial durante una década con una consistencia extraordinaria.',
    image: 'anatoly-karpov.jpg',
  },
  {
    name: 'Garry Kasparov',
    years: 'Campeón mundial (1985–2000)',
    nationality: 'Ruso',
    description:
      'Kasparov es ampliamente considerado el mejor ajedrecista de todos los tiempos. Combinó una preparación profundísima con un talento táctico explosivo, manteniendo el número 1 del ranking mundial durante 20 años. Su batalla contra el ordenador Deep Blue en 1997 marcó un hito en la historia de la inteligencia artificial.',
    image: 'garry-kasparov.jpg',
  },
  {
    name: 'Magnus Carlsen',
    years: 'Campeón mundial (2013–2023)',
    nationality: 'Noruego',
    description:
      'Carlsen es el jugador con el ELO más alto de la historia (2882) y destaca por su versatilidad absoluta: juega bien en todas las fases y en todos los estilos. Revolucionó el ajedrez moderno con su capacidad para ganar posiciones aparentemente tablas y convirtió el ajedrez rápido y blitz en un espectáculo global.',
    image: 'magnus-carlsen.jpg',
  },
];
