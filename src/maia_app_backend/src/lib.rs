mod outcalls;

use candid::Principal;
use candid::{CandidType, Deserialize};

#[derive(CandidType, Deserialize)]
struct Diagnose {
    label: String,
}

#[derive(CandidType, Deserialize)]
struct DiagnoseFailed {
    message: String,
}

#[derive(CandidType, Deserialize)]
enum DiagnoseResult {
    Ok(Vec<Diagnose>),
    Err(DiagnoseFailed),
}