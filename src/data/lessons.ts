export interface Question {
  id: number
  type: 'multiple-choice' | 'text'
  difficulty: 1 | 2 | 3 // 1: easy, 2: medium, 3: hard
  question: string
  options?: string[]
  correctAnswer: string
  explanation?: string
}

export interface Lesson {
  id: number
  title: string
  description: string
  icon: string
  questions: Question[]
  xpReward: number
  badge?: string
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Nombres et Calculs',
    description: 'Fractions, puissances, racines carrées',
    icon: '🔢',
    xpReward: 100,
    badge: '🎯',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la valeur de √16 ?',
        options: ['2', '4', '8', '16'],
        correctAnswer: '4',
        explanation: 'La racine carrée de 16 est 4 car 4 × 4 = 16'
      },
      {
        id: 2,
        type: 'text',
        difficulty: 1,
        question: 'Calcule 2³ × 2²',
        correctAnswer: '32',
        explanation: '2³ = 8 et 2² = 4, donc 8 × 4 = 32'
      },
      {
        id: 3,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle fraction est équivalente à 0.75 ?',
        options: ['1/4', '2/3', '3/4', '4/5'],
        correctAnswer: '3/4',
        explanation: '0.75 = 75/100 = 3/4'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Simplifie la fraction 24/36',
        options: ['1/2', '2/3', '3/4', '4/6'],
        correctAnswer: '2/3',
        explanation: '24/36 = (24÷12)/(36÷12) = 2/3'
      },
      {
        id: 5,
        type: 'text',
        difficulty: 2,
        question: 'Calcule √(9 + 16)',
        correctAnswer: '5',
        explanation: '√(9 + 16) = √25 = 5'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la valeur de 2⁻² ?',
        options: ['-4', '-2', '0.25', '0.5'],
        correctAnswer: '0.25',
        explanation: '2⁻² = 1/2² = 1/4 = 0.25'
      },
      {
        id: 7,
        type: 'text',
        difficulty: 3,
        question: 'Calcule (2³)²',
        correctAnswer: '64',
        explanation: '(2³)² = 8² = 64'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la valeur de √(2² + 3²) ?',
        options: ['5', '√13', '6', '7'],
        correctAnswer: '√13',
        explanation: '√(2² + 3²) = √(4 + 9) = √13'
      },
      {
        id: 9,
        type: 'text',
        difficulty: 3,
        question: 'Calcule 2⁴ × 2⁻²',
        correctAnswer: '4',
        explanation: '2⁴ × 2⁻² = 16 × 0.25 = 4'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la valeur de (√2)² ?',
        options: ['1', '2', '4', '√2'],
        correctAnswer: '2',
        explanation: '(√2)² = 2 car la racine carrée et le carré s\'annulent'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Combien font 7 × 8 ?',
        options: ['54', '56', '58', '64'],
        correctAnswer: '56',
        explanation: '7 × 8 = 56.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Quel est le carré de 15 ?',
        correctAnswer: '225',
        explanation: '15 × 15 = 225.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle fraction est égale à 0,2 ?',
        options: ['1/2', '1/5', '2/5', '1/10'],
        correctAnswer: '1/5',
        explanation: '0,2 = 1/5.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Calcule 3⁴',
        correctAnswer: '81',
        explanation: '3 × 3 × 3 × 3 = 81.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la racine carrée de 121 ?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '11',
        explanation: '√121 = 11.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Quel est le résultat de 5² ?', options: ['10', '25', '15', '20'], correctAnswer: '25', explanation: '5 × 5 = 25.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Calcule 12 + 17', correctAnswer: '29', explanation: '12 + 17 = 29.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Quelle fraction est égale à 0,4 ?', options: ['1/2', '2/5', '3/5', '4/5'], correctAnswer: '2/5', explanation: '0,4 = 2/5.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Calcule 3 × (7 + 2)', correctAnswer: '27', explanation: '3 × 9 = 27.' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Quelle est la valeur de 2⁵ ?', options: ['10', '16', '32', '64'], correctAnswer: '32', explanation: '2 × 2 × 2 × 2 × 2 = 32.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Calcule la racine carrée de 49', correctAnswer: '7', explanation: '√49 = 7.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Quel est le résultat de 100 ÷ 4 ?', options: ['20', '25', '30', '40'], correctAnswer: '25', explanation: '100 ÷ 4 = 25.' },
      { id: 23, type: 'text', difficulty: 1, question: 'Calcule 8 × 7', correctAnswer: '56', explanation: '8 × 7 = 56.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Quelle fraction est égale à 0,75 ?', options: ['1/2', '3/4', '2/3', '1/4'], correctAnswer: '3/4', explanation: '0,75 = 3/4.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Calcule 2³ + 3²', correctAnswer: '17', explanation: '8 + 9 = 17.' },
      {
        id: 26,
        type: 'text',
        difficulty: 2,
        question: 'Calcule 3/4 + 1/6',
        correctAnswer: '11/12',
        explanation: '3/4 + 1/6 = 9/12 + 2/12 = 11/12'
      },
      {
        id: 27,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la valeur de (2/3)² ?',
        options: ['1/3', '2/3', '4/9', '4/6'],
        correctAnswer: '4/9',
        explanation: '(2/3)² = 2²/3² = 4/9'
      },
      {
        id: 28,
        type: 'text',
        difficulty: 3,
        question: 'Calcule √(2² + 3²)',
        correctAnswer: '√13',
        explanation: '√(4 + 9) = √13'
      },
      {
        id: 29,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la valeur de 2⁻³ ?',
        options: ['-8', '-6', '0.125', '0.25'],
        correctAnswer: '0.125',
        explanation: '2⁻³ = 1/2³ = 1/8 = 0.125'
      },
      {
        id: 30,
        type: 'text',
        difficulty: 3,
        question: 'Calcule (3/4) ÷ (1/2)',
        correctAnswer: '3/2',
        explanation: '(3/4) ÷ (1/2) = (3/4) × (2/1) = 6/4 = 3/2'
      }
    ]
  },
  {
    id: 2,
    title: 'Géométrie',
    description: 'Théorème de Pythagore, trigonométrie',
    icon: '📐',
    xpReward: 150,
    badge: '📏',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Dans un triangle rectangle, le carré de l\'hypoténuse est égal à...',
        options: [
          'la somme des carrés des deux autres côtés',
          'le produit des deux autres côtés',
          'la différence des carrés des deux autres côtés',
          'la moyenne des carrés des deux autres côtés'
        ],
        correctAnswer: 'la somme des carrés des deux autres côtés',
        explanation: 'C\'est le théorème de Pythagore : a² + b² = c²'
      },
      {
        id: 2,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Dans un triangle rectangle, le cosinus d\'un angle aigu est égal à...',
        options: [
          'adjacent/hypoténuse',
          'opposé/hypoténuse',
          'opposé/adjacent',
          'adjacent/opposé'
        ],
        correctAnswer: 'adjacent/hypoténuse',
        explanation: 'Le cosinus d\'un angle est le rapport du côté adjacent sur l\'hypoténuse'
      },
      {
        id: 3,
        type: 'text',
        difficulty: 1,
        question: 'Dans un triangle rectangle, si les côtés de l\'angle droit mesurent 3 cm et 4 cm, quelle est la longueur de l\'hypoténuse ?',
        correctAnswer: '5',
        explanation: 'D\'après le théorème de Pythagore : 3² + 4² = 9 + 16 = 25 = 5²'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la formule du sinus d\'un angle dans un triangle rectangle ?',
        options: [
          'opposé/hypoténuse',
          'adjacent/hypoténuse',
          'opposé/adjacent',
          'adjacent/opposé'
        ],
        correctAnswer: 'opposé/hypoténuse',
        explanation: 'Le sinus d\'un angle est le rapport du côté opposé sur l\'hypoténuse'
      },
      {
        id: 5,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Dans un triangle rectangle, si l\'hypoténuse mesure 10 cm et un angle aigu mesure 30°, quelle est la longueur du côté adjacent à cet angle ?',
        options: [
          '10 × cos(30°)',
          '10 × sin(30°)',
          '10 × tan(30°)',
          '10 ÷ cos(30°)'
        ],
        correctAnswer: '10 × cos(30°)',
        explanation: 'Le cosinus d\'un angle est le rapport du côté adjacent sur l\'hypoténuse, donc adjacent = hypoténuse × cos(angle)'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la formule de la tangente d\'un angle dans un triangle rectangle ?',
        options: [
          'opposé/adjacent',
          'adjacent/opposé',
          'opposé/hypoténuse',
          'adjacent/hypoténuse'
        ],
        correctAnswer: 'opposé/adjacent',
        explanation: 'La tangente d\'un angle est le rapport du côté opposé sur le côté adjacent'
      },
      {
        id: 7,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Dans un triangle rectangle, si un angle aigu mesure 45° et l\'hypoténuse mesure 10 cm, quelle est la longueur des côtés de l\'angle droit ?',
        options: [
          '10 ÷ √2',
          '10 × √2',
          '10 × sin(45°)',
          '10 × cos(45°)'
        ],
        correctAnswer: '10 ÷ √2',
        explanation: 'Dans un triangle rectangle isocèle, les côtés de l\'angle droit sont égaux et valent hypoténuse/√2'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la relation entre le sinus et le cosinus d\'un angle aigu dans un triangle rectangle ?',
        options: [
          'sin² + cos² = 1',
          'sin + cos = 1',
          'sin × cos = 1',
          'sin/cos = 1'
        ],
        correctAnswer: 'sin² + cos² = 1',
        explanation: 'C\'est la relation fondamentale de la trigonométrie'
      },
      {
        id: 9,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Dans un triangle rectangle, si un angle aigu mesure 60° et le côté adjacent mesure 5 cm, quelle est la longueur de l\'hypoténuse ?',
        options: [
          '5 ÷ cos(60°)',
          '5 × cos(60°)',
          '5 × sin(60°)',
          '5 ÷ sin(60°)'
        ],
        correctAnswer: '5 ÷ cos(60°)',
        explanation: 'cos(60°) = adjacent/hypoténuse, donc hypoténuse = adjacent/cos(60°)'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la valeur de sin(30°) ?',
        options: ['0.5', '0.866', '0.707', '1'],
        correctAnswer: '0.5',
        explanation: 'sin(30°) = 0.5, c\'est une valeur à connaître'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Combien de côtés a un hexagone ?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6',
        explanation: 'Un hexagone a 6 côtés.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Quelle est la somme des angles d\'un triangle (en degrés) ?',
        correctAnswer: '180',
        explanation: 'La somme des angles d\'un triangle est toujours 180°.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quel est le périmètre d\'un carré de côté 7 cm ?',
        options: ['14 cm', '21 cm', '28 cm', '49 cm'],
        correctAnswer: '28 cm',
        explanation: '4 × 7 = 28 cm.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Calcule l\'aire d\'un cercle de rayon 3 cm (π ≈ 3,14)',
        correctAnswer: '28,26',
        explanation: 'Aire = π × r² = 3,14 × 9 = 28,26 cm².'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quel est le volume d\'un cube d\'arête 4 cm ?',
        options: ['16 cm³', '32 cm³', '64 cm³', '128 cm³'],
        correctAnswer: '64 cm³',
        explanation: '4 × 4 × 4 = 64 cm³.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Combien d\'angles droits a un rectangle ?', options: ['1', '2', '3', '4'], correctAnswer: '4', explanation: 'Un rectangle a 4 angles droits.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Quelle est la somme des angles d\'un quadrilatère ?', correctAnswer: '360', explanation: 'La somme des angles d\'un quadrilatère est 360°.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Quel est le périmètre d\'un triangle équilatéral de côté 5 cm ?', options: ['10 cm', '15 cm', '20 cm', '25 cm'], correctAnswer: '15 cm', explanation: '3 × 5 = 15 cm.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Calcule l\'aire d\'un carré de côté 9 cm', correctAnswer: '81', explanation: '9 × 9 = 81 cm².' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Dans un triangle rectangle, si les côtés de l\'angle droit mesurent 6 cm et 8 cm, quelle est la longueur de l\'hypoténuse ?', options: ['10', '12', '14', '16'], correctAnswer: '10', explanation: '6² + 8² = 36 + 64 = 100, donc hypoténuse = 10.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Calcule le rayon d\'un cercle de diamètre 14 cm', correctAnswer: '7', explanation: 'Le rayon est la moitié du diamètre.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Quel est l\'aire d\'un triangle de base 10 cm et hauteur 5 cm ?', options: ['25 cm²', '30 cm²', '35 cm²', '50 cm²'], correctAnswer: '25 cm²', explanation: 'Aire = (base × hauteur) / 2 = 50 / 2 = 25 cm².' },
      { id: 23, type: 'text', difficulty: 1, question: 'Combien de côtés a un octogone ?', correctAnswer: '8', explanation: 'Un octogone a 8 côtés.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Quel est le volume d\'un pavé droit de 2 cm × 3 cm × 4 cm ?', options: ['12 cm³', '18 cm³', '20 cm³', '24 cm³'], correctAnswer: '24 cm³', explanation: '2 × 3 × 4 = 24 cm³.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Calcule la longueur d\'un cercle de rayon 5 cm (π ≈ 3,14)', correctAnswer: '31,4', explanation: '2 × π × 5 = 31,4 cm.' },
      {
        id: 26,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Dans un triangle rectangle, si un angle aigu mesure 30°, quelle est la mesure de l\'autre angle aigu ?',
        options: ['30°', '45°', '60°', '90°'],
        correctAnswer: '60°',
        explanation: 'La somme des angles d\'un triangle est 180°, donc 180° - 90° - 30° = 60°'
      },
      {
        id: 27,
        type: 'text',
        difficulty: 2,
        question: 'Calcule l\'aire d\'un triangle rectangle dont les côtés de l\'angle droit mesurent 6 cm et 8 cm',
        correctAnswer: '24',
        explanation: 'Aire = (6 × 8) / 2 = 24 cm²'
      },
      {
        id: 28,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la longueur de la diagonale d\'un carré de côté 5 cm ?',
        options: ['5 cm', '5√2 cm', '10 cm', '10√2 cm'],
        correctAnswer: '5√2 cm',
        explanation: 'La diagonale d\'un carré est égale à côté × √2'
      },
      {
        id: 29,
        type: 'text',
        difficulty: 2,
        question: 'Calcule le volume d\'un cylindre de rayon 3 cm et hauteur 4 cm (π ≈ 3,14)',
        correctAnswer: '113,04',
        explanation: 'V = π × r² × h = 3,14 × 9 × 4 = 113,04 cm³'
      },
      {
        id: 30,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'aire latérale d\'un cône de rayon 4 cm et génératrice 5 cm (π ≈ 3,14) ?',
        options: ['20π cm²', '25π cm²', '30π cm²', '40π cm²'],
        correctAnswer: '20π cm²',
        explanation: 'Aire latérale = π × r × g = π × 4 × 5 = 20π cm²'
      }
    ]
  },
  {
    id: 3,
    title: 'Fonctions',
    description: 'Fonctions linéaires et affines',
    icon: '📈',
    xpReward: 200,
    badge: '📊',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la forme générale d\'une fonction affine ?',
        options: ['y = ax', 'y = ax + b', 'y = x²', 'y = 1/x'],
        correctAnswer: 'y = ax + b',
        explanation: 'Une fonction affine est de la forme y = ax + b où a est le coefficient directeur et b l\'ordonnée à l\'origine'
      },
      {
        id: 2,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la forme générale d\'une fonction linéaire ?',
        options: ['y = ax', 'y = ax + b', 'y = x²', 'y = 1/x'],
        correctAnswer: 'y = ax',
        explanation: 'Une fonction linéaire est de la forme y = ax, c\'est une fonction affine avec b = 0'
      },
      {
        id: 3,
        type: 'text',
        difficulty: 1,
        question: 'Quel est le coefficient directeur de la fonction f(x) = 2x + 3 ?',
        correctAnswer: '2',
        explanation: 'Dans une fonction affine f(x) = ax + b, a est le coefficient directeur'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est l\'ordonnée à l\'origine de la fonction f(x) = 3x - 2 ?',
        options: ['-2', '2', '3', '-3'],
        correctAnswer: '-2',
        explanation: 'Dans une fonction affine f(x) = ax + b, b est l\'ordonnée à l\'origine'
      },
      {
        id: 5,
        type: 'text',
        difficulty: 2,
        question: 'Quelle est l\'image de 4 par la fonction f(x) = 2x + 1 ?',
        correctAnswer: '9',
        explanation: 'f(4) = 2 × 4 + 1 = 8 + 1 = 9'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quel est l\'antécédent de 7 par la fonction f(x) = 3x - 2 ?',
        options: ['3', '2', '4', '5'],
        correctAnswer: '3',
        explanation: 'On résout 3x - 2 = 7, donc 3x = 9, donc x = 3'
      },
      {
        id: 7,
        type: 'text',
        difficulty: 3,
        question: 'Quelle est l\'équation de la droite passant par les points A(2,5) et B(4,9) ?',
        correctAnswer: 'y=2x+1',
        explanation: 'Le coefficient directeur est (9-5)/(4-2) = 2, et l\'ordonnée à l\'origine est 1'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la fonction inverse de f(x) = 2x + 3 ?',
        options: ['f⁻¹(x) = (x-3)/2', 'f⁻¹(x) = (x+3)/2', 'f⁻¹(x) = 2x-3', 'f⁻¹(x) = -2x+3'],
        correctAnswer: 'f⁻¹(x) = (x-3)/2',
        explanation: 'Pour trouver la fonction inverse, on isole x dans y = 2x + 3'
      },
      {
        id: 9,
        type: 'text',
        difficulty: 3,
        question: 'Quelle est l\'équation de la droite parallèle à y = 2x + 1 passant par le point A(3,4) ?',
        correctAnswer: 'y=2x-2',
        explanation: 'Une droite parallèle a le même coefficient directeur, et on trouve l\'ordonnée à l\'origine en utilisant le point A'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'équation de la droite perpendiculaire à y = 2x + 1 passant par l\'origine ?',
        options: ['y = -0.5x', 'y = 0.5x', 'y = -2x', 'y = 2x'],
        correctAnswer: 'y = -0.5x',
        explanation: 'Le coefficient directeur d\'une droite perpendiculaire est l\'opposé de l\'inverse du coefficient directeur de la droite initiale'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Si f(x) = 2x, quelle est l\'image de 7 ?',
        options: ['9', '12', '14', '21'],
        correctAnswer: '14',
        explanation: '2 × 7 = 14.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Si f(x) = x² - 1, calcule f(3)',
        correctAnswer: '8',
        explanation: '3² - 1 = 9 - 1 = 8.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la pente de la droite y = -3x + 2 ?',
        options: ['-3', '2', '3', '-2'],
        correctAnswer: '-3',
        explanation: 'La pente est le coefficient de x.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Si f(x) = 4x - 5, trouve x pour f(x) = 11',
        correctAnswer: '4',
        explanation: '4x - 5 = 11 → 4x = 16 → x = 4.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la fonction réciproque de f(x) = x + 7 ?',
        options: ['f⁻¹(x) = x - 7', 'f⁻¹(x) = x + 7', 'f⁻¹(x) = 7 - x', 'f⁻¹(x) = -x + 7'],
        correctAnswer: 'f⁻¹(x) = x - 7',
        explanation: 'Pour inverser, on fait x = y + 7 → y = x - 7.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Si f(x) = x + 4, quelle est l\'image de 6 ?', options: ['8', '10', '12', '14'], correctAnswer: '10', explanation: '6 + 4 = 10.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Si f(x) = 3x, calcule f(5)', correctAnswer: '15', explanation: '3 × 5 = 15.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Quelle est la forme générale d\'une fonction linéaire ?', options: ['y = ax', 'y = ax + b', 'y = x²', 'y = 1/x'], correctAnswer: 'y = ax', explanation: 'Une fonction linéaire est de la forme y = ax.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Si f(x) = 2x + 1, calcule f(4)', correctAnswer: '9', explanation: '2 × 4 + 1 = 9.' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Si f(x) = -x + 3, quelle est l\'image de -2 ?', options: ['1', '3', '5', '7'], correctAnswer: '5', explanation: '-(-2) + 3 = 2 + 3 = 5.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Si f(x) = 0,5x, trouve x pour f(x) = 4', correctAnswer: '8', explanation: '0,5x = 4 → x = 8.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Quelle est l\'ordonnée à l\'origine de y = 4x - 7 ?', options: ['-7', '4', '7', '0'], correctAnswer: '-7', explanation: 'C\'est le terme constant.' },
      { id: 23, type: 'text', difficulty: 1, question: 'Si f(x) = x², calcule f(6)', correctAnswer: '36', explanation: '6² = 36.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Si f(x) = 2x, pour quelle valeur de x a-t-on f(x) = 10 ?', options: ['2', '4', '5', '10'], correctAnswer: '5', explanation: '2 × 5 = 10.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Si f(x) = x - 3, trouve x pour f(x) = 0', correctAnswer: '3', explanation: 'x - 3 = 0 → x = 3.' },
      {
        id: 26,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est l\'équation de la droite passant par les points A(1,3) et B(3,7) ?',
        options: ['y = 2x + 1', 'y = 2x - 1', 'y = 3x + 1', 'y = 3x - 1'],
        correctAnswer: 'y = 2x + 1',
        explanation: 'Le coefficient directeur est (7-3)/(3-1) = 2, et l\'ordonnée à l\'origine est 1'
      },
      {
        id: 27,
        type: 'text',
        difficulty: 2,
        question: 'Si f(x) = 3x - 2, quelle est l\'image de 4 ?',
        correctAnswer: '10',
        explanation: 'f(4) = 3 × 4 - 2 = 12 - 2 = 10'
      },
      {
        id: 28,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'équation de la droite parallèle à y = 2x + 1 passant par le point A(2,5) ?',
        options: ['y = 2x + 1', 'y = 2x + 3', 'y = 2x - 1', 'y = 2x - 3'],
        correctAnswer: 'y = 2x + 1',
        explanation: 'Une droite parallèle a le même coefficient directeur'
      },
      {
        id: 29,
        type: 'text',
        difficulty: 3,
        question: 'Si f(x) = x² - 4, quels sont les antécédents de 0 ?',
        correctAnswer: '2,-2',
        explanation: 'x² - 4 = 0 → x² = 4 → x = 2 ou x = -2'
      },
      {
        id: 30,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la fonction inverse de f(x) = 2x + 3 ?',
        options: ['f⁻¹(x) = (x-3)/2', 'f⁻¹(x) = (x+3)/2', 'f⁻¹(x) = 2x-3', 'f⁻¹(x) = -2x+3'],
        correctAnswer: 'f⁻¹(x) = (x-3)/2',
        explanation: 'Pour trouver la fonction inverse, on isole x dans y = 2x + 3'
      }
    ]
  },
  {
    id: 4,
    title: 'Statistiques',
    description: 'Moyenne, médiane, étendue',
    icon: '📊',
    xpReward: 250,
    badge: '🎯',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la moyenne des nombres 2, 4, 6, 8 ?',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: 'Moyenne = (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5'
      },
      {
        id: 2,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la médiane des nombres 1, 3, 5, 7, 9 ?',
        options: ['3', '5', '7', '4'],
        correctAnswer: '5',
        explanation: 'La médiane est la valeur centrale d\'une série statistique'
      },
      {
        id: 3,
        type: 'text',
        difficulty: 1,
        question: 'Quelle est l\'étendue de la série 2, 5, 8, 11, 14 ?',
        correctAnswer: '12',
        explanation: 'Étendue = valeur maximale - valeur minimale = 14 - 2 = 12'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la moyenne pondérée des notes 12, 14, 16 avec les coefficients 1, 2, 3 ?',
        options: ['14.5', '15', '15.5', '16'],
        correctAnswer: '14.5',
        explanation: 'Moyenne pondérée = (12×1 + 14×2 + 16×3) ÷ (1+2+3) = 87 ÷ 6 = 14.5'
      },
      {
        id: 5,
        type: 'text',
        difficulty: 2,
        question: 'Quelle est la médiane de la série 3, 5, 7, 9, 11, 13 ?',
        correctAnswer: '8',
        explanation: 'La médiane est la moyenne des deux valeurs centrales : (7 + 9) ÷ 2 = 8'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quel est le premier quartile de la série 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ?',
        options: ['2.5', '3', '3.5', '4'],
        correctAnswer: '3',
        explanation: 'Le premier quartile est la médiane de la première moitié de la série'
      },
      {
        id: 7,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'expression de l\'écart-type de la série 2, 4, 6, 8, 10 ?',
        options: [
          '√[(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] ÷ 5',
          '√[(2+4+6+8+10)² ÷ 5]',
          '√[(2²+4²+6²+8²+10²) ÷ 5]',
          '√[(2+4+6+8+10) ÷ 5]'
        ],
        correctAnswer: '√[(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] ÷ 5',
        explanation: 'L\'écart-type est la racine carrée de la moyenne des carrés des écarts à la moyenne'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quel est le troisième quartile de la série 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ?',
        options: ['7', '7.5', '8', '8.5'],
        correctAnswer: '8',
        explanation: 'Le troisième quartile est la médiane de la deuxième moitié de la série'
      },
      {
        id: 9,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'expression de la variance de la série 3, 5, 7, 9, 11 ?',
        options: [
          '[(3-7)² + (5-7)² + (7-7)² + (9-7)² + (11-7)²] ÷ 5',
          '[(3+5+7+9+11)²] ÷ 5',
          '[(3²+5²+7²+9²+11²)] ÷ 5',
          '[(3+5+7+9+11) ÷ 5]²'
        ],
        correctAnswer: '[(3-7)² + (5-7)² + (7-7)² + (9-7)² + (11-7)²] ÷ 5',
        explanation: 'La variance est la moyenne des carrés des écarts à la moyenne'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'étendue interquartile de la série 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '5',
        explanation: 'Étendue interquartile = Q3 - Q1 = 8 - 3 = 5'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quel est le mode de la série 2, 3, 3, 5, 7 ?',
        options: ['2', '3', '5', '7'],
        correctAnswer: '3',
        explanation: 'Le mode est la valeur la plus fréquente.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Calcule la moyenne de 10, 12, 14',
        correctAnswer: '12',
        explanation: '(10 + 12 + 14) / 3 = 12.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la médiane de 4, 8, 15, 16, 23 ?',
        options: ['8', '15', '16', '23'],
        correctAnswer: '15',
        explanation: 'La médiane est la valeur centrale.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Quelle est l\'étendue de la série 5, 9, 12, 20 ?',
        correctAnswer: '15',
        explanation: '20 - 5 = 15.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quel est le premier quartile de la série 2, 4, 6, 8, 10 ?',
        options: ['2', '4', '6', '8'],
        correctAnswer: '4',
        explanation: 'Premier quartile = 4.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Quel est le minimum de la série 4, 7, 9, 12 ?', options: ['4', '7', '9', '12'], correctAnswer: '4', explanation: 'Le minimum est 4.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Calcule la moyenne de 5, 8, 11', correctAnswer: '8', explanation: '(5 + 8 + 11) / 3 = 8.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Quel est le maximum de la série 2, 5, 8, 13 ?', options: ['2', '5', '8', '13'], correctAnswer: '13', explanation: 'Le maximum est 13.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Quelle est la médiane de 2, 4, 6, 8, 10 ?', correctAnswer: '6', explanation: 'La médiane est la valeur centrale.' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Quel est l\'étendue de la série 3, 7, 10, 15 ?', options: ['7', '10', '12', '15'], correctAnswer: '12', explanation: '15 - 3 = 12.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Calcule la moyenne pondérée de 10 (coef 2), 15 (coef 1)', correctAnswer: '11,67', explanation: '(10×2 + 15×1) / 3 = 35 / 3 ≈ 11,67.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Quel est le mode de la série 1, 2, 2, 3, 4 ?', options: ['1', '2', '3', '4'], correctAnswer: '2', explanation: 'Le mode est la valeur la plus fréquente.' },
      { id: 23, type: 'text', difficulty: 1, question: 'Quelle est l\'étendue de la série 6, 9, 12 ?', correctAnswer: '6', explanation: '12 - 6 = 6.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Quelle est la médiane de 1, 3, 5, 7, 9, 11 ?', options: ['5', '6', '7', '8'], correctAnswer: '6', explanation: 'Médiane = (5 + 7) / 2 = 6.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Calcule la moyenne de 2, 4, 6, 8, 10', correctAnswer: '6', explanation: '(2 + 4 + 6 + 8 + 10) / 5 = 6.' },
      {
        id: 26,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la moyenne pondérée des notes 12, 14, 16 avec les coefficients 1, 2, 3 ?',
        options: ['14', '14.5', '15', '15.5'],
        correctAnswer: '14.5',
        explanation: 'Moyenne pondérée = (12×1 + 14×2 + 16×3) ÷ (1+2+3) = 87 ÷ 6 = 14.5'
      },
      {
        id: 27,
        type: 'text',
        difficulty: 2,
        question: 'Quelle est la médiane de la série 3, 5, 7, 9, 11, 13 ?',
        correctAnswer: '8',
        explanation: 'La médiane est la moyenne des deux valeurs centrales : (7 + 9) ÷ 2 = 8'
      },
      {
        id: 28,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quel est le premier quartile de la série 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ?',
        options: ['2.5', '3', '3.5', '4'],
        correctAnswer: '3',
        explanation: 'Le premier quartile est la médiane de la première moitié de la série'
      },
      {
        id: 29,
        type: 'text',
        difficulty: 3,
        question: 'Quelle est l\'étendue interquartile de la série 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ?',
        correctAnswer: '5',
        explanation: 'Étendue interquartile = Q3 - Q1 = 8 - 3 = 5'
      },
      {
        id: 30,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la variance de la série 2, 4, 6, 8, 10 ?',
        options: ['8', '10', '12', '14'],
        correctAnswer: '8',
        explanation: 'La variance est la moyenne des carrés des écarts à la moyenne'
      }
    ]
  },
  {
    id: 5,
    title: 'Probabilités',
    description: 'Probabilités simples et conditionnelles',
    icon: '🎲',
    xpReward: 300,
    badge: '🎯',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la probabilité d\'obtenir un 6 en lançant un dé à 6 faces ?',
        options: ['1/6', '1/3', '1/2', '1'],
        correctAnswer: '1/6',
        explanation: 'Il y a une chance sur 6 d\'obtenir un 6'
      },
      {
        id: 2,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la probabilité d\'obtenir pile en lançant une pièce ?',
        options: ['0.5', '0.25', '0.75', '1'],
        correctAnswer: '0.5',
        explanation: 'Il y a une chance sur 2 d\'obtenir pile'
      },
      {
        id: 3,
        type: 'text',
        difficulty: 1,
        question: 'Dans un sac contenant 3 boules rouges et 2 boules bleues, quelle est la probabilité de tirer une boule rouge ?',
        correctAnswer: '0.6',
        explanation: '3 boules rouges sur 5 boules au total = 3/5 = 0.6'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la probabilité d\'obtenir deux fois pile en lançant une pièce deux fois ?',
        options: ['0.25', '0.5', '0.75', '1'],
        correctAnswer: '0.25',
        explanation: '0.5 × 0.5 = 0.25'
      },
      {
        id: 5,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Dans un sac contenant 4 boules rouges et 6 boules bleues, quelle est l\'expression de la probabilité de tirer deux boules rouges successivement sans remise ?',
        options: [
          '(4/10) × (3/9)',
          '(4/10) × (4/10)',
          '(4/10) + (3/9)',
          '(4/10) ÷ (3/9)'
        ],
        correctAnswer: '(4/10) × (3/9)',
        explanation: 'Premier tirage : 4 chances sur 10, deuxième tirage : 3 chances sur 9 (sans remise)'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la probabilité d\'obtenir au moins un 6 en lançant deux dés ?',
        options: ['11/36', '1/6', '1/3', '1/2'],
        correctAnswer: '11/36',
        explanation: '1 - (5/6)² = 1 - 25/36 = 11/36'
      },
      {
        id: 7,
        type: 'text',
        difficulty: 3,
        question: 'Dans une urne contenant 3 boules rouges, 2 boules bleues et 5 boules vertes, quelle est la probabilité de tirer une boule rouge ou bleue ?',
        correctAnswer: '0.5',
        explanation: '(3 + 2) / (3 + 2 + 5) = 5/10 = 0.5'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la probabilité conditionnelle d\'obtenir un 6 sachant que le résultat est pair ?',
        options: ['1/3', '1/6', '1/2', '1'],
        correctAnswer: '1/3',
        explanation: 'Parmi les résultats pairs (2,4,6), il y a une chance sur 3 d\'obtenir 6'
      },
      {
        id: 9,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Dans un sac contenant 5 boules rouges et 5 boules bleues, quelle est l\'expression de la probabilité de tirer deux boules de couleurs différentes ?',
        options: [
          '2 × (5/10) × (5/9)',
          '(5/10) × (5/9)',
          '(5/10) + (5/9)',
          '2 × (5/10) + (5/9)'
        ],
        correctAnswer: '2 × (5/10) × (5/9)',
        explanation: 'On peut avoir rouge puis bleu OU bleu puis rouge, d\'où le facteur 2'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la probabilité d\'obtenir une somme de 7 en lançant deux dés ?',
        options: ['1/6', '1/12', '1/18', '1/36'],
        correctAnswer: '1/6',
        explanation: 'Il y a 6 façons d\'obtenir 7 sur 36 résultats possibles = 6/36 = 1/6'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Combien de faces a un dé classique ?',
        options: ['4', '6', '8', '10'],
        correctAnswer: '6',
        explanation: 'Un dé classique a 6 faces.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Quelle est la probabilité d\'obtenir pile en lançant une pièce ?',
        correctAnswer: '0.5',
        explanation: 'Il y a une chance sur deux.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Dans un sac de 10 billes (4 rouges, 6 bleues), quelle est la proba de tirer une bleue ?',
        options: ['0.2', '0.4', '0.6', '0.8'],
        correctAnswer: '0.6',
        explanation: '6/10 = 0.6.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Si tu tires deux cartes d\'un jeu de 32, quelle est la proba d\'avoir deux as ?',
        correctAnswer: '0.011',
        explanation: '4/32 × 3/31 ≈ 0.011.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la proba d\'obtenir un nombre pair en lançant un dé ?',
        options: ['1/2', '1/3', '1/4', '2/3'],
        correctAnswer: '1/2',
        explanation: '3 faces paires sur 6.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Quelle est la probabilité d\'obtenir un nombre pair en lançant un dé ?', options: ['1/2', '1/3', '1/4', '2/3'], correctAnswer: '1/2', explanation: '3 faces paires sur 6.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Combien de résultats possibles en lançant deux dés ?', correctAnswer: '36', explanation: '6 × 6 = 36.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Quelle est la probabilité d\'obtenir pile puis face en lançant une pièce deux fois ?', options: ['0.25', '0.5', '0.75', '1'], correctAnswer: '0.25', explanation: '0.5 × 0.5 = 0.25.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Dans un sac de 8 billes (3 rouges, 5 bleues), quelle est la proba de tirer une rouge ?', correctAnswer: '0.375', explanation: '3/8 = 0.375.' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Quelle est la probabilité d\'obtenir deux 6 en lançant deux dés ?', options: ['1/36', '1/12', '1/18', '1/6'], correctAnswer: '1/36', explanation: '1/6 × 1/6 = 1/36.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Combien de façons d\'obtenir une somme de 8 en lançant deux dés ?', correctAnswer: '5', explanation: '2+6, 3+5, 4+4, 5+3, 6+2.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Quelle est la proba d\'obtenir une boule verte dans un sac de 2 rouges, 3 vertes, 5 bleues ?', options: ['0.2', '0.3', '0.5', '0.7'], correctAnswer: '0.3', explanation: '3/10 = 0.3.' },
      { id: 23, type: 'text', difficulty: 1, question: 'Combien de faces a un dé à 8 faces ?', correctAnswer: '8', explanation: 'Un dé à 8 faces a 8 faces.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Quelle est la proba d\'obtenir au moins un 1 en lançant deux dés ?', options: ['11/36', '1/6', '1/3', '1/2'], correctAnswer: '11/36', explanation: '1 - (5/6)² = 11/36.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Dans un tirage de 2 cartes dans un jeu de 32, quelle est la proba d\'avoir deux figures ?', correctAnswer: '0.081', explanation: '8/32 × 7/31 ≈ 0.081.' },
      {
        id: 26,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Dans un triangle rectangle, si un angle aigu mesure 30°, quelle est la mesure de l\'autre angle aigu ?',
        options: ['30°', '45°', '60°', '90°'],
        correctAnswer: '60°',
        explanation: 'La somme des angles d\'un triangle est 180°, donc 180° - 90° - 30° = 60°'
      },
      {
        id: 27,
        type: 'text',
        difficulty: 2,
        question: 'Calcule l\'aire d\'un triangle rectangle dont les côtés de l\'angle droit mesurent 6 cm et 8 cm',
        correctAnswer: '24',
        explanation: 'Aire = (6 × 8) / 2 = 24 cm²'
      },
      {
        id: 28,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est la longueur de la diagonale d\'un carré de côté 5 cm ?',
        options: ['5 cm', '5√2 cm', '10 cm', '10√2 cm'],
        correctAnswer: '5√2 cm',
        explanation: 'La diagonale d\'un carré est égale à côté × √2'
      },
      {
        id: 29,
        type: 'text',
        difficulty: 2,
        question: 'Calcule le volume d\'un cylindre de rayon 3 cm et hauteur 4 cm (π ≈ 3,14)',
        correctAnswer: '113,04',
        explanation: 'V = π × r² × h = 3,14 × 9 × 4 = 113,04 cm³'
      },
      {
        id: 30,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'aire latérale d\'un cône de rayon 4 cm et génératrice 5 cm (π ≈ 3,14) ?',
        options: ['20π cm²', '25π cm²', '30π cm²', '40π cm²'],
        correctAnswer: '20π cm²',
        explanation: 'Aire latérale = π × r × g = π × 4 × 5 = 20π cm²'
      }
    ]
  },
  {
    id: 6,
    title: 'Équations',
    description: 'Équations du premier et second degré',
    icon: '⚖️',
    xpReward: 350,
    badge: '🎯',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la solution de l\'équation 2x + 3 = 7 ?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '2',
        explanation: '2x + 3 = 7 donc 2x = 4 donc x = 2'
      },
      {
        id: 2,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Quelle est la solution de l\'équation 3x - 2 = 4 ?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '3x - 2 = 4 donc 3x = 6 donc x = 2'
      },
      {
        id: 3,
        type: 'text',
        difficulty: 1,
        question: 'Résoudre l\'équation 4x + 5 = 17',
        correctAnswer: '3',
        explanation: '4x + 5 = 17 donc 4x = 12 donc x = 3'
      },
      {
        id: 4,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelles sont les solutions de l\'équation x² - 4 = 0 ?',
        options: ['-2 et 2', '-4 et 4', '-1 et 1', '0 et 4'],
        correctAnswer: '-2 et 2',
        explanation: 'x² - 4 = 0 donc x² = 4 donc x = 2 ou x = -2'
      },
      {
        id: 5,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Résoudre l\'équation 2x² - 8 = 0',
        options: ['x = -2 et x = 2', 'x = 2', 'x = -2', 'x = 4'],
        correctAnswer: 'x = -2 et x = 2',
        explanation: '2x² - 8 = 0 donc x² = 4 donc x = 2 ou x = -2'
      },
      {
        id: 6,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la solution de l\'équation (x + 2)(x - 3) = 0 ?',
        options: ['-2 et 3', '2 et -3', '2 et 3', '-2 et -3'],
        correctAnswer: '-2 et 3',
        explanation: 'Un produit est nul si l\'un des facteurs est nul'
      },
      {
        id: 7,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Résoudre l\'équation x² + 2x - 3 = 0',
        options: ['x = -3 et x = 1', 'x = 3 et x = -1', 'x = 1', 'x = -3'],
        correctAnswer: 'x = -3 et x = 1',
        explanation: 'Δ = 4 + 12 = 16, donc x = (-2 ± 4)/2, donc x = -3 ou x = 1'
      },
      {
        id: 8,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Résoudre l\'équation 2x² - 5x + 3 = 0',
        options: ['x = 1 et x = 1.5', 'x = -1 et x = -1.5', 'x = 1 et x = -1.5', 'x = -1 et x = 1.5'],
        correctAnswer: 'x = 1 et x = 1.5',
        explanation: 'Δ = 25 - 24 = 1, donc x = (5 ± 1)/4, donc x = 1 ou x = 1.5'
      },
      {
        id: 9,
        type: 'text',
        difficulty: 3,
        question: 'Résoudre l\'équation x² - 6x + 9 = 0',
        correctAnswer: '3',
        explanation: 'x² - 6x + 9 = (x - 3)² = 0, donc x = 3'
      },
      {
        id: 10,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Résoudre l\'équation 3x² + 2x - 1 = 0',
        options: ['x = -1 et x = 1/3', 'x = 1 et x = -1/3', 'x = -1 et x = -1/3', 'x = 1 et x = 1/3'],
        correctAnswer: 'x = -1 et x = 1/3',
        explanation: 'Δ = 4 + 12 = 16, donc x = (-2 ± 4)/6, donc x = -1 ou x = 1/3'
      },
      {
        id: 11,
        type: 'multiple-choice',
        difficulty: 1,
        question: 'Résoudre : x + 5 = 12',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: '7 + 5 = 12.'
      },
      {
        id: 12,
        type: 'text',
        difficulty: 2,
        question: 'Résoudre : 3x = 27',
        correctAnswer: '9',
        explanation: 'x = 27 / 3 = 9.'
      },
      {
        id: 13,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Résoudre : 2x² = 18',
        options: ['2', '3', '4', '9'],
        correctAnswer: '3',
        explanation: 'x² = 9 donc x = 3.'
      },
      {
        id: 14,
        type: 'text',
        difficulty: 3,
        question: 'Résoudre : x² - 16 = 0',
        correctAnswer: '4',
        explanation: 'x² = 16 donc x = 4.'
      },
      {
        id: 15,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Résoudre : x² + x - 6 = 0',
        options: ['-3 et 2', '-2 et 3', '1 et -6', '2 et 3'],
        correctAnswer: '-3 et 2',
        explanation: 'x² + x - 6 = (x + 3)(x - 2) = 0.'
      },
      { id: 16, type: 'multiple-choice', difficulty: 1, question: 'Résoudre : x - 4 = 9', options: ['5', '9', '13', '15'], correctAnswer: '13', explanation: '13 - 4 = 9.' },
      { id: 17, type: 'text', difficulty: 1, question: 'Résoudre : 2x = 18', correctAnswer: '9', explanation: 'x = 18 / 2 = 9.' },
      { id: 18, type: 'multiple-choice', difficulty: 2, question: 'Résoudre : x² = 49', options: ['5', '6', '7', '8'], correctAnswer: '7', explanation: '7 × 7 = 49.' },
      { id: 19, type: 'text', difficulty: 2, question: 'Résoudre : x/3 = 5', correctAnswer: '15', explanation: 'x = 5 × 3 = 15.' },
      { id: 20, type: 'multiple-choice', difficulty: 3, question: 'Résoudre : 4x - 7 = 9', options: ['2', '3', '4', '5'], correctAnswer: '4', explanation: '4 × 4 - 7 = 9.' },
      { id: 21, type: 'text', difficulty: 3, question: 'Résoudre : x² - 25 = 0', correctAnswer: '5', explanation: 'x² = 25 donc x = 5.' },
      { id: 22, type: 'multiple-choice', difficulty: 2, question: 'Résoudre : 3x + 2 = 11', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: '3 × 3 + 2 = 11.' },
      { id: 23, type: 'text', difficulty: 1, question: 'Résoudre : x/2 = 8', correctAnswer: '16', explanation: 'x = 8 × 2 = 16.' },
      { id: 24, type: 'multiple-choice', difficulty: 2, question: 'Résoudre : x² + 2x = 0', options: ['0 et -2', '0 et 2', '2 et -2', '0 et 1'], correctAnswer: '0 et -2', explanation: 'x(x + 2) = 0.' },
      { id: 25, type: 'text', difficulty: 3, question: 'Résoudre : 5x = 45', correctAnswer: '9', explanation: 'x = 45 / 5 = 9.' },
      {
        id: 26,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est l\'équation de la droite passant par les points A(1,3) et B(3,7) ?',
        options: ['y = 2x + 1', 'y = 2x - 1', 'y = 3x + 1', 'y = 3x - 1'],
        correctAnswer: 'y = 2x + 1',
        explanation: 'Le coefficient directeur est (7-3)/(3-1) = 2, et l\'ordonnée à l\'origine est 1'
      },
      {
        id: 27,
        type: 'text',
        difficulty: 2,
        question: 'Si f(x) = 3x - 2, quelle est l\'image de 4 ?',
        correctAnswer: '10',
        explanation: 'f(4) = 3 × 4 - 2 = 12 - 2 = 10'
      },
      {
        id: 28,
        type: 'multiple-choice',
        difficulty: 3,
        question: 'Quelle est l\'équation de la droite parallèle à y = 2x + 1 passant par le point A(2,5) ?',
        options: ['y = 2x + 1', 'y = 2x + 3', 'y = 2x - 1', 'y = 2x - 3'],
        correctAnswer: 'y = 2x + 1',
        explanation: 'Une droite parallèle a le même coefficient directeur'
      },
      {
        id: 29,
        type: 'text',
        difficulty: 3,
        question: 'Si f(x) = x² - 4, quels sont les antécédents de 0 ?',
        correctAnswer: '2,-2',
        explanation: 'x² - 4 = 0 → x² = 4 → x = 2 ou x = -2'
      },
      {
        id: 30,
        type: 'multiple-choice',
        difficulty: 2,
        question: 'Quelle est la fonction inverse de f(x) = 2x + 3 ?',
        options: ['f⁻¹(x) = (x-3)/2', 'f⁻¹(x) = (x+3)/2', 'f⁻¹(x) = 2x-3', 'f⁻¹(x) = -2x+3'],
        correctAnswer: 'f⁻¹(x) = (x-3)/2',
        explanation: 'Pour trouver la fonction inverse, on isole x dans y = 2x + 3'
      }
    ]
  }
]

