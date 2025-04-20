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
import { ApplicationEmailTemplates } from './ApplicationEmailTemplates';

/**
 * Request builder class for operations supported on the {@link ApplicationEmailTemplates} entity.
 */
export class ApplicationEmailTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicationEmailTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicationEmailTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicationEmailTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicationEmailTemplates<T>, T> {
    return new GetAllRequestBuilder<ApplicationEmailTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApplicationEmailTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicationEmailTemplates`.
   */
  create(
    entity: ApplicationEmailTemplates<T>
  ): CreateRequestBuilder<ApplicationEmailTemplates<T>, T> {
    return new CreateRequestBuilder<ApplicationEmailTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicationEmailTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApplicationEmailTemplates.dataAreaId}.
   * @param applicationEmailTemplate Key property. See {@link ApplicationEmailTemplates.applicationEmailTemplate}.
   * @returns A request builder for creating requests to retrieve one `ApplicationEmailTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    applicationEmailTemplate: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicationEmailTemplates<T>, T> {
    return new GetByKeyRequestBuilder<ApplicationEmailTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ApplicationEmailTemplate: applicationEmailTemplate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicationEmailTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicationEmailTemplates`.
   */
  update(
    entity: ApplicationEmailTemplates<T>
  ): UpdateRequestBuilder<ApplicationEmailTemplates<T>, T> {
    return new UpdateRequestBuilder<ApplicationEmailTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicationEmailTemplates`.
   * @param dataAreaId Key property. See {@link ApplicationEmailTemplates.dataAreaId}.
   * @param applicationEmailTemplate Key property. See {@link ApplicationEmailTemplates.applicationEmailTemplate}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationEmailTemplates`.
   */
  delete(
    dataAreaId: string,
    applicationEmailTemplate: string
  ): DeleteRequestBuilder<ApplicationEmailTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicationEmailTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationEmailTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicationEmailTemplates<T>
  ): DeleteRequestBuilder<ApplicationEmailTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    applicationEmailTemplate?: string
  ): DeleteRequestBuilder<ApplicationEmailTemplates<T>, T> {
    return new DeleteRequestBuilder<ApplicationEmailTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApplicationEmailTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ApplicationEmailTemplate: applicationEmailTemplate!
          }
    );
  }
}
