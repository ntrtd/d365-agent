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
import { OfBusinesses } from './OfBusinesses';

/**
 * Request builder class for operations supported on the {@link OfBusinesses} entity.
 */
export class OfBusinessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OfBusinesses<T>, T> {
  /**
   * Returns a request builder for querying all `OfBusinesses` entities.
   * @returns A request builder for creating requests to retrieve all `OfBusinesses` entities.
   */
  getAll(): GetAllRequestBuilder<OfBusinesses<T>, T> {
    return new GetAllRequestBuilder<OfBusinesses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OfBusinesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OfBusinesses`.
   */
  create(entity: OfBusinesses<T>): CreateRequestBuilder<OfBusinesses<T>, T> {
    return new CreateRequestBuilder<OfBusinesses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `OfBusinesses` entity based on its keys.
   * @param dataAreaId Key property. See {@link OfBusinesses.dataAreaId}.
   * @param lineOfBusiness Key property. See {@link OfBusinesses.lineOfBusiness}.
   * @returns A request builder for creating requests to retrieve one `OfBusinesses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineOfBusiness: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OfBusinesses<T>, T> {
    return new GetByKeyRequestBuilder<OfBusinesses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LineOfBusiness: lineOfBusiness
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OfBusinesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OfBusinesses`.
   */
  update(entity: OfBusinesses<T>): UpdateRequestBuilder<OfBusinesses<T>, T> {
    return new UpdateRequestBuilder<OfBusinesses<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OfBusinesses`.
   * @param dataAreaId Key property. See {@link OfBusinesses.dataAreaId}.
   * @param lineOfBusiness Key property. See {@link OfBusinesses.lineOfBusiness}.
   * @returns A request builder for creating requests that delete an entity of type `OfBusinesses`.
   */
  delete(
    dataAreaId: string,
    lineOfBusiness: string
  ): DeleteRequestBuilder<OfBusinesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OfBusinesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OfBusinesses` by taking the entity as a parameter.
   */
  delete(entity: OfBusinesses<T>): DeleteRequestBuilder<OfBusinesses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineOfBusiness?: string
  ): DeleteRequestBuilder<OfBusinesses<T>, T> {
    return new DeleteRequestBuilder<OfBusinesses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OfBusinesses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineOfBusiness: lineOfBusiness!
          }
    );
  }
}
