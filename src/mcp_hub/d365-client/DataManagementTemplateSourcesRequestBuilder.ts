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
import { DataManagementTemplateSources } from './DataManagementTemplateSources';

/**
 * Request builder class for operations supported on the {@link DataManagementTemplateSources} entity.
 */
export class DataManagementTemplateSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementTemplateSources<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementTemplateSources` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementTemplateSources` entities.
   */
  getAll(): GetAllRequestBuilder<DataManagementTemplateSources<T>, T> {
    return new GetAllRequestBuilder<DataManagementTemplateSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DataManagementTemplateSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementTemplateSources`.
   */
  create(
    entity: DataManagementTemplateSources<T>
  ): CreateRequestBuilder<DataManagementTemplateSources<T>, T> {
    return new CreateRequestBuilder<DataManagementTemplateSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DataManagementTemplateSources` entity based on its keys.
   * @param templateId Key property. See {@link DataManagementTemplateSources.templateId}.
   * @param sourceEntity Key property. See {@link DataManagementTemplateSources.sourceEntity}.
   * @returns A request builder for creating requests to retrieve one `DataManagementTemplateSources` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>,
    sourceEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementTemplateSources<T>, T> {
    return new GetByKeyRequestBuilder<DataManagementTemplateSources<T>, T>(
      this.entityApi,
      {
        TemplateId: templateId,
        SourceEntity: sourceEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementTemplateSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementTemplateSources`.
   */
  update(
    entity: DataManagementTemplateSources<T>
  ): UpdateRequestBuilder<DataManagementTemplateSources<T>, T> {
    return new UpdateRequestBuilder<DataManagementTemplateSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateSources`.
   * @param templateId Key property. See {@link DataManagementTemplateSources.templateId}.
   * @param sourceEntity Key property. See {@link DataManagementTemplateSources.sourceEntity}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateSources`.
   */
  delete(
    templateId: string,
    sourceEntity: string
  ): DeleteRequestBuilder<DataManagementTemplateSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateSources` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementTemplateSources<T>
  ): DeleteRequestBuilder<DataManagementTemplateSources<T>, T>;
  delete(
    templateIdOrEntity: any,
    sourceEntity?: string
  ): DeleteRequestBuilder<DataManagementTemplateSources<T>, T> {
    return new DeleteRequestBuilder<DataManagementTemplateSources<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DataManagementTemplateSources
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            SourceEntity: sourceEntity!
          }
    );
  }
}
