import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetUserRedemptionRecordRequest, QueryGetUserRedemptionRecordResponse, QueryAllUserRedemptionRecordRequest, QueryAllUserRedemptionRecordResponse, QueryAllUserRedemptionRecordForUserRequest, QueryAllUserRedemptionRecordForUserResponse, QueryGetEpochUnbondingRecordRequest, QueryGetEpochUnbondingRecordResponse, QueryAllEpochUnbondingRecordRequest, QueryAllEpochUnbondingRecordResponse, QueryGetDepositRecordRequest, QueryGetDepositRecordResponse, QueryAllDepositRecordRequest, QueryAllDepositRecordResponse, QueryDepositRecordByHostRequest, QueryDepositRecordByHostResponse, QueryLSMDepositRequest, QueryLSMDepositResponse, QueryLSMDepositsRequest, QueryLSMDepositsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
    depositRecordByHost(request: QueryDepositRecordByHostRequest): Promise<QueryDepositRecordByHostResponse>;
    lSMDeposit(request: QueryLSMDepositRequest): Promise<QueryLSMDepositResponse>;
    lSMDeposits(request: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
    depositRecordByHost(request: QueryDepositRecordByHostRequest): Promise<QueryDepositRecordByHostResponse>;
    lSMDeposit(request: QueryLSMDepositRequest): Promise<QueryLSMDepositResponse>;
    lSMDeposits(request: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    userRedemptionRecord(request: QueryGetUserRedemptionRecordRequest): Promise<QueryGetUserRedemptionRecordResponse>;
    userRedemptionRecordAll(request?: QueryAllUserRedemptionRecordRequest): Promise<QueryAllUserRedemptionRecordResponse>;
    userRedemptionRecordForUser(request: QueryAllUserRedemptionRecordForUserRequest): Promise<QueryAllUserRedemptionRecordForUserResponse>;
    epochUnbondingRecord(request: QueryGetEpochUnbondingRecordRequest): Promise<QueryGetEpochUnbondingRecordResponse>;
    epochUnbondingRecordAll(request?: QueryAllEpochUnbondingRecordRequest): Promise<QueryAllEpochUnbondingRecordResponse>;
    depositRecord(request: QueryGetDepositRecordRequest): Promise<QueryGetDepositRecordResponse>;
    depositRecordAll(request?: QueryAllDepositRecordRequest): Promise<QueryAllDepositRecordResponse>;
    depositRecordByHost(request: QueryDepositRecordByHostRequest): Promise<QueryDepositRecordByHostResponse>;
    lSMDeposit(request: QueryLSMDepositRequest): Promise<QueryLSMDepositResponse>;
    lSMDeposits(request: QueryLSMDepositsRequest): Promise<QueryLSMDepositsResponse>;
};
