# ARCHITECTURE - ARQUITETURA


### **Introdução:**
Após navegar pela [área logada do site da Serasa](https://www.serasa.com.br/area-cliente) e interagir com os componentes da página, além de levar em consideração os [pontos de atenção](../3-EXERCISE/README.md#pontos_de_atenção) ressaltados na descrição do exercício, é proposta a arquitetura de frontend que se segue.


### **Observações iniciais:**
É evidente ao logar no site do Serasa que muitos componentes complexos são carregados e exibidos na mesma página e de forma elegante a interface secciona estes componentes em `cards`:
![página carregada 1](../3-EXERCISE/images/p%C3%A1gina-carregada-1.png)
![página carregada 2](../3-EXERCISE/images/p%C3%A1gina-carregada-2.png)

Porém, estes componentes não podem ser carregados sequencialmente, uma vez que as páginas demorariam muito tempo para inicializar. Assim, são carregados dentro de seus próprios módulos - ou assim deveria ser arquitetado, partindo de qualquer técnica de estruturação de código ou arquitetura de sistema escolhida para implementar o conceito da aplicação macro.

Na imagem abaixo, evidencia-se o carregamento individual de componentes:
![carregamento inicial](../3-EXERCISE/images/carregamento-p%C3%A1gina.png)

Desta forma, já fica evidente logo de início que esta análise e proposta acabam por resultar num conceito de arquitetura de sistema que permita ao frontend o máximo de eficiência no lado do cliente em relação a tempo de carregamento, custo de processamento (utilização da memória e capacidade de processamento da máquina que carrega a tela) e desenvolvimento em paralelo de cada seção componentizada exibida em `cards` das páginas.

---

### **Arquitetura proposta:**
Afim de promover maior independência entre as equipes de desenvolvedores e de manter os padrões gerais de utilização e implementação de novas *features*, bem como facilitar a manutenção de código, testes de QA, análises de performance para processo contínuo de desenvolvimento e até mesmo a utilização de diferentes tecnologias e frameworks em um mesmo ambiente (como descrito por [Bhargav Bachina](https://medium.com/@bhargavbachina?source=post_page-----5ab172a0fec7--------------------------------) [neste artigo](https://medium.com/bb-tutorials-and-thoughts/how-to-implement-micro-frontend-architecture-with-react-5ab172a0fec7) de 2020), a sugestão que mais se adequa para a plataforma, na opinião do autor dessa análise, é a utilização de [Micro Frontends](https://tautorn.github.io/micro-frontends/).

Ambos, os textos de referência descrevem o modelo de arquitetura como pensado para atribuir a um componente pai a responsabilidade de realizar diversas requisições iniciais ao _backend_ comuns a mais de um componente ou que atribuam _roles_ de nível alto para a aplicação. Desta forma, é possível gerenciar estados comuns a diferentes aplicações dentro da mesma página, comunicação com serviços comuns de mensageria do backend e disponibilizar estas informações, assim como todo e qualquer controle e gerenciamento de estados, transmisões e inscrições compartilhados.

Para melhor compreender esta abstração de sistema, observe a imagem abaixo:
![Esquemático de arquitetura em micro frontends](https://miro.medium.com/max/1400/0*VjACXGWTMfFZAHZe.png)

Nela, é possível notar que o componente pai (App) é responsável por gerenciar a comunicação entre os componentes filhos, ou _**micro frontends**_, e por exibi-los para o navegador. Além disso, caberia mais uma seta indicando o fluxo de dados inicial, caso haja, do componente pai com o _backend_. 

---

### **Tecnologias Facilitadoras:**
A arquitetura em **Micro Frontends** permite ainda, além da versatilidade de escolha de utilização de frameworks trabalhados em cada _**micro frontend**_, Renderização no Servidor (_Server Side Rendering_, doravante _SSR_) das páginas. A escolha entre _Cllient Side Rendering_ (doravante _CSR_, padrão original do carregamento de sites e aparentemente o padrão usado no site da Serasa) e _Server Side Rendering_ passa por outros aspectos técnicos que seriam muito difíceis de abordar apenas estudando a [área logada do site da Serasa](https://www.serasa.com.br/area-cliente). 

Para esta definição, seria necessário ao menos uma entrevista com todos os _stakeholders_ da plataforma, tanto da área de negócios, quanto da equipe de desenvolvimento para determinar com precisão qual seria a melhor proposta em termos de escalabilidade e custo real (em dinheiro) de processamento. De toda forma, já há disponibilidade de soluções elegantes e práticas para utilizar **Micro Frontends** com renderização _SSR_. Como sugestão de leitura, caso desconheça, ou de escolha para utilização, fica o [link para o framework single-spa](https://single-spa.js.org/docs/getting-started-overview/) e também para a seção dedicada sobre [utilização e implementação de _server side rendering_](https://single-spa.js.org/docs/ssr-overview/#:~:text=In%20the%20context%20of%20microfrontends,once%20initialized%20in%20the%20browser.) onde há menção a outros dois _frameworks_ ([NextJS](https://nextjs.org/) e [Nuxt](https://nuxtjs.org/)), além dos três mais populares (Vue, React e Angular) para facilitar o desenvolvimento e implementação de páginas _SSR_. Tanto o **NextJS**, quanto o **Nuxt** são baseados em frameworks já existentes, respectivamente [React](https://reactjs.org/) e [Vue](https://vuejs.org). Porém, para o framework [Angular](https://angular.io/) há o [Angular Universal](https://angular.io/guide/universal), que tem sua documentação no mesmo domínio do framework original.

---

### **Conclusão:**
Com o foco voltado para a melhor experiência de usuário possível, esta análise abordou aspectos observáveis da aplicação real e já em funcionamento. É evidente que o usuário não tem visibilidade alguma, ou quase nenhuma, das tecnologias e especificidades abordadas neste texto, porém todas impactam nos principais KPIs de UX, como: 
- Tempo gasto para executar uma tarefa;
- Tempo gasto esperando uma ação acontecer;
- Facilidade de uso/navegação;
- Taxa de sucesso na execução de tarefas/ações;

Adotar esta arquitetura de frontend em **Micro Frontends**, caso já não esteja em aplicação, também requer um esforço das outras equipes envolvidas nos produtos para se adequarem aos requisitos chaves de seus respectivos escopos. Contudo, o autor desta análise entende que seria a escolha mais sensata a se fazer, tanto com a aparente renderização atual _CSR_, quanto em carregamento das páginas em _SSR_.