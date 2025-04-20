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
import { ReasonTableRefBiEntities } from './ReasonTableRefBiEntities';

/**
 * Request builder class for operations supported on the {@link ReasonTableRefBiEntities} entity.
 */
export class ReasonTableRefBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReasonTableRefBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ReasonTableRefBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ReasonTableRefBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ReasonTableRefBiEntities<T>, T> {
    return new GetAllRequestBuilder<ReasonTableRefBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReasonTableRefBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReasonTableRefBiEntities`.
   */
  create(
    entity: ReasonTableRefBiEntities<T>
  ): CreateRequestBuilder<ReasonTableRefBiEntities<T>, T> {
    return new CreateRequestBuilder<ReasonTableRefBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReasonTableRefBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReasonTableRefBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link ReasonTableRefBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `ReasonTableRefBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ReasonTableRefBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ReasonTableRefBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReasonTableRefBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReasonTableRefBiEntities`.
   */
  update(
    entity: ReasonTableRefBiEntities<T>
  ): UpdateRequestBuilder<ReasonTableRefBiEntities<T>, T> {
    return new UpdateRequestBuilder<ReasonTableRefBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReasonTableRefBiEntities`.
   * @param dataAreaId Key property. See {@link ReasonTableRefBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link ReasonTableRefBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `ReasonTableRefBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<ReasonTableRefBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReasonTableRefBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReasonTableRefBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ReasonTableRefBiEntities<T>
  ): DeleteRequestBuilder<ReasonTableRefBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<ReasonTableRefBiEntities<T>, T> {
    return new DeleteRequestBuilder<ReasonTableRefBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReasonTableRefBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
