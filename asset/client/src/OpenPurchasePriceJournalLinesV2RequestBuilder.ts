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
import { OpenPurchasePriceJournalLinesV2 } from './OpenPurchasePriceJournalLinesV2';

/**
 * Request builder class for operations supported on the {@link OpenPurchasePriceJournalLinesV2} entity.
 */
export class OpenPurchasePriceJournalLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `OpenPurchasePriceJournalLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `OpenPurchasePriceJournalLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
    return new GetAllRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenPurchasePriceJournalLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenPurchasePriceJournalLinesV2`.
   */
  create(
    entity: OpenPurchasePriceJournalLinesV2<T>
  ): CreateRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
    return new CreateRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenPurchasePriceJournalLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenPurchasePriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchasePriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchasePriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenPurchasePriceJournalLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenPurchasePriceJournalLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenPurchasePriceJournalLinesV2`.
   */
  update(
    entity: OpenPurchasePriceJournalLinesV2<T>
  ): UpdateRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
    return new UpdateRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenPurchasePriceJournalLinesV2`.
   * @param dataAreaId Key property. See {@link OpenPurchasePriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenPurchasePriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenPurchasePriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchasePriceJournalLinesV2`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenPurchasePriceJournalLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenPurchasePriceJournalLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: OpenPurchasePriceJournalLinesV2<T>
  ): DeleteRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T> {
    return new DeleteRequestBuilder<OpenPurchasePriceJournalLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenPurchasePriceJournalLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
