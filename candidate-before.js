/* Сборка поставщика. Сначала чёрный ящик, затем инспекция и исправление.
   Это не правильные требования: сопоставляйте с ТРЕБОВАНИЯ.txt.
   После редактирования сохраните файл и обновите START.html. */
(function(root){
const candidate={
  pumpStart: humidity => humidity <= 35,
  hold: (previous, input) => previous.fault && !input.reset && input.age > 30,
  order: () => ['pump', 'vent']
};
if(typeof module!=='undefined')module.exports=candidate;else root.CandidatePolicy=candidate;
})(typeof window!=='undefined'?window:globalThis);
