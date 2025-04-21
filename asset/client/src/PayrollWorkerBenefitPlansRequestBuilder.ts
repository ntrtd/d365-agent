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
import { PayrollWorkerBenefitPlans } from './PayrollWorkerBenefitPlans';

/**
 * Request builder class for operations supported on the {@link PayrollWorkerBenefitPlans} entity.
 */
export class PayrollWorkerBenefitPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollWorkerBenefitPlans` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollWorkerBenefitPlans` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
    return new GetAllRequestBuilder<PayrollWorkerBenefitPlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollWorkerBenefitPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollWorkerBenefitPlans`.
   */
  create(
    entity: PayrollWorkerBenefitPlans<T>
  ): CreateRequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
    return new CreateRequestBuilder<PayrollWorkerBenefitPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollWorkerBenefitPlans` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayrollWorkerBenefitPlans.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollWorkerBenefitPlans.legalEntityId}.
   * @param periodId Key property. See {@link PayrollWorkerBenefitPlans.periodId}.
   * @param planId Key property. See {@link PayrollWorkerBenefitPlans.planId}.
   * @returns A request builder for creating requests to retrieve one `PayrollWorkerBenefitPlans` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
    return new GetByKeyRequestBuilder<PayrollWorkerBenefitPlans<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        PeriodId: periodId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollWorkerBenefitPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollWorkerBenefitPlans`.
   */
  update(
    entity: PayrollWorkerBenefitPlans<T>
  ): UpdateRequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
    return new UpdateRequestBuilder<PayrollWorkerBenefitPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerBenefitPlans`.
   * @param personnelNumber Key property. See {@link PayrollWorkerBenefitPlans.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayrollWorkerBenefitPlans.legalEntityId}.
   * @param periodId Key property. See {@link PayrollWorkerBenefitPlans.periodId}.
   * @param planId Key property. See {@link PayrollWorkerBenefitPlans.planId}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerBenefitPlans`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    periodId: string,
    planId: string
  ): DeleteRequestBuilder<PayrollWorkerBenefitPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollWorkerBenefitPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollWorkerBenefitPlans` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollWorkerBenefitPlans<T>
  ): DeleteRequestBuilder<PayrollWorkerBenefitPlans<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    periodId?: string,
    planId?: string
  ): DeleteRequestBuilder<PayrollWorkerBenefitPlans<T>, T> {
    return new DeleteRequestBuilder<PayrollWorkerBenefitPlans<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayrollWorkerBenefitPlans
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            PeriodId: periodId!,
            PlanId: planId!
          }
    );
  }
}
