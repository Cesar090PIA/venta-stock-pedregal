function abrirPdf() {
    const v = new Date().getTime();
    window.open(`./assets/pdf/catalogoPedregal.pdf?v=${v}`, '_blank');
}