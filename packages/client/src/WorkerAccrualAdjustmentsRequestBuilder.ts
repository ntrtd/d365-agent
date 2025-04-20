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
import { WorkerAccrualAdjustments } from './WorkerAccrualAdjustments';
import { PayrollAccrualAdjustmentType } from './PayrollAccrualAdjustmentType';

/**
 * Request builder class for operations supported on the {@link WorkerAccrualAdjustments} entity.
 */
export class WorkerAccrualAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerAccrualAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerAccrualAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerAccrualAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerAccrualAdjustments<T>, T> {
    return new GetAllRequestBuilder<WorkerAccrualAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerAccrualAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerAccrualAdjustments`.
   */
  create(
    entity: WorkerAccrualAdjustments<T>
  ): CreateRequestBuilder<WorkerAccrualAdjustments<T>, T> {
    return new CreateRequestBuilder<WorkerAccrualAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerAccrualAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link WorkerAccrualAdjustments.dataAreaId}.
   * @param adjustmentType Key property. See {@link WorkerAccrualAdjustments.adjustmentType}.
   * @param accrualId Key property. See {@link WorkerAccrualAdjustments.accrualId}.
   * @param sequenceNumber Key property. See {@link WorkerAccrualAdjustments.sequenceNumber}.
   * @param legalEntityId Key property. See {@link WorkerAccrualAdjustments.legalEntityId}.
   * @param enrolledAccrualLegalEntityId Key property. See {@link WorkerAccrualAdjustments.enrolledAccrualLegalEntityId}.
   * @param personnelNumber Key property. See {@link WorkerAccrualAdjustments.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerAccrualAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    adjustmentType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PayrollAccrualAdjustmentType'
    >,
    accrualId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    enrolledAccrualLegalEntityId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerAccrualAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<WorkerAccrualAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AdjustmentType: adjustmentType,
        AccrualId: accrualId,
        SequenceNumber: sequenceNumber,
        LegalEntityId: legalEntityId,
        EnrolledAccrualLegalEntityId: enrolledAccrualLegalEntityId,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerAccrualAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerAccrualAdjustments`.
   */
  update(
    entity: WorkerAccrualAdjustments<T>
  ): UpdateRequestBuilder<WorkerAccrualAdjustments<T>, T> {
    return new UpdateRequestBuilder<WorkerAccrualAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerAccrualAdjustments`.
   * @param dataAreaId Key property. See {@link WorkerAccrualAdjustments.dataAreaId}.
   * @param adjustmentType Key property. See {@link WorkerAccrualAdjustments.adjustmentType}.
   * @param accrualId Key property. See {@link WorkerAccrualAdjustments.accrualId}.
   * @param sequenceNumber Key property. See {@link WorkerAccrualAdjustments.sequenceNumber}.
   * @param legalEntityId Key property. See {@link WorkerAccrualAdjustments.legalEntityId}.
   * @param enrolledAccrualLegalEntityId Key property. See {@link WorkerAccrualAdjustments.enrolledAccrualLegalEntityId}.
   * @param personnelNumber Key property. See {@link WorkerAccrualAdjustments.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerAccrualAdjustments`.
   */
  delete(
    dataAreaId: string,
    adjustmentType: PayrollAccrualAdjustmentType,
    accrualId: string,
    sequenceNumber: number,
    legalEntityId: string,
    enrolledAccrualLegalEntityId: string,
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerAccrualAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerAccrualAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerAccrualAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerAccrualAdjustments<T>
  ): DeleteRequestBuilder<WorkerAccrualAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    adjustmentType?: PayrollAccrualAdjustmentType,
    accrualId?: string,
    sequenceNumber?: number,
    legalEntityId?: string,
    enrolledAccrualLegalEntityId?: string,
    personnelNumber?: string
  ): DeleteRequestBuilder<WorkerAccrualAdjustments<T>, T> {
    return new DeleteRequestBuilder<WorkerAccrualAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WorkerAccrualAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AdjustmentType: adjustmentType!,
            AccrualId: accrualId!,
            SequenceNumber: sequenceNumber!,
            LegalEntityId: legalEntityId!,
            EnrolledAccrualLegalEntityId: enrolledAccrualLegalEntityId!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
