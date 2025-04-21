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
import { CustomersBase } from './CustomersBase';

/**
 * Request builder class for operations supported on the {@link CustomersBase} entity.
 */
export class CustomersBaseRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomersBase<T>, T> {
  /**
   * Returns a request builder for querying all `CustomersBase` entities.
   * @returns A request builder for creating requests to retrieve all `CustomersBase` entities.
   */
  getAll(): GetAllRequestBuilder<CustomersBase<T>, T> {
    return new GetAllRequestBuilder<CustomersBase<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomersBase` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomersBase`.
   */
  create(entity: CustomersBase<T>): CreateRequestBuilder<CustomersBase<T>, T> {
    return new CreateRequestBuilder<CustomersBase<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomersBase` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomersBase.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersBase.customerAccount}.
   * @returns A request builder for creating requests to retrieve one `CustomersBase` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomersBase<T>, T> {
    return new GetByKeyRequestBuilder<CustomersBase<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CustomerAccount: customerAccount
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomersBase`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomersBase`.
   */
  update(entity: CustomersBase<T>): UpdateRequestBuilder<CustomersBase<T>, T> {
    return new UpdateRequestBuilder<CustomersBase<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomersBase`.
   * @param dataAreaId Key property. See {@link CustomersBase.dataAreaId}.
   * @param customerAccount Key property. See {@link CustomersBase.customerAccount}.
   * @returns A request builder for creating requests that delete an entity of type `CustomersBase`.
   */
  delete(
    dataAreaId: string,
    customerAccount: string
  ): DeleteRequestBuilder<CustomersBase<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomersBase`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomersBase` by taking the entity as a parameter.
   */
  delete(entity: CustomersBase<T>): DeleteRequestBuilder<CustomersBase<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccount?: string
  ): DeleteRequestBuilder<CustomersBase<T>, T> {
    return new DeleteRequestBuilder<CustomersBase<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomersBase
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccount: customerAccount!
          }
    );
  }
}
