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
import { OutboundShipmentOrderLineCrossDockMessages } from './OutboundShipmentOrderLineCrossDockMessages';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderLineCrossDockMessages} entity.
 */
export class OutboundShipmentOrderLineCrossDockMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderLineCrossDockMessages` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderLineCrossDockMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    OutboundShipmentOrderLineCrossDockMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      OutboundShipmentOrderLineCrossDockMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderLineCrossDockMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   */
  create(
    entity: OutboundShipmentOrderLineCrossDockMessages<T>
  ): CreateRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T> {
    return new CreateRequestBuilder<
      OutboundShipmentOrderLineCrossDockMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderLineCrossDockMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.messageId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.orderLineNumber}.
   * @param crossDockSourceId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.crossDockSourceId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderLineCrossDockMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    orderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    crossDockSourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T> {
    return new GetByKeyRequestBuilder<
      OutboundShipmentOrderLineCrossDockMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OrderNumber: orderNumber,
      SourceSystemId: sourceSystemId,
      MessageId: messageId,
      OrderLineNumber: orderLineNumber,
      CrossDockSourceId: crossDockSourceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   */
  update(
    entity: OutboundShipmentOrderLineCrossDockMessages<T>
  ): UpdateRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T> {
    return new UpdateRequestBuilder<
      OutboundShipmentOrderLineCrossDockMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.dataAreaId}.
   * @param orderNumber Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.orderNumber}.
   * @param sourceSystemId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.sourceSystemId}.
   * @param messageId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.messageId}.
   * @param orderLineNumber Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.orderLineNumber}.
   * @param crossDockSourceId Key property. See {@link OutboundShipmentOrderLineCrossDockMessages.crossDockSourceId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string,
    sourceSystemId: string,
    messageId: string,
    orderLineNumber: BigNumber,
    crossDockSourceId: string
  ): DeleteRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderLineCrossDockMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderLineCrossDockMessages` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderLineCrossDockMessages<T>
  ): DeleteRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string,
    sourceSystemId?: string,
    messageId?: string,
    orderLineNumber?: BigNumber,
    crossDockSourceId?: string
  ): DeleteRequestBuilder<OutboundShipmentOrderLineCrossDockMessages<T>, T> {
    return new DeleteRequestBuilder<
      OutboundShipmentOrderLineCrossDockMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentOrderLineCrossDockMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrderNumber: orderNumber!,
            SourceSystemId: sourceSystemId!,
            MessageId: messageId!,
            OrderLineNumber: orderLineNumber!,
            CrossDockSourceId: crossDockSourceId!
          }
    );
  }
}
