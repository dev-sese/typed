# TYPED FRONTEND ENGINEER PROJECT

## 🚀 프로젝트 실행

다음 명령어를 순차적으로 실행하여 프로젝트를 실행합니다.

```sh
npm install
npm start
```

## ⚙️ 추가 설치 라이브러리

- **jotai**: Global 상태관리
- **uuid, @types/uuid**: uuid
- **typed-design-system**: typed 스타일
- **tailwindcss, @tailwindcss/line-clamp**: css

Global 상태 관리 라이브러리를 `jotai`와 `RTK` 중 고민하였습니다. `RTK`는 그동안 사용해오던 기술이라 익숙하고, `jotai`는 최근 도입을 위해 공부하는 단계입니다. 이 프로젝트에서는 많은 값이 변하지 않기 때문에 좀 더 간결하고, `useState`와 문법이 유사한 `jotai`를 사용하였습니다.

## 🔍 기타 참고사항

@emotion/core 패키지에서 `The @emotion/core package has been renamed to @emotion/react. Please import it like this import { jsx } from '@emotion/react'` 에러가 발생하였습니다.

해당 패키지를 다운그레이드 하여 재설치 하는것으로 해결하였습니다.
https://stackoverflow.com/questions/64825623/dependency-is-not-renamed
