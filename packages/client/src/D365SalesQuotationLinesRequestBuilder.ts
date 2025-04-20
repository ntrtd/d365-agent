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
import { D365SalesQuotationLines } from './D365SalesQuotationLines';

/**
 * Request builder class for operations supported on the {@link D365SalesQuotationLines} entity.
 */
export class D365SalesQuotationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<D365SalesQuotationLines<T>, T> {
  /**
   * Returns a request builder for querying all `D365SalesQuotationLines` entities.
   * @returns A request builder for creating requests to retrieve all `D365SalesQuotationLines` entities.
   */
  getAll(): GetAllRequestBuilder<D365SalesQuotationLines<T>, T> {
    return new GetAllRequestBuilder<D365SalesQuotationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `D365SalesQuotationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `D365SalesQuotationLines`.
   */
  create(
    entity: D365SalesQuotationLines<T>
  ): CreateRequestBuilder<D365SalesQuotationLines<T>, T> {
    return new CreateRequestBuilder<D365SalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `D365SalesQuotationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link D365SalesQuotationLines.dataAreaId}.
   * @param lineCreationSequenceNumber Key property. See {@link D365SalesQuotationLines.lineCreationSequenceNumber}.
   * @param salesQuotationNumber Key property. See {@link D365SalesQuotationLines.salesQuotationNumber}.
   * @returns A request builder for creating requests to retrieve one `D365SalesQuotationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    salesQuotationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<D365SalesQuotationLines<T>, T> {
    return new GetByKeyRequestBuilder<D365SalesQuotationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineCreationSequenceNumber: lineCreationSequenceNumber,
        SalesQuotationNumber: salesQuotationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `D365SalesQuotationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `D365SalesQuotationLines`.
   */
  update(
    entity: D365SalesQuotationLines<T>
  ): UpdateRequestBuilder<D365SalesQuotationLines<T>, T> {
    return new UpdateRequestBuilder<D365SalesQuotationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `D365SalesQuotationLines`.
   * @param dataAreaId Key property. See {@link D365SalesQuotationLines.dataAreaId}.
   * @param lineCreationSequenceNumber Key property. See {@link D365SalesQuotationLines.lineCreationSequenceNumber}.
   * @param salesQuotationNumber Key property. See {@link D365SalesQuotationLines.salesQuotationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesQuotationLines`.
   */
  delete(
    dataAreaId: string,
    lineCreationSequenceNumber: number,
    salesQuotationNumber: string
  ): DeleteRequestBuilder<D365SalesQuotationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `D365SalesQuotationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesQuotationLines` by taking the entity as a parameter.
   */
  delete(
    entity: D365SalesQuotationLines<T>
  ): DeleteRequestBuilder<D365SalesQuotationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineCreationSequenceNumber?: number,
    salesQuotationNumber?: string
  ): DeleteRequestBuilder<D365SalesQuotationLines<T>, T> {
    return new DeleteRequestBuilder<D365SalesQuotationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof D365SalesQuotationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!,
            SalesQuotationNumber: salesQuotationNumber!
          }
    );
  }
}
