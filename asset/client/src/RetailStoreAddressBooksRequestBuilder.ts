/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RetailStoreAddressBooks } from './RetailStoreAddressBooks';
import { RetailAddressBookType } from './RetailAddressBookType';

/**
 * Request builder class for operations supported on the {@link RetailStoreAddressBooks} entity.
 */
export class RetailStoreAddressBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreAddressBooks<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreAddressBooks` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreAddressBooks` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreAddressBooks<T>, T> {
    return new GetAllRequestBuilder<RetailStoreAddressBooks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreAddressBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreAddressBooks`.
   */
  create(
    entity: RetailStoreAddressBooks<T>
  ): CreateRequestBuilder<RetailStoreAddressBooks<T>, T> {
    return new CreateRequestBuilder<RetailStoreAddressBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreAddressBooks` entity based on its keys.
   * @param retailChannelId Key property. See {@link RetailStoreAddressBooks.retailChannelId}.
   * @param addressBookName Key property. See {@link RetailStoreAddressBooks.addressBookName}.
   * @param addressBookType Key property. See {@link RetailStoreAddressBooks.addressBookType}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreAddressBooks` entity based on its keys.
   */
  getByKey(
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    addressBookName: DeserializedType<T, 'Edm.String'>,
    addressBookType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailAddressBookType'
    >
  ): GetByKeyRequestBuilder<RetailStoreAddressBooks<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreAddressBooks<T>, T>(
      this.entityApi,
      {
        RetailChannelId: retailChannelId,
        AddressBookName: addressBookName,
        AddressBookType: addressBookType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreAddressBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreAddressBooks`.
   */
  update(
    entity: RetailStoreAddressBooks<T>
  ): UpdateRequestBuilder<RetailStoreAddressBooks<T>, T> {
    return new UpdateRequestBuilder<RetailStoreAddressBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreAddressBooks`.
   * @param retailChannelId Key property. See {@link RetailStoreAddressBooks.retailChannelId}.
   * @param addressBookName Key property. See {@link RetailStoreAddressBooks.addressBookName}.
   * @param addressBookType Key property. See {@link RetailStoreAddressBooks.addressBookType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreAddressBooks`.
   */
  delete(
    retailChannelId: string,
    addressBookName: string,
    addressBookType: RetailAddressBookType
  ): DeleteRequestBuilder<RetailStoreAddressBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreAddressBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreAddressBooks` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreAddressBooks<T>
  ): DeleteRequestBuilder<RetailStoreAddressBooks<T>, T>;
  delete(
    retailChannelIdOrEntity: any,
    addressBookName?: string,
    addressBookType?: RetailAddressBookType
  ): DeleteRequestBuilder<RetailStoreAddressBooks<T>, T> {
    return new DeleteRequestBuilder<RetailStoreAddressBooks<T>, T>(
      this.entityApi,
      retailChannelIdOrEntity instanceof RetailStoreAddressBooks
        ? retailChannelIdOrEntity
        : {
            RetailChannelId: retailChannelIdOrEntity!,
            AddressBookName: addressBookName!,
            AddressBookType: addressBookType!
          }
    );
  }
}
