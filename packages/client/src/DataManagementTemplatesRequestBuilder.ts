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
import { DataManagementTemplates } from './DataManagementTemplates';

/**
 * Request builder class for operations supported on the {@link DataManagementTemplates} entity.
 */
export class DataManagementTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementTemplates<T>, T> {
    return new GetAllRequestBuilder<DataManagementTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementTemplates`.
   */
  create(
    entity: DataManagementTemplates<T>
  ): CreateRequestBuilder<DataManagementTemplates<T>, T> {
    return new CreateRequestBuilder<DataManagementTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementTemplates` entity based on its keys.
   * @param templateId Key property. See {@link DataManagementTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `DataManagementTemplates` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementTemplates<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementTemplates<T>, T>(
      this.entityApi,
      { TemplateId: templateId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementTemplates`.
   */
  update(
    entity: DataManagementTemplates<T>
  ): UpdateRequestBuilder<DataManagementTemplates<T>, T> {
    return new UpdateRequestBuilder<DataManagementTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplates`.
   * @param templateId Key property. See {@link DataManagementTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplates`.
   */
  delete(
    templateId: string
  ): DeleteRequestBuilder<DataManagementTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementTemplates<T>
  ): DeleteRequestBuilder<DataManagementTemplates<T>, T>;
  delete(
    templateIdOrEntity: any
  ): DeleteRequestBuilder<DataManagementTemplates<T>, T> {
    return new DeleteRequestBuilder<DataManagementTemplates<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DataManagementTemplates
        ? templateIdOrEntity
        : { TemplateId: templateIdOrEntity! }
    );
  }
}
