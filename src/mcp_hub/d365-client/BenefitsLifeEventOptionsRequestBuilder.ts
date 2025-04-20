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
import { BenefitsLifeEventOptions } from './BenefitsLifeEventOptions';

/**
 * Request builder class for operations supported on the {@link BenefitsLifeEventOptions} entity.
 */
export class BenefitsLifeEventOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsLifeEventOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsLifeEventOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsLifeEventOptions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsLifeEventOptions<T>, T> {
    return new GetAllRequestBuilder<BenefitsLifeEventOptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsLifeEventOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsLifeEventOptions`.
   */
  create(
    entity: BenefitsLifeEventOptions<T>
  ): CreateRequestBuilder<BenefitsLifeEventOptions<T>, T> {
    return new CreateRequestBuilder<BenefitsLifeEventOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsLifeEventOptions` entity based on its keys.
   * @param planTypeId Key property. See {@link BenefitsLifeEventOptions.planTypeId}.
   * @param lifeEventTypeId Key property. See {@link BenefitsLifeEventOptions.lifeEventTypeId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsLifeEventOptions` entity based on its keys.
   */
  getByKey(
    planTypeId: DeserializedType<T, 'Edm.String'>,
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsLifeEventOptions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsLifeEventOptions<T>, T>(
      this.entityApi,
      {
        PlanTypeId: planTypeId,
        LifeEventTypeId: lifeEventTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsLifeEventOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsLifeEventOptions`.
   */
  update(
    entity: BenefitsLifeEventOptions<T>
  ): UpdateRequestBuilder<BenefitsLifeEventOptions<T>, T> {
    return new UpdateRequestBuilder<BenefitsLifeEventOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsLifeEventOptions`.
   * @param planTypeId Key property. See {@link BenefitsLifeEventOptions.planTypeId}.
   * @param lifeEventTypeId Key property. See {@link BenefitsLifeEventOptions.lifeEventTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsLifeEventOptions`.
   */
  delete(
    planTypeId: string,
    lifeEventTypeId: string
  ): DeleteRequestBuilder<BenefitsLifeEventOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsLifeEventOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsLifeEventOptions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsLifeEventOptions<T>
  ): DeleteRequestBuilder<BenefitsLifeEventOptions<T>, T>;
  delete(
    planTypeIdOrEntity: any,
    lifeEventTypeId?: string
  ): DeleteRequestBuilder<BenefitsLifeEventOptions<T>, T> {
    return new DeleteRequestBuilder<BenefitsLifeEventOptions<T>, T>(
      this.entityApi,
      planTypeIdOrEntity instanceof BenefitsLifeEventOptions
        ? planTypeIdOrEntity
        : {
            PlanTypeId: planTypeIdOrEntity!,
            LifeEventTypeId: lifeEventTypeId!
          }
    );
  }
}
