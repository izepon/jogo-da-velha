function jogadaAleatoriaPc(posicao) {
    if (posicao == 0) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[3] == '') {
            posicao = 3;
            jogar(posicao);
        } else if (tabuleiro[1] == '') {
            posicao = 1;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 1) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[2] == '') {
            posicao = 2;
            jogar(posicao);
        } else if (tabuleiro[0] == '') {
            posicao = 0;
            jogar(posicao);
        }else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 2) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[5] == '') {
            posicao = 5;
            jogar(posicao);
        } else if (tabuleiro[1] == '') {
            posicao = 1;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 3) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[6] == '') {
            posicao = 6;
            jogar(posicao);
        } else if (tabuleiro[0] == '') {
            posicao = 0;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 4) {
        if (tabuleiro[1] == '') {
            posicao = 1;
            jogar(posicao);
        } else if (tabuleiro[3] == '') {
            posicao = 3;
            jogar(posicao);
        } else if (tabuleiro[5] == '') {
            posicao = 5;
            jogar(posicao);
        } else if (tabuleiro[7] == '') {
            posicao = 7;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 5) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[2] == '') {
            posicao = 2;
            jogar(posicao);
        } else if (tabuleiro[8] == '') {
            posicao = 8;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 6) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[3] == '') {
            posicao = 3;
            jogar(posicao);
        } else if (tabuleiro[7] == '') {
            posicao = 7;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 7) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[8] == '') {
            posicao = 8;
            jogar(posicao);
        } else if (tabuleiro[6] == '') {
            posicao = 6;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    } else if (posicao == 8) {
        if (tabuleiro[4] == '') {
            posicao = 4;
            jogar(posicao);
        } else if (tabuleiro[5] == '') {
            posicao = 5;
            jogar(posicao);
        } else if (tabuleiro[7] == '') {
            posicao = 7;
            jogar(posicao);
        } else {
            jogadaAleatoria(posicao);
        }
    }   
}