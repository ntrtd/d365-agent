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
import { OpenSalesPriceJournalLines } from './OpenSalesPriceJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenSalesPriceJournalLines} entity.
 */
export class OpenSalesPriceJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesPriceJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesPriceJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesPriceJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesPriceJournalLines<T>, T> {
    return new GetAllRequestBuilder<OpenSalesPriceJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenSalesPriceJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesPriceJournalLines`.
   */
  create(
    entity: OpenSalesPriceJournalLines<T>
  ): CreateRequestBuilder<OpenSalesPriceJournalLines<T>, T> {
    return new CreateRequestBuilder<OpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesPriceJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesPriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesPriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesPriceJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesPriceJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<OpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesPriceJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesPriceJournalLines`.
   */
  update(
    entity: OpenSalesPriceJournalLines<T>
  ): UpdateRequestBuilder<OpenSalesPriceJournalLines<T>, T> {
    return new UpdateRequestBuilder<OpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPriceJournalLines`.
   * @param dataAreaId Key property. See {@link OpenSalesPriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesPriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesPriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPriceJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesPriceJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesPriceJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesPriceJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesPriceJournalLines<T>
  ): DeleteRequestBuilder<OpenSalesPriceJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesPriceJournalLines<T>, T> {
    return new DeleteRequestBuilder<OpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesPriceJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
