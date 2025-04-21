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
import type { CdsPostalAddressHistoryApi } from './CdsPostalAddressHistoryApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import {
  CdsPostalAddressLocations,
  CdsPostalAddressLocationsType
} from './CdsPostalAddressLocations';

/**
 * This class represents the entity "CDSPostalAddressHistory" of service "d365_metadata".
 */
export class CdsPostalAddressHistory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CdsPostalAddressHistoryType<T>
{
  /**
   * Technical entity name for CdsPostalAddressHistory.
   */
  static override _entityName = 'CDSPostalAddressHistory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CdsPostalAddressHistory entity.
   */
  static _keys = ['LocationId', 'ValidFrom'];
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Address.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Latitude.
   */
  declare latitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Longitude.
   */
  declare longitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Box.
   * @nullable
   */
  declare postBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Iso Code.
   * @nullable
   */
  declare countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CdsPostalAddressLocations} entity.
   */
  declare cdsPostalAddressLocation?: CdsPostalAddressLocations<T> | null;

  constructor(_entityApi: CdsPostalAddressHistoryApi<T>) {
    super(_entityApi);
  }
}

export interface CdsPostalAddressHistoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locationId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isPrivate?: NoYes | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  latitude: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  county?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  longitude: DeserializedType<T, 'Edm.Decimal'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  cdsPostalAddressLocation?: CdsPostalAddressLocationsType<T> | null;
}
