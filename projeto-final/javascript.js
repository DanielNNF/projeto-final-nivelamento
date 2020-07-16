// //6.1 - Variáveis e constantes:
// // variáveis: Local onde são armazenados dados porem podem sofrer alteração e receber novos valores;
// var nome='Daniel';
// var idade= 36;
// // Constante: Local onde são armazenados dados porem não podem sofrer alteração e não podem ser reatribuidas;
// const nomeCarro ='Ecosport';
// const anoModelo = 2012;
// //Comando de decisão:
// //  => Executam ações diferentes mediante as condições apresentas
// // if - executa se a condição for true 
// // else - executa se a condição for false
// // else if - executa uma nova condição se a primeira for false
// // switch - executa uma ação em um multi bloco de codigos


// if (hora<10){
//   alert('Bom dia');
// }else if(hora < 20)
//   alert('Boa tarde');
// }else(
//   alert('Boa noite')
// );
// switch(carros){
//   case'Gol':
//   alert('Popular');
//   break;
//   case'Ferrari':
//   alert('Luxo');
//   default:
//   alert('Outra categoria')

// }

// Loops 
// => São estruturas de repetição que executa o cod varias vezes sempre que obtiver um valor diferente.São

// for - percorre o bloco varias vezes ate a condição final
//   in - retorna string + a posição em valores numericos
//   of - retorna um objeto iteravel
// while - retorna enquanto a condição for true
//   do/while - executa uma ação depois executa a proxima enquanto for true

// function checaSeUsuarioUsaCss(usuario){
//   for(var tecnologia of usuario.tecnologias){
//     if(tecnologia=='CSS')return true}
//     return false
//   }
//   for(var i = 0; i< usuario.lenght;i++){
//    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])
//   }
// if(usuarioTrabalhaComCss){
//   console.log('O usuário ${usuario[i].nome}trabalha com Css')
// }

// funções:
// => Armazena um bloco de codigos para execução;

// const usuarios = [
//   {nome:'Daniel',
//   tecnologias:['HTML','CSS']} // Com exemplo de arrays tbm!!.
//   {nome:'Filipe',
//   tecnologias:['HTML','Java']}
// ]

// Escopos:
//   Global=> É uma variavel declarada fora da função podendo sofrer alterações
//   Local=> Declarada e acessível apenas dentro da função

  // var meuNome ='Daniel';//Escopo local

  // function mostrarNome(){
  //   var meuUltimoNome = 'Couto';
  //   console.log('Meu nome é' + meuNome + ''+ meuUltimoNome)
  // }

  // var meuNome ='Daniel';//Escopo Global

  // function mostrarNome(){
  //   var meuUltimoNome = 'Couto';
    
  // }
  // mostrarNome();
  // console.log('Meu nome é' + meuNome );

  // Input=> Onde são inseridos os dados
  //   prompt('Exemplo')
  
  // output=> Onde são exibidos os dados:
  // document.write('Exemplo'), alert('Exemplo');

// array = são vetores de armazenamento de varios valores

//   Exemplo junto com as funçoes acima


// // Objetos => é um conjunto de propriedades e funcionalidades
// console.log // console é um objeto e log é sua funcionalidade

// camelCase = escritas onde primeira minuscula e a segunda Maiuscula
// PascalCase = escritas onde primeira Maiuscula e a segunda tbm
// kibab-Case = escritas em minusculo separado por - 
// snake_Case = escritas em minusculo separado por _

// caminho absoluto = quando chamado em um link, por exemplo, fica apenas na minha maquina
// exemplo: c:// .....
// caminho relativo = quando chamado em um link, por exemplo, fica disponivel no navegador
// exemplo: ./index.js

// Operadores:
// && - As duas condições tem que ser true
// || - uma das condições deve ser true
// == - condição de igualdade  mas não precisa ser do mesmo tipo(como o caso do === que precisa tbm ser do mesmo tipo)
// != - condição diferente independente do tipo(!== tbm precisa ser do mesmo tipo)

// O que é EPER 
// Entender
//   Analiso o problema e entendo ponto a ponto o que foi apresentado
// Planejar
//   Apos analisar ponto a ponto, planejo quais melhores caminhos, ferramentos e soluções que serão aplicados
// Executar
//   Aplico o que foi planejado sem fugir do planejamento
// Revisar
//   Reviso o codigo pra ver se o mesmo precisa ser polido e se atendeu as expectativas da resolução do problema

// Conceito de Pilha 
//   O primeiro adicionado em um array é o último a ser retirado

// Conceito de Fila:
//   O primeiro adicionado em um array é o primeiro que será retirado  

// HTML
//   => Onde são estruturados os dados , como se fosse o esqueleto do codigo
// CSS
//   => É a estrutura de estilização dos dados inseridos , como se fosse o corpo humano ja pronto
// JavaScript
//   => São as funções atribuídas ao que fora estruturado no HTML, colocando o ser humano pra andar, falar e etc..
  
  
  











