exports.load = function (pdf2htmlex) {
  pdf2htmlex.add_options([
    '--zoom 1.33',
    '--font-format woff',
    '--embed cfijo',
    '--split-pages 1'
  ])
  return pdf2htmlex
}
