# MonorepoPNPM
Practical examples and experiments with pnpm.

## `PNPM`

`pnpm` to menedżer pakietów dla JavaScript, który jest szybki, oszczędny w miejscu na dysku i wydajny. Zamiast kopiować pliki, używa symbolicznych linków, co pozwala na współdzielenie zależności między projektami. Dzięki temu instalacja zależności jest szybsza i zajmuje mniej miejsca.

Dodatkowo, `pnpm` wspiera `monorepo` (wielomodułowe projekty), oferując zarządzanie zależnościami między pakietami w ramach jednego repozytorium. Jest kompatybilny z `npm` i zapewnia lepsze zarządzanie wersjami.

## `pnpm-lock.yaml`

Plik `pnpm-lock.yaml` jest kluczowym elementem w projekcie `PNPM`, którego głównym zadaniem jest śledzenie zainstalowanych pakietów i ich zależności, zapewniając tym samym spójność wersji pomiędzy różnymi instalacjami projektu: 

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .: {}

  packages/package1: {}

  packages/package2: {}
```

1. `lockfileVersion`

    `lockfileVersion: '9.0'` określa wersję formatu pliku `lockfile`. Wersja `9.0` jest używana w najnowszych wersjach `PNPM`, zapewniając optymalizacje i nowe funkcje.

2. `settings`

    `autoInstallPeers: true` sprawia, że `PNPM` automatycznie zainstaluje zależności typu `peer` (zależności wymagane przez inne pakiety), jeżeli jeszcze nie zostały zainstalowane w projekcie.

    `excludeLinksFromLockfile: false` określa, czy linki symboliczne (`symlinks`) mają być zapisane w pliku `lockfile`. Gdy jest ustawione na `false`, linki będą uwzględnione w pliku.

3. `importers`

    Sekcja `importers` wskazuje, które katalogi w projekcie są zarządzane przez `PNPM` w ramach `workspace`. Dla bieżącego projektu są to:

    - `.` — główny katalog repozytorium.

    - `packages/package1` — pierwszy pakiet w folderze `packages`.

    - `packages/package2` — drugi pakiet w folderze `packages`.

## Dodawanie własnych skryptów do `package.json`:

Aby dodać własne skrypty do projektu, należy zedytować sekcję `scripts` w pliku `package.json`. Skrypty te można uruchamiać za pomocą komendy `pnpm run <nazwa-skryptu>`. Przykład:

```json
"scripts": {
  "test": "jest",
  "start": "node index.js",
  "build": "webpack --config webpack.config.js"
}
```
Analiza:

- `test` - uruchamia testy (np. za pomocą `jest`).
- `start` - uruchamia aplikację (np. za pomocą `node`).
- `build` - buduje aplikację (np. za pomocą `webpack`).

Uruchamianie skryptu:

```bash
pnpm run start
```
