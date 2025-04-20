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
import { DatabaseLogs } from './DatabaseLogs';

/**
 * Request builder class for operations supported on the {@link DatabaseLogs} entity.
 */
export class DatabaseLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DatabaseLogs<T>, T> {
  /**
   * Returns a request builder for querying all `DatabaseLogs` entities.
   * @returns A request builder for creating requests to retrieve all `DatabaseLogs` entities.
   */
  getAll(): GetAllRequestBuilder<DatabaseLogs<T>, T> {
    return new GetAllRequestBuilder<DatabaseLogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DatabaseLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DatabaseLogs`.
   */
  create(entity: DatabaseLogs<T>): CreateRequestBuilder<DatabaseLogs<T>, T> {
    return new CreateRequestBuilder<DatabaseLogs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DatabaseLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link DatabaseLogs.dataAreaId}.
   * @param tableRecId Key property. See {@link DatabaseLogs.tableRecId}.
   * @param logRecId Key property. See {@link DatabaseLogs.logRecId}.
   * @param tableIdNumber Key property. See {@link DatabaseLogs.tableIdNumber}.
   * @returns A request builder for creating requests to retrieve one `DatabaseLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tableRecId: DeserializedType<T, 'Edm.Int64'>,
    logRecId: DeserializedType<T, 'Edm.Int64'>,
    tableIdNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DatabaseLogs<T>, T> {
    return new GetByKeyRequestBuilder<DatabaseLogs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TableRecId: tableRecId,
      LogRecId: logRecId,
      TableIdNumber: tableIdNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DatabaseLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DatabaseLogs`.
   */
  update(entity: DatabaseLogs<T>): UpdateRequestBuilder<DatabaseLogs<T>, T> {
    return new UpdateRequestBuilder<DatabaseLogs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DatabaseLogs`.
   * @param dataAreaId Key property. See {@link DatabaseLogs.dataAreaId}.
   * @param tableRecId Key property. See {@link DatabaseLogs.tableRecId}.
   * @param logRecId Key property. See {@link DatabaseLogs.logRecId}.
   * @param tableIdNumber Key property. See {@link DatabaseLogs.tableIdNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DatabaseLogs`.
   */
  delete(
    dataAreaId: string,
    tableRecId: BigNumber,
    logRecId: BigNumber,
    tableIdNumber: number
  ): DeleteRequestBuilder<DatabaseLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DatabaseLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DatabaseLogs` by taking the entity as a parameter.
   */
  delete(entity: DatabaseLogs<T>): DeleteRequestBuilder<DatabaseLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tableRecId?: BigNumber,
    logRecId?: BigNumber,
    tableIdNumber?: number
  ): DeleteRequestBuilder<DatabaseLogs<T>, T> {
    return new DeleteRequestBuilder<DatabaseLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DatabaseLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TableRecId: tableRecId!,
            LogRecId: logRecId!,
            TableIdNumber: tableIdNumber!
          }
    );
  }
}
