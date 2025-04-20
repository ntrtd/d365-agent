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
import { BankClientDocumentTypes } from './BankClientDocumentTypes';

/**
 * Request builder class for operations supported on the {@link BankClientDocumentTypes} entity.
 */
export class BankClientDocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankClientDocumentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BankClientDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BankClientDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BankClientDocumentTypes<T>, T> {
    return new GetAllRequestBuilder<BankClientDocumentTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankClientDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankClientDocumentTypes`.
   */
  create(
    entity: BankClientDocumentTypes<T>
  ): CreateRequestBuilder<BankClientDocumentTypes<T>, T> {
    return new CreateRequestBuilder<BankClientDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankClientDocumentTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankClientDocumentTypes.dataAreaId}.
   * @param code Key property. See {@link BankClientDocumentTypes.code}.
   * @returns A request builder for creating requests to retrieve one `BankClientDocumentTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankClientDocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<BankClientDocumentTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankClientDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankClientDocumentTypes`.
   */
  update(
    entity: BankClientDocumentTypes<T>
  ): UpdateRequestBuilder<BankClientDocumentTypes<T>, T> {
    return new UpdateRequestBuilder<BankClientDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankClientDocumentTypes`.
   * @param dataAreaId Key property. See {@link BankClientDocumentTypes.dataAreaId}.
   * @param code Key property. See {@link BankClientDocumentTypes.code}.
   * @returns A request builder for creating requests that delete an entity of type `BankClientDocumentTypes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<BankClientDocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankClientDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankClientDocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: BankClientDocumentTypes<T>
  ): DeleteRequestBuilder<BankClientDocumentTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<BankClientDocumentTypes<T>, T> {
    return new DeleteRequestBuilder<BankClientDocumentTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankClientDocumentTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
