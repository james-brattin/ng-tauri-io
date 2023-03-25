#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::fs;

#[tauri::command]
async fn hello_world_command(_app: tauri::AppHandle) -> Result<String, String> {
  println!("I was invoked from JS!");
  Ok("Hello world from Tauri!".into())
}

#[tauri::command]
async fn read_json(_app: tauri::AppHandle) -> Result<String, String> {
  let file_path = String::from("C:\\rust-io\\generated.json");
  let contents = fs::read_to_string(file_path)
    .expect("Should have been able to read the file");

  println!("With text:\n{contents}");
  Ok(contents.into())
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![hello_world_command,read_json])
    //.invoke_handler(tauri::generate_handler![read_json])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
