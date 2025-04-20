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
import { AssetUndepreciatedBalanceSchedules } from './AssetUndepreciatedBalanceSchedules';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';

/**
 * Request builder class for operations supported on the {@link AssetUndepreciatedBalanceSchedules} entity.
 */
export class AssetUndepreciatedBalanceSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `AssetUndepreciatedBalanceSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `AssetUndepreciatedBalanceSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
    return new GetAllRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetUndepreciatedBalanceSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetUndepreciatedBalanceSchedules`.
   */
  create(
    entity: AssetUndepreciatedBalanceSchedules<T>
  ): CreateRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
    return new CreateRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetUndepreciatedBalanceSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetUndepreciatedBalanceSchedules.dataAreaId}.
   * @param fromMethod Key property. See {@link AssetUndepreciatedBalanceSchedules.fromMethod}.
   * @param toMethod Key property. See {@link AssetUndepreciatedBalanceSchedules.toMethod}.
   * @param serviceLife Key property. See {@link AssetUndepreciatedBalanceSchedules.serviceLife}.
   * @param yearsPassed Key property. See {@link AssetUndepreciatedBalanceSchedules.yearsPassed}.
   * @returns A request builder for creating requests to retrieve one `AssetUndepreciatedBalanceSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetDepreciationMethod'
    >,
    toMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetDepreciationMethod'
    >,
    serviceLife: DeserializedType<T, 'Edm.Decimal'>,
    yearsPassed: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
    return new GetByKeyRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromMethod: fromMethod,
        ToMethod: toMethod,
        ServiceLife: serviceLife,
        YearsPassed: yearsPassed
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetUndepreciatedBalanceSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetUndepreciatedBalanceSchedules`.
   */
  update(
    entity: AssetUndepreciatedBalanceSchedules<T>
  ): UpdateRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
    return new UpdateRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetUndepreciatedBalanceSchedules`.
   * @param dataAreaId Key property. See {@link AssetUndepreciatedBalanceSchedules.dataAreaId}.
   * @param fromMethod Key property. See {@link AssetUndepreciatedBalanceSchedules.fromMethod}.
   * @param toMethod Key property. See {@link AssetUndepreciatedBalanceSchedules.toMethod}.
   * @param serviceLife Key property. See {@link AssetUndepreciatedBalanceSchedules.serviceLife}.
   * @param yearsPassed Key property. See {@link AssetUndepreciatedBalanceSchedules.yearsPassed}.
   * @returns A request builder for creating requests that delete an entity of type `AssetUndepreciatedBalanceSchedules`.
   */
  delete(
    dataAreaId: string,
    fromMethod: AssetDepreciationMethod,
    toMethod: AssetDepreciationMethod,
    serviceLife: BigNumber,
    yearsPassed: BigNumber
  ): DeleteRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetUndepreciatedBalanceSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetUndepreciatedBalanceSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: AssetUndepreciatedBalanceSchedules<T>
  ): DeleteRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromMethod?: AssetDepreciationMethod,
    toMethod?: AssetDepreciationMethod,
    serviceLife?: BigNumber,
    yearsPassed?: BigNumber
  ): DeleteRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T> {
    return new DeleteRequestBuilder<AssetUndepreciatedBalanceSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetUndepreciatedBalanceSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromMethod: fromMethod!,
            ToMethod: toMethod!,
            ServiceLife: serviceLife!,
            YearsPassed: yearsPassed!
          }
    );
  }
}
