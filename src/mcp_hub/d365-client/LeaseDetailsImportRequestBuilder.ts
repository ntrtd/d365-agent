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
import { LeaseDetailsImport } from './LeaseDetailsImport';

/**
 * Request builder class for operations supported on the {@link LeaseDetailsImport} entity.
 */
export class LeaseDetailsImportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseDetailsImport<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseDetailsImport` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseDetailsImport` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseDetailsImport<T>, T> {
    return new GetAllRequestBuilder<LeaseDetailsImport<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseDetailsImport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseDetailsImport`.
   */
  create(
    entity: LeaseDetailsImport<T>
  ): CreateRequestBuilder<LeaseDetailsImport<T>, T> {
    return new CreateRequestBuilder<LeaseDetailsImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseDetailsImport` entity based on its keys.
   * @param leaseId Key property. See {@link LeaseDetailsImport.leaseId}.
   * @param importId Key property. See {@link LeaseDetailsImport.importId}.
   * @returns A request builder for creating requests to retrieve one `LeaseDetailsImport` entity based on its keys.
   */
  getByKey(
    leaseId: DeserializedType<T, 'Edm.String'>,
    importId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseDetailsImport<T>, T> {
    return new GetByKeyRequestBuilder<LeaseDetailsImport<T>, T>(
      this.entityApi,
      {
        LeaseId: leaseId,
        ImportId: importId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseDetailsImport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseDetailsImport`.
   */
  update(
    entity: LeaseDetailsImport<T>
  ): UpdateRequestBuilder<LeaseDetailsImport<T>, T> {
    return new UpdateRequestBuilder<LeaseDetailsImport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseDetailsImport`.
   * @param leaseId Key property. See {@link LeaseDetailsImport.leaseId}.
   * @param importId Key property. See {@link LeaseDetailsImport.importId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDetailsImport`.
   */
  delete(
    leaseId: string,
    importId: string
  ): DeleteRequestBuilder<LeaseDetailsImport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseDetailsImport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseDetailsImport` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseDetailsImport<T>
  ): DeleteRequestBuilder<LeaseDetailsImport<T>, T>;
  delete(
    leaseIdOrEntity: any,
    importId?: string
  ): DeleteRequestBuilder<LeaseDetailsImport<T>, T> {
    return new DeleteRequestBuilder<LeaseDetailsImport<T>, T>(
      this.entityApi,
      leaseIdOrEntity instanceof LeaseDetailsImport
        ? leaseIdOrEntity
        : {
            LeaseId: leaseIdOrEntity!,
            ImportId: importId!
          }
    );
  }
}
