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
import { AddressZipcodeChinas } from './AddressZipcodeChinas';

/**
 * Request builder class for operations supported on the {@link AddressZipcodeChinas} entity.
 */
export class AddressZipcodeChinasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressZipcodeChinas<T>, T> {
  /**
   * Returns a request builder for querying all `AddressZipcodeChinas` entities.
   * @returns A request builder for creating requests to retrieve all `AddressZipcodeChinas` entities.
   */
  getAll(): GetAllRequestBuilder<AddressZipcodeChinas<T>, T> {
    return new GetAllRequestBuilder<AddressZipcodeChinas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressZipcodeChinas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressZipcodeChinas`.
   */
  create(
    entity: AddressZipcodeChinas<T>
  ): CreateRequestBuilder<AddressZipcodeChinas<T>, T> {
    return new CreateRequestBuilder<AddressZipcodeChinas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressZipcodeChinas` entity based on its keys.
   * @param yzbm Key property. See {@link AddressZipcodeChinas.yzbm}.
   * @returns A request builder for creating requests to retrieve one `AddressZipcodeChinas` entity based on its keys.
   */
  getByKey(
    yzbm: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressZipcodeChinas<T>, T> {
    return new GetByKeyRequestBuilder<AddressZipcodeChinas<T>, T>(
      this.entityApi,
      { yzbm: yzbm }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressZipcodeChinas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressZipcodeChinas`.
   */
  update(
    entity: AddressZipcodeChinas<T>
  ): UpdateRequestBuilder<AddressZipcodeChinas<T>, T> {
    return new UpdateRequestBuilder<AddressZipcodeChinas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressZipcodeChinas`.
   * @param yzbm Key property. See {@link AddressZipcodeChinas.yzbm}.
   * @returns A request builder for creating requests that delete an entity of type `AddressZipcodeChinas`.
   */
  delete(yzbm: string): DeleteRequestBuilder<AddressZipcodeChinas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressZipcodeChinas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressZipcodeChinas` by taking the entity as a parameter.
   */
  delete(
    entity: AddressZipcodeChinas<T>
  ): DeleteRequestBuilder<AddressZipcodeChinas<T>, T>;
  delete(yzbmOrEntity: any): DeleteRequestBuilder<AddressZipcodeChinas<T>, T> {
    return new DeleteRequestBuilder<AddressZipcodeChinas<T>, T>(
      this.entityApi,
      yzbmOrEntity instanceof AddressZipcodeChinas
        ? yzbmOrEntity
        : { yzbm: yzbmOrEntity! }
    );
  }
}
