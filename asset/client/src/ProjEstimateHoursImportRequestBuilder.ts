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
import { ProjEstimateHoursImport } from './ProjEstimateHoursImport';

/**
 * Request builder class for operations supported on the {@link ProjEstimateHoursImport} entity.
 */
export class ProjEstimateHoursImportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjEstimateHoursImport<T>, T> {
  /**
   * Returns a request builder for querying all `ProjEstimateHoursImport` entities.
   * @returns A request builder for creating requests to retrieve all `ProjEstimateHoursImport` entities.
   */
  getAll(): GetAllRequestBuilder<ProjEstimateHoursImport<T>, T> {
    return new GetAllRequestBuilder<ProjEstimateHoursImport<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjEstimateHoursImport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjEstimateHoursImport`.
   */
  create(
    entity: ProjEstimateHoursImport<T>
  ): CreateRequestBuilder<ProjEstimateHoursImport<T>, T> {
    return new CreateRequestBuilder<ProjEstimateHoursImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjEstimateHoursImport` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjEstimateHoursImport.dataAreaId}.
   * @param estimateHoursImportId Key property. See {@link ProjEstimateHoursImport.estimateHoursImportId}.
   * @returns A request builder for creating requests to retrieve one `ProjEstimateHoursImport` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    estimateHoursImportId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProjEstimateHoursImport<T>, T> {
    return new GetByKeyRequestBuilder<ProjEstimateHoursImport<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EstimateHoursImportId: estimateHoursImportId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjEstimateHoursImport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjEstimateHoursImport`.
   */
  update(
    entity: ProjEstimateHoursImport<T>
  ): UpdateRequestBuilder<ProjEstimateHoursImport<T>, T> {
    return new UpdateRequestBuilder<ProjEstimateHoursImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjEstimateHoursImport`.
   * @param dataAreaId Key property. See {@link ProjEstimateHoursImport.dataAreaId}.
   * @param estimateHoursImportId Key property. See {@link ProjEstimateHoursImport.estimateHoursImportId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjEstimateHoursImport`.
   */
  delete(
    dataAreaId: string,
    estimateHoursImportId: string
  ): DeleteRequestBuilder<ProjEstimateHoursImport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjEstimateHoursImport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjEstimateHoursImport` by taking the entity as a parameter.
   */
  delete(
    entity: ProjEstimateHoursImport<T>
  ): DeleteRequestBuilder<ProjEstimateHoursImport<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    estimateHoursImportId?: string
  ): DeleteRequestBuilder<ProjEstimateHoursImport<T>, T> {
    return new DeleteRequestBuilder<ProjEstimateHoursImport<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjEstimateHoursImport
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EstimateHoursImportId: estimateHoursImportId!
          }
    );
  }
}
