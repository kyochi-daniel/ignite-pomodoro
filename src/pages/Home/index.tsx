import { Play, Minus, Plus } from '@phosphor-icons/react'
import { CountDownContainer, FormContainer, HomeContainer, Separator } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" placeholder="Dê um nome para o projeto" />
          <label htmlFor="">durante</label>
          <div className="minutesAmountClass">
            <Minus size={12} />
            <input type="number" id="minutesAmount" />
            <Plus size={12} />
          </div>
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
