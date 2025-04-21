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
import { SysAadClients } from './SysAadClients';

/**
 * Request builder class for operations supported on the {@link SysAadClients} entity.
 */
export class SysAadClientsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SysAadClients<T>, T> {
  /**
   * Returns a request builder for querying all `SysAadClients` entities.
   * @returns A request builder for creating requests to retrieve all `SysAadClients` entities.
   */
  getAll(): GetAllRequestBuilder<SysAadClients<T>, T> {
    return new GetAllRequestBuilder<SysAadClients<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SysAadClients` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SysAadClients`.
   */
  create(entity: SysAadClients<T>): CreateRequestBuilder<SysAadClients<T>, T> {
    return new CreateRequestBuilder<SysAadClients<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SysAadClients` entity based on its keys.
   * @param aadClientId Key property. See {@link SysAadClients.aadClientId}.
   * @returns A request builder for creating requests to retrieve one `SysAadClients` entity based on its keys.
   */
  getByKey(
    aadClientId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SysAadClients<T>, T> {
    return new GetByKeyRequestBuilder<SysAadClients<T>, T>(this.entityApi, {
      AADClientId: aadClientId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SysAadClients`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SysAadClients`.
   */
  update(entity: SysAadClients<T>): UpdateRequestBuilder<SysAadClients<T>, T> {
    return new UpdateRequestBuilder<SysAadClients<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SysAadClients`.
   * @param aadClientId Key property. See {@link SysAadClients.aadClientId}.
   * @returns A request builder for creating requests that delete an entity of type `SysAadClients`.
   */
  delete(aadClientId: string): DeleteRequestBuilder<SysAadClients<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SysAadClients`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SysAadClients` by taking the entity as a parameter.
   */
  delete(entity: SysAadClients<T>): DeleteRequestBuilder<SysAadClients<T>, T>;
  delete(aadClientIdOrEntity: any): DeleteRequestBuilder<SysAadClients<T>, T> {
    return new DeleteRequestBuilder<SysAadClients<T>, T>(
      this.entityApi,
      aadClientIdOrEntity instanceof SysAadClients
        ? aadClientIdOrEntity
        : { AADClientId: aadClientIdOrEntity! }
    );
  }
}
