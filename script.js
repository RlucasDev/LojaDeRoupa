function rolarPara(secaoId) {
  document.getElementById(secaoId).scrollIntoView({
    behavior: "smooth"
  });
}

let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;

  alert(`${nome} foi adicionado ao carrinho 🛒
Total atual: R$ ${total.toFixed(2)}`);
}

function gerarPix() {
  const valorInput = document.getElementById("valor");
  const pixArea = document.getElementById("pix-area");
  const valor = parseFloat(valorInput.value);

  if (isNaN(valor) || valor <= 0) {
    pixArea.innerHTML = "<p style='color:red;'>Digite um valor válido.</p>";
    return;
  }

  const chavePix = "fitgrill@loja.com";
  const codigoPix = `PIX copia e cola:
Chave: ${chavePix}
Valor: R$ ${valor.toFixed(2)}`;

  pixArea.innerHTML = `
    <div style="background:#f4f4f4;padding:15px;border-radius:8px;margin-top:10px;">
      <p><strong>Pagamento Gerado ✅</strong></p>
      <p>${codigoPix.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  valorInput.value = "";
}