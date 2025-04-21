/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RequestForQuotationJournalHeaders } from './RequestForQuotationJournalHeaders';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationJournalHeaders} entity.
 */
export class RequestForQuotationJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<RequestForQuotationJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationJournalHeaders`.
   */
  create(
    entity: RequestForQuotationJournalHeaders<T>
  ): CreateRequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
    return new CreateRequestBuilder<RequestForQuotationJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationJournalHeaders.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationJournalHeaders.rfqNumber}.
   * @param rfqJournalDate Key property. See {@link RequestForQuotationJournalHeaders.rfqJournalDate}.
   * @param internalRfqJournalNumber Key property. See {@link RequestForQuotationJournalHeaders.internalRfqJournalNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    rfqJournalDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    internalRfqJournalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RequestForQuotationJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber,
        RFQJournalDate: rfqJournalDate,
        InternalRFQJournalNumber: internalRfqJournalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationJournalHeaders`.
   */
  update(
    entity: RequestForQuotationJournalHeaders<T>
  ): UpdateRequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<RequestForQuotationJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationJournalHeaders`.
   * @param dataAreaId Key property. See {@link RequestForQuotationJournalHeaders.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationJournalHeaders.rfqNumber}.
   * @param rfqJournalDate Key property. See {@link RequestForQuotationJournalHeaders.rfqJournalDate}.
   * @param internalRfqJournalNumber Key property. See {@link RequestForQuotationJournalHeaders.internalRfqJournalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    rfqJournalDate: Moment,
    internalRfqJournalNumber: string
  ): DeleteRequestBuilder<RequestForQuotationJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationJournalHeaders<T>
  ): DeleteRequestBuilder<RequestForQuotationJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    rfqJournalDate?: Moment,
    internalRfqJournalNumber?: string
  ): DeleteRequestBuilder<RequestForQuotationJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<RequestForQuotationJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            RFQJournalDate: rfqJournalDate!,
            InternalRFQJournalNumber: internalRfqJournalNumber!
          }
    );
  }
}
