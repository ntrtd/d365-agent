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
import { PaymentMethods } from './PaymentMethods';

/**
 * Request builder class for operations supported on the {@link PaymentMethods} entity.
 */
export class PaymentMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentMethods<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentMethods<T>, T> {
    return new GetAllRequestBuilder<PaymentMethods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentMethods`.
   */
  create(
    entity: PaymentMethods<T>
  ): CreateRequestBuilder<PaymentMethods<T>, T> {
    return new CreateRequestBuilder<PaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentMethods.dataAreaId}.
   * @param payMethod Key property. See {@link PaymentMethods.payMethod}.
   * @returns A request builder for creating requests to retrieve one `PaymentMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payMethod: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentMethods<T>, T> {
    return new GetByKeyRequestBuilder<PaymentMethods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PayMethod: payMethod
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentMethods`.
   */
  update(
    entity: PaymentMethods<T>
  ): UpdateRequestBuilder<PaymentMethods<T>, T> {
    return new UpdateRequestBuilder<PaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentMethods`.
   * @param dataAreaId Key property. See {@link PaymentMethods.dataAreaId}.
   * @param payMethod Key property. See {@link PaymentMethods.payMethod}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethods`.
   */
  delete(
    dataAreaId: string,
    payMethod: string
  ): DeleteRequestBuilder<PaymentMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethods` by taking the entity as a parameter.
   */
  delete(entity: PaymentMethods<T>): DeleteRequestBuilder<PaymentMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payMethod?: string
  ): DeleteRequestBuilder<PaymentMethods<T>, T> {
    return new DeleteRequestBuilder<PaymentMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayMethod: payMethod!
          }
    );
  }
}
