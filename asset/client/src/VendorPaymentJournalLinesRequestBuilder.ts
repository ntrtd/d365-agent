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
import { VendorPaymentJournalLines } from './VendorPaymentJournalLines';

/**
 * Request builder class for operations supported on the {@link VendorPaymentJournalLines} entity.
 */
export class VendorPaymentJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentJournalLines<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentJournalLines`.
   */
  create(
    entity: VendorPaymentJournalLines<T>
  ): CreateRequestBuilder<VendorPaymentJournalLines<T>, T> {
    return new CreateRequestBuilder<VendorPaymentJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendorPaymentJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendorPaymentJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalBatchNumber: journalBatchNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentJournalLines`.
   */
  update(
    entity: VendorPaymentJournalLines<T>
  ): UpdateRequestBuilder<VendorPaymentJournalLines<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalLines`.
   * @param dataAreaId Key property. See {@link VendorPaymentJournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link VendorPaymentJournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link VendorPaymentJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<VendorPaymentJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentJournalLines<T>
  ): DeleteRequestBuilder<VendorPaymentJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<VendorPaymentJournalLines<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
