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
import { VendorInvoiceDocumentAttachments } from './VendorInvoiceDocumentAttachments';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceDocumentAttachments} entity.
 */
export class VendorInvoiceDocumentAttachmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceDocumentAttachments` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceDocumentAttachments` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceDocumentAttachments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceDocumentAttachments`.
   */
  create(
    entity: VendorInvoiceDocumentAttachments<T>
  ): CreateRequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceDocumentAttachments` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceDocumentAttachments.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceDocumentAttachments.headerReference}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceDocumentAttachments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderReference: headerReference
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceDocumentAttachments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceDocumentAttachments`.
   */
  update(
    entity: VendorInvoiceDocumentAttachments<T>
  ): UpdateRequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceDocumentAttachments`.
   * @param dataAreaId Key property. See {@link VendorInvoiceDocumentAttachments.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceDocumentAttachments.headerReference}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceDocumentAttachments`.
   */
  delete(
    dataAreaId: string,
    headerReference: string
  ): DeleteRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceDocumentAttachments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceDocumentAttachments` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceDocumentAttachments<T>
  ): DeleteRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerReference?: string
  ): DeleteRequestBuilder<VendorInvoiceDocumentAttachments<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceDocumentAttachments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceDocumentAttachments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderReference: headerReference!
          }
    );
  }
}
