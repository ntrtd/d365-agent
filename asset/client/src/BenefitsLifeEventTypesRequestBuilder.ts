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
import { BenefitsLifeEventTypes } from './BenefitsLifeEventTypes';

/**
 * Request builder class for operations supported on the {@link BenefitsLifeEventTypes} entity.
 */
export class BenefitsLifeEventTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsLifeEventTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsLifeEventTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsLifeEventTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsLifeEventTypes<T>, T> {
    return new GetAllRequestBuilder<BenefitsLifeEventTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsLifeEventTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsLifeEventTypes`.
   */
  create(
    entity: BenefitsLifeEventTypes<T>
  ): CreateRequestBuilder<BenefitsLifeEventTypes<T>, T> {
    return new CreateRequestBuilder<BenefitsLifeEventTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsLifeEventTypes` entity based on its keys.
   * @param lifeEventTypeId Key property. See {@link BenefitsLifeEventTypes.lifeEventTypeId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsLifeEventTypes` entity based on its keys.
   */
  getByKey(
    lifeEventTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsLifeEventTypes<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsLifeEventTypes<T>, T>(
      this.entityApi,
      { LifeEventTypeId: lifeEventTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsLifeEventTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsLifeEventTypes`.
   */
  update(
    entity: BenefitsLifeEventTypes<T>
  ): UpdateRequestBuilder<BenefitsLifeEventTypes<T>, T> {
    return new UpdateRequestBuilder<BenefitsLifeEventTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsLifeEventTypes`.
   * @param lifeEventTypeId Key property. See {@link BenefitsLifeEventTypes.lifeEventTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsLifeEventTypes`.
   */
  delete(
    lifeEventTypeId: string
  ): DeleteRequestBuilder<BenefitsLifeEventTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsLifeEventTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsLifeEventTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsLifeEventTypes<T>
  ): DeleteRequestBuilder<BenefitsLifeEventTypes<T>, T>;
  delete(
    lifeEventTypeIdOrEntity: any
  ): DeleteRequestBuilder<BenefitsLifeEventTypes<T>, T> {
    return new DeleteRequestBuilder<BenefitsLifeEventTypes<T>, T>(
      this.entityApi,
      lifeEventTypeIdOrEntity instanceof BenefitsLifeEventTypes
        ? lifeEventTypeIdOrEntity
        : { LifeEventTypeId: lifeEventTypeIdOrEntity! }
    );
  }
}
