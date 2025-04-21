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
import { BenefitsPlanPeriods } from './BenefitsPlanPeriods';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanPeriods} entity.
 */
export class BenefitsPlanPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanPeriods<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanPeriods`.
   */
  create(
    entity: BenefitsPlanPeriods<T>
  ): CreateRequestBuilder<BenefitsPlanPeriods<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanPeriods` entity based on its keys.
   * @param periodId Key property. See {@link BenefitsPlanPeriods.periodId}.
   * @param planId Key property. See {@link BenefitsPlanPeriods.planId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanPeriods` entity based on its keys.
   */
  getByKey(
    periodId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPlanPeriods<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanPeriods<T>, T>(
      this.entityApi,
      {
        PeriodId: periodId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanPeriods`.
   */
  update(
    entity: BenefitsPlanPeriods<T>
  ): UpdateRequestBuilder<BenefitsPlanPeriods<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanPeriods`.
   * @param periodId Key property. See {@link BenefitsPlanPeriods.periodId}.
   * @param planId Key property. See {@link BenefitsPlanPeriods.planId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanPeriods`.
   */
  delete(
    periodId: string,
    planId: string
  ): DeleteRequestBuilder<BenefitsPlanPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanPeriods` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanPeriods<T>
  ): DeleteRequestBuilder<BenefitsPlanPeriods<T>, T>;
  delete(
    periodIdOrEntity: any,
    planId?: string
  ): DeleteRequestBuilder<BenefitsPlanPeriods<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanPeriods<T>, T>(
      this.entityApi,
      periodIdOrEntity instanceof BenefitsPlanPeriods
        ? periodIdOrEntity
        : {
            PeriodId: periodIdOrEntity!,
            PlanId: planId!
          }
    );
  }
}
