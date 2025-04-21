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
import type { SalesCarriersApi } from './SalesCarriersApi';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "SalesCarriers" of service "d365_metadata".
 */
export class SalesCarriers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesCarriersType<T>
{
  /**
   * Technical entity name for SalesCarriers.
   */
  static override _entityName = 'SalesCarriers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesCarriers entity.
   */
  static _keys = ['dataAreaId', 'CarrierName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Carrier Name.
   */
  declare carrierName: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address State Id.
   * @nullable
   */
  declare addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Timezone.
   * @nullable
   */
  declare addressTimezone?: Timezone | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ie.
   * @nullable
   */
  declare ie?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County Id.
   * @nullable
   */
  declare addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Address.
   * @nullable
   */
  declare formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cnpj Or Cpf.
   * @nullable
   */
  declare cnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SalesCarriersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesCarriersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  carrierName: DeserializedType<T, 'Edm.String'>;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressStateId?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressTimezone?: Timezone | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  ie?: DeserializedType<T, 'Edm.String'> | null;
  addressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  cnpjOrCpf?: DeserializedType<T, 'Edm.String'> | null;
}
