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
import { CustomerGroups } from './CustomerGroups';

/**
 * Request builder class for operations supported on the {@link CustomerGroups} entity.
 */
export class CustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerGroups<T>, T> {
    return new GetAllRequestBuilder<CustomerGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerGroups`.
   */
  create(
    entity: CustomerGroups<T>
  ): CreateRequestBuilder<CustomerGroups<T>, T> {
    return new CreateRequestBuilder<CustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerGroups.dataAreaId}.
   * @param customerGroupId Key property. See {@link CustomerGroups.customerGroupId}.
   * @returns A request builder for creating requests to retrieve one `CustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomerGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerGroupId: customerGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerGroups`.
   */
  update(
    entity: CustomerGroups<T>
  ): UpdateRequestBuilder<CustomerGroups<T>, T> {
    return new UpdateRequestBuilder<CustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerGroups`.
   * @param dataAreaId Key property. See {@link CustomerGroups.dataAreaId}.
   * @param customerGroupId Key property. See {@link CustomerGroups.customerGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerGroups`.
   */
  delete(
    dataAreaId: string,
    customerGroupId: string
  ): DeleteRequestBuilder<CustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerGroups` by taking the entity as a parameter.
   */
  delete(entity: CustomerGroups<T>): DeleteRequestBuilder<CustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerGroupId?: string
  ): DeleteRequestBuilder<CustomerGroups<T>, T> {
    return new DeleteRequestBuilder<CustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerGroupId: customerGroupId!
          }
    );
  }
}
