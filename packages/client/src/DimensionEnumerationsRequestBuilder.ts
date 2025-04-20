/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { DimensionEnumerations } from './DimensionEnumerations';

/**
 * Request builder class for operations supported on the {@link DimensionEnumerations} entity.
 */
export class DimensionEnumerationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionEnumerations<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionEnumerations` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionEnumerations` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionEnumerations<T>, T> {
    return new GetAllRequestBuilder<DimensionEnumerations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionEnumerations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionEnumerations`.
   */
  create(
    entity: DimensionEnumerations<T>
  ): CreateRequestBuilder<DimensionEnumerations<T>, T> {
    return new CreateRequestBuilder<DimensionEnumerations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionEnumerations` entity based on its keys.
   * @param recordId Key property. See {@link DimensionEnumerations.recordId}.
   * @returns A request builder for creating requests to retrieve one `DimensionEnumerations` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DimensionEnumerations<T>, T> {
    return new GetByKeyRequestBuilder<DimensionEnumerations<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionEnumerations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionEnumerations`.
   */
  update(
    entity: DimensionEnumerations<T>
  ): UpdateRequestBuilder<DimensionEnumerations<T>, T> {
    return new UpdateRequestBuilder<DimensionEnumerations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionEnumerations`.
   * @param recordId Key property. See {@link DimensionEnumerations.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionEnumerations`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<DimensionEnumerations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionEnumerations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionEnumerations` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionEnumerations<T>
  ): DeleteRequestBuilder<DimensionEnumerations<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<DimensionEnumerations<T>, T> {
    return new DeleteRequestBuilder<DimensionEnumerations<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof DimensionEnumerations
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
