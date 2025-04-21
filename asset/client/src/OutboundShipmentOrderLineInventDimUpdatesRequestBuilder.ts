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
import { OutboundShipmentOrderLineInventDimUpdates } from './OutboundShipmentOrderLineInventDimUpdates';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLineInventDimUpdates} entity.
 */
export class OutboundShipmentOrderLineInventDimUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLineInventDimUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLineInventDimUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<
    OutboundShipmentOrderLineInventDimUpdates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      OutboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLineInventDimUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   */
  create(
    entity: OutboundShipmentOrderLineInventDimUpdates<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new CreateRequestBuilder<
      OutboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLineInventDimUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.outboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLineInventDimUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new GetByKeyRequestBuilder<
      OutboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OutboundShipmentOrderUpdateId: outboundShipmentOrderUpdateId,
      OutboundShipmentOrderOriginId: outboundShipmentOrderOriginId,
      OrderLineNumber: orderLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   */
  update(
    entity: OutboundShipmentOrderLineInventDimUpdates<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new UpdateRequestBuilder<
      OutboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.dataAreaId}.
   * @param outboundShipmentOrderUpdateId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.outboundShipmentOrderUpdateId}.
   * @param outboundShipmentOrderOriginId Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.outboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineInventDimUpdates.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderUpdateId: string,
    outboundShipmentOrderOriginId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineInventDimUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineInventDimUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLineInventDimUpdates<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderUpdateId?: string,
    outboundShipmentOrderOriginId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineInventDimUpdates<T>, T> {
    return new DeleteRequestBuilder<
      OutboundShipmentOrderLineInventDimUpdates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLineInventDimUpdates
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
