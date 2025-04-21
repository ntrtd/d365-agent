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
import { ProjectQuotationWbsTasks } from './ProjectQuotationWbsTasks';

/**
 * Request builder class for operations supported on the {@link ProjectQuotationWbsTasks} entity.
 */
export class ProjectQuotationWbsTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectQuotationWbsTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectQuotationWbsTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectQuotationWbsTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectQuotationWbsTasks<T>, T> {
    return new GetAllRequestBuilder<ProjectQuotationWbsTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectQuotationWbsTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectQuotationWbsTasks`.
   */
  create(
    entity: ProjectQuotationWbsTasks<T>
  ): CreateRequestBuilder<ProjectQuotationWbsTasks<T>, T> {
    return new CreateRequestBuilder<ProjectQuotationWbsTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectQuotationWbsTasks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectQuotationWbsTasks.dataAreaId}.
   * @param quotationId Key property. See {@link ProjectQuotationWbsTasks.quotationId}.
   * @param wbsId Key property. See {@link ProjectQuotationWbsTasks.wbsId}.
   * @returns A request builder for creating requests to retrieve one `ProjectQuotationWbsTasks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    quotationId: DeserializedType<T, 'Edm.String'>,
    wbsId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectQuotationWbsTasks<T>, T> {
    return new GetByKeyRequestBuilder<ProjectQuotationWbsTasks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QuotationId: quotationId,
        WBSId: wbsId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectQuotationWbsTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectQuotationWbsTasks`.
   */
  update(
    entity: ProjectQuotationWbsTasks<T>
  ): UpdateRequestBuilder<ProjectQuotationWbsTasks<T>, T> {
    return new UpdateRequestBuilder<ProjectQuotationWbsTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectQuotationWbsTasks`.
   * @param dataAreaId Key property. See {@link ProjectQuotationWbsTasks.dataAreaId}.
   * @param quotationId Key property. See {@link ProjectQuotationWbsTasks.quotationId}.
   * @param wbsId Key property. See {@link ProjectQuotationWbsTasks.wbsId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectQuotationWbsTasks`.
   */
  delete(
    dataAreaId: string,
    quotationId: string,
    wbsId: string
  ): DeleteRequestBuilder<ProjectQuotationWbsTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectQuotationWbsTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectQuotationWbsTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectQuotationWbsTasks<T>
  ): DeleteRequestBuilder<ProjectQuotationWbsTasks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    quotationId?: string,
    wbsId?: string
  ): DeleteRequestBuilder<ProjectQuotationWbsTasks<T>, T> {
    return new DeleteRequestBuilder<ProjectQuotationWbsTasks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectQuotationWbsTasks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QuotationId: quotationId!,
            WBSId: wbsId!
          }
    );
  }
}
