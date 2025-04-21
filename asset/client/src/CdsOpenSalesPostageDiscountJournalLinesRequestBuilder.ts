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
import { CdsOpenSalesPostageDiscountJournalLines } from './CdsOpenSalesPostageDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link CdsOpenSalesPostageDiscountJournalLines} entity.
 */
export class CdsOpenSalesPostageDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenSalesPostageDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenSalesPostageDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    CdsOpenSalesPostageDiscountJournalLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CdsOpenSalesPostageDiscountJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsOpenSalesPostageDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   */
  create(
    entity: CdsOpenSalesPostageDiscountJournalLines<T>
  ): CreateRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<
      CdsOpenSalesPostageDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenSalesPostageDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenSalesPostageDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      CdsOpenSalesPostageDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNumber: journalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   */
  update(
    entity: CdsOpenSalesPostageDiscountJournalLines<T>
  ): UpdateRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      CdsOpenSalesPostageDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.dataAreaId}.
   * @param journalNumber Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.journalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPostageDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPostageDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPostageDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenSalesPostageDiscountJournalLines<T>
  ): DeleteRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPostageDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      CdsOpenSalesPostageDiscountJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenSalesPostageDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
