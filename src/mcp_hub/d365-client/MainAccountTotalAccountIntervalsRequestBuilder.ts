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
import { MainAccountTotalAccountIntervals } from './MainAccountTotalAccountIntervals';

/**
 * Request builder class for operations supported on the {@link MainAccountTotalAccountIntervals} entity.
 */
export class MainAccountTotalAccountIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `MainAccountTotalAccountIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `MainAccountTotalAccountIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
    return new GetAllRequestBuilder<MainAccountTotalAccountIntervals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MainAccountTotalAccountIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MainAccountTotalAccountIntervals`.
   */
  create(
    entity: MainAccountTotalAccountIntervals<T>
  ): CreateRequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
    return new CreateRequestBuilder<MainAccountTotalAccountIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MainAccountTotalAccountIntervals` entity based on its keys.
   * @param mainAccountId Key property. See {@link MainAccountTotalAccountIntervals.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link MainAccountTotalAccountIntervals.chartOfAccounts}.
   * @param fromValue Key property. See {@link MainAccountTotalAccountIntervals.fromValue}.
   * @param toValue Key property. See {@link MainAccountTotalAccountIntervals.toValue}.
   * @returns A request builder for creating requests to retrieve one `MainAccountTotalAccountIntervals` entity based on its keys.
   */
  getByKey(
    mainAccountId: DeserializedType<T, 'Edm.String'>,
    chartOfAccounts: DeserializedType<T, 'Edm.String'>,
    fromValue: DeserializedType<T, 'Edm.String'>,
    toValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
    return new GetByKeyRequestBuilder<MainAccountTotalAccountIntervals<T>, T>(
      this.entityApi,
      {
        MainAccountId: mainAccountId,
        ChartOfAccounts: chartOfAccounts,
        FromValue: fromValue,
        ToValue: toValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MainAccountTotalAccountIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MainAccountTotalAccountIntervals`.
   */
  update(
    entity: MainAccountTotalAccountIntervals<T>
  ): UpdateRequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
    return new UpdateRequestBuilder<MainAccountTotalAccountIntervals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MainAccountTotalAccountIntervals`.
   * @param mainAccountId Key property. See {@link MainAccountTotalAccountIntervals.mainAccountId}.
   * @param chartOfAccounts Key property. See {@link MainAccountTotalAccountIntervals.chartOfAccounts}.
   * @param fromValue Key property. See {@link MainAccountTotalAccountIntervals.fromValue}.
   * @param toValue Key property. See {@link MainAccountTotalAccountIntervals.toValue}.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountTotalAccountIntervals`.
   */
  delete(
    mainAccountId: string,
    chartOfAccounts: string,
    fromValue: string,
    toValue: string
  ): DeleteRequestBuilder<MainAccountTotalAccountIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MainAccountTotalAccountIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MainAccountTotalAccountIntervals` by taking the entity as a parameter.
   */
  delete(
    entity: MainAccountTotalAccountIntervals<T>
  ): DeleteRequestBuilder<MainAccountTotalAccountIntervals<T>, T>;
  delete(
    mainAccountIdOrEntity: any,
    chartOfAccounts?: string,
    fromValue?: string,
    toValue?: string
  ): DeleteRequestBuilder<MainAccountTotalAccountIntervals<T>, T> {
    return new DeleteRequestBuilder<MainAccountTotalAccountIntervals<T>, T>(
      this.entityApi,
      mainAccountIdOrEntity instanceof MainAccountTotalAccountIntervals
        ? mainAccountIdOrEntity
        : {
            MainAccountId: mainAccountIdOrEntity!,
            ChartOfAccounts: chartOfAccounts!,
            FromValue: fromValue!,
            ToValue: toValue!
          }
    );
  }
}
