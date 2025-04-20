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
import type { BlwiCountryRegionGroupsApi } from './BlwiCountryRegionGroupsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BLWICountryRegionGroups" of service "d365_metadata".
 */
export class BlwiCountryRegionGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BlwiCountryRegionGroupsType<T>
{
  /**
   * Technical entity name for BlwiCountryRegionGroups.
   */
  static override _entityName = 'BLWICountryRegionGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BlwiCountryRegionGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupID', 'CountryRegionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Blwi Reporting.
   * @nullable
   */
  declare blwiReporting?: NoYes | null;
  /**
   * Row Num.
   */
  declare rowNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Country Region Name.
   * @nullable
   */
  declare countryRegionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BlwiCountryRegionGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BlwiCountryRegionGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  blwiReporting?: NoYes | null;
  rowNum: DeserializedType<T, 'Edm.Int32'>;
  countryRegionName?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
