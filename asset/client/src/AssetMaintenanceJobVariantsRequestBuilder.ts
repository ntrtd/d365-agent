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
import { AssetMaintenanceJobVariants } from './AssetMaintenanceJobVariants';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobVariants} entity.
 */
export class AssetMaintenanceJobVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobVariants<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobVariants` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobVariants` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobVariants<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceJobVariants<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobVariants`.
   */
  create(
    entity: AssetMaintenanceJobVariants<T>
  ): CreateRequestBuilder<AssetMaintenanceJobVariants<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceJobVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobVariants` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobVariants.dataAreaId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobVariants.jobVariantId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobVariants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobVariants<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceJobVariants<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobVariantId: jobVariantId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobVariants`.
   */
  update(
    entity: AssetMaintenanceJobVariants<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobVariants<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceJobVariants<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobVariants`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobVariants.dataAreaId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceJobVariants.jobVariantId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobVariants`.
   */
  delete(
    dataAreaId: string,
    jobVariantId: string
  ): DeleteRequestBuilder<AssetMaintenanceJobVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobVariants` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobVariants<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobVariants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobVariantId?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobVariants<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceJobVariants<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobVariants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobVariantId: jobVariantId!
          }
    );
  }
}
