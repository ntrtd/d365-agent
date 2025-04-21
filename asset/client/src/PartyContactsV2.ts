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
import type { PartyContactsV2Api } from './PartyContactsV2Api';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { CdsParties, CdsPartiesType } from './CdsParties';

/**
 * This class represents the entity "PartyContactsV2" of service "d365_metadata".
 */
export class PartyContactsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartyContactsV2Type<T>
{
  /**
   * Technical entity name for PartyContactsV2.
   */
  static override _entityName = 'PartyContactsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyContactsV2 entity.
   */
  static _keys = ['PartyNumber', 'ElectronicAddressId'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Address Id.
   */
  declare electronicAddressId: DeserializedType<T, 'Edm.String'>;
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
   * Locator.
   * @nullable
   */
  declare locator?: DeserializedType<T, 'Edm.String'> | null;
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link CdsParties} entity.
   */
  declare cdsParty?: CdsParties<T> | null;

  constructor(_entityApi: PartyContactsV2Api<T>) {
    super(_entityApi);
  }
}

export interface PartyContactsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  electronicAddressId: DeserializedType<T, 'Edm.String'>;
  isInstantMessage?: NoYes | null;
  isMobilePhone?: NoYes | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  locator?: DeserializedType<T, 'Edm.String'> | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: LogisticsElectronicAddressMethodType | null;
  isPrivate?: NoYes | null;
  cdsParty?: CdsPartiesType<T> | null;
}
