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
import { VendInvoiceRegisterHeaders } from './VendInvoiceRegisterHeaders';

/**
 * Request builder class for operations supported on the {@link VendInvoiceRegisterHeaders} entity.
 */
export class VendInvoiceRegisterHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceRegisterHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceRegisterHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceRegisterHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceRegisterHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceRegisterHeaders`.
   */
  create(
    entity: VendInvoiceRegisterHeaders<T>
  ): CreateRequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
    return new CreateRequestBuilder<VendInvoiceRegisterHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceRegisterHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceRegisterHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceRegisterHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceRegisterHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceRegisterHeaders`.
   */
  update(
    entity: VendInvoiceRegisterHeaders<T>
  ): UpdateRequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceRegisterHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterHeaders`.
   * @param dataAreaId Key property. See {@link VendInvoiceRegisterHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendInvoiceRegisterHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<VendInvoiceRegisterHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceRegisterHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceRegisterHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceRegisterHeaders<T>
  ): DeleteRequestBuilder<VendInvoiceRegisterHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<VendInvoiceRegisterHeaders<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceRegisterHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceRegisterHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
