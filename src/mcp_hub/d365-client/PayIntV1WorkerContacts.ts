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
import type { PayIntV1WorkerContactsApi } from './PayIntV1WorkerContactsApi';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1WorkerContacts" of service "d365_metadata".
 */
export class PayIntV1WorkerContacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1WorkerContactsType<T>
{
  /**
   * Technical entity name for PayIntV1WorkerContacts.
   */
  static override _entityName = 'PayIntV1WorkerContacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1WorkerContacts entity.
   */
  static _keys = ['PersonnelNumber', 'Type', 'Locator', 'Description'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsElectronicAddressMethodType | null;
  /**
   * Locator.
   */
  declare locator: DeserializedType<T, 'Edm.String'>;
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
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Mobile Phone.
   * @nullable
   */
  declare isMobilePhone?: NoYes | null;
  /**
   * Locator Extension.
   * @nullable
   */
  declare locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1WorkerContactsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1WorkerContactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  type?: LogisticsElectronicAddressMethodType | null;
  locator: DeserializedType<T, 'Edm.String'>;
  description: DeserializedType<T, 'Edm.String'>;
  isPrivate?: NoYes | null;
  isPrimary?: NoYes | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  locationId?: DeserializedType<T, 'Edm.String'> | null;
  purpose?: DeserializedType<T, 'Edm.String'> | null;
  isMobilePhone?: NoYes | null;
  locatorExtension?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
}
