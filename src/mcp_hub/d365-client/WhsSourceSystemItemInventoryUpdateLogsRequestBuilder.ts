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
import { WhsSourceSystemItemInventoryUpdateLogs } from './WhsSourceSystemItemInventoryUpdateLogs';

/**
 * Request builder class for operations supported on the {@link WhsSourceSystemItemInventoryUpdateLogs} entity.
 */
export class WhsSourceSystemItemInventoryUpdateLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
  /**
   * Returns a request builder for querying all `WhsSourceSystemItemInventoryUpdateLogs` entities.
   * @returns A request builder for creating requests to retrieve all `WhsSourceSystemItemInventoryUpdateLogs` entities.
   */
  getAll(): GetAllRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
    return new GetAllRequestBuilder<
      WhsSourceSystemItemInventoryUpdateLogs<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WhsSourceSystemItemInventoryUpdateLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   */
  create(
    entity: WhsSourceSystemItemInventoryUpdateLogs<T>
  ): CreateRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
    return new CreateRequestBuilder<
      WhsSourceSystemItemInventoryUpdateLogs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WhsSourceSystemItemInventoryUpdateLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.dataAreaId}.
   * @param transactionValidationTime Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.transactionValidationTime}.
   * @param lineNumber Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `WhsSourceSystemItemInventoryUpdateLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionValidationTime: DeserializedType<T, 'Edm.DateTimeOffset'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
    return new GetByKeyRequestBuilder<
      WhsSourceSystemItemInventoryUpdateLogs<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TransactionValidationTime: transactionValidationTime,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   */
  update(
    entity: WhsSourceSystemItemInventoryUpdateLogs<T>
  ): UpdateRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
    return new UpdateRequestBuilder<
      WhsSourceSystemItemInventoryUpdateLogs<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   * @param dataAreaId Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.dataAreaId}.
   * @param transactionValidationTime Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.transactionValidationTime}.
   * @param lineNumber Key property. See {@link WhsSourceSystemItemInventoryUpdateLogs.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   */
  delete(
    dataAreaId: string,
    transactionValidationTime: Moment,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsSourceSystemItemInventoryUpdateLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsSourceSystemItemInventoryUpdateLogs` by taking the entity as a parameter.
   */
  delete(
    entity: WhsSourceSystemItemInventoryUpdateLogs<T>
  ): DeleteRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionValidationTime?: Moment,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<WhsSourceSystemItemInventoryUpdateLogs<T>, T> {
    return new DeleteRequestBuilder<
      WhsSourceSystemItemInventoryUpdateLogs<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof WhsSourceSystemItemInventoryUpdateLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionValidationTime: transactionValidationTime!,
            LineNumber: lineNumber!
          }
    );
  }
}
