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
import { AssetMaintenanceJobTypeSucceedJobTypes } from './AssetMaintenanceJobTypeSucceedJobTypes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceJobTypeSucceedJobTypes} entity.
 */
export class AssetMaintenanceJobTypeSucceedJobTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceJobTypeSucceedJobTypes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceJobTypeSucceedJobTypes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceJobTypeSucceedJobTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   */
  create(
    entity: AssetMaintenanceJobTypeSucceedJobTypes<T>
  ): CreateRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceJobTypeSucceedJobTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.jobTypeId}.
   * @param jobTypeIdSucceed Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.jobTypeIdSucceed}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceJobTypeSucceedJobTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobTypeIdSucceed: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JobTypeId: jobTypeId,
      JobTypeIdSucceed: jobTypeIdSucceed
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   */
  update(
    entity: AssetMaintenanceJobTypeSucceedJobTypes<T>
  ): UpdateRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.dataAreaId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.jobTypeId}.
   * @param jobTypeIdSucceed Key property. See {@link AssetMaintenanceJobTypeSucceedJobTypes.jobTypeIdSucceed}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   */
  delete(
    dataAreaId: string,
    jobTypeId: string,
    jobTypeIdSucceed: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceJobTypeSucceedJobTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceJobTypeSucceedJobTypes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceJobTypeSucceedJobTypes<T>
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobTypeId?: string,
    jobTypeIdSucceed?: string
  ): DeleteRequestBuilder<AssetMaintenanceJobTypeSucceedJobTypes<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceJobTypeSucceedJobTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobTypeId: jobTypeId!,
            JobTypeIdSucceed: jobTypeIdSucceed!
          }
    );
  }
}
