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
import { CustomerPriorityClassificationGroup } from './CustomerPriorityClassificationGroup';

/**
 * Request builder class for operations supported on the {@link CustomerPriorityClassificationGroup} entity.
 */
export class CustomerPriorityClassificationGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPriorityClassificationGroup` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPriorityClassificationGroup` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
    return new GetAllRequestBuilder<CustomerPriorityClassificationGroup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPriorityClassificationGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPriorityClassificationGroup`.
   */
  create(
    entity: CustomerPriorityClassificationGroup<T>
  ): CreateRequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
    return new CreateRequestBuilder<CustomerPriorityClassificationGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPriorityClassificationGroup` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPriorityClassificationGroup.dataAreaId}.
   * @param customerPriorityClassificationGroupCode Key property. See {@link CustomerPriorityClassificationGroup.customerPriorityClassificationGroupCode}.
   * @returns A request builder for creating requests to retrieve one `CustomerPriorityClassificationGroup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerPriorityClassificationGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
    return new GetByKeyRequestBuilder<
      CustomerPriorityClassificationGroup<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerPriorityClassificationGroupCode:
        customerPriorityClassificationGroupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPriorityClassificationGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPriorityClassificationGroup`.
   */
  update(
    entity: CustomerPriorityClassificationGroup<T>
  ): UpdateRequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
    return new UpdateRequestBuilder<CustomerPriorityClassificationGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPriorityClassificationGroup`.
   * @param dataAreaId Key property. See {@link CustomerPriorityClassificationGroup.dataAreaId}.
   * @param customerPriorityClassificationGroupCode Key property. See {@link CustomerPriorityClassificationGroup.customerPriorityClassificationGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPriorityClassificationGroup`.
   */
  delete(
    dataAreaId: string,
    customerPriorityClassificationGroupCode: string
  ): DeleteRequestBuilder<CustomerPriorityClassificationGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPriorityClassificationGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPriorityClassificationGroup` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPriorityClassificationGroup<T>
  ): DeleteRequestBuilder<CustomerPriorityClassificationGroup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerPriorityClassificationGroupCode?: string
  ): DeleteRequestBuilder<CustomerPriorityClassificationGroup<T>, T> {
    return new DeleteRequestBuilder<CustomerPriorityClassificationGroup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPriorityClassificationGroup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerPriorityClassificationGroupCode:
              customerPriorityClassificationGroupCode!
          }
    );
  }
}
