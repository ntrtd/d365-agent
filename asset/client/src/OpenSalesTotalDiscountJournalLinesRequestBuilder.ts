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
import { OpenSalesTotalDiscountJournalLines } from './OpenSalesTotalDiscountJournalLines';

/**
 * Request builder class for operations supported on the {@link OpenSalesTotalDiscountJournalLines} entity.
 */
export class OpenSalesTotalDiscountJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `OpenSalesTotalDiscountJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `OpenSalesTotalDiscountJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
    return new GetAllRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenSalesTotalDiscountJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenSalesTotalDiscountJournalLines`.
   */
  create(
    entity: OpenSalesTotalDiscountJournalLines<T>
  ): CreateRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
    return new CreateRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenSalesTotalDiscountJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenSalesTotalDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesTotalDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesTotalDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenSalesTotalDiscountJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenSalesTotalDiscountJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenSalesTotalDiscountJournalLines`.
   */
  update(
    entity: OpenSalesTotalDiscountJournalLines<T>
  ): UpdateRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
    return new UpdateRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenSalesTotalDiscountJournalLines`.
   * @param dataAreaId Key property. See {@link OpenSalesTotalDiscountJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link OpenSalesTotalDiscountJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link OpenSalesTotalDiscountJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesTotalDiscountJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenSalesTotalDiscountJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenSalesTotalDiscountJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: OpenSalesTotalDiscountJournalLines<T>
  ): DeleteRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T> {
    return new DeleteRequestBuilder<OpenSalesTotalDiscountJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenSalesTotalDiscountJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
