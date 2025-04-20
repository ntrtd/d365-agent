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
import { CustomerHierarchyCatalogs } from './CustomerHierarchyCatalogs';

/**
 * Request builder class for operations supported on the {@link CustomerHierarchyCatalogs} entity.
 */
export class CustomerHierarchyCatalogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerHierarchyCatalogs<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerHierarchyCatalogs` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerHierarchyCatalogs` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerHierarchyCatalogs<T>, T> {
    return new GetAllRequestBuilder<CustomerHierarchyCatalogs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerHierarchyCatalogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerHierarchyCatalogs`.
   */
  create(
    entity: CustomerHierarchyCatalogs<T>
  ): CreateRequestBuilder<CustomerHierarchyCatalogs<T>, T> {
    return new CreateRequestBuilder<CustomerHierarchyCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerHierarchyCatalogs` entity based on its keys.
   * @param customerHierarchyId Key property. See {@link CustomerHierarchyCatalogs.customerHierarchyId}.
   * @param priority Key property. See {@link CustomerHierarchyCatalogs.priority}.
   * @returns A request builder for creating requests to retrieve one `CustomerHierarchyCatalogs` entity based on its keys.
   */
  getByKey(
    customerHierarchyId: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CustomerHierarchyCatalogs<T>, T> {
    return new GetByKeyRequestBuilder<CustomerHierarchyCatalogs<T>, T>(
      this.entityApi,
      {
        CustomerHierarchyId: customerHierarchyId,
        Priority: priority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerHierarchyCatalogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerHierarchyCatalogs`.
   */
  update(
    entity: CustomerHierarchyCatalogs<T>
  ): UpdateRequestBuilder<CustomerHierarchyCatalogs<T>, T> {
    return new UpdateRequestBuilder<CustomerHierarchyCatalogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchyCatalogs`.
   * @param customerHierarchyId Key property. See {@link CustomerHierarchyCatalogs.customerHierarchyId}.
   * @param priority Key property. See {@link CustomerHierarchyCatalogs.priority}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchyCatalogs`.
   */
  delete(
    customerHierarchyId: string,
    priority: number
  ): DeleteRequestBuilder<CustomerHierarchyCatalogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerHierarchyCatalogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerHierarchyCatalogs` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerHierarchyCatalogs<T>
  ): DeleteRequestBuilder<CustomerHierarchyCatalogs<T>, T>;
  delete(
    customerHierarchyIdOrEntity: any,
    priority?: number
  ): DeleteRequestBuilder<CustomerHierarchyCatalogs<T>, T> {
    return new DeleteRequestBuilder<CustomerHierarchyCatalogs<T>, T>(
      this.entityApi,
      customerHierarchyIdOrEntity instanceof CustomerHierarchyCatalogs
        ? customerHierarchyIdOrEntity
        : {
            CustomerHierarchyId: customerHierarchyIdOrEntity!,
            Priority: priority!
          }
    );
  }
}
