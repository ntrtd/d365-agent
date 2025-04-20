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
import { StagedImportPlanningDataEntries } from './StagedImportPlanningDataEntries';

/**
 * Request builder class for operations supported on the {@link StagedImportPlanningDataEntries} entity.
 */
export class StagedImportPlanningDataEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StagedImportPlanningDataEntries<T>, T> {
  /**
   * Returns a request builder for querying all `StagedImportPlanningDataEntries` entities.
   * @returns A request builder for creating requests to retrieve all `StagedImportPlanningDataEntries` entities.
   */
  getAll(): GetAllRequestBuilder<StagedImportPlanningDataEntries<T>, T> {
    return new GetAllRequestBuilder<StagedImportPlanningDataEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `StagedImportPlanningDataEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StagedImportPlanningDataEntries`.
   */
  create(
    entity: StagedImportPlanningDataEntries<T>
  ): CreateRequestBuilder<StagedImportPlanningDataEntries<T>, T> {
    return new CreateRequestBuilder<StagedImportPlanningDataEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StagedImportPlanningDataEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link StagedImportPlanningDataEntries.dataAreaId}.
   * @param importId Key property. See {@link StagedImportPlanningDataEntries.importId}.
   * @param forecastEntryNumber Key property. See {@link StagedImportPlanningDataEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `StagedImportPlanningDataEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importId: DeserializedType<T, 'Edm.Guid'>,
    forecastEntryNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StagedImportPlanningDataEntries<T>, T> {
    return new GetByKeyRequestBuilder<StagedImportPlanningDataEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImportId: importId,
        ForecastEntryNumber: forecastEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StagedImportPlanningDataEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StagedImportPlanningDataEntries`.
   */
  update(
    entity: StagedImportPlanningDataEntries<T>
  ): UpdateRequestBuilder<StagedImportPlanningDataEntries<T>, T> {
    return new UpdateRequestBuilder<StagedImportPlanningDataEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StagedImportPlanningDataEntries`.
   * @param dataAreaId Key property. See {@link StagedImportPlanningDataEntries.dataAreaId}.
   * @param importId Key property. See {@link StagedImportPlanningDataEntries.importId}.
   * @param forecastEntryNumber Key property. See {@link StagedImportPlanningDataEntries.forecastEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `StagedImportPlanningDataEntries`.
   */
  delete(
    dataAreaId: string,
    importId: string,
    forecastEntryNumber: string
  ): DeleteRequestBuilder<StagedImportPlanningDataEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StagedImportPlanningDataEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StagedImportPlanningDataEntries` by taking the entity as a parameter.
   */
  delete(
    entity: StagedImportPlanningDataEntries<T>
  ): DeleteRequestBuilder<StagedImportPlanningDataEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importId?: string,
    forecastEntryNumber?: string
  ): DeleteRequestBuilder<StagedImportPlanningDataEntries<T>, T> {
    return new DeleteRequestBuilder<StagedImportPlanningDataEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StagedImportPlanningDataEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImportId: importId!,
            ForecastEntryNumber: forecastEntryNumber!
          }
    );
  }
}
