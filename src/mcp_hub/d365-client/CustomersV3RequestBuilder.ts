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
import { CustomersV3 } from './CustomersV3';

/**
 * Request builder class for operations supported on the {@link CustomersV3} entity.
 */
export class CustomersV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomersV3<T>, T> {
  /**
   * Returns a request builder for querying all `CustomersV3` entities.
   * @returns A request builder for creating requests to retrieve all `CustomersV3` entities.
   */
  getAll(): GetAllRequestBuilder<CustomersV3<T>, T> {
    return new GetAllRequestBuilder<CustomersV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomersV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomersV3`.
   */
  create(entity: CustomersV3<T>): CreateRequestBuilder<CustomersV3<T>, T> {
    return new CreateRequestBuilder<CustomersV3<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomersV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomersV3.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersV3.customerAccount}.
   * @returns A request builder for creating requests to retrieve one `CustomersV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomersV3<T>, T> {
    return new GetByKeyRequestBuilder<CustomersV3<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerAccount: customerAccount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomersV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomersV3`.
   */
  update(entity: CustomersV3<T>): UpdateRequestBuilder<CustomersV3<T>, T> {
    return new UpdateRequestBuilder<CustomersV3<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomersV3`.
   * @param dataAreaId Key property. See {@link CustomersV3.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersV3.customerAccount}.
   * @returns A request builder for creating requests that delete an entity of type `CustomersV3`.
   */
  delete(
    dataAreaId: string,
    customerAccount: string
  ): DeleteRequestBuilder<CustomersV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomersV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomersV3` by taking the entity as a parameter.
   */
  delete(entity: CustomersV3<T>): DeleteRequestBuilder<CustomersV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccount?: string
  ): DeleteRequestBuilder<CustomersV3<T>, T> {
    return new DeleteRequestBuilder<CustomersV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomersV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccount: customerAccount!
          }
    );
  }
}
