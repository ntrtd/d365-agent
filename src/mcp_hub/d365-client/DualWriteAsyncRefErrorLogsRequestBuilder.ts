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
import { DualWriteAsyncRefErrorLogs } from './DualWriteAsyncRefErrorLogs';

/**
 * Request builder class for operations supported on the {@link DualWriteAsyncRefErrorLogs} entity.
 */
export class DualWriteAsyncRefErrorLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteAsyncRefErrorLogs` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteAsyncRefErrorLogs` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
    return new GetAllRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteAsyncRefErrorLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteAsyncRefErrorLogs`.
   */
  create(
    entity: DualWriteAsyncRefErrorLogs<T>
  ): CreateRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
    return new CreateRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteAsyncRefErrorLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link DualWriteAsyncRefErrorLogs.dataAreaId}.
   * @param sourceKey Key property. See {@link DualWriteAsyncRefErrorLogs.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `DualWriteAsyncRefErrorLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteAsyncRefErrorLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteAsyncRefErrorLogs`.
   */
  update(
    entity: DualWriteAsyncRefErrorLogs<T>
  ): UpdateRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
    return new UpdateRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteAsyncRefErrorLogs`.
   * @param dataAreaId Key property. See {@link DualWriteAsyncRefErrorLogs.dataAreaId}.
   * @param sourceKey Key property. See {@link DualWriteAsyncRefErrorLogs.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteAsyncRefErrorLogs`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteAsyncRefErrorLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteAsyncRefErrorLogs` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteAsyncRefErrorLogs<T>
  ): DeleteRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T> {
    return new DeleteRequestBuilder<DualWriteAsyncRefErrorLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DualWriteAsyncRefErrorLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
