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
import { D365SalesOrderLines } from './D365SalesOrderLines';

/**
 * Request builder class for operations supported on the {@link D365SalesOrderLines} entity.
 */
export class D365SalesOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<D365SalesOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `D365SalesOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `D365SalesOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<D365SalesOrderLines<T>, T> {
    return new GetAllRequestBuilder<D365SalesOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `D365SalesOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `D365SalesOrderLines`.
   */
  create(
    entity: D365SalesOrderLines<T>
  ): CreateRequestBuilder<D365SalesOrderLines<T>, T> {
    return new CreateRequestBuilder<D365SalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `D365SalesOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link D365SalesOrderLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link D365SalesOrderLines.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link D365SalesOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `D365SalesOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<D365SalesOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<D365SalesOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `D365SalesOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `D365SalesOrderLines`.
   */
  update(
    entity: D365SalesOrderLines<T>
  ): UpdateRequestBuilder<D365SalesOrderLines<T>, T> {
    return new UpdateRequestBuilder<D365SalesOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `D365SalesOrderLines`.
   * @param dataAreaId Key property. See {@link D365SalesOrderLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link D365SalesOrderLines.salesOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link D365SalesOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesOrderLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<D365SalesOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `D365SalesOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: D365SalesOrderLines<T>
  ): DeleteRequestBuilder<D365SalesOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<D365SalesOrderLines<T>, T> {
    return new DeleteRequestBuilder<D365SalesOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof D365SalesOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
