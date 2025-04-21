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
import { PaymentOrderTypes } from './PaymentOrderTypes';

/**
 * Request builder class for operations supported on the {@link PaymentOrderTypes} entity.
 */
export class PaymentOrderTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentOrderTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentOrderTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentOrderTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentOrderTypes<T>, T> {
    return new GetAllRequestBuilder<PaymentOrderTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentOrderTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentOrderTypes`.
   */
  create(
    entity: PaymentOrderTypes<T>
  ): CreateRequestBuilder<PaymentOrderTypes<T>, T> {
    return new CreateRequestBuilder<PaymentOrderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentOrderTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentOrderTypes.dataAreaId}.
   * @param code Key property. See {@link PaymentOrderTypes.code}.
   * @returns A request builder for creating requests to retrieve one `PaymentOrderTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentOrderTypes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentOrderTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentOrderTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentOrderTypes`.
   */
  update(
    entity: PaymentOrderTypes<T>
  ): UpdateRequestBuilder<PaymentOrderTypes<T>, T> {
    return new UpdateRequestBuilder<PaymentOrderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentOrderTypes`.
   * @param dataAreaId Key property. See {@link PaymentOrderTypes.dataAreaId}.
   * @param code Key property. See {@link PaymentOrderTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOrderTypes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<PaymentOrderTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentOrderTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOrderTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentOrderTypes<T>
  ): DeleteRequestBuilder<PaymentOrderTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<PaymentOrderTypes<T>, T> {
    return new DeleteRequestBuilder<PaymentOrderTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentOrderTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
