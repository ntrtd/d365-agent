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
import type { RetailTransactionAuditableAggregationsApi } from './RetailTransactionAuditableAggregationsApi';
import { RetailEodTransactionAggregationHeaderPostingStatus } from './RetailEodTransactionAggregationHeaderPostingStatus';

/**
 * This class represents the entity "RetailTransactionAuditableAggregations" of service "d365_metadata".
 */
export class RetailTransactionAuditableAggregations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAuditableAggregationsType<T>
{
  /**
   * Technical entity name for RetailTransactionAuditableAggregations.
   */
  static override _entityName = 'RetailTransactionAuditableAggregations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAuditableAggregations entity.
   */
  static _keys = ['dataAreaId', 'StatementNumber', 'Aggregation'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Number.
   */
  declare statementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Aggregation.
   */
  declare aggregation: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Operating Unit Number.
   * @nullable
   */
  declare operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Business Date.
   */
  declare businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aggregation Status.
   * @nullable
   */
  declare aggregationStatus?: RetailEodTransactionAggregationHeaderPostingStatus | null;

  constructor(_entityApi: RetailTransactionAuditableAggregationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAuditableAggregationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  statementNumber: DeserializedType<T, 'Edm.String'>;
  aggregation: DeserializedType<T, 'Edm.Int64'>;
  operatingUnitNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  salesId?: DeserializedType<T, 'Edm.String'> | null;
  businessDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  aggregationStatus?: RetailEodTransactionAggregationHeaderPostingStatus | null;
}
