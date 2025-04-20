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
import type { SctTracingActivityCdsEntitiesApi } from './SctTracingActivityCdsEntitiesApi';

/**
 * This class represents the entity "SCTTracingActivityCDSEntities" of service "d365_metadata".
 */
export class SctTracingActivityCdsEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SctTracingActivityCdsEntitiesType<T>
{
  /**
   * Technical entity name for SctTracingActivityCdsEntities.
   */
  static override _entityName = 'SCTTracingActivityCDSEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SctTracingActivityCdsEntities entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consumption Transactions.
   * @nullable
   */
  declare consumptionTransactions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Id.
   * @nullable
   */
  declare activityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Transactions.
   * @nullable
   */
  declare productTransactions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Id.
   * @nullable
   */
  declare referenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * @nullable
   */
  declare activityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Collection.
   * @nullable
   */
  declare dataCollection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Code.
   * @nullable
   */
  declare activityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Date Time.
   */
  declare activityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SctTracingActivityCdsEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SctTracingActivityCdsEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  consumptionTransactions?: DeserializedType<T, 'Edm.String'> | null;
  activityId?: DeserializedType<T, 'Edm.String'> | null;
  productTransactions?: DeserializedType<T, 'Edm.String'> | null;
  referenceId?: DeserializedType<T, 'Edm.String'> | null;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  activityType?: DeserializedType<T, 'Edm.String'> | null;
  dataCollection?: DeserializedType<T, 'Edm.String'> | null;
  activityCode?: DeserializedType<T, 'Edm.String'> | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  activityDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
