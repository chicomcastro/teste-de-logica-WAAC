export default function MaxCost(teste) {

    try {
        teste = JSON.parse(teste);
    }
    catch (e) {
        return null;
    }

    var initialCost;
    try {
        initialCost = teste[0][0];
    }
    catch (e) {
        return null;
    }

    return calculateMaxCost(teste, initialCost, 0, 0);
}

function calculateMaxCost(triangle, maxCostUntilNow, i, j) {

    if ((i >= (triangle).length - 1) || (j >= (triangle).length - 1)) {
        return maxCostUntilNow;
    }

    const firstWay = calculateMaxCost(triangle, maxCostUntilNow + triangle[i + 1][j], i + 1, j)
    const secondWay = calculateMaxCost(triangle, maxCostUntilNow + triangle[i + 1][j + 1], i + 1, j + 1)

    if (firstWay > secondWay)
        return firstWay
    else
        return secondWay
}
