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
import { DemandForecastEntries } from './DemandForecastEntries';

/**
 * Request builder class for operations supported on the {@link DemandForecastEntries} entity.
 */
export class DemandForecastEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandForecastEntries<T>, T> {
  /**
   * Returns a request builder for querying all `DemandForecastEntries` entities.
   * @returns A request builder for creating requests to retrieve all `DemandForecastEntries` entities.
   */
  getAll(): GetAllRequestBuilder<DemandForecastEntries<T>, T> {
    return new GetAllRequestBuilder<DemandForecastEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DemandForecastEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandForecastEntries`.
   */
  create(
    entity: DemandForecastEntries<T>
  ): CreateRequestBuilder<DemandForecastEntries<T>, T> {
    return new CreateRequestBuilder<DemandForecastEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandForecastEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link DemandForecastEntries.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link DemandForecastEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `DemandForecastEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    forecastEntryNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandForecastEntries<T>, T> {
    return new GetByKeyRequestBuilder<DemandForecastEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ForecastEntryNumber: forecastEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DemandForecastEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandForecastEntries`.
   */
  update(
    entity: DemandForecastEntries<T>
  ): UpdateRequestBuilder<DemandForecastEntries<T>, T> {
    return new UpdateRequestBuilder<DemandForecastEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandForecastEntries`.
   * @param dataAreaId Key property. See {@link DemandForecastEntries.dataAreaId}.
   * @param forecastEntryNumber Key property. See {@link DemandForecastEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecastEntries`.
   */
  delete(
    dataAreaId: string,
    forecastEntryNumber: string
  ): DeleteRequestBuilder<DemandForecastEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandForecastEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecastEntries` by taking the entity as a parameter.
   */
  delete(
    entity: DemandForecastEntries<T>
  ): DeleteRequestBuilder<DemandForecastEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    forecastEntryNumber?: string
  ): DeleteRequestBuilder<DemandForecastEntries<T>, T> {
    return new DeleteRequestBuilder<DemandForecastEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DemandForecastEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ForecastEntryNumber: forecastEntryNumber!
          }
    );
  }
}
