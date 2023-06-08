import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  font-weight: 700;
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-100']};

  /* > input {
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    background-color: transparent;

    font-weight: 700;

    padding-bottom: 0.5rem;
  } */

  /* .minutesAmountClass {
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    padding-bottom: 0.5rem;

    color: ${(props) => props.theme['gray-500']};
  }

  .minutesAmountClass input {
    width: 2.625rem;

    border: 0;
    background-color: transparent;
  } */
`

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};

    padding: 2rem 1rem;

    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`
