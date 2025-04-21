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
import { CustomersV2 } from './CustomersV2';

/**
 * Request builder class for operations supported on the {@link CustomersV2} entity.
 */
export class CustomersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomersV2<T>, T> {
  /**
   * Returns a request builder for querying all `CustomersV2` entities.
   * @returns A request builder for creating requests to retrieve all `CustomersV2` entities.
   */
  getAll(): GetAllRequestBuilder<CustomersV2<T>, T> {
    return new GetAllRequestBuilder<CustomersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomersV2`.
   */
  create(entity: CustomersV2<T>): CreateRequestBuilder<CustomersV2<T>, T> {
    return new CreateRequestBuilder<CustomersV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomersV2.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersV2.customerAccount}.
   * @returns A request builder for creating requests to retrieve one `CustomersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomersV2<T>, T> {
    return new GetByKeyRequestBuilder<CustomersV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerAccount: customerAccount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomersV2`.
   */
  update(entity: CustomersV2<T>): UpdateRequestBuilder<CustomersV2<T>, T> {
    return new UpdateRequestBuilder<CustomersV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomersV2`.
   * @param dataAreaId Key property. See {@link CustomersV2.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersV2.customerAccount}.
   * @returns A request builder for creating requests that delete an entity of type `CustomersV2`.
   */
  delete(
    dataAreaId: string,
    customerAccount: string
  ): DeleteRequestBuilder<CustomersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomersV2` by taking the entity as a parameter.
   */
  delete(entity: CustomersV2<T>): DeleteRequestBuilder<CustomersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccount?: string
  ): DeleteRequestBuilder<CustomersV2<T>, T> {
    return new DeleteRequestBuilder<CustomersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccount: customerAccount!
          }
    );
  }
}
