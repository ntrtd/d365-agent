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
import { DualWriteAsyncLogs } from './DualWriteAsyncLogs';

/**
 * Request builder class for operations supported on the {@link DualWriteAsyncLogs} entity.
 */
export class DualWriteAsyncLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteAsyncLogs<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteAsyncLogs` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteAsyncLogs` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteAsyncLogs<T>, T> {
    return new GetAllRequestBuilder<DualWriteAsyncLogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DualWriteAsyncLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteAsyncLogs`.
   */
  create(
    entity: DualWriteAsyncLogs<T>
  ): CreateRequestBuilder<DualWriteAsyncLogs<T>, T> {
    return new CreateRequestBuilder<DualWriteAsyncLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteAsyncLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteAsyncLogs.dataAreaId}.
   * @param rowId Key property. See {@link DualWriteAsyncLogs.rowId}.
   * @returns A request builder for creating requests to retrieve one `DualWriteAsyncLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rowId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DualWriteAsyncLogs<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteAsyncLogs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RowId: rowId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteAsyncLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteAsyncLogs`.
   */
  update(
    entity: DualWriteAsyncLogs<T>
  ): UpdateRequestBuilder<DualWriteAsyncLogs<T>, T> {
    return new UpdateRequestBuilder<DualWriteAsyncLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteAsyncLogs`.
   * @param dataAreaId Key property. See {@link DualWriteAsyncLogs.dataAreaId}.
   * @param rowId Key property. See {@link DualWriteAsyncLogs.rowId}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteAsyncLogs`.
   */
  delete(
    dataAreaId: string,
    rowId: BigNumber
  ): DeleteRequestBuilder<DualWriteAsyncLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteAsyncLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteAsyncLogs` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteAsyncLogs<T>
  ): DeleteRequestBuilder<DualWriteAsyncLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rowId?: BigNumber
  ): DeleteRequestBuilder<DualWriteAsyncLogs<T>, T> {
    return new DeleteRequestBuilder<DualWriteAsyncLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteAsyncLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RowId: rowId!
          }
    );
  }
}
