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
import { RetailDirAddressBookParties } from './RetailDirAddressBookParties';

/**
 * Request builder class for operations supported on the {@link RetailDirAddressBookParties} entity.
 */
export class RetailDirAddressBookPartiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDirAddressBookParties<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDirAddressBookParties` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDirAddressBookParties` entities.
   */
  getAll(): GetAllRequestBuilder<RetailDirAddressBookParties<T>, T> {
    return new GetAllRequestBuilder<RetailDirAddressBookParties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailDirAddressBookParties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDirAddressBookParties`.
   */
  create(
    entity: RetailDirAddressBookParties<T>
  ): CreateRequestBuilder<RetailDirAddressBookParties<T>, T> {
    return new CreateRequestBuilder<RetailDirAddressBookParties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailDirAddressBookParties` entity based on its keys.
   * @param addressBookName Key property. See {@link RetailDirAddressBookParties.addressBookName}.
   * @param partyNumber Key property. See {@link RetailDirAddressBookParties.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailDirAddressBookParties` entity based on its keys.
   */
  getByKey(
    addressBookName: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDirAddressBookParties<T>, T> {
    return new GetByKeyRequestBuilder<RetailDirAddressBookParties<T>, T>(
      this.entityApi,
      {
        AddressBookName: addressBookName,
        PartyNumber: partyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDirAddressBookParties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDirAddressBookParties`.
   */
  update(
    entity: RetailDirAddressBookParties<T>
  ): UpdateRequestBuilder<RetailDirAddressBookParties<T>, T> {
    return new UpdateRequestBuilder<RetailDirAddressBookParties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDirAddressBookParties`.
   * @param addressBookName Key property. See {@link RetailDirAddressBookParties.addressBookName}.
   * @param partyNumber Key property. See {@link RetailDirAddressBookParties.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDirAddressBookParties`.
   */
  delete(
    addressBookName: string,
    partyNumber: string
  ): DeleteRequestBuilder<RetailDirAddressBookParties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDirAddressBookParties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDirAddressBookParties` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDirAddressBookParties<T>
  ): DeleteRequestBuilder<RetailDirAddressBookParties<T>, T>;
  delete(
    addressBookNameOrEntity: any,
    partyNumber?: string
  ): DeleteRequestBuilder<RetailDirAddressBookParties<T>, T> {
    return new DeleteRequestBuilder<RetailDirAddressBookParties<T>, T>(
      this.entityApi,
      addressBookNameOrEntity instanceof RetailDirAddressBookParties
        ? addressBookNameOrEntity
        : {
            AddressBookName: addressBookNameOrEntity!,
            PartyNumber: partyNumber!
          }
    );
  }
}
