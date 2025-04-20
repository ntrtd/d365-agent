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
import { OpenPurchaseTotalDiscountJournalLines } from './OpenPurchaseTotalDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenPurchaseTotalDiscountJournalLines} entity.
 */
export class OpenPurchaseTotalDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenPurchaseTotalDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenPurchaseTotalDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<
      OpenPurchaseTotalDiscountJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OpenPurchaseTotalDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   */
  create(
    entity: OpenPurchaseTotalDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<
      OpenPurchaseTotalDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OpenPurchaseTotalDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenPurchaseTotalDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseTotalDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseTotalDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenPurchaseTotalDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      OpenPurchaseTotalDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   */
  update(
    entity: OpenPurchaseTotalDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      OpenPurchaseTotalDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenPurchaseTotalDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseTotalDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseTotalDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseTotalDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseTotalDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenPurchaseTotalDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseTotalDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      OpenPurchaseTotalDiscountJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenPurchaseTotalDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
