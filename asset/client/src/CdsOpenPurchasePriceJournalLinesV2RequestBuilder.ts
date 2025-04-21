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
import { CdsOpenPurchasePriceJournalLinesV2 } from './CdsOpenPurchasePriceJournalLinesV2';

/**
 * Request builder class for operations supported on the {@link CdsOpenPurchasePriceJournalLinesV2} entity.
 */
export class CdsOpenPurchasePriceJournalLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenPurchasePriceJournalLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenPurchasePriceJournalLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
    return new GetAllRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsOpenPurchasePriceJournalLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   */
  create(
    entity: CdsOpenPurchasePriceJournalLinesV2<T>
  ): CreateRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
    return new CreateRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenPurchasePriceJournalLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenPurchasePriceJournalLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   */
  update(
    entity: CdsOpenPurchasePriceJournalLinesV2<T>
  ): UpdateRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
    return new UpdateRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   * @param dataAreaId Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenPurchasePriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenPurchasePriceJournalLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenPurchasePriceJournalLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenPurchasePriceJournalLinesV2<T>
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T> {
    return new DeleteRequestBuilder<CdsOpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenPurchasePriceJournalLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
