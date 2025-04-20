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
import { VendorInvoiceDeclarations } from './VendorInvoiceDeclarations';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceDeclarations} entity.
 */
export class VendorInvoiceDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceDeclarations<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceDeclarations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceDeclarations`.
   */
  create(
    entity: VendorInvoiceDeclarations<T>
  ): CreateRequestBuilder<VendorInvoiceDeclarations<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceDeclarations.dataAreaId}.
   * @param invoiceDeclarationId Key property. See {@link VendorInvoiceDeclarations.invoiceDeclarationId}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceDeclarationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInvoiceDeclarations<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceDeclarations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceDeclarationId: invoiceDeclarationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceDeclarations`.
   */
  update(
    entity: VendorInvoiceDeclarations<T>
  ): UpdateRequestBuilder<VendorInvoiceDeclarations<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceDeclarations`.
   * @param dataAreaId Key property. See {@link VendorInvoiceDeclarations.dataAreaId}.
   * @param invoiceDeclarationId Key property. See {@link VendorInvoiceDeclarations.invoiceDeclarationId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceDeclarations`.
   */
  delete(
    dataAreaId: string,
    invoiceDeclarationId: string
  ): DeleteRequestBuilder<VendorInvoiceDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceDeclarations<T>
  ): DeleteRequestBuilder<VendorInvoiceDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceDeclarationId?: string
  ): DeleteRequestBuilder<VendorInvoiceDeclarations<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceDeclarations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceDeclarations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceDeclarationId: invoiceDeclarationId!
          }
    );
  }
}
