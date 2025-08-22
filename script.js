/*
 * script.js
 * Este arquivo implementa a lógica de gamificação para a landing page.
 * Ele verifica a resposta do usuário no quiz de tradução e exibe uma
 * mensagem de parabéns com um cupom de desconto quando a resposta
 * estiver correta. Caso contrário, oferece uma dica.
 */

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitAnswer');
  const answerInput = document.getElementById('answerInput');
  const resultDiv = document.getElementById('result');

  // Lista de respostas corretas normalizadas
  const correctAnswers = [
    'aterrizaje feliz',
    'aterrizaje alegre',
    'iloainen laskeutuminen', // variante com “iloainen” (erro comum)
    'iloinen laskeutuminen',
    'iloinen lasku',
    'feliĉa surteriĝo',
    'feliĉa surterigxo', // x‑sistemo de esperanto
    'felica surteriĝo',
    'felica surterigxo'
  ];

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .trim();
  }

  submitButton.addEventListener('click', () => {
    const userAnswer = normalize(answerInput.value);
    if (userAnswer.length === 0) {
      resultDiv.textContent = 'Por favor, insira uma resposta.';
      resultDiv.style.color = '#d00000';
      return;
    }
    const isCorrect = correctAnswers.some((ans) => ans === userAnswer);
    if (isCorrect) {
      resultDiv.innerHTML =
        '🎉 Parabéns! Você acertou! Use o código <strong>FELIĈA10</strong> no nosso WhatsApp para ganhar 10 % de desconto na matrícula.';
      resultDiv.style.color = '#006d77';
    } else {
      resultDiv.innerHTML =
        'Não exatamente... Dica: procure por "Aterrizaje", "Iloinen" ou "Feliĉa".';
      resultDiv.style.color = '#d00000';
    }
  });
});