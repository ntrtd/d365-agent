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
import type { RetailDirAddressBookPartiesApi } from './RetailDirAddressBookPartiesApi';

/**
 * This class represents the entity "RetailDirAddressBookParties" of service "d365_metadata".
 */
export class RetailDirAddressBookParties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDirAddressBookPartiesType<T>
{
  /**
   * Technical entity name for RetailDirAddressBookParties.
   */
  static override _entityName = 'RetailDirAddressBookParties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDirAddressBookParties entity.
   */
  static _keys = ['AddressBookName', 'PartyNumber'];
  /**
   * Address Book Name.
   */
  declare addressBookName: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Book Record Id.
   */
  declare addressBookRecordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Party Record Id.
   */
  declare partyRecordId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailDirAddressBookPartiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDirAddressBookPartiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressBookName: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  addressBookRecordId: DeserializedType<T, 'Edm.Int64'>;
  partyRecordId: DeserializedType<T, 'Edm.Int64'>;
}
