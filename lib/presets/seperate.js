exports.load = function (pdf2htmlex) {
  pdf2htmlex.add_options([
    '--zoom 1.33',
    '--font-format woff',
    '--split-pages 1',
    '--dest-dir out'
  ])
  return pdf2htmlex
}
