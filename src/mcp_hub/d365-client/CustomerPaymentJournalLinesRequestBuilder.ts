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
import { CustomerPaymentJournalLines } from './CustomerPaymentJournalLines';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentJournalLines} entity.
 */
export class CustomerPaymentJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentJournalLines<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentJournalLines`.
   */
  create(
    entity: CustomerPaymentJournalLines<T>
  ): CreateRequestBuilder<CustomerPaymentJournalLines<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link CustomerPaymentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link CustomerPaymentJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CustomerPaymentJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentJournalLines`.
   */
  update(
    entity: CustomerPaymentJournalLines<T>
  ): UpdateRequestBuilder<CustomerPaymentJournalLines<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalLines`.
   * @param dataAreaId Key property. See {@link CustomerPaymentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link CustomerPaymentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link CustomerPaymentJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CustomerPaymentJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentJournalLines<T>
  ): DeleteRequestBuilder<CustomerPaymentJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CustomerPaymentJournalLines<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
