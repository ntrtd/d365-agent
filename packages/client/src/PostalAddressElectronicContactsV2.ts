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
import type { PostalAddressElectronicContactsV2Api } from './PostalAddressElectronicContactsV2Api';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import {
  CdsPostalAddressLocations,
  CdsPostalAddressLocationsType
} from './CdsPostalAddressLocations';

/**
 * This class represents the entity "PostalAddressElectronicContactsV2" of service "d365_metadata".
 */
export class PostalAddressElectronicContactsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostalAddressElectronicContactsV2Type<T>
{
  /**
   * Technical entity name for PostalAddressElectronicContactsV2.
   */
  static override _entityName = 'PostalAddressElectronicContactsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostalAddressElectronicContactsV2 entity.
   */
  static _keys = ['PostalAddressLocationId', 'ElectronicAddressId'];
  /**
   * Postal Address Location Id.
   */
  declare postalAddressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Address Id.
   */
  declare electronicAddressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locator.
   * @nullable
   */
  declare locator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Mobile.
   * @nullable
   */
  declare isMobile?: NoYes | null;
  /**
   * Is Instant Message.
   * @nullable
   */
  declare isInstantMessage?: NoYes | null;
  /**
   * International Calling Code.
   * @nullable
   */
  declare internationalCallingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Marketing Opt In.
   * @nullable
   */
  declare retailMarketingOptIn?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link CdsPostalAddressLocations} entity.
   */
  declare cdsPostalAddressLocation?: CdsPostalAddressLocations<T> | null;

  constructor(_entityApi: PostalAddressElectronicContactsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PostalAddressElectronicContactsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  postalAddressLocationId: DeserializedType<T, 'Edm.String'>;
  electronicAddressId: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  locator?: DeserializedType<T, 'Edm.String'> | null;
  type?: LogisticsElectronicAddressMethodType | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobile?: NoYes | null;
  isInstantMessage?: NoYes | null;
  internationalCallingCode?: DeserializedType<T, 'Edm.String'> | null;
  retailMarketingOptIn?: NoYes | null;
  cdsPostalAddressLocation?: CdsPostalAddressLocationsType<T> | null;
}
