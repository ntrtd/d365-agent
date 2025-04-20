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
import type { RetailEodTransactionTableBiEntitiesApi } from './RetailEodTransactionTableBiEntitiesApi';
import { NoYes } from './NoYes';
import { RetailEodTransactionPostingErrorCode } from './RetailEodTransactionPostingErrorCode';
import { RetailEodTransactionPostingStatus } from './RetailEodTransactionPostingStatus';
import { RetailTransactionCode } from './RetailTransactionCode';

/**
 * This class represents the entity "RetailEodTransactionTableBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionTableBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionTableBiEntities.
   */
  static override _entityName = 'RetailEodTransactionTableBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'StatementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Tax Included In Price.
   * @nullable
   */
  declare isTaxIncludedInPrice?: NoYes | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Error Code.
   * @nullable
   */
  declare postingErrorCode?: RetailEodTransactionPostingErrorCode | null;
  /**
   * Posting Error Status.
   * @nullable
   */
  declare postingErrorStatus?: RetailEodTransactionPostingStatus | null;
  /**
   * Statement Code.
   * @nullable
   */
  declare statementCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Payment Difference.
   */
  declare salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Aggregation.
   * @nullable
   */
  declare skipAggregation?: NoYes | null;
  /**
   * To Account.
   * @nullable
   */
  declare toAccount?: NoYes | null;
  /**
   * Posting Status.
   * @nullable
   */
  declare postingStatus?: RetailEodTransactionPostingStatus | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Order Id.
   * @nullable
   */
  declare salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Code.
   * @nullable
   */
  declare transCode?: RetailTransactionCode | null;
  /**
   * Amount To Account.
   */
  declare amountToAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Comment.
   * @nullable
   */
  declare invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Serial Id.
   * @nullable
   */
  declare fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Items Posted.
   * @nullable
   */
  declare itemsPosted?: NoYes | null;

  constructor(_entityApi: RetailEodTransactionTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  isTaxIncludedInPrice?: NoYes | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  postingErrorCode?: RetailEodTransactionPostingErrorCode | null;
  postingErrorStatus?: RetailEodTransactionPostingStatus | null;
  statementCode?: DeserializedType<T, 'Edm.String'> | null;
  salesPaymentDifference: DeserializedType<T, 'Edm.Decimal'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipAggregation?: NoYes | null;
  toAccount?: NoYes | null;
  postingStatus?: RetailEodTransactionPostingStatus | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOrderId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  transCode?: RetailTransactionCode | null;
  amountToAccount: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceComment?: DeserializedType<T, 'Edm.String'> | null;
  fiscalSerialId?: DeserializedType<T, 'Edm.String'> | null;
  itemsPosted?: NoYes | null;
}
