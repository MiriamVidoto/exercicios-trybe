import React from 'react';

const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso do Sul", "Mato Grosso",  "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];


class PersonalForm extends React.Component {

    render() {
        return(
            <fieldset>
                <div className="container">
                    <label htmlFor="name">Nome:
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    maxlength="40"
                    required
                    onChange={() => {} }
                    />
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="email">Email:
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    maxlength="50"
                    required
                    onChange={() => {} }
                    />
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="cpf">CPF:
                    <input 
                    type="text"
                    name="cpf"
                    id="cpf"
                    maxlength="11"
                    required
                    onChange={() => {} }
                    />
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="endereco">Endereço:
                    <input 
                    type="text"
                    name="endereco"
                    id="endereco"
                    maxlength="200"
                    required
                    onChange={() => {} }
                    />
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="cidade">Cidade:
                    <input 
                    type="text"
                    name="cidade"
                    id="cidade"
                    maxlength="28"
                    required
                    onChange={ () => {} }
                    onBlur={ () => {} }
                    />
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="estado">Estado:
                    <select
                    name="estado"
                    id= "estado"
                    required
                    onChange={ () => {} }
                    defaultValue=""
                    >
                        <option value="">Selecione</option>
                        {
                            estados.map((estado, index) => (
                                <option key= { index }>{ estado }</option>
                            ))
                        }
                    </select>
                    </label>
                </div>

                <div className="container">
                    <label htmlFor="casa">
                        <input 
                        type="radio"
                        name='tipo'
                        value="casa"
                        id="casa"
                        onChange={ () => {} }
                        />
                        Casa
                    </label>

                    <label htmlFor="apartamento">
                        <input 
                        type="radio"
                        name='tipo'
                        value="apartamento"
                        id="apartamento"
                        onChange={ () => {} }
                        />
                        Apartamento
                    </label>
                </div>

            </fieldset>
        );
    }
}

export default PersonalForm;
