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
import { LoadTemplates } from './LoadTemplates';

/**
 * Request builder class for operations supported on the {@link LoadTemplates} entity.
 */
export class LoadTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoadTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `LoadTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `LoadTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<LoadTemplates<T>, T> {
    return new GetAllRequestBuilder<LoadTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoadTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoadTemplates`.
   */
  create(entity: LoadTemplates<T>): CreateRequestBuilder<LoadTemplates<T>, T> {
    return new CreateRequestBuilder<LoadTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoadTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link LoadTemplates.dataAreaId}.
   * @param templateId Key property. See {@link LoadTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `LoadTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoadTemplates<T>, T> {
    return new GetByKeyRequestBuilder<LoadTemplates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TemplateId: templateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoadTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoadTemplates`.
   */
  update(entity: LoadTemplates<T>): UpdateRequestBuilder<LoadTemplates<T>, T> {
    return new UpdateRequestBuilder<LoadTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoadTemplates`.
   * @param dataAreaId Key property. See {@link LoadTemplates.dataAreaId}.
   * @param templateId Key property. See {@link LoadTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `LoadTemplates`.
   */
  delete(
    dataAreaId: string,
    templateId: string
  ): DeleteRequestBuilder<LoadTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoadTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoadTemplates` by taking the entity as a parameter.
   */
  delete(entity: LoadTemplates<T>): DeleteRequestBuilder<LoadTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateId?: string
  ): DeleteRequestBuilder<LoadTemplates<T>, T> {
    return new DeleteRequestBuilder<LoadTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LoadTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateId: templateId!
          }
    );
  }
}
