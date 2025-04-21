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
import type { AddressBooksApi } from './AddressBooksApi';
import { NoYes } from './NoYes';
import {
  RetailStoreAddressBooks,
  RetailStoreAddressBooksType
} from './RetailStoreAddressBooks';

/**
 * This class represents the entity "AddressBooks" of service "d365_metadata".
 */
export class AddressBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressBooksType<T>
{
  /**
   * Technical entity name for AddressBooks.
   */
  static override _entityName = 'AddressBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressBooks entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * System.
   * @nullable
   */
  declare system?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailStoreAddressBooks} entity.
   */
  declare retailStoreAddressBook: RetailStoreAddressBooks<T>[];

  constructor(_entityApi: AddressBooksApi<T>) {
    super(_entityApi);
  }
}

export interface AddressBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  system?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  retailStoreAddressBook: RetailStoreAddressBooksType<T>[];
}
