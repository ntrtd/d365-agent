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
import type { AddressDistrictsApi } from './AddressDistrictsApi';
import { AddressStates, AddressStatesType } from './AddressStates';
import { AddressCounties, AddressCountiesType } from './AddressCounties';
import { AddressCities, AddressCitiesType } from './AddressCities';
import {
  AddressCountryRegions,
  AddressCountryRegionsType
} from './AddressCountryRegions';

/**
 * This class represents the entity "AddressDistricts" of service "d365_metadata".
 */
export class AddressDistricts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressDistrictsType<T>
{
  /**
   * Technical entity name for AddressDistricts.
   */
  static override _entityName = 'AddressDistricts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressDistricts entity.
   */
  static _keys = [
    'District',
    'CityKey',
    'CountryRegionId',
    'StateId',
    'CountyId'
  ];
  /**
   * District.
   */
  declare district: DeserializedType<T, 'Edm.String'>;
  /**
   * City Key.
   */
  declare cityKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region Id.
   */
  declare countryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * State Id.
   */
  declare stateId: DeserializedType<T, 'Edm.String'>;
  /**
   * County Id.
   */
  declare countyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AddressStates} entity.
   */
  declare state?: AddressStates<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCounties} entity.
   */
  declare county?: AddressCounties<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCities} entity.
   */
  declare city?: AddressCities<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressCountryRegions} entity.
   */
  declare countryRegion?: AddressCountryRegions<T> | null;

  constructor(_entityApi: AddressDistrictsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressDistrictsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  district: DeserializedType<T, 'Edm.String'>;
  cityKey: DeserializedType<T, 'Edm.String'>;
  countryRegionId: DeserializedType<T, 'Edm.String'>;
  stateId: DeserializedType<T, 'Edm.String'>;
  countyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  state?: AddressStatesType<T> | null;
  county?: AddressCountiesType<T> | null;
  city?: AddressCitiesType<T> | null;
  countryRegion?: AddressCountryRegionsType<T> | null;
}
