/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ApplicantSkills } from './ApplicantSkills';
import { HrmSkillLevelType } from './HrmSkillLevelType';

/**
 * Request builder class for operations supported on the {@link ApplicantSkills} entity.
 */
export class ApplicantSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantSkills<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantSkills` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantSkills` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantSkills<T>, T> {
    return new GetAllRequestBuilder<ApplicantSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicantSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantSkills`.
   */
  create(
    entity: ApplicantSkills<T>
  ): CreateRequestBuilder<ApplicantSkills<T>, T> {
    return new CreateRequestBuilder<ApplicantSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantSkills` entity based on its keys.
   * @param applicantId Key property. See {@link ApplicantSkills.applicantId}.
   * @param levelType Key property. See {@link ApplicantSkills.levelType}.
   * @param skillId Key property. See {@link ApplicantSkills.skillId}.
   * @param levelDate Key property. See {@link ApplicantSkills.levelDate}.
   * @returns A request builder for creating requests to retrieve one `ApplicantSkills` entity based on its keys.
   */
  getByKey(
    applicantId: DeserializedType<T, 'Edm.String'>,
    levelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmSkillLevelType'
    >,
    skillId: DeserializedType<T, 'Edm.String'>,
    levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ApplicantSkills<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantSkills<T>, T>(this.entityApi, {
      ApplicantId: applicantId,
      LevelType: levelType,
      SkillId: skillId,
      LevelDate: levelDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantSkills`.
   */
  update(
    entity: ApplicantSkills<T>
  ): UpdateRequestBuilder<ApplicantSkills<T>, T> {
    return new UpdateRequestBuilder<ApplicantSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantSkills`.
   * @param applicantId Key property. See {@link ApplicantSkills.applicantId}.
   * @param levelType Key property. See {@link ApplicantSkills.levelType}.
   * @param skillId Key property. See {@link ApplicantSkills.skillId}.
   * @param levelDate Key property. See {@link ApplicantSkills.levelDate}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantSkills`.
   */
  delete(
    applicantId: string,
    levelType: HrmSkillLevelType,
    skillId: string,
    levelDate: Moment
  ): DeleteRequestBuilder<ApplicantSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantSkills` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantSkills<T>
  ): DeleteRequestBuilder<ApplicantSkills<T>, T>;
  delete(
    applicantIdOrEntity: any,
    levelType?: HrmSkillLevelType,
    skillId?: string,
    levelDate?: Moment
  ): DeleteRequestBuilder<ApplicantSkills<T>, T> {
    return new DeleteRequestBuilder<ApplicantSkills<T>, T>(
      this.entityApi,
      applicantIdOrEntity instanceof ApplicantSkills
        ? applicantIdOrEntity
        : {
            ApplicantId: applicantIdOrEntity!,
            LevelType: levelType!,
            SkillId: skillId!,
            LevelDate: levelDate!
          }
    );
  }
}
