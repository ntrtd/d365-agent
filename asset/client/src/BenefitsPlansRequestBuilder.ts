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
import { BenefitsPlans } from './BenefitsPlans';

/**
 * Request builder class for operations supported on the {@link BenefitsPlans} entity.
 */
export class BenefitsPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlans<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlans` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlans` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlans<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlans`.
   */
  create(entity: BenefitsPlans<T>): CreateRequestBuilder<BenefitsPlans<T>, T> {
    return new CreateRequestBuilder<BenefitsPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlans` entity based on its keys.
   * @param planId Key property. See {@link BenefitsPlans.planId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlans` entity based on its keys.
   */
  getByKey(
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPlans<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlans<T>, T>(this.entityApi, {
      PlanId: planId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlans`.
   */
  update(entity: BenefitsPlans<T>): UpdateRequestBuilder<BenefitsPlans<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlans`.
   * @param planId Key property. See {@link BenefitsPlans.planId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlans`.
   */
  delete(planId: string): DeleteRequestBuilder<BenefitsPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlans` by taking the entity as a parameter.
   */
  delete(entity: BenefitsPlans<T>): DeleteRequestBuilder<BenefitsPlans<T>, T>;
  delete(planIdOrEntity: any): DeleteRequestBuilder<BenefitsPlans<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlans<T>, T>(
      this.entityApi,
      planIdOrEntity instanceof BenefitsPlans
        ? planIdOrEntity
        : { PlanId: planIdOrEntity! }
    );
  }
}
