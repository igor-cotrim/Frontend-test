/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { InputValues } from '../InputValues'
import { ResultsValue } from '../ResultsValue'
import post from '../../services/api'
import format from '../../utils/format'

import { Container } from './styles';

export function SimulationSection() {
  const [amount, setAmount] = useState('')
  const [installments, setInstallments] = useState('')
  const [reward, setReward] = useState([])

  useEffect(async () => {
    if (amount && installments) {
      const response = await post({
        amount,
        installments,
      })

      if (response.error === true) {
        alert(response.errorMessage)
        return;
      }

      const dataKey = {}

      Object.keys(response.data).forEach(key => {
        dataKey[key] = format(response.data[key])
      })

      setReward(dataKey)
    }
  }, [amount, installments])

  return (
    <Container>
      <div className="letfSection">
        <h2>Faça sua simulação</h2>

        <InputValues
          label="Valor da venda*"
          currency="R$ "
          value={amount}
          onChange={e => setAmount(e.target.value)}
          size="10rem"
          margin="1rem"
          min="1000"
          placeholder="1000"
        />

        <InputValues 
          label="Em quantas parcelas*"
          value={installments}
          parcel="parcelas"
          onChange={e => setInstallments(e.target.value)}
          min="1"
          max="12"
          placeholder="1"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi eu magna bibendum, fringilla orci ac, ornare dolor.
        </p>
      </div>


      <div className="rightSection">
        <p>amanhã você receberá</p>
        <ResultsValue value={reward[1]}/>
        <p>em 15 dias você receberá</p>
        <ResultsValue value={reward[15]}/>
        <p>em 30 dias você receberá</p>
        <ResultsValue value={reward[30]}/>

      </div>
    </Container>
  )
}
