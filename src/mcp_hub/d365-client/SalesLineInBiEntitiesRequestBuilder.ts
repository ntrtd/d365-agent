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
import { SalesLineInBiEntities } from './SalesLineInBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesLineInBiEntities} entity.
 */
export class SalesLineInBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesLineInBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesLineInBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesLineInBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesLineInBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesLineInBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesLineInBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesLineInBiEntities`.
   */
  create(
    entity: SalesLineInBiEntities<T>
  ): CreateRequestBuilder<SalesLineInBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesLineInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesLineInBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesLineInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineInBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesLineInBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesLineInBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesLineInBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesLineInBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesLineInBiEntities`.
   */
  update(
    entity: SalesLineInBiEntities<T>
  ): UpdateRequestBuilder<SalesLineInBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesLineInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesLineInBiEntities`.
   * @param dataAreaId Key property. See {@link SalesLineInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineInBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineInBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesLineInBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesLineInBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineInBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesLineInBiEntities<T>
  ): DeleteRequestBuilder<SalesLineInBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesLineInBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesLineInBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesLineInBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
