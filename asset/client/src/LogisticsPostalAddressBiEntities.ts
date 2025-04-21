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
import type { LogisticsPostalAddressBiEntitiesApi } from './LogisticsPostalAddressBiEntitiesApi';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "LogisticsPostalAddressBiEntities" of service "d365_metadata".
 */
export class LogisticsPostalAddressBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LogisticsPostalAddressBiEntitiesType<T>
{
  /**
   * Technical entity name for LogisticsPostalAddressBiEntities.
   */
  static override _entityName = 'LogisticsPostalAddressBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LogisticsPostalAddressBiEntities entity.
   */
  static _keys = ['Location', 'ValidFrom'];
  /**
   * Location.
   */
  declare location: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Simplified Address Ru.
   * @nullable
   */
  declare isSimplifiedAddressRu?: NoYes | null;
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
   * District.
   */
  declare district: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Settlement Rec Id.
   */
  declare settlementRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Apartment Ru.
   * @nullable
   */
  declare apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locality Rec Id.
   */
  declare localityRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City Rec Id.
   */
  declare cityRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Zip Code Rec Id.
   */
  declare zipCodeRecId: DeserializedType<T, 'Edm.Int64'>;
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
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
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
   * House Id Ru.
   */
  declare houseIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Channel Reference Id.
   * @nullable
   */
  declare channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Stead Id Ru.
   */
  declare steadIdRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LogisticsPostalAddressBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LogisticsPostalAddressBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  location: DeserializedType<T, 'Edm.Int64'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  isPrivate?: NoYes | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  isSimplifiedAddressRu?: NoYes | null;
  streetKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  cityKanaJp?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  latitude: DeserializedType<T, 'Edm.Decimal'>;
  streetIdRu: DeserializedType<T, 'Edm.Int64'>;
  district: DeserializedType<T, 'Edm.Int64'>;
  settlementRecId: DeserializedType<T, 'Edm.Int64'>;
  apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  localityRecId: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  cityRecId: DeserializedType<T, 'Edm.Int64'>;
  zipCodeRecId: DeserializedType<T, 'Edm.Int64'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  county?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  privateForParty: DeserializedType<T, 'Edm.Int64'>;
  buildingRu?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  flatIdRu: DeserializedType<T, 'Edm.Int64'>;
  longitude: DeserializedType<T, 'Edm.Decimal'>;
  houseIdRu: DeserializedType<T, 'Edm.Int64'>;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  channelReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  steadIdRu: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
}
