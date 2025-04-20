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
import { CustomerRebates } from './CustomerRebates';

/**
 * Request builder class for operations supported on the {@link CustomerRebates} entity.
 */
export class CustomerRebatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRebates<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRebates` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRebates` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerRebates<T>, T> {
    return new GetAllRequestBuilder<CustomerRebates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerRebates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRebates`.
   */
  create(
    entity: CustomerRebates<T>
  ): CreateRequestBuilder<CustomerRebates<T>, T> {
    return new CreateRequestBuilder<CustomerRebates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerRebates` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerRebates.dataAreaId}.
   * @param rebateId Key property. See {@link CustomerRebates.rebateId}.
   * @returns A request builder for creating requests to retrieve one `CustomerRebates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerRebates<T>, T> {
    return new GetByKeyRequestBuilder<CustomerRebates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RebateId: rebateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRebates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRebates`.
   */
  update(
    entity: CustomerRebates<T>
  ): UpdateRequestBuilder<CustomerRebates<T>, T> {
    return new UpdateRequestBuilder<CustomerRebates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRebates`.
   * @param dataAreaId Key property. See {@link CustomerRebates.dataAreaId}.
   * @param rebateId Key property. See {@link CustomerRebates.rebateId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebates`.
   */
  delete(
    dataAreaId: string,
    rebateId: string
  ): DeleteRequestBuilder<CustomerRebates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRebates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebates` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRebates<T>
  ): DeleteRequestBuilder<CustomerRebates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateId?: string
  ): DeleteRequestBuilder<CustomerRebates<T>, T> {
    return new DeleteRequestBuilder<CustomerRebates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerRebates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateId: rebateId!
          }
    );
  }
}
