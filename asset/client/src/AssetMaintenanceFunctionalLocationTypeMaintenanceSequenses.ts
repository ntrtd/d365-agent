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
import type { AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi } from './AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi';
import {
  AssetMaintenancePlans,
  AssetMaintenancePlansType
} from './AssetMaintenancePlans';
import {
  AssetMaintenanceFunctionalLocationTypes,
  AssetMaintenanceFunctionalLocationTypesType
} from './AssetMaintenanceFunctionalLocationTypes';

/**
 * This class represents the entity "AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses" of service "d365_metadata".
 */
export class AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses.
   */
  static override _entityName =
    'AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceFunctionalLocationTypeMaintenanceSequenses entity.
   */
  static _keys = [
    'dataAreaId',
    'FunctionalLocationTypeId',
    'MaintenancePlanId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Functional Location Type Id.
   */
  declare functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlans} entity.
   */
  declare assetMaintenancePlan?: AssetMaintenancePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceFunctionalLocationTypes} entity.
   */
  declare assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypes<T> | null;

  constructor(
    _entityApi: AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceFunctionalLocationTypeMaintenanceSequensesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  functionalLocationTypeId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  assetMaintenancePlan?: AssetMaintenancePlansType<T> | null;
  assetMaintenanceFunctionalLocationType?: AssetMaintenanceFunctionalLocationTypesType<T> | null;
}
