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
import { OutboundShipmentOrderLineRequests } from './OutboundShipmentOrderLineRequests';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLineRequests} entity.
 */
export class OutboundShipmentOrderLineRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLineRequests` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLineRequests` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLineRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLineRequests`.
   */
  create(
    entity: OutboundShipmentOrderLineRequests<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLineRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineRequests.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderLineRequests.outboundShipmentOrderRequestId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineRequests.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLineRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLineRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLineRequests`.
   */
  update(
    entity: OutboundShipmentOrderLineRequests<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineRequests`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineRequests.dataAreaId}.
   * @param outboundShipmentOrderRequestId Key property. See {@link OutboundShipmentOrderLineRequests.outboundShipmentOrderRequestId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineRequests.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineRequests`.
   */
  delete(
    dataAreaId: string,
    outboundShipmentOrderRequestId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineRequests` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLineRequests<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundShipmentOrderRequestId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineRequests<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLineRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundShipmentOrderRequestId: outboundShipmentOrderRequestId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
