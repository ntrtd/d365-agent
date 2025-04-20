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
import { BenefitsCreditPlanPeriods } from './BenefitsCreditPlanPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsCreditPlanPeriods} entity.
 */
export class BenefitsCreditPlanPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsCreditPlanPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCreditPlanPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsCreditPlanPeriods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsCreditPlanPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCreditPlanPeriods`.
   */
  create(
    entity: BenefitsCreditPlanPeriods<T>
  ): CreateRequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsCreditPlanPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCreditPlanPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsCreditPlanPeriods.dataAreaId}.
   * @param planId Key property. See {@link BenefitsCreditPlanPeriods.planId}.
   * @param periodId Key property. See {@link BenefitsCreditPlanPeriods.periodId}.
   * @param creditId Key property. See {@link BenefitsCreditPlanPeriods.creditId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCreditPlanPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    creditId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsCreditPlanPeriods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlanId: planId,
        PeriodId: periodId,
        CreditId: creditId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCreditPlanPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCreditPlanPeriods`.
   */
  update(
    entity: BenefitsCreditPlanPeriods<T>
  ): UpdateRequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsCreditPlanPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPlanPeriods`.
   * @param dataAreaId Key property. See {@link BenefitsCreditPlanPeriods.dataAreaId}.
   * @param planId Key property. See {@link BenefitsCreditPlanPeriods.planId}.
   * @param periodId Key property. See {@link BenefitsCreditPlanPeriods.periodId}.
   * @param creditId Key property. See {@link BenefitsCreditPlanPeriods.creditId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPlanPeriods`.
   */
  delete(
    dataAreaId: string,
    planId: string,
    periodId: string,
    creditId: string
  ): DeleteRequestBuilder<BenefitsCreditPlanPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPlanPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPlanPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCreditPlanPeriods<T>
  ): DeleteRequestBuilder<BenefitsCreditPlanPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string,
    periodId?: string,
    creditId?: string
  ): DeleteRequestBuilder<BenefitsCreditPlanPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsCreditPlanPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsCreditPlanPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!,
            PeriodId: periodId!,
            CreditId: creditId!
          }
    );
  }
}
