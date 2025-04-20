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
import { DimensionSets } from './DimensionSets';

/**
 * Request builder class for operations supported on the {@link DimensionSets} entity.
 */
export class DimensionSetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionSets<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionSets` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionSets` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionSets<T>, T> {
    return new GetAllRequestBuilder<DimensionSets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionSets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionSets`.
   */
  create(entity: DimensionSets<T>): CreateRequestBuilder<DimensionSets<T>, T> {
    return new CreateRequestBuilder<DimensionSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionSets` entity based on its keys.
   * @param recordId Key property. See {@link DimensionSets.recordId}.
   * @returns A request builder for creating requests to retrieve one `DimensionSets` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DimensionSets<T>, T> {
    return new GetByKeyRequestBuilder<DimensionSets<T>, T>(this.entityApi, {
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionSets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionSets`.
   */
  update(entity: DimensionSets<T>): UpdateRequestBuilder<DimensionSets<T>, T> {
    return new UpdateRequestBuilder<DimensionSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionSets`.
   * @param recordId Key property. See {@link DimensionSets.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionSets`.
   */
  delete(recordId: BigNumber): DeleteRequestBuilder<DimensionSets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionSets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionSets` by taking the entity as a parameter.
   */
  delete(entity: DimensionSets<T>): DeleteRequestBuilder<DimensionSets<T>, T>;
  delete(recordIdOrEntity: any): DeleteRequestBuilder<DimensionSets<T>, T> {
    return new DeleteRequestBuilder<DimensionSets<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof DimensionSets
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
