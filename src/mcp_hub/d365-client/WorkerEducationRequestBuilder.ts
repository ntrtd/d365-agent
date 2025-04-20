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
import { WorkerEducation } from './WorkerEducation';

/**
 * Request builder class for operations supported on the {@link WorkerEducation} entity.
 */
export class WorkerEducationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerEducation<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerEducation` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerEducation` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerEducation<T>, T> {
    return new GetAllRequestBuilder<WorkerEducation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerEducation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerEducation`.
   */
  create(
    entity: WorkerEducation<T>
  ): CreateRequestBuilder<WorkerEducation<T>, T> {
    return new CreateRequestBuilder<WorkerEducation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerEducation` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerEducation.personnelNumber}.
   * @param educationDisciplineId Key property. See {@link WorkerEducation.educationDisciplineId}.
   * @param educationInstitutionId Key property. See {@link WorkerEducation.educationInstitutionId}.
   * @param educationLevelId Key property. See {@link WorkerEducation.educationLevelId}.
   * @returns A request builder for creating requests to retrieve one `WorkerEducation` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    educationDisciplineId: DeserializedType<T, 'Edm.String'>,
    educationInstitutionId: DeserializedType<T, 'Edm.String'>,
    educationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerEducation<T>, T> {
    return new GetByKeyRequestBuilder<WorkerEducation<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      EducationDisciplineId: educationDisciplineId,
      EducationInstitutionId: educationInstitutionId,
      EducationLevelId: educationLevelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerEducation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerEducation`.
   */
  update(
    entity: WorkerEducation<T>
  ): UpdateRequestBuilder<WorkerEducation<T>, T> {
    return new UpdateRequestBuilder<WorkerEducation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerEducation`.
   * @param personnelNumber Key property. See {@link WorkerEducation.personnelNumber}.
   * @param educationDisciplineId Key property. See {@link WorkerEducation.educationDisciplineId}.
   * @param educationInstitutionId Key property. See {@link WorkerEducation.educationInstitutionId}.
   * @param educationLevelId Key property. See {@link WorkerEducation.educationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEducation`.
   */
  delete(
    personnelNumber: string,
    educationDisciplineId: string,
    educationInstitutionId: string,
    educationLevelId: string
  ): DeleteRequestBuilder<WorkerEducation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerEducation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerEducation` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerEducation<T>
  ): DeleteRequestBuilder<WorkerEducation<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    educationDisciplineId?: string,
    educationInstitutionId?: string,
    educationLevelId?: string
  ): DeleteRequestBuilder<WorkerEducation<T>, T> {
    return new DeleteRequestBuilder<WorkerEducation<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerEducation
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EducationDisciplineId: educationDisciplineId!,
            EducationInstitutionId: educationInstitutionId!,
            EducationLevelId: educationLevelId!
          }
    );
  }
}
