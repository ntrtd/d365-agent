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
import type { AssetMaintenanceReleasedProductStorageDimensionDefaultsApi } from './AssetMaintenanceReleasedProductStorageDimensionDefaultsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceReleasedProductStorageDimensionDefaults" of service "d365_metadata".
 */
export class AssetMaintenanceReleasedProductStorageDimensionDefaults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceReleasedProductStorageDimensionDefaultsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceReleasedProductStorageDimensionDefaults.
   */
  static override _entityName =
    'AssetMaintenanceReleasedProductStorageDimensionDefaults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceReleasedProductStorageDimensionDefaults entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Warehouse Location Dimension Active.
   * @nullable
   */
  declare isWarehouseLocationDimensionActive?: NoYes | null;
  /**
   * Is Advanced Warehouse Enabled.
   * @nullable
   */
  declare isAdvancedWarehouseEnabled?: NoYes | null;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Default Warehouse Id.
   * @nullable
   */
  declare productDefaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Default Site Id.
   * @nullable
   */
  declare productDefaultSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Default Warehouse Location Id.
   * @nullable
   */
  declare productDefaultWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: AssetMaintenanceReleasedProductStorageDimensionDefaultsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceReleasedProductStorageDimensionDefaultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  isWarehouseLocationDimensionActive?: NoYes | null;
  isAdvancedWarehouseEnabled?: NoYes | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productDefaultWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  productDefaultSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productDefaultWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
}
