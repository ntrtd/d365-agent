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
import { CustomerCreditGroups } from './CustomerCreditGroups';

/**
 * Request builder class for operations supported on the {@link CustomerCreditGroups} entity.
 */
export class CustomerCreditGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerCreditGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerCreditGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerCreditGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerCreditGroups<T>, T> {
    return new GetAllRequestBuilder<CustomerCreditGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerCreditGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerCreditGroups`.
   */
  create(
    entity: CustomerCreditGroups<T>
  ): CreateRequestBuilder<CustomerCreditGroups<T>, T> {
    return new CreateRequestBuilder<CustomerCreditGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerCreditGroups` entity based on its keys.
   * @param creditLimitId Key property. See {@link CustomerCreditGroups.creditLimitId}.
   * @returns A request builder for creating requests to retrieve one `CustomerCreditGroups` entity based on its keys.
   */
  getByKey(
    creditLimitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerCreditGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomerCreditGroups<T>, T>(
      this.entityApi,
      { CreditLimitId: creditLimitId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerCreditGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerCreditGroups`.
   */
  update(
    entity: CustomerCreditGroups<T>
  ): UpdateRequestBuilder<CustomerCreditGroups<T>, T> {
    return new UpdateRequestBuilder<CustomerCreditGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerCreditGroups`.
   * @param creditLimitId Key property. See {@link CustomerCreditGroups.creditLimitId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCreditGroups`.
   */
  delete(
    creditLimitId: string
  ): DeleteRequestBuilder<CustomerCreditGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerCreditGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCreditGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerCreditGroups<T>
  ): DeleteRequestBuilder<CustomerCreditGroups<T>, T>;
  delete(
    creditLimitIdOrEntity: any
  ): DeleteRequestBuilder<CustomerCreditGroups<T>, T> {
    return new DeleteRequestBuilder<CustomerCreditGroups<T>, T>(
      this.entityApi,
      creditLimitIdOrEntity instanceof CustomerCreditGroups
        ? creditLimitIdOrEntity
        : { CreditLimitId: creditLimitIdOrEntity! }
    );
  }
}
