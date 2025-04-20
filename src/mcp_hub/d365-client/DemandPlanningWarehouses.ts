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
import type { DemandPlanningWarehousesApi } from './DemandPlanningWarehousesApi';
import { InventLocationType } from './InventLocationType';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "DemandPlanningWarehouses" of service "d365_metadata".
 */
export class DemandPlanningWarehouses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DemandPlanningWarehousesType<T>
{
  /**
   * Technical entity name for DemandPlanningWarehouses.
   */
  static override _entityName = 'DemandPlanningWarehouses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DemandPlanningWarehouses entity.
   */
  static _keys = ['WarehouseId', 'DataAreaPartyId'];
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Data Area Party Id.
   */
  declare dataAreaPartyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Primary Address Description.
   * @nullable
   */
  declare primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Building Compliment.
   * @nullable
   */
  declare primaryAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Latitude.
   */
  declare primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Address Country Region Id.
   * @nullable
   */
  declare primaryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Street.
   * @nullable
   */
  declare primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address City.
   * @nullable
   */
  declare primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address State Id.
   * @nullable
   */
  declare primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Type.
   * @nullable
   */
  declare warehouseType?: InventLocationType | null;
  /**
   * Primary Address Post Box.
   * @nullable
   */
  declare primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Zip Code.
   * @nullable
   */
  declare primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Address Assigned.
   * @nullable
   */
  declare isPrimaryAddressAssigned?: NoYes | null;
  /**
   * Primary Address District Name.
   * @nullable
   */
  declare primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Primary Address.
   * @nullable
   */
  declare formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Time Zone.
   * @nullable
   */
  declare primaryAddressTimeZone?: Timezone | null;
  /**
   * Operational Site Id.
   * @nullable
   */
  declare operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address Location Roles.
   * @nullable
   */
  declare primaryAddressLocationRoles?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Address Longitude.
   */
  declare primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Address Street Number.
   * @nullable
   */
  declare primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Address County Id.
   * @nullable
   */
  declare primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Name.
   * @nullable
   */
  declare warehouseName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DemandPlanningWarehousesApi<T>) {
    super(_entityApi);
  }
}

export interface DemandPlanningWarehousesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  warehouseId: DeserializedType<T, 'Edm.String'>;
  dataAreaPartyId: DeserializedType<T, 'Edm.String'>;
  primaryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseType?: InventLocationType | null;
  primaryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryAddressAssigned?: NoYes | null;
  primaryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  formattedPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressTimeZone?: Timezone | null;
  operationalSiteId?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLocationRoles?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  primaryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  primaryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseName?: DeserializedType<T, 'Edm.String'> | null;
}
