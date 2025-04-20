/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { CdsSalesQuotationLines } from './CdsSalesQuotationLines';

/**
 * Request builder class for operations supported on the {@link CdsSalesQuotationLines} entity.
 */
export class CdsSalesQuotationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesQuotationLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesQuotationLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesQuotationLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesQuotationLines<T>, T> {
    return new GetAllRequestBuilder<CdsSalesQuotationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsSalesQuotationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesQuotationLines`.
   */
  create(
    entity: CdsSalesQuotationLines<T>
  ): CreateRequestBuilder<CdsSalesQuotationLines<T>, T> {
    return new CreateRequestBuilder<CdsSalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesQuotationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesQuotationLines.dataAreaId}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesQuotationLines.lineCreationSequenceNumber}.
   * @param salesQuotationNumber Key property. See {@link CdsSalesQuotationLines.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesQuotationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsSalesQuotationLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesQuotationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineCreationSequenceNumber: lineCreationSequenceNumber,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesQuotationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesQuotationLines`.
   */
  update(
    entity: CdsSalesQuotationLines<T>
  ): UpdateRequestBuilder<CdsSalesQuotationLines<T>, T> {
    return new UpdateRequestBuilder<CdsSalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesQuotationLines`.
   * @param dataAreaId Key property. See {@link CdsSalesQuotationLines.dataAreaId}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesQuotationLines.lineCreationSequenceNumber}.
   * @param salesQuotationNumber Key property. See {@link CdsSalesQuotationLines.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesQuotationLines`.
   */
  delete(
    dataAreaId: string,
    lineCreationSequenceNumber: number,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<CdsSalesQuotationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesQuotationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesQuotationLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesQuotationLines<T>
  ): DeleteRequestBuilder<CdsSalesQuotationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineCreationSequenceNumber?: number,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<CdsSalesQuotationLines<T>, T> {
    return new DeleteRequestBuilder<CdsSalesQuotationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesQuotationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
