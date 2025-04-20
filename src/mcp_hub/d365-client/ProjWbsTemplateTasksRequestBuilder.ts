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
import { ProjWbsTemplateTasks } from './ProjWbsTemplateTasks';

/**
 * Request builder class for operations supported on the {@link ProjWbsTemplateTasks} entity.
 */
export class ProjWbsTemplateTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjWbsTemplateTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProjWbsTemplateTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProjWbsTemplateTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProjWbsTemplateTasks<T>, T> {
    return new GetAllRequestBuilder<ProjWbsTemplateTasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjWbsTemplateTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjWbsTemplateTasks`.
   */
  create(
    entity: ProjWbsTemplateTasks<T>
  ): CreateRequestBuilder<ProjWbsTemplateTasks<T>, T> {
    return new CreateRequestBuilder<ProjWbsTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjWbsTemplateTasks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjWbsTemplateTasks.dataAreaId}.
   * @param hierarchyId Key property. See {@link ProjWbsTemplateTasks.hierarchyId}.
   * @param wbsId Key property. See {@link ProjWbsTemplateTasks.wbsId}.
   * @returns A request builder for creating requests to retrieve one `ProjWbsTemplateTasks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    hierarchyId: DeserializedType<T, 'Edm.String'>,
    wbsId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjWbsTemplateTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProjWbsTemplateTasks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HierarchyId: hierarchyId,
        WBSId: wbsId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjWbsTemplateTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjWbsTemplateTasks`.
   */
  update(
    entity: ProjWbsTemplateTasks<T>
  ): UpdateRequestBuilder<ProjWbsTemplateTasks<T>, T> {
    return new UpdateRequestBuilder<ProjWbsTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjWbsTemplateTasks`.
   * @param dataAreaId Key property. See {@link ProjWbsTemplateTasks.dataAreaId}.
   * @param hierarchyId Key property. See {@link ProjWbsTemplateTasks.hierarchyId}.
   * @param wbsId Key property. See {@link ProjWbsTemplateTasks.wbsId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjWbsTemplateTasks`.
   */
  delete(
    dataAreaId: string,
    hierarchyId: string,
    wbsId: string
  ): DeleteRequestBuilder<ProjWbsTemplateTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjWbsTemplateTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjWbsTemplateTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ProjWbsTemplateTasks<T>
  ): DeleteRequestBuilder<ProjWbsTemplateTasks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    hierarchyId?: string,
    wbsId?: string
  ): DeleteRequestBuilder<ProjWbsTemplateTasks<T>, T> {
    return new DeleteRequestBuilder<ProjWbsTemplateTasks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjWbsTemplateTasks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HierarchyId: hierarchyId!,
            WBSId: wbsId!
          }
    );
  }
}
