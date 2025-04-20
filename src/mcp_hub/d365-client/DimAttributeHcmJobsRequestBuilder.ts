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
import { DimAttributeHcmJobs } from './DimAttributeHcmJobs';

/**
 * Request builder class for operations supported on the {@link DimAttributeHcmJobs} entity.
 */
export class DimAttributeHcmJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeHcmJobs<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeHcmJobs` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeHcmJobs` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeHcmJobs<T>, T> {
    return new GetAllRequestBuilder<DimAttributeHcmJobs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimAttributeHcmJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeHcmJobs`.
   */
  create(
    entity: DimAttributeHcmJobs<T>
  ): CreateRequestBuilder<DimAttributeHcmJobs<T>, T> {
    return new CreateRequestBuilder<DimAttributeHcmJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeHcmJobs` entity based on its keys.
   * @param value Key property. See {@link DimAttributeHcmJobs.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeHcmJobs` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeHcmJobs<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeHcmJobs<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeHcmJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeHcmJobs`.
   */
  update(
    entity: DimAttributeHcmJobs<T>
  ): UpdateRequestBuilder<DimAttributeHcmJobs<T>, T> {
    return new UpdateRequestBuilder<DimAttributeHcmJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmJobs`.
   * @param value Key property. See {@link DimAttributeHcmJobs.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmJobs`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeHcmJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeHcmJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeHcmJobs` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeHcmJobs<T>
  ): DeleteRequestBuilder<DimAttributeHcmJobs<T>, T>;
  delete(valueOrEntity: any): DeleteRequestBuilder<DimAttributeHcmJobs<T>, T> {
    return new DeleteRequestBuilder<DimAttributeHcmJobs<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeHcmJobs
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
