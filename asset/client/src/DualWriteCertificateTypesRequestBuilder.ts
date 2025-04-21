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
import { DualWriteCertificateTypes } from './DualWriteCertificateTypes';

/**
 * Request builder class for operations supported on the {@link DualWriteCertificateTypes} entity.
 */
export class DualWriteCertificateTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteCertificateTypes<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteCertificateTypes` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteCertificateTypes` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteCertificateTypes<T>, T> {
    return new GetAllRequestBuilder<DualWriteCertificateTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteCertificateTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteCertificateTypes`.
   */
  create(
    entity: DualWriteCertificateTypes<T>
  ): CreateRequestBuilder<DualWriteCertificateTypes<T>, T> {
    return new CreateRequestBuilder<DualWriteCertificateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteCertificateTypes` entity based on its keys.
   * @param certificateType Key property. See {@link DualWriteCertificateTypes.certificateType}.
   * @param characteristicType Key property. See {@link DualWriteCertificateTypes.characteristicType}.
   * @returns A request builder for creating requests to retrieve one `DualWriteCertificateTypes` entity based on its keys.
   */
  getByKey(
    certificateType: DeserializedType<T, 'Edm.String'>,
    characteristicType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteCertificateTypes<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteCertificateTypes<T>, T>(
      this.entityApi,
      {
        CertificateType: certificateType,
        CharacteristicType: characteristicType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteCertificateTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteCertificateTypes`.
   */
  update(
    entity: DualWriteCertificateTypes<T>
  ): UpdateRequestBuilder<DualWriteCertificateTypes<T>, T> {
    return new UpdateRequestBuilder<DualWriteCertificateTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteCertificateTypes`.
   * @param certificateType Key property. See {@link DualWriteCertificateTypes.certificateType}.
   * @param characteristicType Key property. See {@link DualWriteCertificateTypes.characteristicType}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCertificateTypes`.
   */
  delete(
    certificateType: string,
    characteristicType: string
  ): DeleteRequestBuilder<DualWriteCertificateTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteCertificateTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteCertificateTypes` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteCertificateTypes<T>
  ): DeleteRequestBuilder<DualWriteCertificateTypes<T>, T>;
  delete(
    certificateTypeOrEntity: any,
    characteristicType?: string
  ): DeleteRequestBuilder<DualWriteCertificateTypes<T>, T> {
    return new DeleteRequestBuilder<DualWriteCertificateTypes<T>, T>(
      this.entityApi,
      certificateTypeOrEntity instanceof DualWriteCertificateTypes
        ? certificateTypeOrEntity
        : {
            CertificateType: certificateTypeOrEntity!,
            CharacteristicType: characteristicType!
          }
    );
  }
}
