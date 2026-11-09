import { useMemo, useState } from 'react'
import './App.css'
import './theme.css'

const phases = [
  {
    id: 1,
    tone: 'green',
    eyebrow: 'Phase 01',
    title: 'Something is wrong',
    shortTitle: 'The surprise',
    intro: 'Read the story and find out why Andrés starts checking his money.',
    reading: [
      'It is Saturday morning in Bogotá. Andrés is getting ready to meet his friends. Before leaving his house, he checks his bank account because he wants to know how much money he can spend during the weekend.',
      'He expects to have 180,000 COP in his account. However, when he opens his banking app, he sees something completely different.',
    ],
    highlight: 'Available balance: 95,000 COP',
    readingAfter: [
      'Andrés looks at the screen for a few seconds.',
      '“What? Where did my money go?”',
      "He remembers receiving his money at the beginning of the week. He doesn't remember buying anything expensive. During the week, he went to university, used TransMilenio, ate with his classmates and bought a few snacks.",
      "But he doesn't think those things could cost 85,000 COP. Andrés decides to investigate his expenses before meeting his friends. He opens his bank history and starts looking at every transaction from the last few days.",
    ],
    question: {
      label: 'General comprehension',
      prompt: 'Why does Andrés check his bank account?',
      options: [
        'He wants to send money to a friend.',
        'He wants to know how much money he has for the weekend.',
        'He needs to pay his university tuition.',
        'He wants to buy a new phone.',
      ],
      answer: 1,
      explanation: 'He checks his balance to know how much he can spend during the weekend.',
    },
    reflection: 'What do you think happened?',
    choices: ['He spent too much on food.', 'He bought something expensive.', 'He made several small purchases.', "He doesn't know yet."],
  },
  {
    id: 2,
    tone: 'yellow',
    eyebrow: 'Phase 02',
    title: 'The small expenses',
    shortTitle: 'Small expenses',
    intro: 'Add up the everyday purchases. Small choices can make a big difference.',
    reading: [
      'Andrés starts with Monday. He went to university early in the morning. He took TransMilenio to get there and paid 3,500 COP for the trip.',
      'After his first class, he bought a coffee for 6,000 COP because he was feeling tired. At lunchtime, he was going to eat at the university, but his classmates invited him to a restaurant nearby. He spent 18,000 COP on lunch.',
      'On the way home, he took TransMilenio again and paid another 3,500 COP.',
    ],
    expenseCard: [
      ['TransMilenio', '7,000'],
      ['Coffee', '6,000'],
      ['Lunch', '18,000'],
    ],
    total: '31,000',
    readingAfter: [
      'He is surprised. “I didn’t buy anything special, but I spent 31,000 COP in one day.” Then he checks Tuesday.',
      'On Tuesday, Andrés bought a bottle of water and a snack for 8,000 COP. He also paid 7,000 COP for TransMilenio. On Wednesday, he spent another 18,000 COP having lunch with his classmates.',
      "Andrés adds everything together. He has already spent a lot more than he thought. But there is still a problem: the numbers don't explain all the missing money.",
    ],
    question: {
      label: 'Find the information',
      prompt: 'How much did Andrés spend on Monday?',
      options: ['18,000 COP', '25,000 COP', '31,000 COP', '35,000 COP'],
      answer: 2,
      explanation: '7,000 + 6,000 + 18,000 = 31,000 COP.',
    },
    calculation: {
      prompt: 'By Wednesday, how much has he spent in total?',
      answer: '64,000',
      hint: '31,000 + 15,000 + 18,000',
    },
    check: {
      prompt: 'Is the missing money completely explained by these expenses?',
      options: ['Yes', 'No'],
      answer: 1,
      explanation: 'No. The known expenses total 64,000 COP, so 21,000 COP is still unexplained.',
    },
  },
  {
    id: 3,
    tone: 'red',
    eyebrow: 'Phase 03',
    title: 'The mysterious purchase',
    shortTitle: 'The purchase',
    intro: 'One forgotten click explains a big part of the missing balance.',
    reading: [
      'Andrés checks his bank history one more time. Then he sees a transaction that he doesn’t remember.',
    ],
    highlight: 'Friday · Online Store · 35,000 COP',
    readingAfter: [
      'He immediately thinks: “I didn’t buy anything online.” He checks his email. After a few minutes, he finds an order confirmation for wireless headphones. The total is 35,000 COP with free delivery.',
      'On Friday afternoon, he was scrolling through Instagram when he saw an advertisement. The original price was 50,000 COP, but the headphones were on sale for 35,000 COP. The advertisement said: “30% OFF — TODAY ONLY!”',
      'Andrés thought it was a great opportunity. He wasn’t planning to buy headphones, but the discount made him change his mind. At the time, he felt that he had saved 15,000 COP. Now he understands: he spent 35,000 COP that he wasn’t planning to spend.',
    ],
    question: {
      label: 'Understanding the situation',
      prompt: 'Why did Andrés buy the headphones?',
      options: [
        'His old headphones stopped working.',
        'His friends told him to buy them.',
        'He needed them for an exam.',
        'He saw a discount and thought it was a good opportunity.',
      ],
      answer: 3,
      explanation: 'The discount persuaded him to make an unplanned purchase.',
    },
    decisionTip: {
      title: 'A discount is not always a saving.',
      text: 'You save money only when you were already planning to buy the product. If the discount changes your decision, it can become an unplanned expense.',
    },
  },
  {
    id: 4,
    tone: 'blue',
    eyebrow: 'Phase 04',
    title: 'What will happen next?',
    shortTitle: 'Future choices',
    intro: 'Use the First Conditional to think about consequences.',
    reading: [
      'Now Andrés understands where most of his money went. He has 95,000 COP left, but he still has several days before he receives more money.',
      'His friends want to go to a shopping mall. A movie could cost around 18,000 COP. Food could cost another 25,000 COP. If he also buys something at the mall, he could easily spend another 20,000 or 30,000 COP.',
    ],
    highlight: 'If I plan my expenses, I will have more control over my money.',
    readingAfter: [
      'Andrés realizes that going to the mall isn’t necessarily a problem. The problem is spending without thinking.',
      'Then he writes: “If I buy something just because it is on sale, I may regret it later.” This time, he wants to make a better decision.',
    ],
    question: {
      label: 'First Conditional',
      prompt: 'If Andrés spends all his money, he ______ have problems next week.',
      options: ['has', 'will', 'would', 'is'],
      answer: 1,
      explanation: 'The First Conditional uses if + present simple, will + base verb.',
    },
    structure: {
      condition: 'I plan my expenses.',
      result: 'I will have more control over my money.',
    },
  },
  {
    id: 5,
    tone: 'purple',
    eyebrow: 'Phase 05',
    title: 'Your decision',
    shortTitle: 'Your decision',
    intro: 'Choose a plan for the afternoon and calculate what remains.',
    reading: [
      'Andrés is now standing outside the shopping mall with his friends. He has 95,000 COP in his account.',
      'He can go to the cinema, eat at the food court and maybe buy something. He can also eat with his friends but avoid buying anything else. Or he can decide to spend very little and save most of his money.',
      'Andrés remembers how a simple discount changed his decision. This time, he tells his friends: “I’ll go with you, but I’m going to be careful with my money.”',
    ],
    highlight: 'The real problem is what happens if he makes the same decision again and again.',
    mathPrompt: 'If Andrés spends…',
    mathItems: [
      ['50,000 COP today', '45,000 COP left'],
      ['20,000 COP', '75,000 COP left'],
      ['nothing', '95,000 COP left'],
    ],
  },
  {
    id: 6,
    tone: 'orange',
    eyebrow: 'Phase 06',
    title: 'Final challenge',
    shortTitle: 'Final challenge',
    intro: 'Apply the First Conditional to your own money decision.',
    final: true,
  },
]

