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
import { InboundShipmentOrderLineUpdates } from './InboundShipmentOrderLineUpdates';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderLineUpdates} entity.
 */
export class InboundShipmentOrderLineUpdatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderLineUpdates` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderLineUpdates` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderLineUpdates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderLineUpdates`.
   */
  create(
    entity: InboundShipmentOrderLineUpdates<T>
  ): CreateRequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderLineUpdates` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderLineUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderLineUpdates.inboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineUpdates.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderLineUpdates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderUpdateId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderOriginId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId,
        InboundShipmentOrderOriginId: inboundShipmentOrderOriginId,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderLineUpdates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderLineUpdates`.
   */
  update(
    entity: InboundShipmentOrderLineUpdates<T>
  ): UpdateRequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineUpdates`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineUpdates.dataAreaId}.
   * @param inboundShipmentOrderUpdateId Key property. See {@link InboundShipmentOrderLineUpdates.inboundShipmentOrderUpdateId}.
   * @param inboundShipmentOrderOriginId Key property. See {@link InboundShipmentOrderLineUpdates.inboundShipmentOrderOriginId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineUpdates.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineUpdates`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderUpdateId: string,
    inboundShipmentOrderOriginId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineUpdates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineUpdates` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderLineUpdates<T>
  ): DeleteRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderUpdateId?: string,
    inboundShipmentOrderOriginId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineUpdates<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderLineUpdates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderLineUpdates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderUpdateId: inboundShipmentOrderUpdateId!,
            InboundShipmentOrderOriginId: inboundShipmentOrderOriginId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
