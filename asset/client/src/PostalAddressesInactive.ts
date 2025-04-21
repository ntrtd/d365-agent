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
import type { PostalAddressesInactiveApi } from './PostalAddressesInactiveApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "PostalAddressesInactive" of service "d365_metadata".
 */
export class PostalAddressesInactive<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostalAddressesInactiveType<T>
{
  /**
   * Technical entity name for PostalAddressesInactive.
   */
  static override _entityName = 'PostalAddressesInactive';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostalAddressesInactive entity.
   */
  static _keys = ['location_LocationId', 'ValidFrom', 'PartyNumber'];
  /**
   * Location Location Id.
   */
  declare locationLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
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
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Street Kana Jp.
   * @nullable
   */
  declare streetKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Kana Jp.
   * @nullable
   */
  declare cityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
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
   * Street Id Ru.
   */
  declare streetIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Apartment Ru.
   * @nullable
   */
  declare apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code Rec Id.
   */
  declare zipCodeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.Int64'>;
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
   * Private For Party.
   */
  declare privateForParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Building Ru.
   * @nullable
   */
  declare buildingRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flat Id Ru.
   */
  declare flatIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Longitude.
   */
  declare longitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lpp Rec Id.
   */
  declare lppRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * House Id Ru.
   */
  declare houseIdRu: DeserializedType<T, 'Edm.Int64'>;
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
   * Location Description.
   * @nullable
   */
  declare locationDescription?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: PostalAddressesInactiveApi<T>) {
    super(_entityApi);
  }
}

export interface PostalAddressesInactiveType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locationLocationId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  streetKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  cityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  latitude: DeserializedType<T, 'Edm.Decimal'>;
  streetIdRu: DeserializedType<T, 'Edm.Int64'>;
  apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  zipCodeRecId: DeserializedType<T, 'Edm.Int64'>;
  location: DeserializedType<T, 'Edm.Int64'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  county?: DeserializedType<T, 'Edm.String'> | null;
  privateForParty: DeserializedType<T, 'Edm.Int64'>;
  buildingRu?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  flatIdRu: DeserializedType<T, 'Edm.Int64'>;
  longitude: DeserializedType<T, 'Edm.Decimal'>;
  lppRecId: DeserializedType<T, 'Edm.Int64'>;
  houseIdRu: DeserializedType<T, 'Edm.Int64'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  locationDescription?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
}
