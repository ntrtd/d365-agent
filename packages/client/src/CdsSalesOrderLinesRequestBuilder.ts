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
import { CdsSalesOrderLines } from './CdsSalesOrderLines';

/**
 * Request builder class for operations supported on the {@link CdsSalesOrderLines} entity.
 */
export class CdsSalesOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesOrderLines<T>, T> {
    return new GetAllRequestBuilder<CdsSalesOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsSalesOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesOrderLines`.
   */
  create(
    entity: CdsSalesOrderLines<T>
  ): CreateRequestBuilder<CdsSalesOrderLines<T>, T> {
    return new CreateRequestBuilder<CdsSalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesOrderLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderLines.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsSalesOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesOrderLines`.
   */
  update(
    entity: CdsSalesOrderLines<T>
  ): UpdateRequestBuilder<CdsSalesOrderLines<T>, T> {
    return new UpdateRequestBuilder<CdsSalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderLines`.
   * @param dataAreaId Key property. See {@link CdsSalesOrderLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderLines.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<CdsSalesOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesOrderLines<T>
  ): DeleteRequestBuilder<CdsSalesOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<CdsSalesOrderLines<T>, T> {
    return new DeleteRequestBuilder<CdsSalesOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
