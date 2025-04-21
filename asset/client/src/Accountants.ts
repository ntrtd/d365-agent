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
import type { AccountantsApi } from './AccountantsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "Accountants" of service "d365_metadata".
 */
export class Accountants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccountantsType<T>
{
  /**
   * Technical entity name for Accountants.
   */
  static override _entityName = 'Accountants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Accountants entity.
   */
  static _keys = ['CPF', 'CRC'];
  /**
   * Cpf.
   */
  declare cpf: DeserializedType<T, 'Edm.String'>;
  /**
   * Crc.
   */
  declare crc: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone Description.
   * @nullable
   */
  declare phoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code Name.
   * @nullable
   */
  declare addressZipCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Description.
   * @nullable
   */
  declare emailDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc Expiration Date.
   */
  declare crcExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Email Is Instant Message.
   * @nullable
   */
  declare emailIsInstantMessage?: NoYes | null;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Is Private.
   * @nullable
   */
  declare phoneIsPrivate?: NoYes | null;
  /**
   * Phone Locator Extension.
   * @nullable
   */
  declare phoneLocatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Locator.
   * @nullable
   */
  declare emailLocator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Locator Extension.
   * @nullable
   */
  declare emailLocatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cnpj.
   * @nullable
   */
  declare cnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Is Instant Message.
   * @nullable
   */
  declare phoneIsInstantMessage?: NoYes | null;
  /**
   * Email Is Private.
   * @nullable
   */
  declare emailIsPrivate?: NoYes | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Locator.
   * @nullable
   */
  declare phoneLocator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accountant Name.
   * @nullable
   */
  declare accountantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Private For Party.
   */
  declare emailPrivateForParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address City Name.
   * @nullable
   */
  declare addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Private For Party.
   */
  declare phonePrivateForParty: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc Issuer State.
   * @nullable
   */
  declare crcIssuerState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Crc Country Region Id.
   * @nullable
   */
  declare crcCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Is Mobile Phone.
   * @nullable
   */
  declare phoneIsMobilePhone?: NoYes | null;
  /**
   * Email Country Region Code.
   * @nullable
   */
  declare emailCountryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Country Region Code.
   * @nullable
   */
  declare phoneCountryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Is Private.
   * @nullable
   */
  declare addressIsPrivate?: NoYes | null;

  constructor(_entityApi: AccountantsApi<T>) {
    super(_entityApi);
  }
}

export interface AccountantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  cpf: DeserializedType<T, 'Edm.String'>;
  crc: DeserializedType<T, 'Edm.String'>;
  phoneDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCodeName?: DeserializedType<T, 'Edm.String'> | null;
  emailDescription?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  crcExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  emailIsInstantMessage?: NoYes | null;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  phoneIsPrivate?: NoYes | null;
  phoneLocatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  emailLocator?: DeserializedType<T, 'Edm.String'> | null;
  emailLocatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  cnpj?: DeserializedType<T, 'Edm.String'> | null;
  phoneIsInstantMessage?: NoYes | null;
  emailIsPrivate?: NoYes | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneLocator?: DeserializedType<T, 'Edm.String'> | null;
  accountantName?: DeserializedType<T, 'Edm.String'> | null;
  emailPrivateForParty: DeserializedType<T, 'Edm.Int64'>;
  addressCityName?: DeserializedType<T, 'Edm.String'> | null;
  phonePrivateForParty: DeserializedType<T, 'Edm.Int64'>;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  crcIssuerState?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  crcCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  phoneIsMobilePhone?: NoYes | null;
  emailCountryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  phoneCountryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  addressIsPrivate?: NoYes | null;
}
