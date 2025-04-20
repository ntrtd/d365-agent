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
import { WmsPickingRouteBiEntities } from './WmsPickingRouteBiEntities';

/**
 * Request builder class for operations supported on the {@link WmsPickingRouteBiEntities} entity.
 */
export class WmsPickingRouteBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WmsPickingRouteBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `WmsPickingRouteBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `WmsPickingRouteBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<WmsPickingRouteBiEntities<T>, T> {
    return new GetAllRequestBuilder<WmsPickingRouteBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WmsPickingRouteBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WmsPickingRouteBiEntities`.
   */
  create(
    entity: WmsPickingRouteBiEntities<T>
  ): CreateRequestBuilder<WmsPickingRouteBiEntities<T>, T> {
    return new CreateRequestBuilder<WmsPickingRouteBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WmsPickingRouteBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link WmsPickingRouteBiEntities.dataAreaId}.
   * @param pickingRouteId Key property. See {@link WmsPickingRouteBiEntities.pickingRouteId}.
   * @param shipmentId Key property. See {@link WmsPickingRouteBiEntities.shipmentId}.
   * @returns A request builder for creating requests to retrieve one `WmsPickingRouteBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    pickingRouteId: DeserializedType<T, 'Edm.String'>,
    shipmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WmsPickingRouteBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<WmsPickingRouteBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        pickingRouteID: pickingRouteId,
        shipmentId: shipmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WmsPickingRouteBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WmsPickingRouteBiEntities`.
   */
  update(
    entity: WmsPickingRouteBiEntities<T>
  ): UpdateRequestBuilder<WmsPickingRouteBiEntities<T>, T> {
    return new UpdateRequestBuilder<WmsPickingRouteBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WmsPickingRouteBiEntities`.
   * @param dataAreaId Key property. See {@link WmsPickingRouteBiEntities.dataAreaId}.
   * @param pickingRouteId Key property. See {@link WmsPickingRouteBiEntities.pickingRouteId}.
   * @param shipmentId Key property. See {@link WmsPickingRouteBiEntities.shipmentId}.
   * @returns A request builder for creating requests that delete an entity of type `WmsPickingRouteBiEntities`.
   */
  delete(
    dataAreaId: string,
    pickingRouteId: string,
    shipmentId: string
  ): DeleteRequestBuilder<WmsPickingRouteBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WmsPickingRouteBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WmsPickingRouteBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: WmsPickingRouteBiEntities<T>
  ): DeleteRequestBuilder<WmsPickingRouteBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    pickingRouteId?: string,
    shipmentId?: string
  ): DeleteRequestBuilder<WmsPickingRouteBiEntities<T>, T> {
    return new DeleteRequestBuilder<WmsPickingRouteBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WmsPickingRouteBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            pickingRouteID: pickingRouteId!,
            shipmentId: shipmentId!
          }
    );
  }
}
