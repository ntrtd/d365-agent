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
import { RetailUserDefinedCertificateProfileSettings } from './RetailUserDefinedCertificateProfileSettings';

/**
 * Request builder class for operations supported on the {@link RetailUserDefinedCertificateProfileSettings} entity.
 */
export class RetailUserDefinedCertificateProfileSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T> {
  /**
   * Returns a request builder for querying all `RetailUserDefinedCertificateProfileSettings` entities.
   * @returns A request builder for creating requests to retrieve all `RetailUserDefinedCertificateProfileSettings` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailUserDefinedCertificateProfileSettings<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailUserDefinedCertificateProfileSettings<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailUserDefinedCertificateProfileSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailUserDefinedCertificateProfileSettings`.
   */
  create(
    entity: RetailUserDefinedCertificateProfileSettings<T>
  ): CreateRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T> {
    return new CreateRequestBuilder<
      RetailUserDefinedCertificateProfileSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailUserDefinedCertificateProfileSettings` entity based on its keys.
   * @param certificateProfile Key property. See {@link RetailUserDefinedCertificateProfileSettings.certificateProfile}.
   * @param legalEntity Key property. See {@link RetailUserDefinedCertificateProfileSettings.legalEntity}.
   * @param priority Key property. See {@link RetailUserDefinedCertificateProfileSettings.priority}.
   * @returns A request builder for creating requests to retrieve one `RetailUserDefinedCertificateProfileSettings` entity based on its keys.
   */
  getByKey(
    certificateProfile: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailUserDefinedCertificateProfileSettings<T>,
      T
    >(this.entityApi, {
      CertificateProfile: certificateProfile,
      LegalEntity: legalEntity,
      Priority: priority
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailUserDefinedCertificateProfileSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailUserDefinedCertificateProfileSettings`.
   */
  update(
    entity: RetailUserDefinedCertificateProfileSettings<T>
  ): UpdateRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T> {
    return new UpdateRequestBuilder<
      RetailUserDefinedCertificateProfileSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailUserDefinedCertificateProfileSettings`.
   * @param certificateProfile Key property. See {@link RetailUserDefinedCertificateProfileSettings.certificateProfile}.
   * @param legalEntity Key property. See {@link RetailUserDefinedCertificateProfileSettings.legalEntity}.
   * @param priority Key property. See {@link RetailUserDefinedCertificateProfileSettings.priority}.
   * @returns A request builder for creating requests that delete an entity of type `RetailUserDefinedCertificateProfileSettings`.
   */
  delete(
    certificateProfile: string,
    legalEntity: string,
    priority: number
  ): DeleteRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailUserDefinedCertificateProfileSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailUserDefinedCertificateProfileSettings` by taking the entity as a parameter.
   */
  delete(
    entity: RetailUserDefinedCertificateProfileSettings<T>
  ): DeleteRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T>;
  delete(
    certificateProfileOrEntity: any,
    legalEntity?: string,
    priority?: number
  ): DeleteRequestBuilder<RetailUserDefinedCertificateProfileSettings<T>, T> {
    return new DeleteRequestBuilder<
      RetailUserDefinedCertificateProfileSettings<T>,
      T
    >(
      this.entityApi,
      certificateProfileOrEntity instanceof
      RetailUserDefinedCertificateProfileSettings
        ? certificateProfileOrEntity
        : {
            CertificateProfile: certificateProfileOrEntity!,
            LegalEntity: legalEntity!,
            Priority: priority!
          }
    );
  }
}
