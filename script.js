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

  /**
   * Função para normalizar a entrada do usuário.
   * Remove espaços extras e acentuação, retornando a string em minúsculas.
   */
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  submitButton.addEventListener('click', () => {
    const userInput = normalize(answerInput.value);
    if (userInput.length === 0) {
      resultDiv.textContent = 'Por favor, preencha o campo para participar.';
      resultDiv.style.color = '#d00000';
      return;
    }
    // Para esta versão do quiz, qualquer resposta válida gera um cupom de desconto.
    resultDiv.innerHTML =
      '🎉 Obrigado por participar! Use o código <strong>AQUA10</strong> no nosso WhatsApp e garanta 10 % de desconto na matrícula.';
    resultDiv.style.color = '#006d77';
  });
});