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
import { InflationAdjustmentInpcRates } from './InflationAdjustmentInpcRates';
import { MonthsOfYear } from './MonthsOfYear';

/**
 * Request builder class for operations supported on the {@link InflationAdjustmentInpcRates} entity.
 */
export class InflationAdjustmentInpcRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InflationAdjustmentInpcRates<T>, T> {
  /**
   * Returns a request builder for querying all `InflationAdjustmentInpcRates` entities.
   * @returns A request builder for creating requests to retrieve all `InflationAdjustmentInpcRates` entities.
   */
  getAll(): GetAllRequestBuilder<InflationAdjustmentInpcRates<T>, T> {
    return new GetAllRequestBuilder<InflationAdjustmentInpcRates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InflationAdjustmentInpcRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InflationAdjustmentInpcRates`.
   */
  create(
    entity: InflationAdjustmentInpcRates<T>
  ): CreateRequestBuilder<InflationAdjustmentInpcRates<T>, T> {
    return new CreateRequestBuilder<InflationAdjustmentInpcRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InflationAdjustmentInpcRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link InflationAdjustmentInpcRates.dataAreaId}.
   * @param year Key property. See {@link InflationAdjustmentInpcRates.year}.
   * @param month Key property. See {@link InflationAdjustmentInpcRates.month}.
   * @returns A request builder for creating requests to retrieve one `InflationAdjustmentInpcRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    year: DeserializedType<T, 'Edm.Int32'>,
    month: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.MonthsOfYear'>
  ): GetByKeyRequestBuilder<InflationAdjustmentInpcRates<T>, T> {
    return new GetByKeyRequestBuilder<InflationAdjustmentInpcRates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Year: year,
        Month: month
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InflationAdjustmentInpcRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InflationAdjustmentInpcRates`.
   */
  update(
    entity: InflationAdjustmentInpcRates<T>
  ): UpdateRequestBuilder<InflationAdjustmentInpcRates<T>, T> {
    return new UpdateRequestBuilder<InflationAdjustmentInpcRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InflationAdjustmentInpcRates`.
   * @param dataAreaId Key property. See {@link InflationAdjustmentInpcRates.dataAreaId}.
   * @param year Key property. See {@link InflationAdjustmentInpcRates.year}.
   * @param month Key property. See {@link InflationAdjustmentInpcRates.month}.
   * @returns A request builder for creating requests that delete an entity of type `InflationAdjustmentInpcRates`.
   */
  delete(
    dataAreaId: string,
    year: number,
    month: MonthsOfYear
  ): DeleteRequestBuilder<InflationAdjustmentInpcRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InflationAdjustmentInpcRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InflationAdjustmentInpcRates` by taking the entity as a parameter.
   */
  delete(
    entity: InflationAdjustmentInpcRates<T>
  ): DeleteRequestBuilder<InflationAdjustmentInpcRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    year?: number,
    month?: MonthsOfYear
  ): DeleteRequestBuilder<InflationAdjustmentInpcRates<T>, T> {
    return new DeleteRequestBuilder<InflationAdjustmentInpcRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InflationAdjustmentInpcRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Year: year!,
            Month: month!
          }
    );
  }
}
