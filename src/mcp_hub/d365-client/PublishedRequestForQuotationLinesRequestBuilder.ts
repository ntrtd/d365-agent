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
import { PublishedRequestForQuotationLines } from './PublishedRequestForQuotationLines';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationLines} entity.
 */
export class PublishedRequestForQuotationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PublishedRequestForQuotationLines<T>, T> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationLines` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationLines` entities.
   */
  getAll(): GetAllRequestBuilder<PublishedRequestForQuotationLines<T>, T> {
    return new GetAllRequestBuilder<PublishedRequestForQuotationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationLines`.
   */
  create(
    entity: PublishedRequestForQuotationLines<T>
  ): CreateRequestBuilder<PublishedRequestForQuotationLines<T>, T> {
    return new CreateRequestBuilder<PublishedRequestForQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationLines.dataAreaId}.
   * @param publishedRfqCaseNumber Key property. See {@link PublishedRequestForQuotationLines.publishedRfqCaseNumber}.
   * @param lineNumber Key property. See {@link PublishedRequestForQuotationLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    publishedRfqCaseNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PublishedRequestForQuotationLines<T>, T> {
    return new GetByKeyRequestBuilder<PublishedRequestForQuotationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PublishedRFQCaseNumber: publishedRfqCaseNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationLines`.
   */
  update(
    entity: PublishedRequestForQuotationLines<T>
  ): UpdateRequestBuilder<PublishedRequestForQuotationLines<T>, T> {
    return new UpdateRequestBuilder<PublishedRequestForQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationLines`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationLines.dataAreaId}.
   * @param publishedRfqCaseNumber Key property. See {@link PublishedRequestForQuotationLines.publishedRfqCaseNumber}.
   * @param lineNumber Key property. See {@link PublishedRequestForQuotationLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationLines`.
   */
  delete(
    dataAreaId: string,
    publishedRfqCaseNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PublishedRequestForQuotationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationLines` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationLines<T>
  ): DeleteRequestBuilder<PublishedRequestForQuotationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    publishedRfqCaseNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PublishedRequestForQuotationLines<T>, T> {
    return new DeleteRequestBuilder<PublishedRequestForQuotationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PublishedRequestForQuotationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PublishedRFQCaseNumber: publishedRfqCaseNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
