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
import { AssetMaintenanceAssetTypeConditionTemplates } from './AssetMaintenanceAssetTypeConditionTemplates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeConditionTemplates} entity.
 */
export class AssetMaintenanceAssetTypeConditionTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeConditionTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeConditionTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeConditionTemplates<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeConditionTemplates<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeConditionTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   */
  create(
    entity: AssetMaintenanceAssetTypeConditionTemplates<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeConditionTemplates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeConditionTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.maintenanceAssetTypeId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.conditionTemplateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeConditionTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    conditionTemplateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeConditionTemplates<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ConditionTemplateId: conditionTemplateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   */
  update(
    entity: AssetMaintenanceAssetTypeConditionTemplates<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeConditionTemplates<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.maintenanceAssetTypeId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceAssetTypeConditionTemplates.conditionTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    conditionTemplateId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeConditionTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeConditionTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeConditionTemplates<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    conditionTemplateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeConditionTemplates<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeConditionTemplates<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeConditionTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ConditionTemplateId: conditionTemplateId!
          }
    );
  }
}
