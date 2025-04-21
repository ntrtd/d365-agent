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
import { ReturnPackages } from './ReturnPackages';

/**
 * Request builder class for operations supported on the {@link ReturnPackages} entity.
 */
export class ReturnPackagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnPackages<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnPackages` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnPackages` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnPackages<T>, T> {
    return new GetAllRequestBuilder<ReturnPackages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnPackages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnPackages`.
   */
  create(
    entity: ReturnPackages<T>
  ): CreateRequestBuilder<ReturnPackages<T>, T> {
    return new CreateRequestBuilder<ReturnPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnPackages` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnPackages.dataAreaId}.
   * @param packagingCode Key property. See {@link ReturnPackages.packagingCode}.
   * @returns A request builder for creating requests to retrieve one `ReturnPackages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    packagingCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnPackages<T>, T> {
    return new GetByKeyRequestBuilder<ReturnPackages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PackagingCode: packagingCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnPackages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnPackages`.
   */
  update(
    entity: ReturnPackages<T>
  ): UpdateRequestBuilder<ReturnPackages<T>, T> {
    return new UpdateRequestBuilder<ReturnPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnPackages`.
   * @param dataAreaId Key property. See {@link ReturnPackages.dataAreaId}.
   * @param packagingCode Key property. See {@link ReturnPackages.packagingCode}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPackages`.
   */
  delete(
    dataAreaId: string,
    packagingCode: string
  ): DeleteRequestBuilder<ReturnPackages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnPackages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnPackages` by taking the entity as a parameter.
   */
  delete(entity: ReturnPackages<T>): DeleteRequestBuilder<ReturnPackages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    packagingCode?: string
  ): DeleteRequestBuilder<ReturnPackages<T>, T> {
    return new DeleteRequestBuilder<ReturnPackages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnPackages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PackagingCode: packagingCode!
          }
    );
  }
}
