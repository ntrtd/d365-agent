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
import { SupplyForecastEntries } from './SupplyForecastEntries';

/**
 * Request builder class for operations supported on the {@link SupplyForecastEntries} entity.
 */
export class SupplyForecastEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplyForecastEntries<T>, T> {
  /**
   * Returns a request builder for querying all `SupplyForecastEntries` entities.
   * @returns A request builder for creating requests to retrieve all `SupplyForecastEntries` entities.
   */
  getAll(): GetAllRequestBuilder<SupplyForecastEntries<T>, T> {
    return new GetAllRequestBuilder<SupplyForecastEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SupplyForecastEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplyForecastEntries`.
   */
  create(
    entity: SupplyForecastEntries<T>
  ): CreateRequestBuilder<SupplyForecastEntries<T>, T> {
    return new CreateRequestBuilder<SupplyForecastEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SupplyForecastEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link SupplyForecastEntries.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link SupplyForecastEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `SupplyForecastEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    forecastEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SupplyForecastEntries<T>, T> {
    return new GetByKeyRequestBuilder<SupplyForecastEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ForecastEntryNumber: forecastEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SupplyForecastEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplyForecastEntries`.
   */
  update(
    entity: SupplyForecastEntries<T>
  ): UpdateRequestBuilder<SupplyForecastEntries<T>, T> {
    return new UpdateRequestBuilder<SupplyForecastEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplyForecastEntries`.
   * @param dataAreaId Key property. See {@link SupplyForecastEntries.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link SupplyForecastEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SupplyForecastEntries`.
   */
  delete(
    dataAreaId: string,
    forecastEntryNumber: BigNumber
  ): DeleteRequestBuilder<SupplyForecastEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplyForecastEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplyForecastEntries` by taking the entity as a parameter.
   */
  delete(
    entity: SupplyForecastEntries<T>
  ): DeleteRequestBuilder<SupplyForecastEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    forecastEntryNumber?: BigNumber
  ): DeleteRequestBuilder<SupplyForecastEntries<T>, T> {
    return new DeleteRequestBuilder<SupplyForecastEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SupplyForecastEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ForecastEntryNumber: forecastEntryNumber!
          }
    );
  }
}
