use ic_cdk::api::call::call;
use ic_cdk::{update};
use candid::Principal;
use crate::{DiagnoseFailed, DiagnoseResult};

#[update]
async fn lung_disease_diagnose(img: Vec<u8>) -> DiagnoseResult {
    let model_canister: Principal = Principal::from_text("sdv22-oyaaa-aaaam-acuaa-cai")
        .expect("Invalid Canister ID.");

    let result: Result<(DiagnoseResult,), _> = call(model_canister, "diagnose", (img,)).await;

    match result {
        Ok((diagnose_result,)) => diagnose_result,
        Err((code, message)) => DiagnoseResult::Err(DiagnoseFailed {
            message: format!("Error {}: {}", code as i64, message),
        }),
    }
}

#[update]
async fn lung_ct_diagnose(img: Vec<u8>) -> DiagnoseResult {
    let model_canister: Principal = Principal::from_text("by6od-j4aaa-aaaaa-qaadq-cai")
        .expect("Invalid Canister ID.");

    let result: Result<(DiagnoseResult,), _> = call(model_canister, "diagnose", (img,)).await;

    match result {
        Ok((diagnose_result,)) => diagnose_result,
        Err((code, message)) => DiagnoseResult::Err(DiagnoseFailed {
            message: format!("Error {}: {}", code as i64, message),
        }),
    }
}

#[update]
async fn kidney_ct_diagnose(img: Vec<u8>) -> DiagnoseResult {
    let model_canister: Principal = Principal::from_text("aovwi-4maaa-aaaaa-qaagq-cai")
        .expect("Invalid Canister ID.");

    let result: Result<(DiagnoseResult,), _> = call(model_canister, "diagnose", (img,)).await;

    match result {
        Ok((diagnose_result,)) => diagnose_result,
        Err((code, message)) => DiagnoseResult::Err(DiagnoseFailed {
            message: format!("Error {}: {}", code as i64, message),
        }),
    }
}

#[update]
async fn brain_ct_diagnose(img: Vec<u8>) -> DiagnoseResult {
    let model_canister: Principal = Principal::from_text("bkyz2-fmaaa-aaaaa-qaaaq-cai")
        .expect("Invalid Canister ID.");

    let result: Result<(DiagnoseResult,), _> = call(model_canister, "diagnose", (img,)).await;

    match result {
        Ok((diagnose_result,)) => diagnose_result,
        Err((code, message)) => DiagnoseResult::Err(DiagnoseFailed {
            message: format!("Error {}: {}", code as i64, message),
        }),
    }
}

#[update]
async fn skin_lesion_diagnose(img: Vec<u8>) -> DiagnoseResult {
    let model_canister: Principal = Principal::from_text("c5kvi-uuaaa-aaaaa-qaaia-cai")
        .expect("Invalid Canister ID.");

    let result: Result<(DiagnoseResult,), _> = call(model_canister, "diagnose", (img,)).await;

    match result {
        Ok((diagnose_result,)) => diagnose_result,
        Err((code, message)) => DiagnoseResult::Err(DiagnoseFailed {
            message: format!("Error {}: {}", code as i64, message),
        }),
    }
}