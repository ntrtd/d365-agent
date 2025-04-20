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
import { RequestForQuotationReplyLines } from './RequestForQuotationReplyLines';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationReplyLines} entity.
 */
export class RequestForQuotationReplyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationReplyLines<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationReplyLines` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationReplyLines` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationReplyLines<T>, T> {
    return new GetAllRequestBuilder<RequestForQuotationReplyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationReplyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationReplyLines`.
   */
  create(
    entity: RequestForQuotationReplyLines<T>
  ): CreateRequestBuilder<RequestForQuotationReplyLines<T>, T> {
    return new CreateRequestBuilder<RequestForQuotationReplyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationReplyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyLines.rfqNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationReplyLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationReplyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RequestForQuotationReplyLines<T>, T> {
    return new GetByKeyRequestBuilder<RequestForQuotationReplyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationReplyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationReplyLines`.
   */
  update(
    entity: RequestForQuotationReplyLines<T>
  ): UpdateRequestBuilder<RequestForQuotationReplyLines<T>, T> {
    return new UpdateRequestBuilder<RequestForQuotationReplyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyLines`.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyLines.rfqNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationReplyLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyLines`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationReplyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyLines` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationReplyLines<T>
  ): DeleteRequestBuilder<RequestForQuotationReplyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationReplyLines<T>, T> {
    return new DeleteRequestBuilder<RequestForQuotationReplyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationReplyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
