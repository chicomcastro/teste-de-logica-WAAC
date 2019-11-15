# Titulo: Prototipo melhorado da solucao para o problema
# Descricao: Solucao forca bruta para o problema proposto.
#
# Autor: Francisco Castro
# Data: 15/11/2019
# Codigo desenvolvido em Python 3.7.0 32-bit

teste = input()

initialCost = teste[0][0]

def maxCost(triangle, maxCostUntilNow, i, j):
    print(i,j, maxCostUntilNow)
    if i >= len(triangle)-1 or j >= len(triangle)-1:
        return maxCostUntilNow
    
    firstWay = maxCost(triangle, maxCostUntilNow + triangle[i+1][j],i+1,j)
    secondWay = maxCost(triangle, maxCostUntilNow + triangle[i+1][j+1],i+1,j+1)

    if(firstWay > secondWay):
        return firstWay
    else:
        return secondWay

print(maxCost(teste, initialCost, 0, 0))
