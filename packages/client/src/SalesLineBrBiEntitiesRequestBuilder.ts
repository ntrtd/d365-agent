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
import { SalesLineBrBiEntities } from './SalesLineBrBiEntities';

/**
 * Request builder class for operations supported on the {@link SalesLineBrBiEntities} entity.
 */
export class SalesLineBrBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesLineBrBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SalesLineBrBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SalesLineBrBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SalesLineBrBiEntities<T>, T> {
    return new GetAllRequestBuilder<SalesLineBrBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesLineBrBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesLineBrBiEntities`.
   */
  create(
    entity: SalesLineBrBiEntities<T>
  ): CreateRequestBuilder<SalesLineBrBiEntities<T>, T> {
    return new CreateRequestBuilder<SalesLineBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesLineBrBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesLineBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SalesLineBrBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SalesLineBrBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SalesLineBrBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesLineBrBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesLineBrBiEntities`.
   */
  update(
    entity: SalesLineBrBiEntities<T>
  ): UpdateRequestBuilder<SalesLineBrBiEntities<T>, T> {
    return new UpdateRequestBuilder<SalesLineBrBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesLineBrBiEntities`.
   * @param dataAreaId Key property. See {@link SalesLineBrBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link SalesLineBrBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineBrBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SalesLineBrBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesLineBrBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesLineBrBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SalesLineBrBiEntities<T>
  ): DeleteRequestBuilder<SalesLineBrBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<SalesLineBrBiEntities<T>, T> {
    return new DeleteRequestBuilder<SalesLineBrBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesLineBrBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
