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
import { InboundShipmentOrderMessages } from './InboundShipmentOrderMessages';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderMessages} entity.
 */
export class InboundShipmentOrderMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderMessages<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderMessages` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderMessages` entities.
   */
  getAll(): GetAllRequestBuilder<InboundShipmentOrderMessages<T>, T> {
    return new GetAllRequestBuilder<InboundShipmentOrderMessages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderMessages`.
   */
  create(
    entity: InboundShipmentOrderMessages<T>
  ): CreateRequestBuilder<InboundShipmentOrderMessages<T>, T> {
    return new CreateRequestBuilder<InboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link InboundShipmentOrderMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link InboundShipmentOrderMessages.sourceSystemId}.
   * @param messageId Key property. See {@link InboundShipmentOrderMessages.messageId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundShipmentOrderMessages<T>, T> {
    return new GetByKeyRequestBuilder<InboundShipmentOrderMessages<T>, T>(
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
   * Returns a request builder for updating an entity of type `InboundShipmentOrderMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderMessages`.
   */
  update(
    entity: InboundShipmentOrderMessages<T>
  ): UpdateRequestBuilder<InboundShipmentOrderMessages<T>, T> {
    return new UpdateRequestBuilder<InboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderMessages`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link InboundShipmentOrderMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link InboundShipmentOrderMessages.sourceSystemId}.
   * @param messageId Key property. See {@link InboundShipmentOrderMessages.messageId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderMessages`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    sourceSystemId: string,
    messageId: string
  ): DeleteRequestBuilder<InboundShipmentOrderMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderMessages` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderMessages<T>
  ): DeleteRequestBuilder<InboundShipmentOrderMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    sourceSystemId?: string,
    messageId?: string
  ): DeleteRequestBuilder<InboundShipmentOrderMessages<T>, T> {
    return new DeleteRequestBuilder<InboundShipmentOrderMessages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundShipmentOrderMessages
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
