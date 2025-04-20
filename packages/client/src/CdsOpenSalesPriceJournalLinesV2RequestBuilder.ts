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
import { CdsOpenSalesPriceJournalLinesV2 } from './CdsOpenSalesPriceJournalLinesV2';

/**
 * Request builder class for operations supported on the {@link CdsOpenSalesPriceJournalLinesV2} entity.
 */
export class CdsOpenSalesPriceJournalLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenSalesPriceJournalLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenSalesPriceJournalLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
    return new GetAllRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsOpenSalesPriceJournalLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   */
  create(
    entity: CdsOpenSalesPriceJournalLinesV2<T>
  ): CreateRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
    return new CreateRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenSalesPriceJournalLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesPriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenSalesPriceJournalLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   */
  update(
    entity: CdsOpenSalesPriceJournalLinesV2<T>
  ): UpdateRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
    return new UpdateRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   * @param dataAreaId Key property. See {@link CdsOpenSalesPriceJournalLinesV2.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesPriceJournalLinesV2.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesPriceJournalLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesPriceJournalLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesPriceJournalLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenSalesPriceJournalLinesV2<T>
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T> {
    return new DeleteRequestBuilder<CdsOpenSalesPriceJournalLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenSalesPriceJournalLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
