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
import { CustomerHiearchies } from './CustomerHiearchies';

/**
 * Request builder class for operations supported on the {@link CustomerHiearchies} entity.
 */
export class CustomerHiearchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerHiearchies<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerHiearchies` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerHiearchies` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerHiearchies<T>, T> {
    return new GetAllRequestBuilder<CustomerHiearchies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerHiearchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerHiearchies`.
   */
  create(
    entity: CustomerHiearchies<T>
  ): CreateRequestBuilder<CustomerHiearchies<T>, T> {
    return new CreateRequestBuilder<CustomerHiearchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerHiearchies` entity based on its keys.
   * @param customerHierarchyId Key property. See {@link CustomerHiearchies.customerHierarchyId}.
   * @returns A request builder for creating requests to retrieve one `CustomerHiearchies` entity based on its keys.
   */
  getByKey(
    customerHierarchyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerHiearchies<T>, T> {
    return new GetByKeyRequestBuilder<CustomerHiearchies<T>, T>(
      this.entityApi,
      { CustomerHierarchyId: customerHierarchyId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerHiearchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerHiearchies`.
   */
  update(
    entity: CustomerHiearchies<T>
  ): UpdateRequestBuilder<CustomerHiearchies<T>, T> {
    return new UpdateRequestBuilder<CustomerHiearchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerHiearchies`.
   * @param customerHierarchyId Key property. See {@link CustomerHiearchies.customerHierarchyId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHiearchies`.
   */
  delete(
    customerHierarchyId: string
  ): DeleteRequestBuilder<CustomerHiearchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerHiearchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHiearchies` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerHiearchies<T>
  ): DeleteRequestBuilder<CustomerHiearchies<T>, T>;
  delete(
    customerHierarchyIdOrEntity: any
  ): DeleteRequestBuilder<CustomerHiearchies<T>, T> {
    return new DeleteRequestBuilder<CustomerHiearchies<T>, T>(
      this.entityApi,
      customerHierarchyIdOrEntity instanceof CustomerHiearchies
        ? customerHierarchyIdOrEntity
        : { CustomerHierarchyId: customerHierarchyIdOrEntity! }
    );
  }
}
