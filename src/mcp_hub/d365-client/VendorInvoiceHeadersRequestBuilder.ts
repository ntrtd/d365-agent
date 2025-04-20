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
import { VendorInvoiceHeaders } from './VendorInvoiceHeaders';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceHeaders} entity.
 */
export class VendorInvoiceHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceHeaders<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceHeaders`.
   */
  create(
    entity: VendorInvoiceHeaders<T>
  ): CreateRequestBuilder<VendorInvoiceHeaders<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceHeaders.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceHeaders.headerReference}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInvoiceHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderReference: headerReference
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceHeaders`.
   */
  update(
    entity: VendorInvoiceHeaders<T>
  ): UpdateRequestBuilder<VendorInvoiceHeaders<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceHeaders`.
   * @param dataAreaId Key property. See {@link VendorInvoiceHeaders.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceHeaders.headerReference}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceHeaders`.
   */
  delete(
    dataAreaId: string,
    headerReference: string
  ): DeleteRequestBuilder<VendorInvoiceHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceHeaders<T>
  ): DeleteRequestBuilder<VendorInvoiceHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerReference?: string
  ): DeleteRequestBuilder<VendorInvoiceHeaders<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderReference: headerReference!
          }
    );
  }
}
