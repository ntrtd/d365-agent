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
import { CertificateTypes } from './CertificateTypes';

/**
 * Request builder class for operations supported on the {@link CertificateTypes} entity.
 */
export class CertificateTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CertificateTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateTypes<T>, T> {
    return new GetAllRequestBuilder<CertificateTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CertificateTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateTypes`.
   */
  create(
    entity: CertificateTypes<T>
  ): CreateRequestBuilder<CertificateTypes<T>, T> {
    return new CreateRequestBuilder<CertificateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CertificateTypes` entity based on its keys.
   * @param certificateType Key property. See {@link CertificateTypes.certificateType}.
   * @returns A request builder for creating requests to retrieve one `CertificateTypes` entity based on its keys.
   */
  getByKey(
    certificateType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CertificateTypes<T>, T> {
    return new GetByKeyRequestBuilder<CertificateTypes<T>, T>(this.entityApi, {
      CertificateType: certificateType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CertificateTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateTypes`.
   */
  update(
    entity: CertificateTypes<T>
  ): UpdateRequestBuilder<CertificateTypes<T>, T> {
    return new UpdateRequestBuilder<CertificateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CertificateTypes`.
   * @param certificateType Key property. See {@link CertificateTypes.certificateType}.
   * @returns A request builder for creating requests that delete an entity of type `CertificateTypes`.
   */
  delete(certificateType: string): DeleteRequestBuilder<CertificateTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CertificateTypes<T>
  ): DeleteRequestBuilder<CertificateTypes<T>, T>;
  delete(
    certificateTypeOrEntity: any
  ): DeleteRequestBuilder<CertificateTypes<T>, T> {
    return new DeleteRequestBuilder<CertificateTypes<T>, T>(
      this.entityApi,
      certificateTypeOrEntity instanceof CertificateTypes
        ? certificateTypeOrEntity
        : { CertificateType: certificateTypeOrEntity! }
    );
  }
}
