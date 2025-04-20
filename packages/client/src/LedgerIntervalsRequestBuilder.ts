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
import { LedgerIntervals } from './LedgerIntervals';

/**
 * Request builder class for operations supported on the {@link LedgerIntervals} entity.
 */
export class LedgerIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerIntervals<T>, T> {
    return new GetAllRequestBuilder<LedgerIntervals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerIntervals`.
   */
  create(
    entity: LedgerIntervals<T>
  ): CreateRequestBuilder<LedgerIntervals<T>, T> {
    return new CreateRequestBuilder<LedgerIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerIntervals` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerIntervals.dataAreaId}.
   * @param intervalGroup Key property. See {@link LedgerIntervals.intervalGroup}.
   * @param fromAccount Key property. See {@link LedgerIntervals.fromAccount}.
   * @param toAccount Key property. See {@link LedgerIntervals.toAccount}.
   * @param fromLedgerChartOfAccounts Key property. See {@link LedgerIntervals.fromLedgerChartOfAccounts}.
   * @param toLedgerChartOfAccounts Key property. See {@link LedgerIntervals.toLedgerChartOfAccounts}.
   * @returns A request builder for creating requests to retrieve one `LedgerIntervals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    intervalGroup: DeserializedType<T, 'Edm.String'>,
    fromAccount: DeserializedType<T, 'Edm.String'>,
    toAccount: DeserializedType<T, 'Edm.String'>,
    fromLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>,
    toLedgerChartOfAccounts: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerIntervals<T>, T> {
    return new GetByKeyRequestBuilder<LedgerIntervals<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      IntervalGroup: intervalGroup,
      FromAccount: fromAccount,
      ToAccount: toAccount,
      FromLedgerChartOfAccounts: fromLedgerChartOfAccounts,
      ToLedgerChartOfAccounts: toLedgerChartOfAccounts
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerIntervals`.
   */
  update(
    entity: LedgerIntervals<T>
  ): UpdateRequestBuilder<LedgerIntervals<T>, T> {
    return new UpdateRequestBuilder<LedgerIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerIntervals`.
   * @param dataAreaId Key property. See {@link LedgerIntervals.dataAreaId}.
   * @param intervalGroup Key property. See {@link LedgerIntervals.intervalGroup}.
   * @param fromAccount Key property. See {@link LedgerIntervals.fromAccount}.
   * @param toAccount Key property. See {@link LedgerIntervals.toAccount}.
   * @param fromLedgerChartOfAccounts Key property. See {@link LedgerIntervals.fromLedgerChartOfAccounts}.
   * @param toLedgerChartOfAccounts Key property. See {@link LedgerIntervals.toLedgerChartOfAccounts}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerIntervals`.
   */
  delete(
    dataAreaId: string,
    intervalGroup: string,
    fromAccount: string,
    toAccount: string,
    fromLedgerChartOfAccounts: string,
    toLedgerChartOfAccounts: string
  ): DeleteRequestBuilder<LedgerIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerIntervals` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerIntervals<T>
  ): DeleteRequestBuilder<LedgerIntervals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    intervalGroup?: string,
    fromAccount?: string,
    toAccount?: string,
    fromLedgerChartOfAccounts?: string,
    toLedgerChartOfAccounts?: string
  ): DeleteRequestBuilder<LedgerIntervals<T>, T> {
    return new DeleteRequestBuilder<LedgerIntervals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerIntervals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntervalGroup: intervalGroup!,
            FromAccount: fromAccount!,
            ToAccount: toAccount!,
            FromLedgerChartOfAccounts: fromLedgerChartOfAccounts!,
            ToLedgerChartOfAccounts: toLedgerChartOfAccounts!
          }
    );
  }
}
