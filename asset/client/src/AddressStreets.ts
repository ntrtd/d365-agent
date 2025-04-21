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
import type { AddressStreetsApi } from './AddressStreetsApi';
import { AddressObjectStatusRu } from './AddressObjectStatusRu';

/**
 * This class represents the entity "AddressStreets" of service "d365_metadata".
 */
export class AddressStreets<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressStreetsType<T>
{
  /**
   * Technical entity name for AddressStreets.
   */
  static override _entityName = 'AddressStreets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressStreets entity.
   */
  static _keys = [
    'CountryRegion',
    'State',
    'County',
    'City_FK_Name',
    'District_FK_Name',
    'Name',
    'Description'
  ];
  /**
   * Country Region.
   */
  declare countryRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * County.
   */
  declare county: DeserializedType<T, 'Edm.String'>;
  /**
   * City Fk Name.
   */
  declare cityFkName: DeserializedType<T, 'Edm.String'>;
  /**
   * District Fk Name.
   */
  declare districtFkName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Properties Fk Okato.
   * @nullable
   */
  declare propertiesFkOkato?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Properties Fk Imns District.
   * @nullable
   */
  declare propertiesFkImnsDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Properties Fk Object Status.
   * @nullable
   */
  declare propertiesFkObjectStatus?: AddressObjectStatusRu | null;
  /**
   * Zip Code Fk Zip Code.
   * @nullable
   */
  declare zipCodeFkZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Properties Fk Gni Code.
   * @nullable
   */
  declare propertiesFkGniCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Type Table Ru Addr Type Code.
   * @nullable
   */
  declare addressTypeTableRuAddrTypeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: AddressStreetsApi<T>) {
    super(_entityApi);
  }
}

export interface AddressStreetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  countryRegion: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  county: DeserializedType<T, 'Edm.String'>;
  cityFkName: DeserializedType<T, 'Edm.String'>;
  districtFkName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  propertiesFkOkato?: DeserializedType<T, 'Edm.String'> | null;
  propertiesFkImnsDistrict?: DeserializedType<T, 'Edm.String'> | null;
  propertiesFkObjectStatus?: AddressObjectStatusRu | null;
  zipCodeFkZipCode?: DeserializedType<T, 'Edm.String'> | null;
  propertiesFkGniCode?: DeserializedType<T, 'Edm.String'> | null;
  addressTypeTableRuAddrTypeCode?: DeserializedType<T, 'Edm.String'> | null;
}
