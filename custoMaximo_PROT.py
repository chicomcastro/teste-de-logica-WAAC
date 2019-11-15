# Autor: Francisco Castro
# Data: 15/11/2019
# Código desenvolvido em Python 3.7.0 32-bit

teste = input()

initialCost = teste[0][0]

def maxCost(triangle, maxCostUntilNow, i, j):
    print(i,j)
    if i >= len(triangle)-1 or j >= len(triangle)-1:
        return maxCostUntilNow
    if triangle[i+1][j] > triangle[i+1][j+1]:
        return maxCost(triangle, maxCostUntilNow + triangle[i+1][j],i+1,j)
    else:
        return maxCost(triangle, maxCostUntilNow + triangle[i+1][j+1],i+1,j+1)

print(maxCost(teste, initialCost, 0, 0))
