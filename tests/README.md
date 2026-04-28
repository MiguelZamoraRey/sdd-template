# Tests

Los tests en este directorio deben poder trazarse a criterios de aceptación o casos de error definidos en `specs/`.

## Convenciones

- El nombre de cada test debe incluir el ID del criterio que valida.
- No escribas tests para comportamientos que no estén en la spec.
- Si un test falla y la spec no lo describe, actualiza la spec antes de corregir el código.

## Ejemplo de test bien nombrado

```js
// Spec: specs/features/user-authentication.md (FEAT-001)

test("AC-1: devuelve token cuando las credenciales son válidas", () => { ... })
test("CE-1: responde 401 si el email no existe en el sistema", () => { ... })
test("AC-5: bloquea la cuenta tras 5 intentos fallidos", () => { ... })
```
