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
import { AssetMaintenanceJobTypeVariants } from './AssetMaintenanceJobTypeVariants';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeVariants} entity.
 */
export class AssetMaintenanceJobTypeVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeVariants` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeVariants` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeVariants`.
   */
  create(
    entity: AssetMaintenanceJobTypeVariants<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeVariants` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeVariants.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeVariants.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeVariants.jobVariantId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeVariants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobTypeId: jobTypeId,
        JobVariantId: jobVariantId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeVariants`.
   */
  update(
    entity: AssetMaintenanceJobTypeVariants<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeVariants`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeVariants.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeVariants.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobTypeVariants.jobVariantId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeVariants`.
   */
  delete(
    dataAreaId: string,
    jobTypeId: string,
    jobVariantId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeVariants` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeVariants<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobTypeId?: string,
    jobVariantId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobTypeVariants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeVariants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!
          }
    );
  }
}
