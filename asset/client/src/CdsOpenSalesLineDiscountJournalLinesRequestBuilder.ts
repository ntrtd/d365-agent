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
import { CdsOpenSalesLineDiscountJournalLines } from './CdsOpenSalesLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link CdsOpenSalesLineDiscountJournalLines} entity.
 */
export class CdsOpenSalesLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsOpenSalesLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsOpenSalesLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsOpenSalesLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   */
  create(
    entity: CdsOpenSalesLineDiscountJournalLines<T>
  ): CreateRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsOpenSalesLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsOpenSalesLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsOpenSalesLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<
      CdsOpenSalesLineDiscountJournalLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAgreementJournalNumber: tradeAgreementJournalNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   */
  update(
    entity: CdsOpenSalesLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link CdsOpenSalesLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link CdsOpenSalesLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link CdsOpenSalesLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsOpenSalesLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsOpenSalesLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsOpenSalesLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<CdsOpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsOpenSalesLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
