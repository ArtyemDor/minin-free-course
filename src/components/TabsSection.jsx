import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClick={() => onChange('feedback')}
      >
        Обратная связь
      </Button>
      <Button
        isActive={active === 'projects'}
        onClick={() => onChange('projects')}
      >
        Наши проекты
      </Button>
      <Button
        isActive={active === 'mainproject'}
        onClick={() => onChange('mainproject')}
      >
        Наш главный проект
      </Button>
    </section>
  )
}
