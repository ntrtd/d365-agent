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
import { VendInvoiceExportsV2 } from './VendInvoiceExportsV2';

/**
 * Request builder class for operations supported on the {@link VendInvoiceExportsV2} entity.
 */
export class VendInvoiceExportsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceExportsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceExportsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceExportsV2` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceExportsV2<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceExportsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendInvoiceExportsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceExportsV2`.
   */
  create(
    entity: VendInvoiceExportsV2<T>
  ): CreateRequestBuilder<VendInvoiceExportsV2<T>, T> {
    return new CreateRequestBuilder<VendInvoiceExportsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceExportsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceExportsV2.dataAreaId}.
   * @param invoiceAccount Key property. See {@link VendInvoiceExportsV2.invoiceAccount}.
   * @param vendorInvoiceNum Key property. See {@link VendInvoiceExportsV2.vendorInvoiceNum}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceExportsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    invoiceAccount: DeserializedType<T, 'Edm.String'>,
    vendorInvoiceNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoiceExportsV2<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceExportsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InvoiceAccount: invoiceAccount,
        VendorInvoiceNum: vendorInvoiceNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceExportsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceExportsV2`.
   */
  update(
    entity: VendInvoiceExportsV2<T>
  ): UpdateRequestBuilder<VendInvoiceExportsV2<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceExportsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceExportsV2`.
   * @param dataAreaId Key property. See {@link VendInvoiceExportsV2.dataAreaId}.
   * @param invoiceAccount Key property. See {@link VendInvoiceExportsV2.invoiceAccount}.
   * @param vendorInvoiceNum Key property. See {@link VendInvoiceExportsV2.vendorInvoiceNum}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceExportsV2`.
   */
  delete(
    dataAreaId: string,
    invoiceAccount: string,
    vendorInvoiceNum: string
  ): DeleteRequestBuilder<VendInvoiceExportsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceExportsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceExportsV2` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceExportsV2<T>
  ): DeleteRequestBuilder<VendInvoiceExportsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    invoiceAccount?: string,
    vendorInvoiceNum?: string
  ): DeleteRequestBuilder<VendInvoiceExportsV2<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceExportsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceExportsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InvoiceAccount: invoiceAccount!,
            VendorInvoiceNum: vendorInvoiceNum!
          }
    );
  }
}
