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
import { OpenSalesPriceJournalLinesV2 } from './OpenSalesPriceJournalLinesV2';

/**
 * Request builder class for operations supported on the {@link OpenSalesPriceJournalLinesV2} entity.
 */
export class OpenSalesPriceJournalLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesPriceJournalLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesPriceJournalLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
    return new GetAllRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenSalesPriceJournalLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesPriceJournalLinesV2`.
   */
  create(
    entity: OpenSalesPriceJournalLinesV2<T>
  ): CreateRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
    return new CreateRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesPriceJournalLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesPriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesPriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesPriceJournalLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesPriceJournalLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesPriceJournalLinesV2`.
   */
  update(
    entity: OpenSalesPriceJournalLinesV2<T>
  ): UpdateRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
    return new UpdateRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPriceJournalLinesV2`.
   * @param dataAreaId Key property. See {@link OpenSalesPriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesPriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPriceJournalLinesV2`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPriceJournalLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPriceJournalLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesPriceJournalLinesV2<T>
  ): DeleteRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T> {
    return new DeleteRequestBuilder<OpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesPriceJournalLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
