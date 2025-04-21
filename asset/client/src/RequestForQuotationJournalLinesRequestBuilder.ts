/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RequestForQuotationJournalLines } from './RequestForQuotationJournalLines';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationJournalLines} entity.
 */
export class RequestForQuotationJournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationJournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationJournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationJournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationJournalLines<T>, T> {
    return new GetAllRequestBuilder<RequestForQuotationJournalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationJournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationJournalLines`.
   */
  create(
    entity: RequestForQuotationJournalLines<T>
  ): CreateRequestBuilder<RequestForQuotationJournalLines<T>, T> {
    return new CreateRequestBuilder<RequestForQuotationJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationJournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationJournalLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationJournalLines.rfqNumber}.
   * @param rfqJournalDate Key property. See {@link RequestForQuotationJournalLines.rfqJournalDate}.
   * @param internalRfqJournalNumber Key property. See {@link RequestForQuotationJournalLines.internalRfqJournalNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationJournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationJournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RequestForQuotationJournalLines<T>, T> {
    return new GetByKeyRequestBuilder<RequestForQuotationJournalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber,
        RFQJournalDate: rfqJournalDate,
        InternalRFQJournalNumber: internalRfqJournalNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationJournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationJournalLines`.
   */
  update(
    entity: RequestForQuotationJournalLines<T>
  ): UpdateRequestBuilder<RequestForQuotationJournalLines<T>, T> {
    return new UpdateRequestBuilder<RequestForQuotationJournalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationJournalLines`.
   * @param dataAreaId Key property. See {@link RequestForQuotationJournalLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationJournalLines.rfqNumber}.
   * @param rfqJournalDate Key property. See {@link RequestForQuotationJournalLines.rfqJournalDate}.
   * @param internalRfqJournalNumber Key property. See {@link RequestForQuotationJournalLines.internalRfqJournalNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationJournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationJournalLines`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    rfqJournalDate: Moment,
    internalRfqJournalNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationJournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationJournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationJournalLines` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationJournalLines<T>
  ): DeleteRequestBuilder<RequestForQuotationJournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    rfqJournalDate?: Moment,
    internalRfqJournalNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationJournalLines<T>, T> {
    return new DeleteRequestBuilder<RequestForQuotationJournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationJournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            RFQJournalDate: rfqJournalDate!,
            InternalRFQJournalNumber: internalRfqJournalNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
