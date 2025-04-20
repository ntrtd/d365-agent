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
import { DataManagementTemplateDetails } from './DataManagementTemplateDetails';

/**
 * Request builder class for operations supported on the {@link DataManagementTemplateDetails} entity.
 */
export class DataManagementTemplateDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementTemplateDetails<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementTemplateDetails` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementTemplateDetails` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementTemplateDetails<T>, T> {
    return new GetAllRequestBuilder<DataManagementTemplateDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementTemplateDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementTemplateDetails`.
   */
  create(
    entity: DataManagementTemplateDetails<T>
  ): CreateRequestBuilder<DataManagementTemplateDetails<T>, T> {
    return new CreateRequestBuilder<DataManagementTemplateDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementTemplateDetails` entity based on its keys.
   * @param templateId Key property. See {@link DataManagementTemplateDetails.templateId}.
   * @param entityName Key property. See {@link DataManagementTemplateDetails.entityName}.
   * @returns A request builder for creating requests to retrieve one `DataManagementTemplateDetails` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>,
    entityName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementTemplateDetails<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementTemplateDetails<T>, T>(
      this.entityApi,
      {
        TemplateId: templateId,
        EntityName: entityName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementTemplateDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementTemplateDetails`.
   */
  update(
    entity: DataManagementTemplateDetails<T>
  ): UpdateRequestBuilder<DataManagementTemplateDetails<T>, T> {
    return new UpdateRequestBuilder<DataManagementTemplateDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateDetails`.
   * @param templateId Key property. See {@link DataManagementTemplateDetails.templateId}.
   * @param entityName Key property. See {@link DataManagementTemplateDetails.entityName}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateDetails`.
   */
  delete(
    templateId: string,
    entityName: string
  ): DeleteRequestBuilder<DataManagementTemplateDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateDetails` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementTemplateDetails<T>
  ): DeleteRequestBuilder<DataManagementTemplateDetails<T>, T>;
  delete(
    templateIdOrEntity: any,
    entityName?: string
  ): DeleteRequestBuilder<DataManagementTemplateDetails<T>, T> {
    return new DeleteRequestBuilder<DataManagementTemplateDetails<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DataManagementTemplateDetails
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            EntityName: entityName!
          }
    );
  }
}
