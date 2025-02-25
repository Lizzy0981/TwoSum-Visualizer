"""
Two Sum - Solución de Fuerza Bruta
Complejidad Temporal: O(n²)
Complejidad Espacial: O(1)

Autor: Elizabeth Diaz Familia
"""

def twoSum_bruteForce(nums, target):
    """
    Encuentra los índices de dos números en un array que suman el valor objetivo.
    Utiliza un enfoque de fuerza bruta con dos bucles anidados.
    
    Args:
        nums: List[int] - Array de números enteros
        target: int - Valor objetivo que deben sumar los dos números
        
    Returns:
        List[int] - Índices de los dos números que suman el valor objetivo
    """
    n = len(nums)
    
    # Verificar cada combinación posible de dos números
    for i in range(n):
        for j in range(i + 1, n):  # Empezar desde i+1 para no usar el mismo elemento
            if nums[i] + nums[j] == target:
                return [i, j]
    
    # En caso de que no haya solución (aunque el problema garantiza que hay una)
    return []


# Ejemplos de prueba
if __name__ == "__main__":
    # Ejemplo 1: nums = [2,7,11,15], target = 9 -> [0,1]
    print(f"Ejemplo 1: {twoSum_bruteForce([2, 7, 11, 15], 9)}")
    
    # Ejemplo 2: nums = [3,2,4], target = 6 -> [1,2]
    print(f"Ejemplo 2: {twoSum_bruteForce([3, 2, 4], 6)}")
    
    # Ejemplo 3: nums = [3,3], target = 6 -> [0,1]
    print(f"Ejemplo 3: {twoSum_bruteForce([3, 3], 6)}")
    
    # Comparación de rendimiento con arrays grandes
    import time
    import random
    
    # Crear un array grande para probar rendimiento
    large_array = random.sample(range(1, 10000), 5000)
    target_sum = 9999
    
    # Añadir dos números que sumen el target
    large_array.append(5000)
    large_array.append(4999)  # 5000 + 4999 = 9999
    
    # Medir tiempo de la solución de fuerza bruta
    start_time = time.time()
    result_brute = twoSum_bruteForce(large_array, target_sum)
    end_time = time.time()
    print(f"Fuerza bruta - Tiempo: {end_time - start_time:.6f} segundos, Resultado: {result_brute}")
    
    # Importar y medir tiempo de la solución optimizada
    from two_sum import twoSum
    start_time = time.time()
    result_optimized = twoSum(large_array, target_sum)
    end_time = time.time()
    print(f"Optimizado - Tiempo: {end_time - start_time:.6f} segundos, Resultado: {result_optimized}")