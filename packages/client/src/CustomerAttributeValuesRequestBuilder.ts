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
import { CustomerAttributeValues } from './CustomerAttributeValues';

/**
 * Request builder class for operations supported on the {@link CustomerAttributeValues} entity.
 */
export class CustomerAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerAttributeValues<T>, T> {
    return new GetAllRequestBuilder<CustomerAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerAttributeValues`.
   */
  create(
    entity: CustomerAttributeValues<T>
  ): CreateRequestBuilder<CustomerAttributeValues<T>, T> {
    return new CreateRequestBuilder<CustomerAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerAttributeValues` entity based on its keys.
   * @param accountNum Key property. See {@link CustomerAttributeValues.accountNum}.
   * @param customerDataAreaId Key property. See {@link CustomerAttributeValues.customerDataAreaId}.
   * @param attributeName Key property. See {@link CustomerAttributeValues.attributeName}.
   * @returns A request builder for creating requests to retrieve one `CustomerAttributeValues` entity based on its keys.
   */
  getByKey(
    accountNum: DeserializedType<T, 'Edm.String'>,
    customerDataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<CustomerAttributeValues<T>, T>(
      this.entityApi,
      {
        AccountNum: accountNum,
        CustomerDataAreaId: customerDataAreaId,
        AttributeName: attributeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerAttributeValues`.
   */
  update(
    entity: CustomerAttributeValues<T>
  ): UpdateRequestBuilder<CustomerAttributeValues<T>, T> {
    return new UpdateRequestBuilder<CustomerAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerAttributeValues`.
   * @param accountNum Key property. See {@link CustomerAttributeValues.accountNum}.
   * @param customerDataAreaId Key property. See {@link CustomerAttributeValues.customerDataAreaId}.
   * @param attributeName Key property. See {@link CustomerAttributeValues.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttributeValues`.
   */
  delete(
    accountNum: string,
    customerDataAreaId: string,
    attributeName: string
  ): DeleteRequestBuilder<CustomerAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerAttributeValues<T>
  ): DeleteRequestBuilder<CustomerAttributeValues<T>, T>;
  delete(
    accountNumOrEntity: any,
    customerDataAreaId?: string,
    attributeName?: string
  ): DeleteRequestBuilder<CustomerAttributeValues<T>, T> {
    return new DeleteRequestBuilder<CustomerAttributeValues<T>, T>(
      this.entityApi,
      accountNumOrEntity instanceof CustomerAttributeValues
        ? accountNumOrEntity
        : {
            AccountNum: accountNumOrEntity!,
            CustomerDataAreaId: customerDataAreaId!,
            AttributeName: attributeName!
          }
    );
  }
}
