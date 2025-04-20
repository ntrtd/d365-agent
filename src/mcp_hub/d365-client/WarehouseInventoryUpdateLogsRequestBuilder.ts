/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { WarehouseInventoryUpdateLogs } from './WarehouseInventoryUpdateLogs';

/**
 * Request builder class for operations supported on the {@link WarehouseInventoryUpdateLogs} entity.
 */
export class WarehouseInventoryUpdateLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseInventoryUpdateLogs` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseInventoryUpdateLogs` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
    return new GetAllRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseInventoryUpdateLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseInventoryUpdateLogs`.
   */
  create(
    entity: WarehouseInventoryUpdateLogs<T>
  ): CreateRequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
    return new CreateRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseInventoryUpdateLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseInventoryUpdateLogs.dataAreaId}.
   * @param transactionValidationTime Key property. See {@link WarehouseInventoryUpdateLogs.transactionValidationTime}.
   * @param lineNumber Key property. See {@link WarehouseInventoryUpdateLogs.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseInventoryUpdateLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionValidationTime: transactionValidationTime,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseInventoryUpdateLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseInventoryUpdateLogs`.
   */
  update(
    entity: WarehouseInventoryUpdateLogs<T>
  ): UpdateRequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
    return new UpdateRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryUpdateLogs`.
   * @param dataAreaId Key property. See {@link WarehouseInventoryUpdateLogs.dataAreaId}.
   * @param transactionValidationTime Key property. See {@link WarehouseInventoryUpdateLogs.transactionValidationTime}.
   * @param lineNumber Key property. See {@link WarehouseInventoryUpdateLogs.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryUpdateLogs`.
   */
  delete(
    dataAreaId: string,
    transactionValidationTime: Moment,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseInventoryUpdateLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseInventoryUpdateLogs` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseInventoryUpdateLogs<T>
  ): DeleteRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionValidationTime?: Moment,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<WarehouseInventoryUpdateLogs<T>, T> {
    return new DeleteRequestBuilder<WarehouseInventoryUpdateLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseInventoryUpdateLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionValidationTime: transactionValidationTime!,
            LineNumber: lineNumber!
          }
    );
  }
}
