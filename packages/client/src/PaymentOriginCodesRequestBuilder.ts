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
import { PaymentOriginCodes } from './PaymentOriginCodes';

/**
 * Request builder class for operations supported on the {@link PaymentOriginCodes} entity.
 */
export class PaymentOriginCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentOriginCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentOriginCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentOriginCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentOriginCodes<T>, T> {
    return new GetAllRequestBuilder<PaymentOriginCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentOriginCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentOriginCodes`.
   */
  create(
    entity: PaymentOriginCodes<T>
  ): CreateRequestBuilder<PaymentOriginCodes<T>, T> {
    return new CreateRequestBuilder<PaymentOriginCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentOriginCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentOriginCodes.dataAreaId}.
   * @param code Key property. See {@link PaymentOriginCodes.code}.
   * @returns A request builder for creating requests to retrieve one `PaymentOriginCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentOriginCodes<T>, T> {
    return new GetByKeyRequestBuilder<PaymentOriginCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentOriginCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentOriginCodes`.
   */
  update(
    entity: PaymentOriginCodes<T>
  ): UpdateRequestBuilder<PaymentOriginCodes<T>, T> {
    return new UpdateRequestBuilder<PaymentOriginCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentOriginCodes`.
   * @param dataAreaId Key property. See {@link PaymentOriginCodes.dataAreaId}.
   * @param code Key property. See {@link PaymentOriginCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOriginCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<PaymentOriginCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentOriginCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOriginCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentOriginCodes<T>
  ): DeleteRequestBuilder<PaymentOriginCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<PaymentOriginCodes<T>, T> {
    return new DeleteRequestBuilder<PaymentOriginCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentOriginCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
