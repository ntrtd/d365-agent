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
import { InboundShipmentOrderLineMessages } from './InboundShipmentOrderLineMessages';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderLineMessages} entity.
 */
export class InboundShipmentOrderLineMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderLineMessages` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderLineMessages` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderLineMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderLineMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderLineMessages`.
   */
  create(
    entity: InboundShipmentOrderLineMessages<T>
  ): CreateRequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderLineMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link InboundShipmentOrderLineMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link InboundShipmentOrderLineMessages.sourceSystemId}.
   * @param messageId Key property. See {@link InboundShipmentOrderLineMessages.messageId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineMessages.orderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderLineMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderLineMessages<T>, T>(
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
   * Returns a request builder for updating an entity of type `InboundShipmentOrderLineMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderLineMessages`.
   */
  update(
    entity: InboundShipmentOrderLineMessages<T>
  ): UpdateRequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineMessages`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderLineMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link InboundShipmentOrderLineMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link InboundShipmentOrderLineMessages.sourceSystemId}.
   * @param messageId Key property. See {@link InboundShipmentOrderLineMessages.messageId}.
   * @param orderLineNumber Key property. See {@link InboundShipmentOrderLineMessages.orderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineMessages`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    sourceSystemId: string,
    messageId: string,
    orderLineNumber: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderLineMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderLineMessages` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderLineMessages<T>
  ): DeleteRequestBuilder<InboundShipmentOrderLineMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    sourceSystemId?: string,
    messageId?: string,
    orderLineNumber?: BigNumber
  ): DeleteRequestBuilder<InboundShipmentOrderLineMessages<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderLineMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderLineMessages
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
