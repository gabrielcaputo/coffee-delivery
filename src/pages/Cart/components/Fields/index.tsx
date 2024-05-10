import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { states } from "../../../../data/states";
import { FieldsWrapper, FieldsCard, FieldsCardHeader, FieldsCardHeaderText, FieldsFields } from "./styles";
import { useTheme } from "styled-components";
import { BaseCheckbox, BaseCheckboxLabel, BaseInput, BaseSelect } from "../../../../layouts/DefaultLayout/styles";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import cep from 'cep-promise'

export function Fields() {
  const theme = useTheme()
  const { register, watch, setValue } = useFormContext()

  const cepVal = watch('cep');

  useEffect(() => {
    cep(cepVal, {
      providers: ['brasilapi']
    })
    .then(response => {
      setValue('city', response.city)
      setValue('neighborhood', response.neighborhood)
      setValue('state', response.state)
      setValue('street', response.street)
    })
    .catch(() => {
      setValue('city', '')
      setValue('neighborhood', '')
      setValue('state', '')
      setValue('street', '')
    })
  }, [cepVal, setValue])

  return (
    <FieldsWrapper>
      <h2>Complete seu pedido</h2>
      <FieldsCard>
        <FieldsCardHeader>
          <MapPinLine size={24} color={theme.colors.base["color-yellow"]} />
          <FieldsCardHeaderText>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido:</p>
          </FieldsCardHeaderText>
        </FieldsCardHeader>

        <FieldsFields>
          <BaseInput minLength={8} maxLength={8} required id="cep" type="text" placeholder="CEP" {...register('cep')} />
          <BaseInput required id="street" type="text" placeholder="Logradouro" {...register('street')} />
          <BaseInput required id="number" type="text" placeholder="Número" {...register('number')} />
          <BaseInput id="complement" type="text" placeholder="Complemento" {...register('complement')} />
          <BaseInput required id="neighborhood" type="text" placeholder="Bairro" {...register('neighborhood')} />
          <BaseInput required id="city" type="text" placeholder="Cidade" {...register('city')} />
          <BaseSelect required id="state" {...register('state')}>
            <option>Estado</option>
            {states.map(state =>
              <option key={state.shortName} value={state.shortName}>{state.name}</option>
            )}
          </BaseSelect>
        </FieldsFields>
      </FieldsCard>
      <FieldsCard>
        <FieldsCardHeader>
          <CurrencyDollar size={24} color={theme.colors.base["color-purple"]} />
          <FieldsCardHeaderText>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar:</p>
          </FieldsCardHeaderText>
        </FieldsCardHeader>
        <FieldsFields>
          <BaseCheckbox required id="credit" value="credit" type="radio" {...register('paymentType')} />
          <BaseCheckboxLabel htmlFor="credit">
            <CreditCard size="0.875rem" color={theme.colors.base["color-purple"]} />
            Cartão de crédito
          </BaseCheckboxLabel>

          <BaseCheckbox required id="debt" value="debt" type="radio" {...register('paymentType')} />
          <BaseCheckboxLabel htmlFor="debt">
            <Bank size="0.875rem" color={theme.colors.base["color-purple"]} />
            Cartão de débito
          </BaseCheckboxLabel>

          <BaseCheckbox required id="cash" value="cash" type="radio" {...register('paymentType')} />
          <BaseCheckboxLabel htmlFor="cash">
            <Money size="0.875rem" color={theme.colors.base["color-purple"]} />
            Dinheiro
          </BaseCheckboxLabel>
        </FieldsFields>
      </FieldsCard>
    </FieldsWrapper>
  )
}