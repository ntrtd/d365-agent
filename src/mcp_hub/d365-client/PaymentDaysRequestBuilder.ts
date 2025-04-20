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
import { PaymentDays } from './PaymentDays';
import { WeekMonth } from './WeekMonth';
import { WeekDays } from './WeekDays';

/**
 * Request builder class for operations supported on the {@link PaymentDays} entity.
 */
export class PaymentDaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentDays<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentDays` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentDays` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentDays<T>, T> {
    return new GetAllRequestBuilder<PaymentDays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentDays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentDays`.
   */
  create(entity: PaymentDays<T>): CreateRequestBuilder<PaymentDays<T>, T> {
    return new CreateRequestBuilder<PaymentDays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PaymentDays` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentDays.dataAreaId}.
   * @param name Key property. See {@link PaymentDays.name}.
   * @param frequency Key property. See {@link PaymentDays.frequency}.
   * @param dayOfWeek Key property. See {@link PaymentDays.dayOfWeek}.
   * @param dayOfMonth Key property. See {@link PaymentDays.dayOfMonth}.
   * @returns A request builder for creating requests to retrieve one `PaymentDays` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    frequency: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.WeekMonth'>,
    dayOfWeek: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.WeekDays'>,
    dayOfMonth: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentDays<T>, T> {
    return new GetByKeyRequestBuilder<PaymentDays<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name,
      Frequency: frequency,
      DayOfWeek: dayOfWeek,
      DayOfMonth: dayOfMonth
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentDays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentDays`.
   */
  update(entity: PaymentDays<T>): UpdateRequestBuilder<PaymentDays<T>, T> {
    return new UpdateRequestBuilder<PaymentDays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentDays`.
   * @param dataAreaId Key property. See {@link PaymentDays.dataAreaId}.
   * @param name Key property. See {@link PaymentDays.name}.
   * @param frequency Key property. See {@link PaymentDays.frequency}.
   * @param dayOfWeek Key property. See {@link PaymentDays.dayOfWeek}.
   * @param dayOfMonth Key property. See {@link PaymentDays.dayOfMonth}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDays`.
   */
  delete(
    dataAreaId: string,
    name: string,
    frequency: WeekMonth,
    dayOfWeek: WeekDays,
    dayOfMonth: number
  ): DeleteRequestBuilder<PaymentDays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentDays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDays` by taking the entity as a parameter.
   */
  delete(entity: PaymentDays<T>): DeleteRequestBuilder<PaymentDays<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    frequency?: WeekMonth,
    dayOfWeek?: WeekDays,
    dayOfMonth?: number
  ): DeleteRequestBuilder<PaymentDays<T>, T> {
    return new DeleteRequestBuilder<PaymentDays<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentDays
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            Frequency: frequency!,
            DayOfWeek: dayOfWeek!,
            DayOfMonth: dayOfMonth!
          }
    );
  }
}
