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
import { AddressObjects } from './AddressObjects';

/**
 * Request builder class for operations supported on the {@link AddressObjects} entity.
 */
export class AddressObjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressObjects<T>, T> {
  /**
   * Returns a request builder for querying all `AddressObjects` entities.
   * @returns A request builder for creating requests to retrieve all `AddressObjects` entities.
   */
  getAll(): GetAllRequestBuilder<AddressObjects<T>, T> {
    return new GetAllRequestBuilder<AddressObjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressObjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressObjects`.
   */
  create(
    entity: AddressObjects<T>
  ): CreateRequestBuilder<AddressObjects<T>, T> {
    return new CreateRequestBuilder<AddressObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressObjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link AddressObjects.dataAreaId}.
   * @param aoId Key property. See {@link AddressObjects.aoId}.
   * @returns A request builder for creating requests to retrieve one `AddressObjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    aoId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AddressObjects<T>, T> {
    return new GetByKeyRequestBuilder<AddressObjects<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AOId: aoId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressObjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressObjects`.
   */
  update(
    entity: AddressObjects<T>
  ): UpdateRequestBuilder<AddressObjects<T>, T> {
    return new UpdateRequestBuilder<AddressObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressObjects`.
   * @param dataAreaId Key property. See {@link AddressObjects.dataAreaId}.
   * @param aoId Key property. See {@link AddressObjects.aoId}.
   * @returns A request builder for creating requests that delete an entity of type `AddressObjects`.
   */
  delete(
    dataAreaId: string,
    aoId: string
  ): DeleteRequestBuilder<AddressObjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressObjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressObjects` by taking the entity as a parameter.
   */
  delete(entity: AddressObjects<T>): DeleteRequestBuilder<AddressObjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    aoId?: string
  ): DeleteRequestBuilder<AddressObjects<T>, T> {
    return new DeleteRequestBuilder<AddressObjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AddressObjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AOId: aoId!
          }
    );
  }
}