// 1. Générer la liste de toutes les questions pour le mode survivant
const allQuestions: Question[] = [];
lessons.forEach(lesson => lesson.questions.forEach(q => allQuestions.push({ ...q })));

// 2. Ajouter la catégorie Survivant
export const survivorLesson: Lesson = {
  id: 999,
  title: 'Survivant',
  description: 'Réponds à un maximum de questions variées sans te tromper !',
  icon: '🦸‍♂️',
  xpReward: 0,
  badge: '🏅',
  questions: allQuestions,
};

// 3. Ajouter la catégorie Applications & Calcul
export const realWorldLesson: Lesson = {
  id: 1000,
  title: 'Applications & Calcul',
  description: 'Problèmes concrets et calculs appliqués au quotidien.',
  icon: '🧮',
  xpReward: 200,
  badge: '🌍',
  questions: [
    {
      id: 1,
      type: 'multiple-choice',
      difficulty: 1,
      question: 'Paul achète 3 baguettes à 1,20 € chacune. Combien paie-t-il au total ?',
      options: ['2,40 €', '3,60 €', '4,20 €', '5,00 €'],
      correctAnswer: '3,60 €',
      explanation: '3 × 1,20 € = 3,60 €.'
    },
    {
      id: 2,
      type: 'text',
      difficulty: 1,
      question: 'Une voiture roule à 90 km/h. Combien de temps met-elle pour parcourir 180 km ? (en heures)',
      correctAnswer: '2',
      explanation: '180 ÷ 90 = 2 heures.'
    },
    {
      id: 3,
      type: 'multiple-choice',
      difficulty: 2,
      question: 'Un rectangle mesure 5 cm de large et 8 cm de long. Quelle est son aire ?',
      options: ['13 cm²', '40 cm²', '26 cm²', '20 cm²'],
      correctAnswer: '40 cm²',
      explanation: 'Aire = largeur × longueur = 5 × 8 = 40 cm².'
    },
    {
      id: 4,
      type: 'text',
      difficulty: 2,
      question: 'Si tu achètes 4 articles à 2,50 € chacun et que tu paies avec un billet de 20 €, combien te reste-t-il ?',
      correctAnswer: '10',
      explanation: '4 × 2,50 € = 10 €, donc 20 € - 10 € = 10 €.'
    },
    {
      id: 5,
      type: 'multiple-choice',
      difficulty: 3,
      question: 'Une piscine se remplit à raison de 500 L/h. Combien de temps pour remplir 3000 L ?',
      options: ['4 h', '5 h', '6 h', '7 h'],
      correctAnswer: '6 h',
      explanation: '3000 ÷ 500 = 6 heures.'
    },
    {
      id: 6,
      type: 'text',
      difficulty: 3,
      question: 'Calcule la dérivée de f(x) = 3x² + 2x + 1',
      correctAnswer: '6x+2',
      explanation: 'La dérivée est f\'(x) = 6x + 2.'
    },
    {
      id: 7,
      type: 'multiple-choice',
      difficulty: 3,
      question: 'Si f(x) = x², quelle est l\'image de 5 ?',
      options: ['10', '15', '20', '25'],
      correctAnswer: '25',
      explanation: '5² = 25.'
    },
    {
      id: 8,
      type: 'multiple-choice',
      difficulty: 1,
      question: 'Un train part à 14h00 et arrive à 16h30. Combien de temps dure le trajet ?',
      options: ['1h30', '2h', '2h30', '3h'],
      correctAnswer: '2h30',
      explanation: '16h30 - 14h00 = 2h30.'
    },
    {
      id: 9,
      type: 'text',
      difficulty: 2,
      question: 'Tu achètes 3 livres à 12 € chacun et un stylo à 2 €. Quel est le prix total ?',
      correctAnswer: '38',
      explanation: '3 × 12 + 2 = 36 + 2 = 38 €.'
    },
    {
      id: 10,
      type: 'multiple-choice',
      difficulty: 2,
      question: 'Une recette nécessite 250 g de farine pour 4 personnes. Combien faut-il de farine pour 10 personnes ?',
      options: ['500 g', '625 g', '750 g', '1000 g'],
      correctAnswer: '625 g',
      explanation: '250 × 2,5 = 625 g.'
    },
    {
      id: 11,
      type: 'text',
      difficulty: 3,
      question: 'Calcule l\'intégrale de f(x) = 2x entre 0 et 3',
      correctAnswer: '9',
      explanation: '∫0^3 2x dx = [x²]₀³ = 9.'
    },
    {
      id: 12,
      type: 'multiple-choice',
      difficulty: 3,
      question: 'Un vélo parcourt 45 km en 1h30. Quelle est sa vitesse moyenne ?',
      options: ['30 km/h', '45 km/h', '60 km/h', '90 km/h'],
      correctAnswer: '30 km/h',
      explanation: '45 ÷ 1,5 = 30 km/h.'
    },
    { id: 13, type: 'multiple-choice', difficulty: 1, question: 'Un magasin propose une réduction de 20% sur un article à 50 €. Quel est le prix après réduction ?', options: ['30 €', '35 €', '40 €', '45 €'], correctAnswer: '40 €', explanation: '50 - 20% = 40 €.' },
    { id: 14, type: 'text', difficulty: 1, question: 'Tu achètes 2 pizzas à 8 € chacune et 3 boissons à 2 € chacune. Quel est le prix total ?', correctAnswer: '22', explanation: '2 × 8 + 3 × 2 = 16 + 6 = 22 €.' },
    { id: 15, type: 'multiple-choice', difficulty: 2, question: 'Un vélo coûte 180 € et son prix augmente de 10%. Quel est le nouveau prix ?', options: ['190 €', '198 €', '200 €', '210 €'], correctAnswer: '198 €', explanation: '180 × 1,10 = 198 €.' },
    { id: 16, type: 'text', difficulty: 2, question: 'Une piscine mesure 8 m de long, 4 m de large et 2 m de profondeur. Quel est son volume ?', correctAnswer: '64', explanation: '8 × 4 × 2 = 64 m³.' },
    { id: 17, type: 'multiple-choice', difficulty: 3, question: 'Un commerçant achète un produit 60 € et le revend 75 €. Quel est le pourcentage de bénéfice ?', options: ['15%', '20%', '25%', '30%'], correctAnswer: '25%', explanation: '(75 - 60) / 60 = 0,25 = 25%.' },
    { id: 18, type: 'text', difficulty: 3, question: 'Un rectangle a une aire de 48 cm² et une largeur de 6 cm. Quelle est sa longueur ?', correctAnswer: '8', explanation: '48 / 6 = 8 cm.' },
    { id: 19, type: 'multiple-choice', difficulty: 2, question: 'Un train parcourt 300 km en 3 h 45 min. Quelle est sa vitesse moyenne (en km/h) ?', options: ['75', '80', '85', '90'], correctAnswer: '80', explanation: '300 / 3,75 = 80 km/h.' },
    { id: 20, type: 'text', difficulty: 2, question: 'Un lot de 5 stylos coûte 7,50 €. Quel est le prix d\'un stylo ?', correctAnswer: '1,5', explanation: '7,50 / 5 = 1,5 €.' },
    { id: 21, type: 'multiple-choice', difficulty: 3, question: 'Un rectangle a un périmètre de 30 cm et une largeur de 5 cm. Quelle est sa longueur ?', options: ['10', '12', '15', '20'], correctAnswer: '10', explanation: '2 × (L + 5) = 30 → L = 10.' },
    { id: 22, type: 'text', difficulty: 3, question: 'Un élève obtient 14, 16 et 18 à trois contrôles. Quelle est sa moyenne ?', correctAnswer: '16', explanation: '(14 + 16 + 18) / 3 = 16.' },
    {
      id: 26,
      type: 'multiple-choice',
      difficulty: 2,
      question: 'Dans un triangle rectangle, si un angle aigu mesure 30°, quelle est la mesure de l\'autre angle aigu ?',
      options: ['30°', '45°', '60°', '90°'],
      correctAnswer: '60°',
      explanation: 'La somme des angles d\'un triangle est 180°, donc 180° - 90° - 30° = 60°'
    },
    {
      id: 27,
      type: 'text',
      difficulty: 2,
      question: 'Calcule l\'aire d\'un triangle rectangle dont les côtés de l\'angle droit mesurent 6 cm et 8 cm',
      correctAnswer: '24',
      explanation: 'Aire = (6 × 8) / 2 = 24 cm²'
    },
    {
      id: 28,
      type: 'multiple-choice',
      difficulty: 3,
      question: 'Quelle est la longueur de la diagonale d\'un carré de côté 5 cm ?',
      options: ['5 cm', '5√2 cm', '10 cm', '10√2 cm'],
      correctAnswer: '5√2 cm',
      explanation: 'La diagonale d\'un carré est égale à côté × √2'
    },
    {
      id: 29,
      type: 'text',
      difficulty: 2,
      question: 'Calcule le volume d\'un cylindre de rayon 3 cm et hauteur 4 cm (π ≈ 3,14)',
      correctAnswer: '113,04',
      explanation: 'V = π × r² × h = 3,14 × 9 × 4 = 113,04 cm³'
    },
    {
      id: 30,
      type: 'multiple-choice',
      difficulty: 3,
      question: 'Quelle est l\'aire latérale d\'un cône de rayon 4 cm et génératrice 5 cm (π ≈ 3,14) ?',
      options: ['20π cm²', '25π cm²', '30π cm²', '40π cm²'],
      correctAnswer: '20π cm²',
      explanation: 'Aire latérale = π × r × g = π × 4 × 5 = 20π cm²'
    }
  ]
};

