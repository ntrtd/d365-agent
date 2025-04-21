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
import { I9DocumentTypes } from './I9DocumentTypes';

/**
 * Request builder class for operations supported on the {@link I9DocumentTypes} entity.
 */
export class I9DocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<I9DocumentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `I9DocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `I9DocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<I9DocumentTypes<T>, T> {
    return new GetAllRequestBuilder<I9DocumentTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `I9DocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `I9DocumentTypes`.
   */
  create(
    entity: I9DocumentTypes<T>
  ): CreateRequestBuilder<I9DocumentTypes<T>, T> {
    return new CreateRequestBuilder<I9DocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `I9DocumentTypes` entity based on its keys.
   * @param i9DocumentTypeId Key property. See {@link I9DocumentTypes.i9DocumentTypeId}.
   * @returns A request builder for creating requests to retrieve one `I9DocumentTypes` entity based on its keys.
   */
  getByKey(
    i9DocumentTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<I9DocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<I9DocumentTypes<T>, T>(this.entityApi, {
      I9DocumentTypeId: i9DocumentTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `I9DocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `I9DocumentTypes`.
   */
  update(
    entity: I9DocumentTypes<T>
  ): UpdateRequestBuilder<I9DocumentTypes<T>, T> {
    return new UpdateRequestBuilder<I9DocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `I9DocumentTypes`.
   * @param i9DocumentTypeId Key property. See {@link I9DocumentTypes.i9DocumentTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `I9DocumentTypes`.
   */
  delete(i9DocumentTypeId: string): DeleteRequestBuilder<I9DocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `I9DocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `I9DocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: I9DocumentTypes<T>
  ): DeleteRequestBuilder<I9DocumentTypes<T>, T>;
  delete(
    i9DocumentTypeIdOrEntity: any
  ): DeleteRequestBuilder<I9DocumentTypes<T>, T> {
    return new DeleteRequestBuilder<I9DocumentTypes<T>, T>(
      this.entityApi,
      i9DocumentTypeIdOrEntity instanceof I9DocumentTypes
        ? i9DocumentTypeIdOrEntity
        : { I9DocumentTypeId: i9DocumentTypeIdOrEntity! }
    );
  }
}
