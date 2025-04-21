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
import { DimensionCombinations } from './DimensionCombinations';

/**
 * Request builder class for operations supported on the {@link DimensionCombinations} entity.
 */
export class DimensionCombinationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionCombinations<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionCombinations` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionCombinations` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionCombinations<T>, T> {
    return new GetAllRequestBuilder<DimensionCombinations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionCombinations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionCombinations`.
   */
  create(
    entity: DimensionCombinations<T>
  ): CreateRequestBuilder<DimensionCombinations<T>, T> {
    return new CreateRequestBuilder<DimensionCombinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionCombinations` entity based on its keys.
   * @param recordId Key property. See {@link DimensionCombinations.recordId}.
   * @returns A request builder for creating requests to retrieve one `DimensionCombinations` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DimensionCombinations<T>, T> {
    return new GetByKeyRequestBuilder<DimensionCombinations<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionCombinations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionCombinations`.
   */
  update(
    entity: DimensionCombinations<T>
  ): UpdateRequestBuilder<DimensionCombinations<T>, T> {
    return new UpdateRequestBuilder<DimensionCombinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionCombinations`.
   * @param recordId Key property. See {@link DimensionCombinations.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionCombinations`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<DimensionCombinations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionCombinations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionCombinations` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionCombinations<T>
  ): DeleteRequestBuilder<DimensionCombinations<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<DimensionCombinations<T>, T> {
    return new DeleteRequestBuilder<DimensionCombinations<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof DimensionCombinations
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
