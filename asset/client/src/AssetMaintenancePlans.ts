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
import type { AssetMaintenancePlansApi } from './AssetMaintenancePlansApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses,
  AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType
} from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses';
import {
  AssetMaintenanceAssetCalendars,
  AssetMaintenanceAssetCalendarsType
} from './AssetMaintenanceAssetCalendars';
import {
  AssetMaintenanceAssetMaintenancePlans,
  AssetMaintenanceAssetMaintenancePlansType
} from './AssetMaintenanceAssetMaintenancePlans';
import {
  AssetMaintenanceFunctionalLocationMaintenancePlans,
  AssetMaintenanceFunctionalLocationMaintenancePlansType
} from './AssetMaintenanceFunctionalLocationMaintenancePlans';

/**
 * This class represents the entity "AssetMaintenancePlans" of service "d365_metadata".
 */
export class AssetMaintenancePlans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenancePlansType<T>
{
  /**
   * Technical entity name for AssetMaintenancePlans.
   */
  static override _entityName = 'AssetMaintenancePlans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenancePlans entity.
   */
  static _keys = ['dataAreaId', 'MaintenancePlanId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Date.
   */
  declare maintenanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Plan Active.
   * @nullable
   */
  declare maintenancePlanActive?: NoYes | null;
  /**
   * Tolerance After.
   */
  declare toleranceAfter: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tolerance Before.
   */
  declare toleranceBefore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare planMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses} entity.
   */
  declare assetMaintenanceFunctionalLocationTypeMaintenanceSequense: AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetCalendars} entity.
   */
  declare assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendars<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetMaintenancePlans} entity.
   */
  declare assetMaintenanceAssetMaintenancePlan: AssetMaintenanceAssetMaintenancePlans<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceFunctionalLocationMaintenancePlans} entity.
   */
  declare assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlans<T>[];

  constructor(_entityApi: AssetMaintenancePlansApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenancePlansType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  maintenanceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  maintenancePlanActive?: NoYes | null;
  toleranceAfter: DeserializedType<T, 'Edm.Int32'>;
  toleranceBefore: DeserializedType<T, 'Edm.Int32'>;
  planMaintenancePlanWorkOrderJobs: AssetMaintenancePlanWorkOrderLinesType<T>[];
  assetMaintenanceFunctionalLocationTypeMaintenanceSequense: AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType<T>[];
  assetMaintenanceAssetCalendar: AssetMaintenanceAssetCalendarsType<T>[];
  assetMaintenanceAssetMaintenancePlan: AssetMaintenanceAssetMaintenancePlansType<T>[];
  assetMaintenanceFunctionalLocationMaintenancePlan: AssetMaintenanceFunctionalLocationMaintenancePlansType<T>[];
}
