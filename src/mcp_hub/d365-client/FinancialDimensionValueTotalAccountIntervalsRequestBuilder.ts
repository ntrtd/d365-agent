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
import { FinancialDimensionValueTotalAccountIntervals } from './FinancialDimensionValueTotalAccountIntervals';

/**
 * Request builder class for operations supported on the {@link FinancialDimensionValueTotalAccountIntervals} entity.
 */
export class FinancialDimensionValueTotalAccountIntervalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T> {
  /**
   * Returns a request builder for querying all `FinancialDimensionValueTotalAccountIntervals` entities.
   * @returns A request builder for creating requests to retrieve all `FinancialDimensionValueTotalAccountIntervals` entities.
   */
  getAll(): GetAllRequestBuilder<
    FinancialDimensionValueTotalAccountIntervals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FinancialDimensionValueTotalAccountIntervals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FinancialDimensionValueTotalAccountIntervals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   */
  create(
    entity: FinancialDimensionValueTotalAccountIntervals<T>
  ): CreateRequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T> {
    return new CreateRequestBuilder<
      FinancialDimensionValueTotalAccountIntervals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FinancialDimensionValueTotalAccountIntervals` entity based on its keys.
   * @param financialDimension Key property. See {@link FinancialDimensionValueTotalAccountIntervals.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.dimensionValue}.
   * @param fromValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.fromValue}.
   * @param toValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.toValue}.
   * @returns A request builder for creating requests to retrieve one `FinancialDimensionValueTotalAccountIntervals` entity based on its keys.
   */
  getByKey(
    financialDimension: DeserializedType<T, 'Edm.String'>,
    dimensionValue: DeserializedType<T, 'Edm.String'>,
    fromValue: DeserializedType<T, 'Edm.String'>,
    toValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FinancialDimensionValueTotalAccountIntervals<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FinancialDimensionValueTotalAccountIntervals<T>,
      T
    >(this.entityApi, {
      FinancialDimension: financialDimension,
      DimensionValue: dimensionValue,
      FromValue: fromValue,
      ToValue: toValue
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   */
  update(
    entity: FinancialDimensionValueTotalAccountIntervals<T>
  ): UpdateRequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T> {
    return new UpdateRequestBuilder<
      FinancialDimensionValueTotalAccountIntervals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   * @param financialDimension Key property. See {@link FinancialDimensionValueTotalAccountIntervals.financialDimension}.
   * @param dimensionValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.dimensionValue}.
   * @param fromValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.fromValue}.
   * @param toValue Key property. See {@link FinancialDimensionValueTotalAccountIntervals.toValue}.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   */
  delete(
    financialDimension: string,
    dimensionValue: string,
    fromValue: string,
    toValue: string
  ): DeleteRequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FinancialDimensionValueTotalAccountIntervals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FinancialDimensionValueTotalAccountIntervals` by taking the entity as a parameter.
   */
  delete(
    entity: FinancialDimensionValueTotalAccountIntervals<T>
  ): DeleteRequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T>;
  delete(
    financialDimensionOrEntity: any,
    dimensionValue?: string,
    fromValue?: string,
    toValue?: string
  ): DeleteRequestBuilder<FinancialDimensionValueTotalAccountIntervals<T>, T> {
    return new DeleteRequestBuilder<
      FinancialDimensionValueTotalAccountIntervals<T>,
      T
    >(
      this.entityApi,
      financialDimensionOrEntity instanceof
      FinancialDimensionValueTotalAccountIntervals
        ? financialDimensionOrEntity
        : {
            FinancialDimension: financialDimensionOrEntity!,
            DimensionValue: dimensionValue!,
            FromValue: fromValue!,
            ToValue: toValue!
          }
    );
  }
}
