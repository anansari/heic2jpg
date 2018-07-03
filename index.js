import Convertor from "./src/Convertor";

/**
 * initialization block
 */
function _init() {
  console.log("I am getting this far.");	
}

function _letsGetBusy() {
  console.log("Calling Convertor");
  let convertor = new Convertor();
  convertor.convertHEIF2Jpeg();
}

_init();
_letsGetBusy();
