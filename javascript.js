// Dados JSON
const jsonData = {
    "nome": "Jason Voorhees",
    "dia": "Sexta-feira",
    "data": "13",
    "acao": "Perseguindo bugs",
    "status": "Ativo",
    "mensagem": {
        "inicio": "Hoje é sexta-feira 13! Prepare-se, pois JSON está à espreita...",
        "bug_encontrado": "Ops! Encontramos um bug no JSON. Cuidado, Jason pode estar perto para te assustar!",
        "sem_bugs": "Tudo tranquilo! O JSON está limpo e Jason está descansando... por enquanto."
    }
};

// Mostrar os dados no HTML
const output = document.getElementById('output');
output.innerHTML = `
    <p><strong>Nome:</strong> ${jsonData.nome}</p>
    <p><strong>Dia:</strong> ${jsonData.dia}</p>
    <p><strong>Data:</strong> ${jsonData.data}</p>
    <p><strong>Ação:</strong> ${jsonData.acao}</p>
    <p><strong>Status:</strong> ${jsonData.status}</p>
    <p><strong>Mensagem:</strong> ${jsonData.mensagem.inicio}</p>
`;
