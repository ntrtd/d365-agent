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
import type { RetailEodTransactionAggregationHeaderBiEntitiesApi } from './RetailEodTransactionAggregationHeaderBiEntitiesApi';
import { RetailTransactionType } from './RetailTransactionType';
import { RetailEodTransactionPostingErrorCode } from './RetailEodTransactionPostingErrorCode';
import { RetailEodTransactionAggregationHeaderPostingStatus } from './RetailEodTransactionAggregationHeaderPostingStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailEodTransactionAggregationHeaderBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionAggregationHeaderBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionAggregationHeaderBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionAggregationHeaderBiEntities.
   */
  static override _entityName =
    'RetailEodTransactionAggregationHeaderBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionAggregationHeaderBiEntities entity.
   */
  static _keys = ['dataAreaId', 'StatementId', 'SalesId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailTransactionType | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Lines.
   */
  declare numberOfLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Journal Num.
   * @nullable
   */
  declare paymentJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Error Code.
   * @nullable
   */
  declare errorCode?: RetailEodTransactionPostingErrorCode | null;
  /**
   * Schedule Group.
   */
  declare scheduleGroup: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weight.
   */
  declare weight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stmt Aggr Info Log.
   * @nullable
   */
  declare stmtAggrInfoLog?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailEodTransactionAggregationHeaderPostingStatus | null;
  /**
   * Automatic Unlink Return.
   * @nullable
   */
  declare automaticUnlinkReturn?: NoYes | null;
  /**
   * Cust Order Info.
   * @nullable
   */
  declare custOrderInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailEodTransactionAggregationHeaderBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionAggregationHeaderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  type?: RetailTransactionType | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  numberOfLines: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  paymentJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  errorCode?: RetailEodTransactionPostingErrorCode | null;
  scheduleGroup: DeserializedType<T, 'Edm.Int32'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  weight: DeserializedType<T, 'Edm.Decimal'>;
  stmtAggrInfoLog?: DeserializedType<T, 'Edm.Binary'> | null;
  status?: RetailEodTransactionAggregationHeaderPostingStatus | null;
  automaticUnlinkReturn?: NoYes | null;
  custOrderInfo?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
