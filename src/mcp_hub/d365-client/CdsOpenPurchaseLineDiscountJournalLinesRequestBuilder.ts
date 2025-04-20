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
import { CdsOpenPurchaseLineDiscountJournalLines } from './CdsOpenPurchaseLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link CdsOpenPurchaseLineDiscountJournalLines} entity.
 */
export class CdsOpenPurchaseLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenPurchaseLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenPurchaseLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    CdsOpenPurchaseLineDiscountJournalLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CdsOpenPurchaseLineDiscountJournalLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsOpenPurchaseLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   */
  create(
    entity: CdsOpenPurchaseLineDiscountJournalLines<T>
  ): CreateRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<
      CdsOpenPurchaseLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenPurchaseLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenPurchaseLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      CdsOpenPurchaseLineDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   */
  update(
    entity: CdsOpenPurchaseLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<
      CdsOpenPurchaseLineDiscountJournalLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchaseLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchaseLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchaseLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenPurchaseLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchaseLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<
      CdsOpenPurchaseLineDiscountJournalLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenPurchaseLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