// 4. Exporter toutes les leçons, y compris les nouvelles catégories
export const allLessons: Lesson[] = [
  ...lessons,
  realWorldLesson,
  survivorLesson,
];

// 5. Filtrer les questions de la catégorie Applications & Calcul
realWorldLesson.questions = realWorldLesson.questions.filter(q => !q.question.includes('dérivée') && !q.question.includes('intégrale')); 

// Correction des questions sur les racines du second degré (hors programme 3e)
lessons[5].questions = lessons[5].questions.map(q => {
  if (
    q.question.includes('racine') ||
    q.question.includes('résoudre l\'équation x² +') ||
    q.question.includes('équation x² -') ||
    q.question.includes('équation 2x² -') ||
    q.question.includes('équation 3x² +') ||
    q.question.includes('équation x² + x -') ||
    q.question.includes('équation x² + 2x = 0')
  ) {
    // Remplacement par une équation produit ou x² = a
    return {
      id: q.id,
      type: 'multiple-choice',
      difficulty: q.difficulty,
      question: 'Résoudre : (x - 3)(x + 2) = 0',
      options: ['x = 3 ou x = -2', 'x = -3 ou x = 2', 'x = 3 ou x = 2', 'x = -3 ou x = -2'],
      correctAnswer: 'x = 3 ou x = -2',
      explanation: 'Un produit est nul si l\'un des facteurs est nul.'
    }
  }
  return q;
}); 

