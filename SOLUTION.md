# SOLUTION

@emotion/core 패키지에서 `The @emotion/core package has been renamed to @emotion/react. Please import it like this import { jsx } from '@emotion/react'` 에러가 발생하였습니다. 해당 패키지를 다운그레이드 하여 재설치 하는것으로 해결하였습니다.
https://stackoverflow.com/questions/64825623/dependency-is-not-renamed

UI 라이브러리로 tailwindcss를 추가하였습니다.
global 상태관리 라이브러리로 jotai를 추가하였습니다.
uuid 생성 라이브러리로 uuid를 추가하였습니다. (타입스크립트 사용으로 @types/uuid도 설치하였습니다.)
