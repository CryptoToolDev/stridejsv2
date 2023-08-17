import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { DepositRecord, DepositRecordSDKType, UserRedemptionRecord, UserRedemptionRecordSDKType, EpochUnbondingRecord, EpochUnbondingRecordSDKType, LSMTokenDeposit, LSMTokenDepositSDKType } from "./records";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params: ParamsSDKType;
}
export interface QueryGetDepositRecordRequest {
    id: Long;
}
export interface QueryGetDepositRecordRequestSDKType {
    id: Long;
}
export interface QueryGetDepositRecordResponse {
    depositRecord: DepositRecord;
}
export interface QueryGetDepositRecordResponseSDKType {
    deposit_record: DepositRecordSDKType;
}
export interface QueryAllDepositRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllDepositRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllDepositRecordResponse {
    depositRecord: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryAllDepositRecordResponseSDKType {
    deposit_record: DepositRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryDepositRecordByHostRequest {
    hostZoneId: string;
}
export interface QueryDepositRecordByHostRequestSDKType {
    host_zone_id: string;
}
export interface QueryDepositRecordByHostResponse {
    depositRecord: DepositRecord[];
}
export interface QueryDepositRecordByHostResponseSDKType {
    deposit_record: DepositRecordSDKType[];
}
export interface QueryGetUserRedemptionRecordRequest {
    id: string;
}
export interface QueryGetUserRedemptionRecordRequestSDKType {
    id: string;
}
export interface QueryGetUserRedemptionRecordResponse {
    userRedemptionRecord: UserRedemptionRecord;
}
export interface QueryGetUserRedemptionRecordResponseSDKType {
    user_redemption_record: UserRedemptionRecordSDKType;
}
export interface QueryAllUserRedemptionRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllUserRedemptionRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordResponse {
    userRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordResponseSDKType {
    user_redemption_record: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequest {
    chainId: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequest;
}
/** Query UserRedemptionRecords by chainId / userId pair */
export interface QueryAllUserRedemptionRecordForUserRequestSDKType {
    chain_id: string;
    day: Long;
    address: string;
    limit: Long;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserRedemptionRecordForUserResponse {
    userRedemptionRecord: UserRedemptionRecord[];
    pagination?: PageResponse;
}
export interface QueryAllUserRedemptionRecordForUserResponseSDKType {
    user_redemption_record: UserRedemptionRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetEpochUnbondingRecordRequest {
    epochNumber: Long;
}
export interface QueryGetEpochUnbondingRecordRequestSDKType {
    epoch_number: Long;
}
export interface QueryGetEpochUnbondingRecordResponse {
    epochUnbondingRecord: EpochUnbondingRecord;
}
export interface QueryGetEpochUnbondingRecordResponseSDKType {
    epoch_unbonding_record: EpochUnbondingRecordSDKType;
}
export interface QueryAllEpochUnbondingRecordRequest {
    pagination?: PageRequest;
}
export interface QueryAllEpochUnbondingRecordRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllEpochUnbondingRecordResponse {
    epochUnbondingRecord: EpochUnbondingRecord[];
    pagination?: PageResponse;
}
export interface QueryAllEpochUnbondingRecordResponseSDKType {
    epoch_unbonding_record: EpochUnbondingRecordSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryLSMDepositRequest {
    chainId: string;
    denom: string;
}
export interface QueryLSMDepositRequestSDKType {
    chain_id: string;
    denom: string;
}
export interface QueryLSMDepositResponse {
    deposit: LSMTokenDeposit;
}
export interface QueryLSMDepositResponseSDKType {
    deposit: LSMTokenDepositSDKType;
}
export interface QueryLSMDepositsRequest {
    chainId?: string;
    validatorAddress?: string;
    status?: string;
}
export interface QueryLSMDepositsRequestSDKType {
    chain_id?: string;
    validator_address?: string;
    status?: string;
}
export interface QueryLSMDepositsResponse {
    deposits: LSMTokenDeposit[];
}
export interface QueryLSMDepositsResponseSDKType {
    deposits: LSMTokenDepositSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetDepositRecordRequest: {
    encode(message: QueryGetDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordRequest;
    fromPartial(object: DeepPartial<QueryGetDepositRecordRequest>): QueryGetDepositRecordRequest;
};
export declare const QueryGetDepositRecordResponse: {
    encode(message: QueryGetDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositRecordResponse;
    fromPartial(object: DeepPartial<QueryGetDepositRecordResponse>): QueryGetDepositRecordResponse;
};
export declare const QueryAllDepositRecordRequest: {
    encode(message: QueryAllDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordRequest;
    fromPartial(object: DeepPartial<QueryAllDepositRecordRequest>): QueryAllDepositRecordRequest;
};
export declare const QueryAllDepositRecordResponse: {
    encode(message: QueryAllDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDepositRecordResponse;
    fromPartial(object: DeepPartial<QueryAllDepositRecordResponse>): QueryAllDepositRecordResponse;
};
export declare const QueryDepositRecordByHostRequest: {
    encode(message: QueryDepositRecordByHostRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordByHostRequest;
    fromPartial(object: DeepPartial<QueryDepositRecordByHostRequest>): QueryDepositRecordByHostRequest;
};
export declare const QueryDepositRecordByHostResponse: {
    encode(message: QueryDepositRecordByHostResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordByHostResponse;
    fromPartial(object: DeepPartial<QueryDepositRecordByHostResponse>): QueryDepositRecordByHostResponse;
};
export declare const QueryGetUserRedemptionRecordRequest: {
    encode(message: QueryGetUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordRequest;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordRequest>): QueryGetUserRedemptionRecordRequest;
};
export declare const QueryGetUserRedemptionRecordResponse: {
    encode(message: QueryGetUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUserRedemptionRecordResponse;
    fromPartial(object: DeepPartial<QueryGetUserRedemptionRecordResponse>): QueryGetUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordRequest: {
    encode(message: QueryAllUserRedemptionRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordRequest;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordRequest>): QueryAllUserRedemptionRecordRequest;
};
export declare const QueryAllUserRedemptionRecordResponse: {
    encode(message: QueryAllUserRedemptionRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordResponse;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordResponse>): QueryAllUserRedemptionRecordResponse;
};
export declare const QueryAllUserRedemptionRecordForUserRequest: {
    encode(message: QueryAllUserRedemptionRecordForUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserRequest;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserRequest>): QueryAllUserRedemptionRecordForUserRequest;
};
export declare const QueryAllUserRedemptionRecordForUserResponse: {
    encode(message: QueryAllUserRedemptionRecordForUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUserRedemptionRecordForUserResponse;
    fromPartial(object: DeepPartial<QueryAllUserRedemptionRecordForUserResponse>): QueryAllUserRedemptionRecordForUserResponse;
};
export declare const QueryGetEpochUnbondingRecordRequest: {
    encode(message: QueryGetEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordRequest;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordRequest>): QueryGetEpochUnbondingRecordRequest;
};
export declare const QueryGetEpochUnbondingRecordResponse: {
    encode(message: QueryGetEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetEpochUnbondingRecordResponse;
    fromPartial(object: DeepPartial<QueryGetEpochUnbondingRecordResponse>): QueryGetEpochUnbondingRecordResponse;
};
export declare const QueryAllEpochUnbondingRecordRequest: {
    encode(message: QueryAllEpochUnbondingRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordRequest;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordRequest>): QueryAllEpochUnbondingRecordRequest;
};
export declare const QueryAllEpochUnbondingRecordResponse: {
    encode(message: QueryAllEpochUnbondingRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEpochUnbondingRecordResponse;
    fromPartial(object: DeepPartial<QueryAllEpochUnbondingRecordResponse>): QueryAllEpochUnbondingRecordResponse;
};
export declare const QueryLSMDepositRequest: {
    encode(message: QueryLSMDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLSMDepositRequest;
    fromPartial(object: DeepPartial<QueryLSMDepositRequest>): QueryLSMDepositRequest;
};
export declare const QueryLSMDepositResponse: {
    encode(message: QueryLSMDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLSMDepositResponse;
    fromPartial(object: DeepPartial<QueryLSMDepositResponse>): QueryLSMDepositResponse;
};
export declare const QueryLSMDepositsRequest: {
    encode(message: QueryLSMDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLSMDepositsRequest;
    fromPartial(object: DeepPartial<QueryLSMDepositsRequest>): QueryLSMDepositsRequest;
};
export declare const QueryLSMDepositsResponse: {
    encode(message: QueryLSMDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLSMDepositsResponse;
    fromPartial(object: DeepPartial<QueryLSMDepositsResponse>): QueryLSMDepositsResponse;
};
