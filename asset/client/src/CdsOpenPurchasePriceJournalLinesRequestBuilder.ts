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
import { CdsOpenPurchasePriceJournalLines } from './CdsOpenPurchasePriceJournalLines';

/**
 * Request builder class for operations supported on the {@link CdsOpenPurchasePriceJournalLines} entity.
 */
export class CdsOpenPurchasePriceJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenPurchasePriceJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenPurchasePriceJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
    return new GetAllRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsOpenPurchasePriceJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenPurchasePriceJournalLines`.
   */
  create(
    entity: CdsOpenPurchasePriceJournalLines<T>
  ): CreateRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
    return new CreateRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenPurchasePriceJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenPurchasePriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchasePriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchasePriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenPurchasePriceJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenPurchasePriceJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenPurchasePriceJournalLines`.
   */
  update(
    entity: CdsOpenPurchasePriceJournalLines<T>
  ): UpdateRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
    return new UpdateRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchasePriceJournalLines`.
   * @param dataAreaId Key property. See {@link CdsOpenPurchasePriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchasePriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchasePriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchasePriceJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchasePriceJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchasePriceJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenPurchasePriceJournalLines<T>
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T> {
    return new DeleteRequestBuilder<CdsOpenPurchasePriceJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenPurchasePriceJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
