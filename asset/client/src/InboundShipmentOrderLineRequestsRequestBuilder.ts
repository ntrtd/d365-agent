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
import { InboundShipmentOrderLineRequests } from './InboundShipmentOrderLineRequests';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderLineRequests} entity.
 */
export class InboundShipmentOrderLineRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderLineRequests` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderLineRequests` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderLineRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderLineRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderLineRequests`.
   */
  create(
    entity: InboundShipmentOrderLineRequests<T>
  ): CreateRequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderLineRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineRequests.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderLineRequests.inboundShipmentOrderRequestId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineRequests.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderLineRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundShipmentOrderRequestId: inboundShipmentOrderRequestId,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderLineRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderLineRequests`.
   */
  update(
    entity: InboundShipmentOrderLineRequests<T>
  ): UpdateRequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineRequests`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineRequests.dataAreaId}.
   * @param inboundShipmentOrderRequestId Key property. See {@link InboundShipmentOrderLineRequests.inboundShipmentOrderRequestId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineRequests.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineRequests`.
   */
  delete(
    dataAreaId: string,
    inboundShipmentOrderRequestId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineRequests` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderLineRequests<T>
  ): DeleteRequestBuilder<InboundShipmentOrderLineRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundShipmentOrderRequestId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineRequests<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderLineRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderLineRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundShipmentOrderRequestId: inboundShipmentOrderRequestId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
