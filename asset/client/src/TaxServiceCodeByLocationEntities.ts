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
import type { TaxServiceCodeByLocationEntitiesApi } from './TaxServiceCodeByLocationEntitiesApi';

/**
 * This class represents the entity "TaxServiceCodeByLocationEntities" of service "d365_metadata".
 */
export class TaxServiceCodeByLocationEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxServiceCodeByLocationEntitiesType<T>
{
  /**
   * Technical entity name for TaxServiceCodeByLocationEntities.
   */
  static override _entityName = 'TaxServiceCodeByLocationEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxServiceCodeByLocationEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'ParentServiceCode',
    'CountryRegion',
    'State',
    'City',
    'ServiceCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Parent Service Code.
   */
  declare parentServiceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Region.
   */
  declare countryRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   */
  declare city: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Code.
   */
  declare serviceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code Description.
   * @nullable
   */
  declare serviceCodeDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxServiceCodeByLocationEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxServiceCodeByLocationEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  parentServiceCode: DeserializedType<T, 'Edm.String'>;
  countryRegion: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  city: DeserializedType<T, 'Edm.String'>;
  serviceCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  serviceCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
}
