# Teste de Lógica - WAAC

## Estimativa de horas

5h durante a semana

## Planejamento

1. Levantamento de requisitos do problema (30 min)
2. Definição do escopo a ser considerado (30 min)
3. Prototipação da solução (2h)
4. Testes (30 min)
5. Polimento e documentação do código (1h)
6. Verificação de cumprimento de requisitos (30 min)

## Tecnologias envolvidas

Para fins de prototipação e desenvolvimento de uma solução preliminar para o problema, optou-se, levando em consideração a relativa facilidade de desenvolvimento, entendimento e execução do código, pela linguagem Python.

Uma vez desenvolvido o protótipo para a lógica do problema (core function da aplicação), decidiu-se por desenvolver a solução Fullstack utilizando React.js como principal tecnologia para front-end e uma estrutura de REST Api fornecida por [dreamlo]<http://dreamlo.com/> para back-end.

## Estratégias para o problema do triângulo

O problema pode ser encarado como a determinação do caminho de máximo custo de um grafo unidirecional, onde os nós têm custo zero e os arcos, custos predeterminados (ou vice-versa), em semelhança ao algoritmo de Dijkstra. Com isso, utilizou-se uma recursão para achar, usando força bruta, o caminho de custo máximo.

## Etapas do planejamento

Segue, neste seção, relatórios da evolução e documentação do problema dividido nas etapas propostas de planejamento.

### 1. Levantamento de requisitos do problema

Os requisitos explicitamente dados pelo problema são:

1. Dado um triângulo de números, encontre o total máximo de cima para baixo.
2. Um elemento só pode ser somando com um dos dois elementos mais próximos da próxima linha.
3. Pode-se escolher qualquer linguagem de programação para resolução do problema.
4. Há a necessidade de documentação do progresso, da estratégia e do código.
5. O código receberá uma única lista multidimensional como parâmetro por vez.
6. Para cada etapa do processo da resolução para a soma do triângulo, deve-se:

- Armazenar a lista inserida pelo usuário com um ID;
- Armazenar as etapas do processamento com o tempo de execução e o método utilizado para resolução da etapa;
- Mostrar o triângulo de forma tracejada com o caminho percorrido e o resultado.

Pode-se derivar, contudo, outros requisitos a partir da descrição do problema, que podem contar, por sua vez, como interpretação do mesmo. São eles

1. O input sempre vai ter formato triangular, ou seja, o i-ésimo elemento da lista multidimensional terá i elementos, para i natural não nulo.
2. O código deverá fornecer um método (função) que receberá como parâmetro a lista multidimensional do problema e retornará o valor do caminho de maior custo (total máximo de cima pra baixo).

### 2. Definição do escopo a ser considerado

Considerou-se o uso de python para prototipação ágil da solução para o problema, juntamente a todos os requisitos levantados, decidiu-se fazer uma abordagem por força bruta, uma vez que não foi dado limitação para tempo de execução e esta serve como pontapé inicial que supre a necessidade para alguns cenários enquanto se busca soluções mais otimizadas.

O programa espera, á priori, um input pelo usuário. Uma automatização do processo pode ser extendida a partir do uso dos métodos desenvolvidos.

### 3. Proposta de solução

O código protótipo pode ser visto [aqui](prototypes/custoMaximo_PROT.py).
Ademais, uma proposta de solução fullstack pode ser conferida [aqui](teste-waac/).
