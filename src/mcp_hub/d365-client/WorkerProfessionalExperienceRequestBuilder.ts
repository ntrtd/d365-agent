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
import { WorkerProfessionalExperience } from './WorkerProfessionalExperience';

/**
 * Request builder class for operations supported on the {@link WorkerProfessionalExperience} entity.
 */
export class WorkerProfessionalExperienceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerProfessionalExperience<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerProfessionalExperience` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerProfessionalExperience` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerProfessionalExperience<T>, T> {
    return new GetAllRequestBuilder<WorkerProfessionalExperience<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerProfessionalExperience` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerProfessionalExperience`.
   */
  create(
    entity: WorkerProfessionalExperience<T>
  ): CreateRequestBuilder<WorkerProfessionalExperience<T>, T> {
    return new CreateRequestBuilder<WorkerProfessionalExperience<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerProfessionalExperience` entity based on its keys.
   * @param startDate Key property. See {@link WorkerProfessionalExperience.startDate}.
   * @param employerPosition Key property. See {@link WorkerProfessionalExperience.employerPosition}.
   * @param employerName Key property. See {@link WorkerProfessionalExperience.employerName}.
   * @param personnelNumber Key property. See {@link WorkerProfessionalExperience.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerProfessionalExperience` entity based on its keys.
   */
  getByKey(
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employerPosition: DeserializedType<T, 'Edm.String'>,
    employerName: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerProfessionalExperience<T>, T> {
    return new GetByKeyRequestBuilder<WorkerProfessionalExperience<T>, T>(
      this.entityApi,
      {
        StartDate: startDate,
        EmployerPosition: employerPosition,
        EmployerName: employerName,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerProfessionalExperience`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerProfessionalExperience`.
   */
  update(
    entity: WorkerProfessionalExperience<T>
  ): UpdateRequestBuilder<WorkerProfessionalExperience<T>, T> {
    return new UpdateRequestBuilder<WorkerProfessionalExperience<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerProfessionalExperience`.
   * @param startDate Key property. See {@link WorkerProfessionalExperience.startDate}.
   * @param employerPosition Key property. See {@link WorkerProfessionalExperience.employerPosition}.
   * @param employerName Key property. See {@link WorkerProfessionalExperience.employerName}.
   * @param personnelNumber Key property. See {@link WorkerProfessionalExperience.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerProfessionalExperience`.
   */
  delete(
    startDate: Moment,
    employerPosition: string,
    employerName: string,
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerProfessionalExperience<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerProfessionalExperience`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerProfessionalExperience` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerProfessionalExperience<T>
  ): DeleteRequestBuilder<WorkerProfessionalExperience<T>, T>;
  delete(
    startDateOrEntity: any,
    employerPosition?: string,
    employerName?: string,
    personnelNumber?: string
  ): DeleteRequestBuilder<WorkerProfessionalExperience<T>, T> {
    return new DeleteRequestBuilder<WorkerProfessionalExperience<T>, T>(
      this.entityApi,
      startDateOrEntity instanceof WorkerProfessionalExperience
        ? startDateOrEntity
        : {
            StartDate: startDateOrEntity!,
            EmployerPosition: employerPosition!,
            EmployerName: employerName!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
