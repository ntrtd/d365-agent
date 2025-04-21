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
import { MileageRates } from './MileageRates';
import { TrvMileageRateType } from './TrvMileageRateType';

/**
 * Request builder class for operations supported on the {@link MileageRates} entity.
 */
export class MileageRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MileageRates<T>, T> {
  /**
   * Returns a request builder for querying all `MileageRates` entities.
   * @returns A request builder for creating requests to retrieve all `MileageRates` entities.
   */
  getAll(): GetAllRequestBuilder<MileageRates<T>, T> {
    return new GetAllRequestBuilder<MileageRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MileageRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MileageRates`.
   */
  create(entity: MileageRates<T>): CreateRequestBuilder<MileageRates<T>, T> {
    return new CreateRequestBuilder<MileageRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MileageRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link MileageRates.dataAreaId}.
   * @param expenseCategory Key property. See {@link MileageRates.expenseCategory}.
   * @param fromDate Key property. See {@link MileageRates.fromDate}.
   * @param quantity Key property. See {@link MileageRates.quantity}.
   * @param rateType Key property. See {@link MileageRates.rateType}.
   * @param vehicleType Key property. See {@link MileageRates.vehicleType}.
   * @returns A request builder for creating requests to retrieve one `MileageRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expenseCategory: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    quantity: DeserializedType<T, 'Edm.Decimal'>,
    rateType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TrvMileageRateType'
    >,
    vehicleType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MileageRates<T>, T> {
    return new GetByKeyRequestBuilder<MileageRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExpenseCategory: expenseCategory,
      FromDate: fromDate,
      Quantity: quantity,
      RateType: rateType,
      VehicleType: vehicleType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MileageRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MileageRates`.
   */
  update(entity: MileageRates<T>): UpdateRequestBuilder<MileageRates<T>, T> {
    return new UpdateRequestBuilder<MileageRates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MileageRates`.
   * @param dataAreaId Key property. See {@link MileageRates.dataAreaId}.
   * @param expenseCategory Key property. See {@link MileageRates.expenseCategory}.
   * @param fromDate Key property. See {@link MileageRates.fromDate}.
   * @param quantity Key property. See {@link MileageRates.quantity}.
   * @param rateType Key property. See {@link MileageRates.rateType}.
   * @param vehicleType Key property. See {@link MileageRates.vehicleType}.
   * @returns A request builder for creating requests that delete an entity of type `MileageRates`.
   */
  delete(
    dataAreaId: string,
    expenseCategory: string,
    fromDate: Moment,
    quantity: BigNumber,
    rateType: TrvMileageRateType,
    vehicleType: string
  ): DeleteRequestBuilder<MileageRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MileageRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MileageRates` by taking the entity as a parameter.
   */
  delete(entity: MileageRates<T>): DeleteRequestBuilder<MileageRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expenseCategory?: string,
    fromDate?: Moment,
    quantity?: BigNumber,
    rateType?: TrvMileageRateType,
    vehicleType?: string
  ): DeleteRequestBuilder<MileageRates<T>, T> {
    return new DeleteRequestBuilder<MileageRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MileageRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpenseCategory: expenseCategory!,
            FromDate: fromDate!,
            Quantity: quantity!,
            RateType: rateType!,
            VehicleType: vehicleType!
          }
    );
  }
}
