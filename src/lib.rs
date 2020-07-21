extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn sample_from_rust() -> String {
    return "This message came from the Rust file".to_string();
}
