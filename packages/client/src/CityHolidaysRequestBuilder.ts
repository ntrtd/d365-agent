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
import { CityHolidays } from './CityHolidays';

/**
 * Request builder class for operations supported on the {@link CityHolidays} entity.
 */
export class CityHolidaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CityHolidays<T>, T> {
  /**
   * Returns a request builder for querying all `CityHolidays` entities.
   * @returns A request builder for creating requests to retrieve all `CityHolidays` entities.
   */
  getAll(): GetAllRequestBuilder<CityHolidays<T>, T> {
    return new GetAllRequestBuilder<CityHolidays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CityHolidays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CityHolidays`.
   */
  create(entity: CityHolidays<T>): CreateRequestBuilder<CityHolidays<T>, T> {
    return new CreateRequestBuilder<CityHolidays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CityHolidays` entity based on its keys.
   * @param countryRegionId Key property. See {@link CityHolidays.countryRegionId}.
   * @param stateId Key property. See {@link CityHolidays.stateId}.
   * @param cityName Key property. See {@link CityHolidays.cityName}.
   * @param holidayDate Key property. See {@link CityHolidays.holidayDate}.
   * @returns A request builder for creating requests to retrieve one `CityHolidays` entity based on its keys.
   */
  getByKey(
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    cityName: DeserializedType<T, 'Edm.String'>,
    holidayDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CityHolidays<T>, T> {
    return new GetByKeyRequestBuilder<CityHolidays<T>, T>(this.entityApi, {
      CountryRegionId: countryRegionId,
      StateId: stateId,
      CityName: cityName,
      HolidayDate: holidayDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CityHolidays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CityHolidays`.
   */
  update(entity: CityHolidays<T>): UpdateRequestBuilder<CityHolidays<T>, T> {
    return new UpdateRequestBuilder<CityHolidays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CityHolidays`.
   * @param countryRegionId Key property. See {@link CityHolidays.countryRegionId}.
   * @param stateId Key property. See {@link CityHolidays.stateId}.
   * @param cityName Key property. See {@link CityHolidays.cityName}.
   * @param holidayDate Key property. See {@link CityHolidays.holidayDate}.
   * @returns A request builder for creating requests that delete an entity of type `CityHolidays`.
   */
  delete(
    countryRegionId: string,
    stateId: string,
    cityName: string,
    holidayDate: Moment
  ): DeleteRequestBuilder<CityHolidays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CityHolidays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CityHolidays` by taking the entity as a parameter.
   */
  delete(entity: CityHolidays<T>): DeleteRequestBuilder<CityHolidays<T>, T>;
  delete(
    countryRegionIdOrEntity: any,
    stateId?: string,
    cityName?: string,
    holidayDate?: Moment
  ): DeleteRequestBuilder<CityHolidays<T>, T> {
    return new DeleteRequestBuilder<CityHolidays<T>, T>(
      this.entityApi,
      countryRegionIdOrEntity instanceof CityHolidays
        ? countryRegionIdOrEntity
        : {
            CountryRegionId: countryRegionIdOrEntity!,
            StateId: stateId!,
            CityName: cityName!,
            HolidayDate: holidayDate!
          }
    );
  }
}
