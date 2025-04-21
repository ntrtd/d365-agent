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
import { SmbAccountExportResults } from './SmbAccountExportResults';

/**
 * Request builder class for operations supported on the {@link SmbAccountExportResults} entity.
 */
export class SmbAccountExportResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SmbAccountExportResults<T>, T> {
  /**
   * Returns a request builder for querying all `SmbAccountExportResults` entities.
   * @returns A request builder for creating requests to retrieve all `SmbAccountExportResults` entities.
   */
  getAll(): GetAllRequestBuilder<SmbAccountExportResults<T>, T> {
    return new GetAllRequestBuilder<SmbAccountExportResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SmbAccountExportResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SmbAccountExportResults`.
   */
  create(
    entity: SmbAccountExportResults<T>
  ): CreateRequestBuilder<SmbAccountExportResults<T>, T> {
    return new CreateRequestBuilder<SmbAccountExportResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SmbAccountExportResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link SmbAccountExportResults.dataAreaId}.
   * @param startDate Key property. See {@link SmbAccountExportResults.startDate}.
   * @param endDate Key property. See {@link SmbAccountExportResults.endDate}.
   * @returns A request builder for creating requests to retrieve one `SmbAccountExportResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SmbAccountExportResults<T>, T> {
    return new GetByKeyRequestBuilder<SmbAccountExportResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StartDate: startDate,
        EndDate: endDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SmbAccountExportResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SmbAccountExportResults`.
   */
  update(
    entity: SmbAccountExportResults<T>
  ): UpdateRequestBuilder<SmbAccountExportResults<T>, T> {
    return new UpdateRequestBuilder<SmbAccountExportResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SmbAccountExportResults`.
   * @param dataAreaId Key property. See {@link SmbAccountExportResults.dataAreaId}.
   * @param startDate Key property. See {@link SmbAccountExportResults.startDate}.
   * @param endDate Key property. See {@link SmbAccountExportResults.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `SmbAccountExportResults`.
   */
  delete(
    dataAreaId: string,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<SmbAccountExportResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SmbAccountExportResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SmbAccountExportResults` by taking the entity as a parameter.
   */
  delete(
    entity: SmbAccountExportResults<T>
  ): DeleteRequestBuilder<SmbAccountExportResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<SmbAccountExportResults<T>, T> {
    return new DeleteRequestBuilder<SmbAccountExportResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SmbAccountExportResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
