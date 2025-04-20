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
import { GupOpenTradeAgreementJournalLines } from './GupOpenTradeAgreementJournalLines';

/**
 * Request builder class for operations supported on the {@link GupOpenTradeAgreementJournalLines} entity.
 */
export class GupOpenTradeAgreementJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `GupOpenTradeAgreementJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `GupOpenTradeAgreementJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
    return new GetAllRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GupOpenTradeAgreementJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupOpenTradeAgreementJournalLines`.
   */
  create(
    entity: GupOpenTradeAgreementJournalLines<T>
  ): CreateRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
    return new CreateRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GupOpenTradeAgreementJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupOpenTradeAgreementJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link GupOpenTradeAgreementJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link GupOpenTradeAgreementJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `GupOpenTradeAgreementJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GupOpenTradeAgreementJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupOpenTradeAgreementJournalLines`.
   */
  update(
    entity: GupOpenTradeAgreementJournalLines<T>
  ): UpdateRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
    return new UpdateRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GupOpenTradeAgreementJournalLines`.
   * @param dataAreaId Key property. See {@link GupOpenTradeAgreementJournalLines.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link GupOpenTradeAgreementJournalLines.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link GupOpenTradeAgreementJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GupOpenTradeAgreementJournalLines`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupOpenTradeAgreementJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupOpenTradeAgreementJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: GupOpenTradeAgreementJournalLines<T>
  ): DeleteRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T> {
    return new DeleteRequestBuilder<GupOpenTradeAgreementJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupOpenTradeAgreementJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
