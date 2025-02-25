"""
Two Sum - Solución Optimizada
Complejidad Temporal: O(n)
Complejidad Espacial: O(n)

Autor: Elizabeth Diaz Familia
"""

def twoSum(nums, target):
    """
    Encuentra los índices de dos números en un array que suman el valor objetivo.
    
    Args:
        nums: List[int] - Array de números enteros
        target: int - Valor objetivo que deben sumar los dos números
        
    Returns:
        List[int] - Índices de los dos números que suman el valor objetivo
    """
    # Diccionario para almacenar los números y sus índices
    num_dict = {}
    
    # Recorrer el array
    for i, num in enumerate(nums):
        # Calcular el complemento necesario
        complement = target - num
        
        # Si el complemento está en el diccionario, hemos encontrado la solución
        if complement in num_dict:
            return [num_dict[complement], i]
        
        # Si no, añadir el número actual al diccionario
        num_dict[num] = i
    
    # En caso de que no haya solución (aunque el problema garantiza que hay una)
    return []


# Ejemplos de prueba
if __name__ == "__main__":
    # Ejemplo 1: nums = [2,7,11,15], target = 9 -> [0,1]
    print(f"Ejemplo 1: {twoSum([2, 7, 11, 15], 9)}")
    
    # Ejemplo 2: nums = [3,2,4], target = 6 -> [1,2]
    print(f"Ejemplo 2: {twoSum([3, 2, 4], 6)}")
    
    # Ejemplo 3: nums = [3,3], target = 6 -> [0,1]
    print(f"Ejemplo 3: {twoSum([3, 3], 6)}")