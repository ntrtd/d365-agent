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
import { CdsSalesOrderLinesV2 } from './CdsSalesOrderLinesV2';

/**
 * Request builder class for operations supported on the {@link CdsSalesOrderLinesV2} entity.
 */
export class CdsSalesOrderLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesOrderLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesOrderLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesOrderLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesOrderLinesV2<T>, T> {
    return new GetAllRequestBuilder<CdsSalesOrderLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsSalesOrderLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesOrderLinesV2`.
   */
  create(
    entity: CdsSalesOrderLinesV2<T>
  ): CreateRequestBuilder<CdsSalesOrderLinesV2<T>, T> {
    return new CreateRequestBuilder<CdsSalesOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesOrderLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesOrderLinesV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderLinesV2.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesOrderLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesOrderLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsSalesOrderLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesOrderLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesOrderLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesOrderLinesV2`.
   */
  update(
    entity: CdsSalesOrderLinesV2<T>
  ): UpdateRequestBuilder<CdsSalesOrderLinesV2<T>, T> {
    return new UpdateRequestBuilder<CdsSalesOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderLinesV2`.
   * @param dataAreaId Key property. See {@link CdsSalesOrderLinesV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link CdsSalesOrderLinesV2.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsSalesOrderLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderLinesV2`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<CdsSalesOrderLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesOrderLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesOrderLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesOrderLinesV2<T>
  ): DeleteRequestBuilder<CdsSalesOrderLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<CdsSalesOrderLinesV2<T>, T> {
    return new DeleteRequestBuilder<CdsSalesOrderLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesOrderLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
