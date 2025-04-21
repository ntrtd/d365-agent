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
import { OpenPurchaseMultiLineDiscountJournalLines } from './OpenPurchaseMultiLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenPurchaseMultiLineDiscountJournalLines} entity.
 */
export class OpenPurchaseMultiLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenPurchaseMultiLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenPurchaseMultiLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    OpenPurchaseMultiLineDiscountJournalLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      OpenPurchaseMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OpenPurchaseMultiLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   */
  create(
    entity: OpenPurchaseMultiLineDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<
      OpenPurchaseMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OpenPurchaseMultiLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenPurchaseMultiLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      OpenPurchaseMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   */
  update(
    entity: OpenPurchaseMultiLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      OpenPurchaseMultiLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseMultiLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseMultiLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseMultiLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenPurchaseMultiLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseMultiLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      OpenPurchaseMultiLineDiscountJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenPurchaseMultiLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
