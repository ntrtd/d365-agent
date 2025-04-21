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
import { AssetLeaseAmortizationScheduleLineBiEntities } from './AssetLeaseAmortizationScheduleLineBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseAmortizationScheduleLineBiEntities} entity.
 */
export class AssetLeaseAmortizationScheduleLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseAmortizationScheduleLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseAmortizationScheduleLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseAmortizationScheduleLineBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseAmortizationScheduleLineBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseAmortizationScheduleLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   */
  create(
    entity: AssetLeaseAmortizationScheduleLineBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseAmortizationScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseAmortizationScheduleLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.dataAreaId}.
   * @param amortizationSchedule Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.amortizationSchedule}.
   * @param months Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.months}.
   * @param period Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.period}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseAmortizationScheduleLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    amortizationSchedule: DeserializedType<T, 'Edm.Int64'>,
    months: DeserializedType<T, 'Edm.Int32'>,
    period: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<
    AssetLeaseAmortizationScheduleLineBiEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetLeaseAmortizationScheduleLineBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AmortizationSchedule: amortizationSchedule,
      Months: months,
      Period: period
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   */
  update(
    entity: AssetLeaseAmortizationScheduleLineBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseAmortizationScheduleLineBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.dataAreaId}.
   * @param amortizationSchedule Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.amortizationSchedule}.
   * @param months Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.months}.
   * @param period Key property. See {@link AssetLeaseAmortizationScheduleLineBiEntities.period}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    amortizationSchedule: BigNumber,
    months: number,
    period: number
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseAmortizationScheduleLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseAmortizationScheduleLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseAmortizationScheduleLineBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    amortizationSchedule?: BigNumber,
    months?: number,
    period?: number
  ): DeleteRequestBuilder<AssetLeaseAmortizationScheduleLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseAmortizationScheduleLineBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseAmortizationScheduleLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AmortizationSchedule: amortizationSchedule!,
            Months: months!,
            Period: period!
          }
    );
  }
}
