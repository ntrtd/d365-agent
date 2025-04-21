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
import { OpenPurchaseLineDiscountJournalLines } from './OpenPurchaseLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenPurchaseLineDiscountJournalLines} entity.
 */
export class OpenPurchaseLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenPurchaseLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenPurchaseLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenPurchaseLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenPurchaseLineDiscountJournalLines`.
   */
  create(
    entity: OpenPurchaseLineDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenPurchaseLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenPurchaseLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenPurchaseLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      OpenPurchaseLineDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OpenPurchaseLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenPurchaseLineDiscountJournalLines`.
   */
  update(
    entity: OpenPurchaseLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenPurchaseLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchaseLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchaseLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenPurchaseLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchaseLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenPurchaseLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<OpenPurchaseLineDiscountJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenPurchaseLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
