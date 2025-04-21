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
import { OutboundShipmentOrderDocumentAttachmentMessages } from './OutboundShipmentOrderDocumentAttachmentMessages';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentOrderDocumentAttachmentMessages} entity.
 */
export class OutboundShipmentOrderDocumentAttachmentMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  OutboundShipmentOrderDocumentAttachmentMessages<T>,
  T
> {
  /**
   * Returns a request builder for querying all `OutboundShipmentOrderDocumentAttachmentMessages` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentOrderDocumentAttachmentMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      OutboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentOrderDocumentAttachmentMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   */
  create(
    entity: OutboundShipmentOrderDocumentAttachmentMessages<T>
  ): CreateRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new CreateRequestBuilder<
      OutboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentOrderDocumentAttachmentMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderDocumentAttachmentMessages.dataAreaId}.
   * @param documentId Key property. See {@link OutboundShipmentOrderDocumentAttachmentMessages.documentId}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentOrderDocumentAttachmentMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      OutboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   */
  update(
    entity: OutboundShipmentOrderDocumentAttachmentMessages<T>
  ): UpdateRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new UpdateRequestBuilder<
      OutboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   * @param dataAreaId Key property. See {@link OutboundShipmentOrderDocumentAttachmentMessages.dataAreaId}.
   * @param documentId Key property. See {@link OutboundShipmentOrderDocumentAttachmentMessages.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentOrderDocumentAttachmentMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentOrderDocumentAttachmentMessages` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentOrderDocumentAttachmentMessages<T>
  ): DeleteRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<
    OutboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new DeleteRequestBuilder<
      OutboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      OutboundShipmentOrderDocumentAttachmentMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
