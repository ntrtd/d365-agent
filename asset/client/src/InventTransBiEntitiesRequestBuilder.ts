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
import { InventTransBiEntities } from './InventTransBiEntities';

/**
 * Request builder class for operations supported on the {@link InventTransBiEntities} entity.
 */
export class InventTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTransBiEntities`.
   */
  create(
    entity: InventTransBiEntities<T>
  ): CreateRequestBuilder<InventTransBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `InventTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTransBiEntities`.
   */
  update(
    entity: InventTransBiEntities<T>
  ): UpdateRequestBuilder<InventTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTransBiEntities`.
   * @param dataAreaId Key property. See {@link InventTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `InventTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<InventTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTransBiEntities<T>
  ): DeleteRequestBuilder<InventTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<InventTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
