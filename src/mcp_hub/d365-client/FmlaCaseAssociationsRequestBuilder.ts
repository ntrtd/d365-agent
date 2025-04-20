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
import { FmlaCaseAssociations } from './FmlaCaseAssociations';

/**
 * Request builder class for operations supported on the {@link FmlaCaseAssociations} entity.
 */
export class FmlaCaseAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FmlaCaseAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `FmlaCaseAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `FmlaCaseAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<FmlaCaseAssociations<T>, T> {
    return new GetAllRequestBuilder<FmlaCaseAssociations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FmlaCaseAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FmlaCaseAssociations`.
   */
  create(
    entity: FmlaCaseAssociations<T>
  ): CreateRequestBuilder<FmlaCaseAssociations<T>, T> {
    return new CreateRequestBuilder<FmlaCaseAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FmlaCaseAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link FmlaCaseAssociations.dataAreaId}.
   * @param caseId Key property. See {@link FmlaCaseAssociations.caseId}.
   * @param personnelNumber Key property. See {@link FmlaCaseAssociations.personnelNumber}.
   * @param workerPartyId Key property. See {@link FmlaCaseAssociations.workerPartyId}.
   * @param employmentStartDate Key property. See {@link FmlaCaseAssociations.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link FmlaCaseAssociations.employmentEndDate}.
   * @param leaveType Key property. See {@link FmlaCaseAssociations.leaveType}.
   * @param startDate Key property. See {@link FmlaCaseAssociations.startDate}.
   * @param dataArea Key property. See {@link FmlaCaseAssociations.dataArea}.
   * @returns A request builder for creating requests to retrieve one `FmlaCaseAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    caseId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    workerPartyId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    leaveType: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    dataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FmlaCaseAssociations<T>, T> {
    return new GetByKeyRequestBuilder<FmlaCaseAssociations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CaseID: caseId,
        PersonnelNumber: personnelNumber,
        WorkerPartyId: workerPartyId,
        EmploymentStartDate: employmentStartDate,
        EmploymentEndDate: employmentEndDate,
        LeaveType: leaveType,
        StartDate: startDate,
        DataArea: dataArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FmlaCaseAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FmlaCaseAssociations`.
   */
  update(
    entity: FmlaCaseAssociations<T>
  ): UpdateRequestBuilder<FmlaCaseAssociations<T>, T> {
    return new UpdateRequestBuilder<FmlaCaseAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FmlaCaseAssociations`.
   * @param dataAreaId Key property. See {@link FmlaCaseAssociations.dataAreaId}.
   * @param caseId Key property. See {@link FmlaCaseAssociations.caseId}.
   * @param personnelNumber Key property. See {@link FmlaCaseAssociations.personnelNumber}.
   * @param workerPartyId Key property. See {@link FmlaCaseAssociations.workerPartyId}.
   * @param employmentStartDate Key property. See {@link FmlaCaseAssociations.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link FmlaCaseAssociations.employmentEndDate}.
   * @param leaveType Key property. See {@link FmlaCaseAssociations.leaveType}.
   * @param startDate Key property. See {@link FmlaCaseAssociations.startDate}.
   * @param dataArea Key property. See {@link FmlaCaseAssociations.dataArea}.
   * @returns A request builder for creating requests that delete an entity of type `FmlaCaseAssociations`.
   */
  delete(
    dataAreaId: string,
    caseId: string,
    personnelNumber: string,
    workerPartyId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    leaveType: string,
    startDate: Moment,
    dataArea: string
  ): DeleteRequestBuilder<FmlaCaseAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FmlaCaseAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FmlaCaseAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: FmlaCaseAssociations<T>
  ): DeleteRequestBuilder<FmlaCaseAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    caseId?: string,
    personnelNumber?: string,
    workerPartyId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    leaveType?: string,
    startDate?: Moment,
    dataArea?: string
  ): DeleteRequestBuilder<FmlaCaseAssociations<T>, T> {
    return new DeleteRequestBuilder<FmlaCaseAssociations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FmlaCaseAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CaseID: caseId!,
            PersonnelNumber: personnelNumber!,
            WorkerPartyId: workerPartyId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            LeaveType: leaveType!,
            StartDate: startDate!,
            DataArea: dataArea!
          }
    );
  }
}
