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
import { CdsOpenSalesPriceJournalLines } from './CdsOpenSalesPriceJournalLines';

/**
 * Request builder class for operations supported on the {@link CdsOpenSalesPriceJournalLines} entity.
 */
export class CdsOpenSalesPriceJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenSalesPriceJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenSalesPriceJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
    return new GetAllRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsOpenSalesPriceJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenSalesPriceJournalLines`.
   */
  create(
    entity: CdsOpenSalesPriceJournalLines<T>
  ): CreateRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
    return new CreateRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenSalesPriceJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesPriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenSalesPriceJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenSalesPriceJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenSalesPriceJournalLines`.
   */
  update(
    entity: CdsOpenSalesPriceJournalLines<T>
  ): UpdateRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
    return new UpdateRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPriceJournalLines`.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPriceJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesPriceJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPriceJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPriceJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPriceJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPriceJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenSalesPriceJournalLines<T>
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T> {
    return new DeleteRequestBuilder<CdsOpenSalesPriceJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenSalesPriceJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
