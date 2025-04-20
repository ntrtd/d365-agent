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
import { AddressBooks } from './AddressBooks';

/**
 * Request builder class for operations supported on the {@link AddressBooks} entity.
 */
export class AddressBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressBooks<T>, T> {
  /**
   * Returns a request builder for querying all `AddressBooks` entities.
   * @returns A request builder for creating requests to retrieve all `AddressBooks` entities.
   */
  getAll(): GetAllRequestBuilder<AddressBooks<T>, T> {
    return new GetAllRequestBuilder<AddressBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressBooks`.
   */
  create(entity: AddressBooks<T>): CreateRequestBuilder<AddressBooks<T>, T> {
    return new CreateRequestBuilder<AddressBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AddressBooks` entity based on its keys.
   * @param name Key property. See {@link AddressBooks.name}.
   * @returns A request builder for creating requests to retrieve one `AddressBooks` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressBooks<T>, T> {
    return new GetByKeyRequestBuilder<AddressBooks<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressBooks`.
   */
  update(entity: AddressBooks<T>): UpdateRequestBuilder<AddressBooks<T>, T> {
    return new UpdateRequestBuilder<AddressBooks<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressBooks`.
   * @param name Key property. See {@link AddressBooks.name}.
   * @returns A request builder for creating requests that delete an entity of type `AddressBooks`.
   */
  delete(name: string): DeleteRequestBuilder<AddressBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressBooks` by taking the entity as a parameter.
   */
  delete(entity: AddressBooks<T>): DeleteRequestBuilder<AddressBooks<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<AddressBooks<T>, T> {
    return new DeleteRequestBuilder<AddressBooks<T>, T>(
      this.entityApi,
      nameOrEntity instanceof AddressBooks
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
