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
import { ProjectReportSortFields } from './ProjectReportSortFields';
import { ProjSortValue } from './ProjSortValue';

/**
 * Request builder class for operations supported on the {@link ProjectReportSortFields} entity.
 */
export class ProjectReportSortFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectReportSortFields<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectReportSortFields` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectReportSortFields` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectReportSortFields<T>, T> {
    return new GetAllRequestBuilder<ProjectReportSortFields<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectReportSortFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectReportSortFields`.
   */
  create(
    entity: ProjectReportSortFields<T>
  ): CreateRequestBuilder<ProjectReportSortFields<T>, T> {
    return new CreateRequestBuilder<ProjectReportSortFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectReportSortFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectReportSortFields.dataAreaId}.
   * @param sortCode Key property. See {@link ProjectReportSortFields.sortCode}.
   * @param sortingId Key property. See {@link ProjectReportSortFields.sortingId}.
   * @returns A request builder for creating requests to retrieve one `ProjectReportSortFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sortCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjSortValue'
    >,
    sortingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectReportSortFields<T>, T> {
    return new GetByKeyRequestBuilder<ProjectReportSortFields<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SortCode: sortCode,
        SortingId: sortingId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectReportSortFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectReportSortFields`.
   */
  update(
    entity: ProjectReportSortFields<T>
  ): UpdateRequestBuilder<ProjectReportSortFields<T>, T> {
    return new UpdateRequestBuilder<ProjectReportSortFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectReportSortFields`.
   * @param dataAreaId Key property. See {@link ProjectReportSortFields.dataAreaId}.
   * @param sortCode Key property. See {@link ProjectReportSortFields.sortCode}.
   * @param sortingId Key property. See {@link ProjectReportSortFields.sortingId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectReportSortFields`.
   */
  delete(
    dataAreaId: string,
    sortCode: ProjSortValue,
    sortingId: string
  ): DeleteRequestBuilder<ProjectReportSortFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectReportSortFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectReportSortFields` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectReportSortFields<T>
  ): DeleteRequestBuilder<ProjectReportSortFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sortCode?: ProjSortValue,
    sortingId?: string
  ): DeleteRequestBuilder<ProjectReportSortFields<T>, T> {
    return new DeleteRequestBuilder<ProjectReportSortFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectReportSortFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SortCode: sortCode!,
            SortingId: sortingId!
          }
    );
  }
}
