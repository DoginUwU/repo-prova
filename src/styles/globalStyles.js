import { injectGlobal } from "vue-styled-components";

injectGlobal`
    :root {
        --black: #000;

        --white: #ffffff;

        --gray-0: #eee;
        --gray-50: #F0F2F5;
        --gray-300: #A9A9A9;
        --gray-900: #333;

        --purple-50: #895eff;
        --purple-100: #6933FF;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1000px) {
        html {
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

	body {
		margin: 0;
        background-color: var(--gray-50);
	}

    body,
    input,
    textarea,
    select,
    button {
        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background: var(--black);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: var(--black);
    }
    ::-webkit-scrollbar-track{
        background: var(--white);
        border-radius: 10px;
        box-shadow: inset 7px 10px 12px 0px var(--white);
    }
`;
