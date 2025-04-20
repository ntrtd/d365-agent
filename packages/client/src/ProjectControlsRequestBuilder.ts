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
import { ProjectControls } from './ProjectControls';

/**
 * Request builder class for operations supported on the {@link ProjectControls} entity.
 */
export class ProjectControlsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectControls<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectControls` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectControls` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectControls<T>, T> {
    return new GetAllRequestBuilder<ProjectControls<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectControls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectControls`.
   */
  create(
    entity: ProjectControls<T>
  ): CreateRequestBuilder<ProjectControls<T>, T> {
    return new CreateRequestBuilder<ProjectControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectControls` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectControls.dataAreaId}.
   * @param costTemplateId Key property. See {@link ProjectControls.costTemplateId}.
   * @returns A request builder for creating requests to retrieve one `ProjectControls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    costTemplateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectControls<T>, T> {
    return new GetByKeyRequestBuilder<ProjectControls<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CostTemplateId: costTemplateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectControls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectControls`.
   */
  update(
    entity: ProjectControls<T>
  ): UpdateRequestBuilder<ProjectControls<T>, T> {
    return new UpdateRequestBuilder<ProjectControls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectControls`.
   * @param dataAreaId Key property. See {@link ProjectControls.dataAreaId}.
   * @param costTemplateId Key property. See {@link ProjectControls.costTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectControls`.
   */
  delete(
    dataAreaId: string,
    costTemplateId: string
  ): DeleteRequestBuilder<ProjectControls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectControls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectControls` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectControls<T>
  ): DeleteRequestBuilder<ProjectControls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    costTemplateId?: string
  ): DeleteRequestBuilder<ProjectControls<T>, T> {
    return new DeleteRequestBuilder<ProjectControls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectControls
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CostTemplateId: costTemplateId!
          }
    );
  }
}
