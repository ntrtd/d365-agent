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
import type { AssetMaintenancePlanLineTypeTimesApi } from './AssetMaintenancePlanLineTypeTimesApi';
import { EntAssetMaintenancePlanLineIntervalType } from './EntAssetMaintenancePlanLineIntervalType';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenancePlanLineTypeTimes" of service "d365_metadata".
 */
export class AssetMaintenancePlanLineTypeTimes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenancePlanLineTypeTimesType<T>
{
  /**
   * Technical entity name for AssetMaintenancePlanLineTypeTimes.
   */
  static override _entityName = 'AssetMaintenancePlanLineTypeTimes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenancePlanLineTypeTimes entity.
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
   * Plan Date.
   */
  declare planDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Job Variant Id.
   * @nullable
   */
  declare jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plan Interval Type.
   * @nullable
   */
  declare planIntervalType?: EntAssetMaintenancePlanLineIntervalType | null;
  /**
   * Activity Interval Period.
   * @nullable
   */
  declare activityIntervalPeriod?: DayWeekMonthQuarterYear | null;
  /**
   * Plan Interval.
   */
  declare planInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Job Trade Id.
   * @nullable
   */
  declare jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Type Id.
   * @nullable
   */
  declare workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Auto Create.
   * @nullable
   */
  declare autoCreate?: NoYes | null;
  /**
   * Job Type Id.
   * @nullable
   */
  declare jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected End Days.
   */
  declare expectedEndDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected End Hours.
   */
  declare expectedEndHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Supress Overlapping Jobs.
   * @nullable
   */
  declare supressOverlappingJobs?: NoYes | null;

  constructor(_entityApi: AssetMaintenancePlanLineTypeTimesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenancePlanLineTypeTimesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  planDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  jobVariantId?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  planIntervalType?: EntAssetMaintenancePlanLineIntervalType | null;
  activityIntervalPeriod?: DayWeekMonthQuarterYear | null;
  planInterval: DeserializedType<T, 'Edm.Int32'>;
  jobTradeId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  autoCreate?: NoYes | null;
  jobTypeId?: DeserializedType<T, 'Edm.String'> | null;
  expectedEndDays: DeserializedType<T, 'Edm.Int32'>;
  expectedEndHours: DeserializedType<T, 'Edm.Decimal'>;
  supressOverlappingJobs?: NoYes | null;
}
