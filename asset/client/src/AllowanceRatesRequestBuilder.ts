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
import { AllowanceRates } from './AllowanceRates';
import { TrvFirstLastBoth } from './TrvFirstLastBoth';

/**
 * Request builder class for operations supported on the {@link AllowanceRates} entity.
 */
export class AllowanceRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllowanceRates<T>, T> {
  /**
   * Returns a request builder for querying all `AllowanceRates` entities.
   * @returns A request builder for creating requests to retrieve all `AllowanceRates` entities.
   */
  getAll(): GetAllRequestBuilder<AllowanceRates<T>, T> {
    return new GetAllRequestBuilder<AllowanceRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AllowanceRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllowanceRates`.
   */
  create(
    entity: AllowanceRates<T>
  ): CreateRequestBuilder<AllowanceRates<T>, T> {
    return new CreateRequestBuilder<AllowanceRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllowanceRates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllowanceRates.dataAreaId}.
   * @param location Key property. See {@link AllowanceRates.location}.
   * @param stateId Key property. See {@link AllowanceRates.stateId}.
   * @param countryRegionId Key property. See {@link AllowanceRates.countryRegionId}.
   * @param dateFrom Key property. See {@link AllowanceRates.dateFrom}.
   * @param dateTo Key property. See {@link AllowanceRates.dateTo}.
   * @param minimumHours Key property. See {@link AllowanceRates.minimumHours}.
   * @param applyTo Key property. See {@link AllowanceRates.applyTo}.
   * @returns A request builder for creating requests to retrieve one `AllowanceRates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    location: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    minimumHours: DeserializedType<T, 'Edm.Decimal'>,
    applyTo: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TrvFirstLastBoth'
    >
  ): GetByKeyRequestBuilder<AllowanceRates<T>, T> {
    return new GetByKeyRequestBuilder<AllowanceRates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Location: location,
      StateId: stateId,
      CountryRegionId: countryRegionId,
      DateFrom: dateFrom,
      DateTo: dateTo,
      MinimumHours: minimumHours,
      ApplyTo: applyTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AllowanceRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllowanceRates`.
   */
  update(
    entity: AllowanceRates<T>
  ): UpdateRequestBuilder<AllowanceRates<T>, T> {
    return new UpdateRequestBuilder<AllowanceRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllowanceRates`.
   * @param dataAreaId Key property. See {@link AllowanceRates.dataAreaId}.
   * @param location Key property. See {@link AllowanceRates.location}.
   * @param stateId Key property. See {@link AllowanceRates.stateId}.
   * @param countryRegionId Key property. See {@link AllowanceRates.countryRegionId}.
   * @param dateFrom Key property. See {@link AllowanceRates.dateFrom}.
   * @param dateTo Key property. See {@link AllowanceRates.dateTo}.
   * @param minimumHours Key property. See {@link AllowanceRates.minimumHours}.
   * @param applyTo Key property. See {@link AllowanceRates.applyTo}.
   * @returns A request builder for creating requests that delete an entity of type `AllowanceRates`.
   */
  delete(
    dataAreaId: string,
    location: string,
    stateId: string,
    countryRegionId: string,
    dateFrom: Moment,
    dateTo: Moment,
    minimumHours: BigNumber,
    applyTo: TrvFirstLastBoth
  ): DeleteRequestBuilder<AllowanceRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllowanceRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllowanceRates` by taking the entity as a parameter.
   */
  delete(entity: AllowanceRates<T>): DeleteRequestBuilder<AllowanceRates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    location?: string,
    stateId?: string,
    countryRegionId?: string,
    dateFrom?: Moment,
    dateTo?: Moment,
    minimumHours?: BigNumber,
    applyTo?: TrvFirstLastBoth
  ): DeleteRequestBuilder<AllowanceRates<T>, T> {
    return new DeleteRequestBuilder<AllowanceRates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllowanceRates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Location: location!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!,
            DateFrom: dateFrom!,
            DateTo: dateTo!,
            MinimumHours: minimumHours!,
            ApplyTo: applyTo!
          }
    );
  }
}
