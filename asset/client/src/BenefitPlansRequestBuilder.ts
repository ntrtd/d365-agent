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
import { BenefitPlans } from './BenefitPlans';

/**
 * Request builder class for operations supported on the {@link BenefitPlans} entity.
 */
export class BenefitPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPlans<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPlans` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPlans` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPlans<T>, T> {
    return new GetAllRequestBuilder<BenefitPlans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPlans`.
   */
  create(entity: BenefitPlans<T>): CreateRequestBuilder<BenefitPlans<T>, T> {
    return new CreateRequestBuilder<BenefitPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitPlans` entity based on its keys.
   * @param plan Key property. See {@link BenefitPlans.plan}.
   * @returns A request builder for creating requests to retrieve one `BenefitPlans` entity based on its keys.
   */
  getByKey(
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitPlans<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPlans<T>, T>(this.entityApi, {
      Plan: plan
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPlans`.
   */
  update(entity: BenefitPlans<T>): UpdateRequestBuilder<BenefitPlans<T>, T> {
    return new UpdateRequestBuilder<BenefitPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPlans`.
   * @param plan Key property. See {@link BenefitPlans.plan}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPlans`.
   */
  delete(plan: string): DeleteRequestBuilder<BenefitPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPlans` by taking the entity as a parameter.
   */
  delete(entity: BenefitPlans<T>): DeleteRequestBuilder<BenefitPlans<T>, T>;
  delete(planOrEntity: any): DeleteRequestBuilder<BenefitPlans<T>, T> {
    return new DeleteRequestBuilder<BenefitPlans<T>, T>(
      this.entityApi,
      planOrEntity instanceof BenefitPlans
        ? planOrEntity
        : { Plan: planOrEntity! }
    );
  }
}
