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
import { BenefitsPlanTypes } from './BenefitsPlanTypes';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanTypes} entity.
 */
export class BenefitsPlanTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanTypes<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanTypes`.
   */
  create(
    entity: BenefitsPlanTypes<T>
  ): CreateRequestBuilder<BenefitsPlanTypes<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanTypes` entity based on its keys.
   * @param planTypeId Key property. See {@link BenefitsPlanTypes.planTypeId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanTypes` entity based on its keys.
   */
  getByKey(
    planTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsPlanTypes<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanTypes<T>, T>(this.entityApi, {
      PlanTypeId: planTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanTypes`.
   */
  update(
    entity: BenefitsPlanTypes<T>
  ): UpdateRequestBuilder<BenefitsPlanTypes<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanTypes`.
   * @param planTypeId Key property. See {@link BenefitsPlanTypes.planTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanTypes`.
   */
  delete(planTypeId: string): DeleteRequestBuilder<BenefitsPlanTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanTypes<T>
  ): DeleteRequestBuilder<BenefitsPlanTypes<T>, T>;
  delete(
    planTypeIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsPlanTypes<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanTypes<T>, T>(
      this.entityApi,
      planTypeIdOrEntity instanceof BenefitsPlanTypes
        ? planTypeIdOrEntity
        : { PlanTypeId: planTypeIdOrEntity! }
    );
  }
}
