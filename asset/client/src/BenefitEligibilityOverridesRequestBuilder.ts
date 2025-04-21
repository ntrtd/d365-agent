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
import { BenefitEligibilityOverrides } from './BenefitEligibilityOverrides';

/**
 * Request builder class for operations supported on the {@link BenefitEligibilityOverrides} entity.
 */
export class BenefitEligibilityOverridesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitEligibilityOverrides<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitEligibilityOverrides` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitEligibilityOverrides` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitEligibilityOverrides<T>, T> {
    return new GetAllRequestBuilder<BenefitEligibilityOverrides<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitEligibilityOverrides` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitEligibilityOverrides`.
   */
  create(
    entity: BenefitEligibilityOverrides<T>
  ): CreateRequestBuilder<BenefitEligibilityOverrides<T>, T> {
    return new CreateRequestBuilder<BenefitEligibilityOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitEligibilityOverrides` entity based on its keys.
   * @param benefitPlanId Key property. See {@link BenefitEligibilityOverrides.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link BenefitEligibilityOverrides.benefitOptionId}.
   * @param effective Key property. See {@link BenefitEligibilityOverrides.effective}.
   * @param expiration Key property. See {@link BenefitEligibilityOverrides.expiration}.
   * @param workerId Key property. See {@link BenefitEligibilityOverrides.workerId}.
   * @param overrideStartDate Key property. See {@link BenefitEligibilityOverrides.overrideStartDate}.
   * @returns A request builder for creating requests to retrieve one `BenefitEligibilityOverrides` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    benefitOptionId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expiration: DeserializedType<T, 'Edm.DateTimeOffset'>,
    workerId: DeserializedType<T, 'Edm.String'>,
    overrideStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitEligibilityOverrides<T>, T> {
    return new GetByKeyRequestBuilder<BenefitEligibilityOverrides<T>, T>(
      this.entityApi,
      {
        BenefitPlanId: benefitPlanId,
        BenefitOptionId: benefitOptionId,
        Effective: effective,
        Expiration: expiration,
        WorkerId: workerId,
        OverrideStartDate: overrideStartDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitEligibilityOverrides`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitEligibilityOverrides`.
   */
  update(
    entity: BenefitEligibilityOverrides<T>
  ): UpdateRequestBuilder<BenefitEligibilityOverrides<T>, T> {
    return new UpdateRequestBuilder<BenefitEligibilityOverrides<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityOverrides`.
   * @param benefitPlanId Key property. See {@link BenefitEligibilityOverrides.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link BenefitEligibilityOverrides.benefitOptionId}.
   * @param effective Key property. See {@link BenefitEligibilityOverrides.effective}.
   * @param expiration Key property. See {@link BenefitEligibilityOverrides.expiration}.
   * @param workerId Key property. See {@link BenefitEligibilityOverrides.workerId}.
   * @param overrideStartDate Key property. See {@link BenefitEligibilityOverrides.overrideStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityOverrides`.
   */
  delete(
    benefitPlanId: string,
    benefitOptionId: string,
    effective: Moment,
    expiration: Moment,
    workerId: string,
    overrideStartDate: Moment
  ): DeleteRequestBuilder<BenefitEligibilityOverrides<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitEligibilityOverrides`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitEligibilityOverrides` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitEligibilityOverrides<T>
  ): DeleteRequestBuilder<BenefitEligibilityOverrides<T>, T>;
  delete(
    benefitPlanIdOrEntity: any,
    benefitOptionId?: string,
    effective?: Moment,
    expiration?: Moment,
    workerId?: string,
    overrideStartDate?: Moment
  ): DeleteRequestBuilder<BenefitEligibilityOverrides<T>, T> {
    return new DeleteRequestBuilder<BenefitEligibilityOverrides<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof BenefitEligibilityOverrides
        ? benefitPlanIdOrEntity
        : {
            BenefitPlanId: benefitPlanIdOrEntity!,
            BenefitOptionId: benefitOptionId!,
            Effective: effective!,
            Expiration: expiration!,
            WorkerId: workerId!,
            OverrideStartDate: overrideStartDate!
          }
    );
  }
}
