/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { WmsOrderBiEntities } from './WmsOrderBiEntities';

/**
 * Request builder class for operations supported on the {@link WmsOrderBiEntities} entity.
 */
export class WmsOrderBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WmsOrderBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `WmsOrderBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `WmsOrderBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<WmsOrderBiEntities<T>, T> {
    return new GetAllRequestBuilder<WmsOrderBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WmsOrderBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WmsOrderBiEntities`.
   */
  create(
    entity: WmsOrderBiEntities<T>
  ): CreateRequestBuilder<WmsOrderBiEntities<T>, T> {
    return new CreateRequestBuilder<WmsOrderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WmsOrderBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link WmsOrderBiEntities.dataAreaId}.
   * @param orderId Key property. See {@link WmsOrderBiEntities.orderId}.
   * @returns A request builder for creating requests to retrieve one `WmsOrderBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WmsOrderBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<WmsOrderBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        orderId: orderId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WmsOrderBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WmsOrderBiEntities`.
   */
  update(
    entity: WmsOrderBiEntities<T>
  ): UpdateRequestBuilder<WmsOrderBiEntities<T>, T> {
    return new UpdateRequestBuilder<WmsOrderBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WmsOrderBiEntities`.
   * @param dataAreaId Key property. See {@link WmsOrderBiEntities.dataAreaId}.
   * @param orderId Key property. See {@link WmsOrderBiEntities.orderId}.
   * @returns A request builder for creating requests that delete an entity of type `WmsOrderBiEntities`.
   */
  delete(
    dataAreaId: string,
    orderId: string
  ): DeleteRequestBuilder<WmsOrderBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WmsOrderBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WmsOrderBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: WmsOrderBiEntities<T>
  ): DeleteRequestBuilder<WmsOrderBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderId?: string
  ): DeleteRequestBuilder<WmsOrderBiEntities<T>, T> {
    return new DeleteRequestBuilder<WmsOrderBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WmsOrderBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            orderId: orderId!
          }
    );
  }
}
