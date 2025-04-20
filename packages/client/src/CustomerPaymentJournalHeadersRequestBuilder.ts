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
import { CustomerPaymentJournalHeaders } from './CustomerPaymentJournalHeaders';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentJournalHeaders} entity.
 */
export class CustomerPaymentJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentJournalHeaders`.
   */
  create(
    entity: CustomerPaymentJournalHeaders<T>
  ): CreateRequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link CustomerPaymentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentJournalHeaders`.
   */
  update(
    entity: CustomerPaymentJournalHeaders<T>
  ): UpdateRequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalHeaders`.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalHeaders.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link CustomerPaymentJournalHeaders.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<CustomerPaymentJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentJournalHeaders<T>
  ): DeleteRequestBuilder<CustomerPaymentJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<CustomerPaymentJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
