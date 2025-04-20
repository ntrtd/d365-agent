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
import type { PartyContactsApi } from './PartyContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PartyContacts" of service "d365_metadata".
 */
export class PartyContacts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartyContactsType<T>
{
  /**
   * Technical entity name for PartyContacts.
   */
  static override _entityName = 'PartyContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyContacts entity.
   */
  static _keys = ['PartyNumber', 'Type', 'Description', 'Locator'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Description.
   */
  declare description: DeserializedType<T, 'Edm.String'>;
  /**
   * Locator.
   */
  declare locator: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Instant Message.
   * @nullable
   */
  declare isInstantMessage?: NoYes | null;
  /**
   * Is Mobile Phone.
   * @nullable
   */
  declare isMobilePhone?: NoYes | null;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locator Extension.
   * @nullable
   */
  declare locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Id.
   * @nullable
   */
  declare locationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Retail Marketing Opt In.
   * @nullable
   */
  declare retailMarketingOptIn?: NoYes | null;

  constructor(_entityApi: PartyContactsApi<T>) {
    super(_entityApi);
  }
}

export interface PartyContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  type?: LogisticsElectronicAddressMethodType | null;
  description: DeserializedType<T, 'Edm.String'>;
  locator: DeserializedType<T, 'Edm.String'>;
  isInstantMessage?: NoYes | null;
  isMobilePhone?: NoYes | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  isPrivate?: NoYes | null;
  retailMarketingOptIn?: NoYes | null;
}
