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
import { TaxCertificates } from './TaxCertificates';

/**
 * Request builder class for operations supported on the {@link TaxCertificates} entity.
 */
export class TaxCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCertificates<T>, T> {
    return new GetAllRequestBuilder<TaxCertificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCertificates`.
   */
  create(
    entity: TaxCertificates<T>
  ): CreateRequestBuilder<TaxCertificates<T>, T> {
    return new CreateRequestBuilder<TaxCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxCertificates` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCertificates.dataAreaId}.
   * @param userId Key property. See {@link TaxCertificates.userId}.
   * @returns A request builder for creating requests to retrieve one `TaxCertificates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxCertificates<T>, T> {
    return new GetByKeyRequestBuilder<TaxCertificates<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      UserId: userId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCertificates`.
   */
  update(
    entity: TaxCertificates<T>
  ): UpdateRequestBuilder<TaxCertificates<T>, T> {
    return new UpdateRequestBuilder<TaxCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCertificates`.
   * @param dataAreaId Key property. See {@link TaxCertificates.dataAreaId}.
   * @param userId Key property. See {@link TaxCertificates.userId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCertificates`.
   */
  delete(
    dataAreaId: string,
    userId: string
  ): DeleteRequestBuilder<TaxCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCertificates<T>
  ): DeleteRequestBuilder<TaxCertificates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    userId?: string
  ): DeleteRequestBuilder<TaxCertificates<T>, T> {
    return new DeleteRequestBuilder<TaxCertificates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCertificates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UserId: userId!
          }
    );
  }
}
