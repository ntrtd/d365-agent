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
import { OpenSalesLineDiscountJournalLines } from './OpenSalesLineDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenSalesLineDiscountJournalLines} entity.
 */
export class OpenSalesLineDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesLineDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesLineDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenSalesLineDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesLineDiscountJournalLines`.
   */
  create(
    entity: OpenSalesLineDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesLineDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesLineDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesLineDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesLineDiscountJournalLines`.
   */
  update(
    entity: OpenSalesLineDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesLineDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenSalesLineDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesLineDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesLineDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesLineDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesLineDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesLineDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesLineDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<OpenSalesLineDiscountJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesLineDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
