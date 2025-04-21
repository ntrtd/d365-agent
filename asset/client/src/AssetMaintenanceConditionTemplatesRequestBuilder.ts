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
import { AssetMaintenanceConditionTemplates } from './AssetMaintenanceConditionTemplates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceConditionTemplates} entity.
 */
export class AssetMaintenanceConditionTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceConditionTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceConditionTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceConditionTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceConditionTemplates`.
   */
  create(
    entity: AssetMaintenanceConditionTemplates<T>
  ): CreateRequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceConditionTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceConditionTemplates.dataAreaId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceConditionTemplates.conditionTemplateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceConditionTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    conditionTemplateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConditionTemplateId: conditionTemplateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceConditionTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceConditionTemplates`.
   */
  update(
    entity: AssetMaintenanceConditionTemplates<T>
  ): UpdateRequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceConditionTemplates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceConditionTemplates.dataAreaId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceConditionTemplates.conditionTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceConditionTemplates`.
   */
  delete(
    dataAreaId: string,
    conditionTemplateId: string
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceConditionTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceConditionTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceConditionTemplates<T>
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    conditionTemplateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplates<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceConditionTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceConditionTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConditionTemplateId: conditionTemplateId!
          }
    );
  }
}
