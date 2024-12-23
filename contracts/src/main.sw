contract;

abi ChatContract {
    fn log_data(data: Vec<u8>) -> bool;
}

impl ChatContract for Contract {
    fn log_data(data: Vec<u8>) -> bool {
        log(data);
        true
    }
}

