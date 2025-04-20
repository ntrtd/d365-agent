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
import { VendorPaymentJournalHeaders } from './VendorPaymentJournalHeaders';

/**
 * Request builder class for operations supported on the {@link VendorPaymentJournalHeaders} entity.
 */
export class VendorPaymentJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentJournalHeaders`.
   */
  create(
    entity: VendorPaymentJournalHeaders<T>
  ): CreateRequestBuilder<VendorPaymentJournalHeaders<T>, T> {
    return new CreateRequestBuilder<VendorPaymentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentJournalHeaders`.
   */
  update(
    entity: VendorPaymentJournalHeaders<T>
  ): UpdateRequestBuilder<VendorPaymentJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalHeaders`.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<VendorPaymentJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentJournalHeaders<T>
  ): DeleteRequestBuilder<VendorPaymentJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<VendorPaymentJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
