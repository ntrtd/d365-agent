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
import { RecruitingRequestSkills } from './RecruitingRequestSkills';

/**
 * Request builder class for operations supported on the {@link RecruitingRequestSkills} entity.
 */
export class RecruitingRequestSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingRequestSkills<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingRequestSkills` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingRequestSkills` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingRequestSkills<T>, T> {
    return new GetAllRequestBuilder<RecruitingRequestSkills<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RecruitingRequestSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingRequestSkills`.
   */
  create(
    entity: RecruitingRequestSkills<T>
  ): CreateRequestBuilder<RecruitingRequestSkills<T>, T> {
    return new CreateRequestBuilder<RecruitingRequestSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingRequestSkills` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingRequestSkills.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestSkills.recruitingRequestId}.
   * @param skillId Key property. See {@link RecruitingRequestSkills.skillId}.
   * @returns A request builder for creating requests to retrieve one `RecruitingRequestSkills` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitingRequestId: DeserializedType<T, 'Edm.String'>,
    skillId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingRequestSkills<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingRequestSkills<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitingRequestId: recruitingRequestId,
        SkillId: skillId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingRequestSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingRequestSkills`.
   */
  update(
    entity: RecruitingRequestSkills<T>
  ): UpdateRequestBuilder<RecruitingRequestSkills<T>, T> {
    return new UpdateRequestBuilder<RecruitingRequestSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestSkills`.
   * @param dataAreaId Key property. See {@link RecruitingRequestSkills.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestSkills.recruitingRequestId}.
   * @param skillId Key property. See {@link RecruitingRequestSkills.skillId}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestSkills`.
   */
  delete(
    dataAreaId: string,
    recruitingRequestId: string,
    skillId: string
  ): DeleteRequestBuilder<RecruitingRequestSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestSkills` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingRequestSkills<T>
  ): DeleteRequestBuilder<RecruitingRequestSkills<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitingRequestId?: string,
    skillId?: string
  ): DeleteRequestBuilder<RecruitingRequestSkills<T>, T> {
    return new DeleteRequestBuilder<RecruitingRequestSkills<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingRequestSkills
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitingRequestId: recruitingRequestId!,
            SkillId: skillId!
          }
    );
  }
}
