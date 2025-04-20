/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { StateHolidays } from './StateHolidays';

/**
 * Request builder class for operations supported on the {@link StateHolidays} entity.
 */
export class StateHolidaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StateHolidays<T>, T> {
  /**
   * Returns a request builder for querying all `StateHolidays` entities.
   * @returns A request builder for creating requests to retrieve all `StateHolidays` entities.
   */
  getAll(): GetAllRequestBuilder<StateHolidays<T>, T> {
    return new GetAllRequestBuilder<StateHolidays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StateHolidays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StateHolidays`.
   */
  create(entity: StateHolidays<T>): CreateRequestBuilder<StateHolidays<T>, T> {
    return new CreateRequestBuilder<StateHolidays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StateHolidays` entity based on its keys.
   * @param holidayDate Key property. See {@link StateHolidays.holidayDate}.
   * @param countryRegionId Key property. See {@link StateHolidays.countryRegionId}.
   * @param stateId Key property. See {@link StateHolidays.stateId}.
   * @returns A request builder for creating requests to retrieve one `StateHolidays` entity based on its keys.
   */
  getByKey(
    holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StateHolidays<T>, T> {
    return new GetByKeyRequestBuilder<StateHolidays<T>, T>(this.entityApi, {
      HolidayDate: holidayDate,
      CountryRegionId: countryRegionId,
      StateId: stateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StateHolidays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StateHolidays`.
   */
  update(entity: StateHolidays<T>): UpdateRequestBuilder<StateHolidays<T>, T> {
    return new UpdateRequestBuilder<StateHolidays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StateHolidays`.
   * @param holidayDate Key property. See {@link StateHolidays.holidayDate}.
   * @param countryRegionId Key property. See {@link StateHolidays.countryRegionId}.
   * @param stateId Key property. See {@link StateHolidays.stateId}.
   * @returns A request builder for creating requests that delete an entity of type `StateHolidays`.
   */
  delete(
    holidayDate: Moment,
    countryRegionId: string,
    stateId: string
  ): DeleteRequestBuilder<StateHolidays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StateHolidays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StateHolidays` by taking the entity as a parameter.
   */
  delete(entity: StateHolidays<T>): DeleteRequestBuilder<StateHolidays<T>, T>;
  delete(
    holidayDateOrEntity: any,
    countryRegionId?: string,
    stateId?: string
  ): DeleteRequestBuilder<StateHolidays<T>, T> {
    return new DeleteRequestBuilder<StateHolidays<T>, T>(
      this.entityApi,
      holidayDateOrEntity instanceof StateHolidays
        ? holidayDateOrEntity
        : {
            HolidayDate: holidayDateOrEntity!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!
          }
    );
  }
}
