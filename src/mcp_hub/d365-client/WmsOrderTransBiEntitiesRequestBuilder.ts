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
import { WmsOrderTransBiEntities } from './WmsOrderTransBiEntities';

/**
 * Request builder class for operations supported on the {@link WmsOrderTransBiEntities} entity.
 */
export class WmsOrderTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WmsOrderTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `WmsOrderTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `WmsOrderTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<WmsOrderTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<WmsOrderTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WmsOrderTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WmsOrderTransBiEntities`.
   */
  create(
    entity: WmsOrderTransBiEntities<T>
  ): CreateRequestBuilder<WmsOrderTransBiEntities<T>, T> {
    return new CreateRequestBuilder<WmsOrderTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WmsOrderTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link WmsOrderTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link WmsOrderTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `WmsOrderTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WmsOrderTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<WmsOrderTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WmsOrderTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WmsOrderTransBiEntities`.
   */
  update(
    entity: WmsOrderTransBiEntities<T>
  ): UpdateRequestBuilder<WmsOrderTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<WmsOrderTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WmsOrderTransBiEntities`.
   * @param dataAreaId Key property. See {@link WmsOrderTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link WmsOrderTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `WmsOrderTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<WmsOrderTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WmsOrderTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WmsOrderTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: WmsOrderTransBiEntities<T>
  ): DeleteRequestBuilder<WmsOrderTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<WmsOrderTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<WmsOrderTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WmsOrderTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
