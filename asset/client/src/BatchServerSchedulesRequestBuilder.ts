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
import { BatchServerSchedules } from './BatchServerSchedules';

/**
 * Request builder class for operations supported on the {@link BatchServerSchedules} entity.
 */
export class BatchServerSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchServerSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `BatchServerSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `BatchServerSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<BatchServerSchedules<T>, T> {
    return new GetAllRequestBuilder<BatchServerSchedules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchServerSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchServerSchedules`.
   */
  create(
    entity: BatchServerSchedules<T>
  ): CreateRequestBuilder<BatchServerSchedules<T>, T> {
    return new CreateRequestBuilder<BatchServerSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchServerSchedules` entity based on its keys.
   * @param aosInstanceName Key property. See {@link BatchServerSchedules.aosInstanceName}.
   * @returns A request builder for creating requests to retrieve one `BatchServerSchedules` entity based on its keys.
   */
  getByKey(
    aosInstanceName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchServerSchedules<T>, T> {
    return new GetByKeyRequestBuilder<BatchServerSchedules<T>, T>(
      this.entityApi,
      { AOSInstanceName: aosInstanceName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchServerSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchServerSchedules`.
   */
  update(
    entity: BatchServerSchedules<T>
  ): UpdateRequestBuilder<BatchServerSchedules<T>, T> {
    return new UpdateRequestBuilder<BatchServerSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchServerSchedules`.
   * @param aosInstanceName Key property. See {@link BatchServerSchedules.aosInstanceName}.
   * @returns A request builder for creating requests that delete an entity of type `BatchServerSchedules`.
   */
  delete(
    aosInstanceName: string
  ): DeleteRequestBuilder<BatchServerSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchServerSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchServerSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: BatchServerSchedules<T>
  ): DeleteRequestBuilder<BatchServerSchedules<T>, T>;
  delete(
    aosInstanceNameOrEntity: any
  ): DeleteRequestBuilder<BatchServerSchedules<T>, T> {
    return new DeleteRequestBuilder<BatchServerSchedules<T>, T>(
      this.entityApi,
      aosInstanceNameOrEntity instanceof BatchServerSchedules
        ? aosInstanceNameOrEntity
        : { AOSInstanceName: aosInstanceNameOrEntity! }
    );
  }
}
