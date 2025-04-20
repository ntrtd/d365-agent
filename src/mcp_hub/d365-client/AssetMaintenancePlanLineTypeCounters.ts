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
import type { AssetMaintenancePlanLineTypeCountersApi } from './AssetMaintenancePlanLineTypeCountersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenancePlanLineTypeCounters" of service "d365_metadata".
 */
export class AssetMaintenancePlanLineTypeCounters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenancePlanLineTypeCountersType<T>
{
  /**
   * Technical entity name for AssetMaintenancePlanLineTypeCounters.
   */
  static override _entityName = 'AssetMaintenancePlanLineTypeCounters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenancePlanLineTypeCounters entity.
   */
  static _keys = ['dataAreaId', 'MaintenancePlanId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Days.
   */
  declare days: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Omit Overlap.
   * @nullable
   */
  declare omitOverlap?: NoYes | null;
  /**
   * Auto Create.
   * @nullable
   */
  declare autoCreate?: NoYes | null;
  /**
   * Maintenance Asset Counter Id.
   * @nullable
   */
  declare maintenanceAssetCounterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Type Id.
   * @nullable
   */
  declare workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Asset Counter Reset.
   * @nullable
   */
  declare maintenanceAssetCounterReset?: NoYes | null;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Interval Type.
   * @nullable
   */
  declare activityIntervalType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected End Hours.
   */
  declare expectedEndHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected End Days.
   */
  declare expectedEndDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Activity Interval.
   */
  declare activityInterval: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: AssetMaintenancePlanLineTypeCountersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenancePlanLineTypeCountersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  days: DeserializedType<T, 'Edm.Int32'>;
  omitOverlap?: NoYes | null;
  autoCreate?: NoYes | null;
  maintenanceAssetCounterId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceAssetCounterReset?: NoYes | null;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  activityIntervalType?: DeserializedType<T, 'Edm.String'> | null;
  expectedEndHours: DeserializedType<T, 'Edm.Decimal'>;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  expectedEndDays: DeserializedType<T, 'Edm.Int32'>;
  activityInterval: DeserializedType<T, 'Edm.Int32'>;
}
