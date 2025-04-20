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
import { OutboundShipmentOrderLineUpdates } from './OutboundShipmentOrderLineUpdates';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLineUpdates} entity.
 */
export class OutboundShipmentOrderLineUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLineUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLineUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLineUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLineUpdates`.
   */
  create(
    entity: OutboundShipmentOrderLineUpdates<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLineUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderLineUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderLineUpdates.outboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineUpdates.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLineUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderUpdateId: outboundShipmentOrderUpdateId,
        OutboundShipmentOrderOriginId: outboundShipmentOrderOriginId,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLineUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLineUpdates`.
   */
  update(
    entity: OutboundShipmentOrderLineUpdates<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineUpdates`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderLineUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderLineUpdates.outboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineUpdates.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineUpdates`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderUpdateId: string,
    outboundShipmentOrderOriginId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLineUpdates<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderUpdateId?: string,
    outboundShipmentOrderOriginId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLineUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderUpdateId: outboundShipmentOrderUpdateId!,
            OutboundShipmentOrderOriginId: outboundShipmentOrderOriginId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
