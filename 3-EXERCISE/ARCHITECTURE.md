# ARQUITETURA

Confesso que ao ver o arquivo falando sobre arquitetura me "assustou" um pouco, devido a qualidade e riqueza de escrita, que foi bastante proveitosa. Serei um pouco mais breve.

## Tecnologias de desenvolvimento

Não acredito em tecnologias bala de prata, apesar de ser um desenvolvedor que conhece React, acredito que atualmente no mercado as tecnologias não tenham grandes diferenças de performance. Temos o [SvelteJS](https://svelte.dev/) que é uma tecnologia muito rápida e promissora, porém sem comunidade significativa. O que acarreta em maior dificuldade de resolução de problemas para desenvolvedores mais juniores.

Como por exemplo buscar "rating stars react example" e achar vários exemplo fáceis de entender ao contrário do svelt por exemplo.

Então a tecnologia deve ser definida por comunidade + curva de aprendizado + stacks já conhecidas e dominadas pela equipe.

Então se o time já tem domínio de React por exemplo, utilizaria o mesmo com Typescript para mitigação de bugs.

  

## Tecnologia de arquitetura

Toda decisão tem trade-off, eu ainda não sei quais as partes negativas,

mas micro-frontends são a solução mais adequada para a questão de volumetria, tempo de carregamento, correção debugs, criação de novas features e fácil gerenciamento para questões de gerar releases.

O bom desenvolvimento do front-end não é o único solucionador de problemas para o carregamento das páginas, um back-end bem feito tem seu papel. Micro-services são muitas vezes necessários, e em algumas partes como autenticação por exemplo, onde seria um gargalo de uso, seria ideal (não o mais barato) o uso de um banco de chave-valor, como DynamoDB por exemplo, que daria um retorno com mais velocidade.

Podendo também servir os serviços menos utilizados e que recebem menos carga com serveless via Lamba, para diminuição de custos.

Servindo as aplicações front-end com S3 e CloudFront para menores custos, e utilizando algum serviço de CDN em paralelo, como Cloudflare por exemplo para garantia de disponibilidade, agilidade de entrega e balanceamento de carga.