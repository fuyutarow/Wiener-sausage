#[macro_use]
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a:f32, b:f32) -> f32 {
    a + b
}
