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
import type { PostalAddressElectronicContactsApi } from './PostalAddressElectronicContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PostalAddressElectronicContacts" of service "d365_metadata".
 */
export class PostalAddressElectronicContacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostalAddressElectronicContactsType<T>
{
  /**
   * Technical entity name for PostalAddressElectronicContacts.
   */
  static override _entityName = 'PostalAddressElectronicContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostalAddressElectronicContacts entity.
   */
  static _keys = ['Locator', 'Type', 'PostalAddressLocationId', 'Description'];
  /**
   * Locator.
   */
  declare locator: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Postal Address Location Id.
   */
  declare postalAddressLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
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

  constructor(_entityApi: PostalAddressElectronicContactsApi<T>) {
    super(_entityApi);
  }
}

export interface PostalAddressElectronicContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locator: DeserializedType<T, 'Edm.String'>;
  type?: LogisticsElectronicAddressMethodType | null;
  postalAddressLocationId: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  isPrimary?: NoYes | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobile?: NoYes | null;
  isInstantMessage?: NoYes | null;
  internationalCallingCode?: DeserializedType<T, 'Edm.String'> | null;
}
