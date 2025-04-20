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
import { OutboundShipmentOrderMessages } from './OutboundShipmentOrderMessages';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderMessages} entity.
 */
export class OutboundShipmentOrderMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderMessages<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderMessages` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderMessages` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentOrderMessages<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentOrderMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderMessages`.
   */
  create(
    entity: OutboundShipmentOrderMessages<T>
  ): CreateRequestBuilder<OutboundShipmentOrderMessages<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderMessages.messageId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderMessages<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OrderNumber: orderNumber,
        SourceSystemId: sourceSystemId,
        MessageId: messageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderMessages`.
   */
  update(
    entity: OutboundShipmentOrderMessages<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderMessages<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderMessages`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderMessages.messageId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderMessages`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    sourceSystemId: string,
    messageId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderMessages` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderMessages<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    sourceSystemId?: string,
    messageId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderMessages<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrderNumber: orderNumber!,
            SourceSystemId: sourceSystemId!,
            MessageId: messageId!
          }
    );
  }
}
