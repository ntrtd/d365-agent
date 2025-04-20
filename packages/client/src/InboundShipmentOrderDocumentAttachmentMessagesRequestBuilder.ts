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
import { InboundShipmentOrderDocumentAttachmentMessages } from './InboundShipmentOrderDocumentAttachmentMessages';

/**
 * Request builder class for operations supported on the {@link InboundShipmentOrderDocumentAttachmentMessages} entity.
 */
export class InboundShipmentOrderDocumentAttachmentMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundShipmentOrderDocumentAttachmentMessages<T>, T> {
  /**
   * Returns a request builder for querying all `InboundShipmentOrderDocumentAttachmentMessages` entities.
   * @returns A request builder for creating requests to retrieve all `InboundShipmentOrderDocumentAttachmentMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    InboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InboundShipmentOrderDocumentAttachmentMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   */
  create(
    entity: InboundShipmentOrderDocumentAttachmentMessages<T>
  ): CreateRequestBuilder<
    InboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new CreateRequestBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InboundShipmentOrderDocumentAttachmentMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderDocumentAttachmentMessages.dataAreaId}.
   * @param documentId Key property. See {@link InboundShipmentOrderDocumentAttachmentMessages.documentId}.
   * @returns A request builder for creating requests to retrieve one `InboundShipmentOrderDocumentAttachmentMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<
    InboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   */
  update(
    entity: InboundShipmentOrderDocumentAttachmentMessages<T>
  ): UpdateRequestBuilder<
    InboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new UpdateRequestBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   * @param dataAreaId Key property. See {@link InboundShipmentOrderDocumentAttachmentMessages.dataAreaId}.
   * @param documentId Key property. See {@link InboundShipmentOrderDocumentAttachmentMessages.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<InboundShipmentOrderDocumentAttachmentMessages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundShipmentOrderDocumentAttachmentMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundShipmentOrderDocumentAttachmentMessages` by taking the entity as a parameter.
   */
  delete(
    entity: InboundShipmentOrderDocumentAttachmentMessages<T>
  ): DeleteRequestBuilder<InboundShipmentOrderDocumentAttachmentMessages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<
    InboundShipmentOrderDocumentAttachmentMessages<T>,
    T
  > {
    return new DeleteRequestBuilder<
      InboundShipmentOrderDocumentAttachmentMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      InboundShipmentOrderDocumentAttachmentMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
