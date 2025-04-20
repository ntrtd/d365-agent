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
import { PerDiems } from './PerDiems';

/**
 * Request builder class for operations supported on the {@link PerDiems} entity.
 */
export class PerDiemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerDiems<T>, T> {
  /**
   * Returns a request builder for querying all `PerDiems` entities.
   * @returns A request builder for creating requests to retrieve all `PerDiems` entities.
   */
  getAll(): GetAllRequestBuilder<PerDiems<T>, T> {
    return new GetAllRequestBuilder<PerDiems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PerDiems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerDiems`.
   */
  create(entity: PerDiems<T>): CreateRequestBuilder<PerDiems<T>, T> {
    return new CreateRequestBuilder<PerDiems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PerDiems` entity based on its keys.
   * @param dataAreaId Key property. See {@link PerDiems.dataAreaId}.
   * @param location Key property. See {@link PerDiems.location}.
   * @param stateId Key property. See {@link PerDiems.stateId}.
   * @param countryRegionId Key property. See {@link PerDiems.countryRegionId}.
   * @param dateFrom Key property. See {@link PerDiems.dateFrom}.
   * @param dateTo Key property. See {@link PerDiems.dateTo}.
   * @returns A request builder for creating requests to retrieve one `PerDiems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    location: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    dateFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    dateTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PerDiems<T>, T> {
    return new GetByKeyRequestBuilder<PerDiems<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Location: location,
      StateId: stateId,
      CountryRegionId: countryRegionId,
      DateFrom: dateFrom,
      DateTo: dateTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PerDiems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerDiems`.
   */
  update(entity: PerDiems<T>): UpdateRequestBuilder<PerDiems<T>, T> {
    return new UpdateRequestBuilder<PerDiems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PerDiems`.
   * @param dataAreaId Key property. See {@link PerDiems.dataAreaId}.
   * @param location Key property. See {@link PerDiems.location}.
   * @param stateId Key property. See {@link PerDiems.stateId}.
   * @param countryRegionId Key property. See {@link PerDiems.countryRegionId}.
   * @param dateFrom Key property. See {@link PerDiems.dateFrom}.
   * @param dateTo Key property. See {@link PerDiems.dateTo}.
   * @returns A request builder for creating requests that delete an entity of type `PerDiems`.
   */
  delete(
    dataAreaId: string,
    location: string,
    stateId: string,
    countryRegionId: string,
    dateFrom: Moment,
    dateTo: Moment
  ): DeleteRequestBuilder<PerDiems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerDiems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerDiems` by taking the entity as a parameter.
   */
  delete(entity: PerDiems<T>): DeleteRequestBuilder<PerDiems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    location?: string,
    stateId?: string,
    countryRegionId?: string,
    dateFrom?: Moment,
    dateTo?: Moment
  ): DeleteRequestBuilder<PerDiems<T>, T> {
    return new DeleteRequestBuilder<PerDiems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PerDiems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Location: location!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!,
            DateFrom: dateFrom!,
            DateTo: dateTo!
          }
    );
  }
}
