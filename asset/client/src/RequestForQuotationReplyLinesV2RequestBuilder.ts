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
import { RequestForQuotationReplyLinesV2 } from './RequestForQuotationReplyLinesV2';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationReplyLinesV2} entity.
 */
export class RequestForQuotationReplyLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationReplyLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationReplyLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
    return new GetAllRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationReplyLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationReplyLinesV2`.
   */
  create(
    entity: RequestForQuotationReplyLinesV2<T>
  ): CreateRequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
    return new CreateRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationReplyLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyLinesV2.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyLinesV2.rfqNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationReplyLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationReplyLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationReplyLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationReplyLinesV2`.
   */
  update(
    entity: RequestForQuotationReplyLinesV2<T>
  ): UpdateRequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
    return new UpdateRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyLinesV2`.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyLinesV2.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyLinesV2.rfqNumber}.
   * @param lineNumber Key property. See {@link RequestForQuotationReplyLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyLinesV2`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationReplyLinesV2<T>
  ): DeleteRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RequestForQuotationReplyLinesV2<T>, T> {
    return new DeleteRequestBuilder<RequestForQuotationReplyLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationReplyLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