function App() {
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState({})
  const [openAnswers, setOpenAnswers] = useState({})
  const [finalAnswers, setFinalAnswers] = useState({ spend: '', left: '', save: '', need: '', decision: '' })
  const [showResults, setShowResults] = useState(false)
  const phase = phases[phaseIndex]
  const isLast = phaseIndex === phases.length - 1
  const score = useMemo(() => Object.values(submitted).filter(Boolean).length, [submitted])
  const questionCount = phases.filter((item) => item.question || item.check).length
  const answeredCount = Object.keys(submitted).length
  const progress = Math.round(((phaseIndex + (isLast && finalAnswers.decision ? 1 : 0)) / phases.length) * 100)

  const submitAnswer = (key, value, correct) => {
    setAnswers((current) => ({ ...current, [key]: value }))
    setSubmitted((current) => ({ ...current, [key]: value === correct }))
  }

  const nextPhase = () => {
    setPhaseIndex((current) => Math.min(current + 1, phases.length - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const previousPhase = () => {
    setPhaseIndex((current) => Math.max(current - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const restart = () => {
    setPhaseIndex(0)
    setAnswers({})
    setSubmitted({})
    setOpenAnswers({})
    setFinalAnswers({ spend: '', left: '', save: '', need: '', decision: '' })
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={restart} aria-label="Money Lab home">
          <span className="brand-mark">$</span>
          <span>Money <b>Lab</b></span>
        </a>
        <div className="topbar-meta">
          <span className="level-pill">B1+ · English</span>
          <span className="lesson-count">{String(phaseIndex + 1).padStart(2, '0')} / 06</span>
        </div>
      </header>

      <div className="progress-wrap" aria-label={`Progress: ${progress}%`}>
        <div className="progress-track"><div className="progress-fill" style={{ width: `${Math.max(progress, 10)}%` }} /></div>
        <span>{progress}% complete</span>
      </div>

      <main id="top">
        <aside className="phase-nav" aria-label="Lesson phases">
          <p className="nav-label">YOUR JOURNEY</p>
          <div className="phase-list">
            {phases.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`phase-link ${index === phaseIndex ? 'active' : ''} ${index < phaseIndex ? 'done' : ''}`}
                onClick={() => setPhaseIndex(index)}
              >
                <span className={`phase-dot ${item.tone}`}>{index < phaseIndex ? '✓' : item.id}</span>
                <span><small>{item.eyebrow}</small><strong>{item.shortTitle}</strong></span>
              </button>
            ))}
          </div>
          <div className="sidebar-tip">
            <span>✦</span>
            <strong>Think before you spend.</strong>
            <p>Small choices shape big outcomes.</p>
          </div>
        </aside>

        <section className="lesson">
          <div className={`phase-hero ${phase.tone}`}>
            <div className="hero-copy">
              <span className="eyebrow">{phase.eyebrow}</span>
              <h1>{phase.title}</h1>
              <p>{phase.intro}</p>
            </div>
            <div className="hero-art" aria-hidden="true">
              <span className="coin coin-one">$</span><span className="coin coin-two">¢</span>
              <span className="art-line" /><span className="art-circle" />
            </div>
          </div>

          {phase.final ? (
            showResults ? (
              <Results score={score} total={questionCount} onRestart={restart} />
            ) : (
              <FinalChallenge answers={finalAnswers} setAnswers={setFinalAnswers} />
            )
          ) : (
            <div className="lesson-body">
              <ReadingBlock phase={phase} />
              {phase.question && (
                <QuizCard
                  id={`question-${phase.id}`}
                  question={phase.question}
                  selected={answers[`question-${phase.id}`]}
                  result={submitted[`question-${phase.id}`]}
                  onSelect={(value) => submitAnswer(`question-${phase.id}`, value, phase.question.answer)}
                />
              )}
              {phase.reflection && <Reflection phase={phase} answers={openAnswers} setAnswers={setOpenAnswers} />}
              {phase.calculation && <Calculation phase={phase} answers={openAnswers} setAnswers={setOpenAnswers} />}
              {phase.check && (
                <QuizCard
                  id="check-expenses"
                  question={phase.check}
                  selected={answers['check-expenses']}
                  result={submitted['check-expenses']}
                  onSelect={(value) => submitAnswer('check-expenses', value, phase.check.answer)}
                />
              )}
              {phase.decisionTip && <DecisionTip tip={phase.decisionTip} />}
              {phase.structure && <StructureCard structure={phase.structure} />}
              {phase.mathItems && <MoneyMath phase={phase} />}
            </div>
          )}

          <div className="lesson-footer">
            <button type="button" className="back-button" onClick={previousPhase} disabled={phaseIndex === 0}>← Back</button>
            <span className="footer-status">{answeredCount} of {questionCount} checks complete</span>
            {!isLast ? (
              <button type="button" className="primary-button" onClick={nextPhase}>Continue <span>→</span></button>
            ) : showResults ? (
              <button type="button" className="primary-button" onClick={restart}>Start again <span>↻</span></button>
            ) : (
              <button type="button" className="primary-button" onClick={() => setShowResults(true)}>See my score <span>→</span></button>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>THE MISSING MONEY · B1+ ENGLISH</span>
        <span>Built for better decisions <b>✦</b></span>
      </footer>

    </div>
  )
}

function ReadingBlock({ phase }) {
  return (
    <article className="reading-card">
      <div className="section-heading"><span className="section-icon">◖</span><div><span className="section-kicker">READING</span><h2>The story continues</h2></div></div>
      {phase.reading.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {phase.highlight && <blockquote className={`highlight ${phase.tone}`}>{phase.highlight}</blockquote>}
      {phase.expenseCard && <div className="expense-grid">{phase.expenseCard.map(([name, value]) => <div key={name}><span>{name}</span><strong>{value} <small>COP</small></strong></div>)}<div className="total"><span>Total</span><strong>{phase.total} <small>COP</small></strong></div></div>}
      {phase.readingAfter?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  )
}

function QuizCard({ id, question, selected, result, onSelect }) {
  return (
    <section className="activity-card">
      <div className="activity-top"><span className="activity-number">?</span><span className="section-kicker">{question.label}</span>{result !== undefined && <span className={`result-chip ${result ? 'correct' : 'try-again'}`}>{result ? 'Correct ✓' : 'Try again'}</span>}</div>
      <h2>{question.prompt}</h2>
      <div className="options">
        {question.options.map((option, index) => <button type="button" key={option} className={`option ${selected === index ? 'selected' : ''} ${selected === index && result === true ? 'correct' : ''} ${selected === index && result === false ? 'incorrect' : ''}`} onClick={() => onSelect(index)}><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}
      </div>
      {result !== undefined && <p className={`feedback ${result ? 'positive' : 'negative'}`}>{result ? 'Great reading!' : 'Look back at the reading and try again.'} <b>{result && question.explanation}</b></p>}
      <span className="sr-only" id={id}>Interactive question</span>
    </section>
  )
}

function Reflection({ phase, answers, setAnswers }) {
  return <section className="reflection-card"><span className="section-kicker">PAUSE & THINK</span><h2>{phase.reflection}</h2><div className="reflection-options">{phase.choices.map((choice) => <button type="button" key={choice} className={answers.reflection === choice ? 'picked' : ''} onClick={() => setAnswers((current) => ({ ...current, reflection: choice }))}>{choice}<span>→</span></button>)}</div></section>
}

function Calculation({ phase, answers, setAnswers }) {
  const options = ['49,000', '64,000', '72,000', '85,000']
  const isCorrect = answers.calculation === phase.calculation.answer
  return <section className="calculation-card"><div><span className="section-kicker">CALCULATE</span><h2>{phase.calculation.prompt}</h2><p className="math-hint">{phase.calculation.hint}</p></div><div className="number-options">{options.map((option) => <button type="button" key={option} className={answers.calculation === option ? `number-option ${isCorrect ? 'valid-option' : 'invalid-option'}` : 'number-option'} onClick={() => setAnswers((current) => ({ ...current, calculation: option }))}>{option} <small>COP</small></button>)}</div></section>
}

function DecisionTip({ tip }) {
  return <section className="decision-tip"><span className="tip-icon">✦</span><div><span className="section-kicker">MONEY INSIGHT</span><h2>{tip.title}</h2><p>{tip.text}</p></div></section>
}

function StructureCard({ structure }) {
  return <section className="structure-card"><span className="section-kicker">SPOT THE STRUCTURE</span><h2>First Conditional</h2><div className="sentence"><span className="condition">{structure.condition}</span><span className="comma">,</span><span className="result">{structure.result}</span></div><div className="structure-labels"><span><i className="condition-dot" /> CONDITION</span><span><i className="result-dot" /> RESULT</span></div></section>
}

function MoneyMath({ phase }) {
  return <section className="money-card"><span className="section-kicker">{phase.mathPrompt}</span><div className="money-rows">{phase.mathItems.map(([spent, left]) => <div key={spent}><span>{spent}</span><b>→</b><strong>{left}</strong></div>)}</div></section>
}

function FinalChallenge({ answers, setAnswers }) {
  const update = (key, value) => setAnswers((current) => ({ ...current, [key]: value }))
  const choiceGroup = (key, options) => <div className="choice-grid">{options.map((option) => <button type="button" key={option} className={`choice-chip ${answers[key] === option ? 'chosen' : ''}`} onClick={() => update(key, option)}>{option}<span>{answers[key] === option ? '✓' : '+'}</span></button>)}</div>
  return <div className="final-challenge"><div className="final-intro"><span className="big-star">✦</span><h2>Now it’s your turn.</h2><p>Imagine you receive <strong>100,000 COP</strong> tomorrow. Build your plan with the options below.</p></div><div className="sentence-builder"><div className="builder-row"><p>If I spend...</p>{choiceGroup('spend', ['20,000', '40,000', '60,000', '80,000'])}<p>I will have...</p>{choiceGroup('left', ['20,000', '40,000', '60,000', '80,000'])}<span className="unit">COP left.</span></div><div className="builder-row"><p>If I save some of the money, I will...</p>{choiceGroup('save', ['have money later', 'reach an important goal', 'feel more relaxed'])}</div><div className="builder-row"><p>If I buy something I don’t need, I will...</p>{choiceGroup('need', ['regret it later', 'spend too much', 'enjoy my purchase'])}</div></div><div className="decision-picker"><span className="section-kicker">FINAL QUESTION</span><h2>What would you do with the 100,000 COP?</h2><p>Choose the plan that best matches your decision.</p>{choiceGroup('decision', ['Save most of it', 'Spend some and save the rest', 'Use it for something important'])}</div></div>
}

function Results({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100)
  const message = percentage === 100 ? 'Excellent control!' : percentage >= 75 ? 'Great progress!' : percentage >= 50 ? 'Keep building your confidence.' : 'Every mistake is a step forward.'
  return <section className="results-card">
    <div className="results-orbit" aria-hidden="true"><span>✦</span></div>
    <span className="section-kicker">LESSON COMPLETE</span>
    <h2>You made it to the finish line.</h2>
    <p className="results-message">{message} You practiced reading, money vocabulary and the First Conditional.</p>
    <div className="score-panel">
      <div className="score-number">{percentage}<small>%</small></div>
      <div className="score-detail"><strong>{score} of {total} answers correct</strong><span>Understanding score</span><div className="score-bar"><i style={{ width: `${percentage}%` }} /></div></div>
    </div>
    <div className="results-grid"><div><span>✓</span><strong>Reading</strong><small>Story comprehension</small></div><div><span>↗</span><strong>Grammar</strong><small>First Conditional</small></div><div><span>$</span><strong>Money mindset</strong><small>Better decisions</small></div></div>
    <p className="results-quote">“If I plan my expenses, I will have more control over my money.”</p>
    <button type="button" className="results-restart" onClick={onRestart}>Try the lesson again <span>↻</span></button>
  </section>
}

export default App
