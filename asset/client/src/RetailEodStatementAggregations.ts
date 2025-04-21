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
import type { RetailEodStatementAggregationsApi } from './RetailEodStatementAggregationsApi';
import { RetailEodTransactionPostingStatus } from './RetailEodTransactionPostingStatus';
import { RetailEodTransactionAggregationHeaderPostingStatus } from './RetailEodTransactionAggregationHeaderPostingStatus';

/**
 * This class represents the entity "RetailEodStatementAggregations" of service "d365_metadata".
 */
export class RetailEodStatementAggregations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodStatementAggregationsType<T>
{
  /**
   * Technical entity name for RetailEodStatementAggregations.
   */
  static override _entityName = 'RetailEodStatementAggregations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodStatementAggregations entity.
   */
  static _keys = ['dataAreaId', 'StatementId', 'Aggregation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Id.
   */
  declare statementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Aggregation.
   */
  declare aggregation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Id.
   * @nullable
   */
  declare salesId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Status.
   * @nullable
   */
  declare statementStatus?: RetailEodTransactionPostingStatus | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Error Message.
   * @nullable
   */
  declare errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aggregation Status.
   * @nullable
   */
  declare aggregationStatus?: RetailEodTransactionAggregationHeaderPostingStatus | null;

  constructor(_entityApi: RetailEodStatementAggregationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEodStatementAggregationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementId: DeserializedType<T, 'Edm.String'>;
  aggregation: DeserializedType<T, 'Edm.Int64'>;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  statementStatus?: RetailEodTransactionPostingStatus | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  errorMessage?: DeserializedType<T, 'Edm.String'> | null;
  aggregationStatus?: RetailEodTransactionAggregationHeaderPostingStatus | null;
}
