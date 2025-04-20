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
import { TrvRequisitionLineBiEntities } from './TrvRequisitionLineBiEntities';

/**
 * Request builder class for operations supported on the {@link TrvRequisitionLineBiEntities} entity.
 */
export class TrvRequisitionLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvRequisitionLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvRequisitionLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<TrvRequisitionLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvRequisitionLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvRequisitionLineBiEntities`.
   */
  create(
    entity: TrvRequisitionLineBiEntities<T>
  ): CreateRequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
    return new CreateRequestBuilder<TrvRequisitionLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvRequisitionLineBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link TrvRequisitionLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `TrvRequisitionLineBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TrvRequisitionLineBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvRequisitionLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvRequisitionLineBiEntities`.
   */
  update(
    entity: TrvRequisitionLineBiEntities<T>
  ): UpdateRequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<TrvRequisitionLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvRequisitionLineBiEntities`.
   * @param sourceKey Key property. See {@link TrvRequisitionLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `TrvRequisitionLineBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<TrvRequisitionLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvRequisitionLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvRequisitionLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvRequisitionLineBiEntities<T>
  ): DeleteRequestBuilder<TrvRequisitionLineBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<TrvRequisitionLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<TrvRequisitionLineBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof TrvRequisitionLineBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
