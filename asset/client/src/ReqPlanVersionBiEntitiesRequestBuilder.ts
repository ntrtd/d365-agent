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
import { ReqPlanVersionBiEntities } from './ReqPlanVersionBiEntities';

/**
 * Request builder class for operations supported on the {@link ReqPlanVersionBiEntities} entity.
 */
export class ReqPlanVersionBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReqPlanVersionBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ReqPlanVersionBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ReqPlanVersionBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ReqPlanVersionBiEntities<T>, T> {
    return new GetAllRequestBuilder<ReqPlanVersionBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReqPlanVersionBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReqPlanVersionBiEntities`.
   */
  create(
    entity: ReqPlanVersionBiEntities<T>
  ): CreateRequestBuilder<ReqPlanVersionBiEntities<T>, T> {
    return new CreateRequestBuilder<ReqPlanVersionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReqPlanVersionBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link ReqPlanVersionBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `ReqPlanVersionBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ReqPlanVersionBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ReqPlanVersionBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReqPlanVersionBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReqPlanVersionBiEntities`.
   */
  update(
    entity: ReqPlanVersionBiEntities<T>
  ): UpdateRequestBuilder<ReqPlanVersionBiEntities<T>, T> {
    return new UpdateRequestBuilder<ReqPlanVersionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReqPlanVersionBiEntities`.
   * @param sourceKey Key property. See {@link ReqPlanVersionBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlanVersionBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<ReqPlanVersionBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReqPlanVersionBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlanVersionBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ReqPlanVersionBiEntities<T>
  ): DeleteRequestBuilder<ReqPlanVersionBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<ReqPlanVersionBiEntities<T>, T> {
    return new DeleteRequestBuilder<ReqPlanVersionBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof ReqPlanVersionBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