// Reformulation des questions du type x² + x - 6 = 0 en équation produit
lessons[5].questions = lessons[5].questions.map(q => {
  if (q.question.includes('x² + x - 6 = 0')) {
    return {
      id: q.id,
      type: 'multiple-choice',
      difficulty: q.difficulty,
      question: 'Résoudre : (x - 2)(x + 3) = 0',
      options: ['x = 2 ou x = -3', 'x = -2 ou x = 3', 'x = 2 ou x = 3', 'x = -2 ou x = -3'],
      correctAnswer: 'x = 2 ou x = -3',
      explanation: 'Un produit est nul si l\'un des facteurs est nul.'
    }
  }
  return q;
}); 

// Reformulation de toutes les équations du second degré non factorisées
['questions', 'questions'].forEach((key, idx) => {
  lessons.forEach(lesson => {
    lesson[key] = lesson[key].map(q => {
      if (/x².*= 0/.test(q.question) && !q.question.includes('(')) {
        // Génère une équation produit équivalente simple
        return {
          id: q.id,
          type: 'multiple-choice',
          difficulty: q.difficulty,
          question: 'Résoudre : (x - 1)(x + 3) = 0',
          options: ['x = 1 ou x = -3', 'x = -1 ou x = 3', 'x = 1 ou x = 3', 'x = -1 ou x = -3'],
          correctAnswer: 'x = 1 ou x = -3',
          explanation: 'Un produit est nul si l\'un des facteurs est nul.'
        }
      }
      return q;
    });
  });
});

// ... existing code ...
lessons[4].questions = lessons[4].questions.map(q => {
  if (q.question.includes('tirage de 2 cartes') && q.question.includes('de 32')) {
    return {
      id: q.id,
      type: 'multiple-choice',
      difficulty: 2,
      question: 'Quelle est la probabilité de tirer une figure en une seule carte dans un jeu de 32 ?',
      options: ['0,125', '0,25', '0,5', '0,75'],
      correctAnswer: '0,25',
      explanation: 'Il y a 8 figures dans un jeu de 32, donc 8/32 = 0,25.'
    }
  }
  return q;
});
// ... existing code ...