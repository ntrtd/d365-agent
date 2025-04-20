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
import { OpenSalesPostageDiscountJournalLines } from './OpenSalesPostageDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenSalesPostageDiscountJournalLines} entity.
 */
export class OpenSalesPostageDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesPostageDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesPostageDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenSalesPostageDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesPostageDiscountJournalLines`.
   */
  create(
    entity: OpenSalesPostageDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesPostageDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesPostageDiscountJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenSalesPostageDiscountJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPostageDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesPostageDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      OpenSalesPostageDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNumber: journalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesPostageDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesPostageDiscountJournalLines`.
   */
  update(
    entity: OpenSalesPostageDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPostageDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenSalesPostageDiscountJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenSalesPostageDiscountJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPostageDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPostageDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPostageDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPostageDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesPostageDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<OpenSalesPostageDiscountJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesPostageDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
