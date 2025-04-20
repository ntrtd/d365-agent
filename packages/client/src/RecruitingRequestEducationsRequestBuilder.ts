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
import { RecruitingRequestEducations } from './RecruitingRequestEducations';

/**
 * Request builder class for operations supported on the {@link RecruitingRequestEducations} entity.
 */
export class RecruitingRequestEducationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingRequestEducations<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingRequestEducations` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingRequestEducations` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingRequestEducations<T>, T> {
    return new GetAllRequestBuilder<RecruitingRequestEducations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RecruitingRequestEducations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingRequestEducations`.
   */
  create(
    entity: RecruitingRequestEducations<T>
  ): CreateRequestBuilder<RecruitingRequestEducations<T>, T> {
    return new CreateRequestBuilder<RecruitingRequestEducations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingRequestEducations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingRequestEducations.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestEducations.recruitingRequestId}.
   * @param educationLevelId Key property. See {@link RecruitingRequestEducations.educationLevelId}.
   * @param educationDisciplineId Key property. See {@link RecruitingRequestEducations.educationDisciplineId}.
   * @returns A request builder for creating requests to retrieve one `RecruitingRequestEducations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitingRequestId: DeserializedType<T, 'Edm.String'>,
    educationLevelId: DeserializedType<T, 'Edm.String'>,
    educationDisciplineId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingRequestEducations<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingRequestEducations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitingRequestId: recruitingRequestId,
        EducationLevelId: educationLevelId,
        EducationDisciplineId: educationDisciplineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingRequestEducations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingRequestEducations`.
   */
  update(
    entity: RecruitingRequestEducations<T>
  ): UpdateRequestBuilder<RecruitingRequestEducations<T>, T> {
    return new UpdateRequestBuilder<RecruitingRequestEducations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestEducations`.
   * @param dataAreaId Key property. See {@link RecruitingRequestEducations.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestEducations.recruitingRequestId}.
   * @param educationLevelId Key property. See {@link RecruitingRequestEducations.educationLevelId}.
   * @param educationDisciplineId Key property. See {@link RecruitingRequestEducations.educationDisciplineId}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestEducations`.
   */
  delete(
    dataAreaId: string,
    recruitingRequestId: string,
    educationLevelId: string,
    educationDisciplineId: string
  ): DeleteRequestBuilder<RecruitingRequestEducations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestEducations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestEducations` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingRequestEducations<T>
  ): DeleteRequestBuilder<RecruitingRequestEducations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitingRequestId?: string,
    educationLevelId?: string,
    educationDisciplineId?: string
  ): DeleteRequestBuilder<RecruitingRequestEducations<T>, T> {
    return new DeleteRequestBuilder<RecruitingRequestEducations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingRequestEducations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitingRequestId: recruitingRequestId!,
            EducationLevelId: educationLevelId!,
            EducationDisciplineId: educationDisciplineId!
          }
    );
  }
}
