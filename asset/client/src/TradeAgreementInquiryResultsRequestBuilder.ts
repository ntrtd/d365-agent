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
import { TradeAgreementInquiryResults } from './TradeAgreementInquiryResults';

/**
 * Request builder class for operations supported on the {@link TradeAgreementInquiryResults} entity.
 */
export class TradeAgreementInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAgreementInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAgreementInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAgreementInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAgreementInquiryResults<T>, T> {
    return new GetAllRequestBuilder<TradeAgreementInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAgreementInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAgreementInquiryResults`.
   */
  create(
    entity: TradeAgreementInquiryResults<T>
  ): CreateRequestBuilder<TradeAgreementInquiryResults<T>, T> {
    return new CreateRequestBuilder<TradeAgreementInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAgreementInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAgreementInquiryResults.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link TradeAgreementInquiryResults.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link TradeAgreementInquiryResults.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `TradeAgreementInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAgreementJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TradeAgreementInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<TradeAgreementInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TradeAgreementJournalNumber: tradeAgreementJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAgreementInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAgreementInquiryResults`.
   */
  update(
    entity: TradeAgreementInquiryResults<T>
  ): UpdateRequestBuilder<TradeAgreementInquiryResults<T>, T> {
    return new UpdateRequestBuilder<TradeAgreementInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementInquiryResults`.
   * @param dataAreaId Key property. See {@link TradeAgreementInquiryResults.dataAreaId}.
   * @param tradeAgreementJournalNumber Key property. See {@link TradeAgreementInquiryResults.tradeAgreementJournalNumber}.
   * @param lineNumber Key property. See {@link TradeAgreementInquiryResults.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementInquiryResults`.
   */
  delete(
    dataAreaId: string,
    tradeAgreementJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<TradeAgreementInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAgreementInquiryResults<T>
  ): DeleteRequestBuilder<TradeAgreementInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAgreementJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<TradeAgreementInquiryResults<T>, T> {
    return new DeleteRequestBuilder<TradeAgreementInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAgreementInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAgreementJournalNumber: tradeAgreementJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
