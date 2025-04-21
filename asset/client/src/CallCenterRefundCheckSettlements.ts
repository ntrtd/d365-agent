/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CallCenterRefundCheckSettlementsApi } from './CallCenterRefundCheckSettlementsApi';
import { McrrcSettlementStatus } from './McrrcSettlementStatus';

/**
 * This class represents the entity "CallCenterRefundCheckSettlements" of service "d365_metadata".
 */
export class CallCenterRefundCheckSettlements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterRefundCheckSettlementsType<T>
{
  /**
   * Technical entity name for CallCenterRefundCheckSettlements.
   */
  static override _entityName = 'CallCenterRefundCheckSettlements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterRefundCheckSettlements entity.
   */
  static _keys = ['dataAreaId', 'SalesId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Journal Voucher.
   * @nullable
   */
  declare ledgerJournalVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Journal Transation Line Number.
   */
  declare ledgerJournalTransationLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Journal Number.
   * @nullable
   */
  declare ledgerJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Amount.
   */
  declare settlementAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Payment Line Number.
   */
  declare customerPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Refund Check Authorization Line Number.
   */
  declare refundCheckAuthorizationLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Settlement Status.
   * @nullable
   */
  declare settlementStatus?: McrrcSettlementStatus | null;
  /**
   * Settlement Date Time.
   */
  declare settlementDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transaction Batch Id.
   * @nullable
   */
  declare transactionBatchId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterRefundCheckSettlementsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterRefundCheckSettlementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  ledgerJournalVoucher?: DeserializedType<T, 'Edm.String'> | null;
  ledgerJournalTransationLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  ledgerJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  settlementAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  refundCheckAuthorizationLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  settlementStatus?: McrrcSettlementStatus | null;
  settlementDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transactionBatchId?: DeserializedType<T, 'Edm.String'> | null;
}
