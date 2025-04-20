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
import type { RetailEodTransactionAggregationTransBiEntitiesApi } from './RetailEodTransactionAggregationTransBiEntitiesApi';

/**
 * This class represents the entity "RetailEodTransactionAggregationTransBIEntities" of service "d365_metadata".
 */
export class RetailEodTransactionAggregationTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEodTransactionAggregationTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailEodTransactionAggregationTransBiEntities.
   */
  static override _entityName =
    'RetailEodTransactionAggregationTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEodTransactionAggregationTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'RetailEodTransactionAggregationHeader',
    'TransactionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Eod Transaction Aggregation Header.
   */
  declare retailEodTransactionAggregationHeader: DeserializedType<
    T,
    'Edm.Int64'
  >;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
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
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Retail Eod Transaction Table Posting.
   */
  declare retailEodTransactionTablePosting: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: RetailEodTransactionAggregationTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface RetailEodTransactionAggregationTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailEodTransactionAggregationHeader: DeserializedType<T, 'Edm.Int64'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailEodTransactionTablePosting: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
