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
import { OpenSalesMultiLineDiscountJournalLines } from './OpenSalesMultiLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenSalesMultiLineDiscountJournalLines} entity.
 */
export class OpenSalesMultiLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesMultiLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesMultiLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<
      OpenSalesMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OpenSalesMultiLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   */
  create(
    entity: OpenSalesMultiLineDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<
      OpenSalesMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesMultiLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesMultiLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesMultiLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesMultiLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesMultiLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      OpenSalesMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   */
  update(
    entity: OpenSalesMultiLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      OpenSalesMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenSalesMultiLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesMultiLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesMultiLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesMultiLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesMultiLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesMultiLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesMultiLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      OpenSalesMultiLineDiscountJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesMultiLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
