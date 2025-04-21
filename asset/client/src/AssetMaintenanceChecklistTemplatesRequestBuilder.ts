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
import { AssetMaintenanceChecklistTemplates } from './AssetMaintenanceChecklistTemplates';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceChecklistTemplates} entity.
 */
export class AssetMaintenanceChecklistTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceChecklistTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceChecklistTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceChecklistTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceChecklistTemplates`.
   */
  create(
    entity: AssetMaintenanceChecklistTemplates<T>
  ): CreateRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceChecklistTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistTemplates.dataAreaId}.
   * @param templateId Key property. See {@link AssetMaintenanceChecklistTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceChecklistTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TemplateID: templateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceChecklistTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceChecklistTemplates`.
   */
  update(
    entity: AssetMaintenanceChecklistTemplates<T>
  ): UpdateRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistTemplates`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistTemplates.dataAreaId}.
   * @param templateId Key property. See {@link AssetMaintenanceChecklistTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistTemplates`.
   */
  delete(
    dataAreaId: string,
    templateId: string
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceChecklistTemplates<T>
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateId?: string
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceChecklistTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceChecklistTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateID: templateId!
          }
    );
  }
}
