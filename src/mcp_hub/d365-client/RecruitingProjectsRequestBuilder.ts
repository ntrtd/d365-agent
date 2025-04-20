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
import { RecruitingProjects } from './RecruitingProjects';

/**
 * Request builder class for operations supported on the {@link RecruitingProjects} entity.
 */
export class RecruitingProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingProjects<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingProjects` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingProjects` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingProjects<T>, T> {
    return new GetAllRequestBuilder<RecruitingProjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RecruitingProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingProjects`.
   */
  create(
    entity: RecruitingProjects<T>
  ): CreateRequestBuilder<RecruitingProjects<T>, T> {
    return new CreateRequestBuilder<RecruitingProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingProjects.dataAreaId}.
   * @param recruitmentProject Key property. See {@link RecruitingProjects.recruitmentProject}.
   * @returns A request builder for creating requests to retrieve one `RecruitingProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitmentProject: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingProjects<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingProjects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitmentProject: recruitmentProject
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingProjects`.
   */
  update(
    entity: RecruitingProjects<T>
  ): UpdateRequestBuilder<RecruitingProjects<T>, T> {
    return new UpdateRequestBuilder<RecruitingProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingProjects`.
   * @param dataAreaId Key property. See {@link RecruitingProjects.dataAreaId}.
   * @param recruitmentProject Key property. See {@link RecruitingProjects.recruitmentProject}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingProjects`.
   */
  delete(
    dataAreaId: string,
    recruitmentProject: string
  ): DeleteRequestBuilder<RecruitingProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingProjects` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingProjects<T>
  ): DeleteRequestBuilder<RecruitingProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitmentProject?: string
  ): DeleteRequestBuilder<RecruitingProjects<T>, T> {
    return new DeleteRequestBuilder<RecruitingProjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitmentProject: recruitmentProject!
          }
    );
  }
}
