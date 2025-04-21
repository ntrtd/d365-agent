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
import type { GroupRetailTaxFiltersApi } from './GroupRetailTaxFiltersApi';
import { TaxGroups, TaxGroupsType } from './TaxGroups';

/**
 * This class represents the entity "GroupRetailTaxFilters" of service "d365_metadata".
 */
export class GroupRetailTaxFilters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GroupRetailTaxFiltersType<T>
{
  /**
   * Technical entity name for GroupRetailTaxFilters.
   */
  static override _entityName = 'GroupRetailTaxFilters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GroupRetailTaxFilters entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxGroupId',
    'City',
    'CountryRegion',
    'County',
    'District',
    'State',
    'ZipCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Id.
   */
  declare taxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   */
  declare city: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region.
   */
  declare countryRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * County.
   */
  declare county: DeserializedType<T, 'Edm.String'>;
  /**
   * District.
   */
  declare district: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Zip Code.
   */
  declare zipCode: DeserializedType<T, 'Edm.String'>;
  /**
   * District Id.
   */
  declare districtId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare taxGroup?: TaxGroups<T> | null;

  constructor(_entityApi: GroupRetailTaxFiltersApi<T>) {
    super(_entityApi);
  }
}

export interface GroupRetailTaxFiltersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxGroupId: DeserializedType<T, 'Edm.String'>;
  city: DeserializedType<T, 'Edm.String'>;
  countryRegion: DeserializedType<T, 'Edm.String'>;
  county: DeserializedType<T, 'Edm.String'>;
  district: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  zipCode: DeserializedType<T, 'Edm.String'>;
  districtId: DeserializedType<T, 'Edm.Int64'>;
  taxGroup?: TaxGroupsType<T> | null;
}
