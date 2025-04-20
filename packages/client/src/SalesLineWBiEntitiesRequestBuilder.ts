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
import { SalesLineWBiEntities } from './SalesLineWBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesLineWBiEntities} entity.
 */
export class SalesLineWBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesLineWBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesLineWBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesLineWBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesLineWBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesLineWBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesLineWBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesLineWBiEntities`.
   */
  create(
    entity: SalesLineWBiEntities<T>
  ): CreateRequestBuilder<SalesLineWBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesLineWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesLineWBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesLineWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineWBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesLineWBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesLineWBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesLineWBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesLineWBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesLineWBiEntities`.
   */
  update(
    entity: SalesLineWBiEntities<T>
  ): UpdateRequestBuilder<SalesLineWBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesLineWBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesLineWBiEntities`.
   * @param dataAreaId Key property. See {@link SalesLineWBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineWBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineWBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesLineWBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesLineWBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineWBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesLineWBiEntities<T>
  ): DeleteRequestBuilder<SalesLineWBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesLineWBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesLineWBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesLineWBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
