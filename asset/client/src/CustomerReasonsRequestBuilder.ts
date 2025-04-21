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
import { CustomerReasons } from './CustomerReasons';

/**
 * Request builder class for operations supported on the {@link CustomerReasons} entity.
 */
export class CustomerReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerReasons<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerReasons` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerReasons` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerReasons<T>, T> {
    return new GetAllRequestBuilder<CustomerReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerReasons`.
   */
  create(
    entity: CustomerReasons<T>
  ): CreateRequestBuilder<CustomerReasons<T>, T> {
    return new CreateRequestBuilder<CustomerReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerReasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link CustomerReasons.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `CustomerReasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerReasons<T>, T> {
    return new GetByKeyRequestBuilder<CustomerReasons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonCode: reasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerReasons`.
   */
  update(
    entity: CustomerReasons<T>
  ): UpdateRequestBuilder<CustomerReasons<T>, T> {
    return new UpdateRequestBuilder<CustomerReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerReasons`.
   * @param dataAreaId Key property. See {@link CustomerReasons.dataAreaId}.
   * @param reasonCode Key property. See {@link CustomerReasons.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerReasons`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<CustomerReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerReasons` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerReasons<T>
  ): DeleteRequestBuilder<CustomerReasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<CustomerReasons<T>, T> {
    return new DeleteRequestBuilder<CustomerReasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerReasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
