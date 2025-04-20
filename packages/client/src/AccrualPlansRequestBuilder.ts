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
import { AccrualPlans } from './AccrualPlans';

/**
 * Request builder class for operations supported on the {@link AccrualPlans} entity.
 */
export class AccrualPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualPlans<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualPlans` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualPlans` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualPlans<T>, T> {
    return new GetAllRequestBuilder<AccrualPlans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualPlans`.
   */
  create(entity: AccrualPlans<T>): CreateRequestBuilder<AccrualPlans<T>, T> {
    return new CreateRequestBuilder<AccrualPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AccrualPlans` entity based on its keys.
   * @param accrualId Key property. See {@link AccrualPlans.accrualId}.
   * @returns A request builder for creating requests to retrieve one `AccrualPlans` entity based on its keys.
   */
  getByKey(
    accrualId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccrualPlans<T>, T> {
    return new GetByKeyRequestBuilder<AccrualPlans<T>, T>(this.entityApi, {
      AccrualId: accrualId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualPlans`.
   */
  update(entity: AccrualPlans<T>): UpdateRequestBuilder<AccrualPlans<T>, T> {
    return new UpdateRequestBuilder<AccrualPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualPlans`.
   * @param accrualId Key property. See {@link AccrualPlans.accrualId}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualPlans`.
   */
  delete(accrualId: string): DeleteRequestBuilder<AccrualPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualPlans` by taking the entity as a parameter.
   */
  delete(entity: AccrualPlans<T>): DeleteRequestBuilder<AccrualPlans<T>, T>;
  delete(accrualIdOrEntity: any): DeleteRequestBuilder<AccrualPlans<T>, T> {
    return new DeleteRequestBuilder<AccrualPlans<T>, T>(
      this.entityApi,
      accrualIdOrEntity instanceof AccrualPlans
        ? accrualIdOrEntity
        : { AccrualId: accrualIdOrEntity! }
    );
  }
}
