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
import { OutboundShipmentOrderLineMessages } from './OutboundShipmentOrderLineMessages';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLineMessages} entity.
 */
export class OutboundShipmentOrderLineMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLineMessages` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLineMessages` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLineMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLineMessages`.
   */
  create(
    entity: OutboundShipmentOrderLineMessages<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLineMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderLineMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderLineMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderLineMessages.messageId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineMessages.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLineMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OrderNumber: orderNumber,
        SourceSystemId: sourceSystemId,
        MessageId: messageId,
        OrderLineNumber: orderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLineMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLineMessages`.
   */
  update(
    entity: OutboundShipmentOrderLineMessages<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineMessages`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderLineMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderLineMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderLineMessages.messageId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineMessages.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineMessages`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    sourceSystemId: string,
    messageId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineMessages` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLineMessages<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    sourceSystemId?: string,
    messageId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentOrderLineMessages<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLineMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrderNumber: orderNumber!,
            SourceSystemId: sourceSystemId!,
            MessageId: messageId!,
            OrderLineNumber: orderLineNumber!
          }
    );
  }
}
