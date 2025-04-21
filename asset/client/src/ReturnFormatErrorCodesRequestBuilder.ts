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
import { ReturnFormatErrorCodes } from './ReturnFormatErrorCodes';

/**
 * Request builder class for operations supported on the {@link ReturnFormatErrorCodes} entity.
 */
export class ReturnFormatErrorCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnFormatErrorCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnFormatErrorCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnFormatErrorCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnFormatErrorCodes<T>, T> {
    return new GetAllRequestBuilder<ReturnFormatErrorCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnFormatErrorCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnFormatErrorCodes`.
   */
  create(
    entity: ReturnFormatErrorCodes<T>
  ): CreateRequestBuilder<ReturnFormatErrorCodes<T>, T> {
    return new CreateRequestBuilder<ReturnFormatErrorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnFormatErrorCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnFormatErrorCodes.dataAreaId}.
   * @param code Key property. See {@link ReturnFormatErrorCodes.code}.
   * @returns A request builder for creating requests to retrieve one `ReturnFormatErrorCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnFormatErrorCodes<T>, T> {
    return new GetByKeyRequestBuilder<ReturnFormatErrorCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnFormatErrorCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnFormatErrorCodes`.
   */
  update(
    entity: ReturnFormatErrorCodes<T>
  ): UpdateRequestBuilder<ReturnFormatErrorCodes<T>, T> {
    return new UpdateRequestBuilder<ReturnFormatErrorCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnFormatErrorCodes`.
   * @param dataAreaId Key property. See {@link ReturnFormatErrorCodes.dataAreaId}.
   * @param code Key property. See {@link ReturnFormatErrorCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnFormatErrorCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<ReturnFormatErrorCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnFormatErrorCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnFormatErrorCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnFormatErrorCodes<T>
  ): DeleteRequestBuilder<ReturnFormatErrorCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<ReturnFormatErrorCodes<T>, T> {
    return new DeleteRequestBuilder<ReturnFormatErrorCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnFormatErrorCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
