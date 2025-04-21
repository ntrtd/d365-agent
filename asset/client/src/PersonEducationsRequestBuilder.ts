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
import { PersonEducations } from './PersonEducations';

/**
 * Request builder class for operations supported on the {@link PersonEducations} entity.
 */
export class PersonEducationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonEducations<T>, T> {
  /**
   * Returns a request builder for querying all `PersonEducations` entities.
   * @returns A request builder for creating requests to retrieve all `PersonEducations` entities.
   */
  getAll(): GetAllRequestBuilder<PersonEducations<T>, T> {
    return new GetAllRequestBuilder<PersonEducations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonEducations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonEducations`.
   */
  create(
    entity: PersonEducations<T>
  ): CreateRequestBuilder<PersonEducations<T>, T> {
    return new CreateRequestBuilder<PersonEducations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonEducations` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonEducations.partyNumber}.
   * @param educationDisciplineId Key property. See {@link PersonEducations.educationDisciplineId}.
   * @param educationInstitutionId Key property. See {@link PersonEducations.educationInstitutionId}.
   * @param educationLevelId Key property. See {@link PersonEducations.educationLevelId}.
   * @returns A request builder for creating requests to retrieve one `PersonEducations` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    educationDisciplineId: DeserializedType<T, 'Edm.String'>,
    educationInstitutionId: DeserializedType<T, 'Edm.String'>,
    educationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PersonEducations<T>, T> {
    return new GetByKeyRequestBuilder<PersonEducations<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      EducationDisciplineId: educationDisciplineId,
      EducationInstitutionId: educationInstitutionId,
      EducationLevelId: educationLevelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonEducations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonEducations`.
   */
  update(
    entity: PersonEducations<T>
  ): UpdateRequestBuilder<PersonEducations<T>, T> {
    return new UpdateRequestBuilder<PersonEducations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonEducations`.
   * @param partyNumber Key property. See {@link PersonEducations.partyNumber}.
   * @param educationDisciplineId Key property. See {@link PersonEducations.educationDisciplineId}.
   * @param educationInstitutionId Key property. See {@link PersonEducations.educationInstitutionId}.
   * @param educationLevelId Key property. See {@link PersonEducations.educationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `PersonEducations`.
   */
  delete(
    partyNumber: string,
    educationDisciplineId: string,
    educationInstitutionId: string,
    educationLevelId: string
  ): DeleteRequestBuilder<PersonEducations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonEducations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonEducations` by taking the entity as a parameter.
   */
  delete(
    entity: PersonEducations<T>
  ): DeleteRequestBuilder<PersonEducations<T>, T>;
  delete(
    partyNumberOrEntity: any,
    educationDisciplineId?: string,
    educationInstitutionId?: string,
    educationLevelId?: string
  ): DeleteRequestBuilder<PersonEducations<T>, T> {
    return new DeleteRequestBuilder<PersonEducations<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonEducations
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            EducationDisciplineId: educationDisciplineId!,
            EducationInstitutionId: educationInstitutionId!,
            EducationLevelId: educationLevelId!
          }
    );
  }
}
