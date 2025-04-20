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
import { OutboundShipmentOrderUpdates } from './OutboundShipmentOrderUpdates';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderUpdates} entity.
 */
export class OutboundShipmentOrderUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderUpdates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderUpdates`.
   */
  create(
    entity: OutboundShipmentOrderUpdates<T>
  ): CreateRequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderUpdates.outboundShipmentOrderOriginId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderUpdateId: outboundShipmentOrderUpdateId,
        OutboundShipmentOrderOriginId: outboundShipmentOrderOriginId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderUpdates`.
   */
  update(
    entity: OutboundShipmentOrderUpdates<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderUpdates`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderUpdates.outboundShipmentOrderOriginId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderUpdates`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderUpdateId: string,
    outboundShipmentOrderOriginId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderUpdates<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderUpdateId?: string,
    outboundShipmentOrderOriginId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderUpdates<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderUpdates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderUpdateId: outboundShipmentOrderUpdateId!,
            OutboundShipmentOrderOriginId: outboundShipmentOrderOriginId!
          }
    );
  }
}
