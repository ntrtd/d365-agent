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
import { EInvoiceErrorCodes } from './EInvoiceErrorCodes';

/**
 * Request builder class for operations supported on the {@link EInvoiceErrorCodes} entity.
 */
export class EInvoiceErrorCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EInvoiceErrorCodes<T>, T> {
  /**
   * Returns a request builder for querying all `EInvoiceErrorCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EInvoiceErrorCodes` entities.
   */
  getAll(): GetAllRequestBuilder<EInvoiceErrorCodes<T>, T> {
    return new GetAllRequestBuilder<EInvoiceErrorCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EInvoiceErrorCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EInvoiceErrorCodes`.
   */
  create(
    entity: EInvoiceErrorCodes<T>
  ): CreateRequestBuilder<EInvoiceErrorCodes<T>, T> {
    return new CreateRequestBuilder<EInvoiceErrorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EInvoiceErrorCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EInvoiceErrorCodes.dataAreaId}.
   * @param code Key property. See {@link EInvoiceErrorCodes.code}.
   * @returns A request builder for creating requests to retrieve one `EInvoiceErrorCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EInvoiceErrorCodes<T>, T> {
    return new GetByKeyRequestBuilder<EInvoiceErrorCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EInvoiceErrorCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EInvoiceErrorCodes`.
   */
  update(
    entity: EInvoiceErrorCodes<T>
  ): UpdateRequestBuilder<EInvoiceErrorCodes<T>, T> {
    return new UpdateRequestBuilder<EInvoiceErrorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EInvoiceErrorCodes`.
   * @param dataAreaId Key property. See {@link EInvoiceErrorCodes.dataAreaId}.
   * @param code Key property. See {@link EInvoiceErrorCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceErrorCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<EInvoiceErrorCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EInvoiceErrorCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceErrorCodes` by taking the entity as a parameter.
   */
  delete(
    entity: EInvoiceErrorCodes<T>
  ): DeleteRequestBuilder<EInvoiceErrorCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<EInvoiceErrorCodes<T>, T> {
    return new DeleteRequestBuilder<EInvoiceErrorCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EInvoiceErrorCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
