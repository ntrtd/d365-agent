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
import { RetailPackages } from './RetailPackages';

/**
 * Request builder class for operations supported on the {@link RetailPackages} entity.
 */
export class RetailPackagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPackages<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPackages` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPackages` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPackages<T>, T> {
    return new GetAllRequestBuilder<RetailPackages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPackages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPackages`.
   */
  create(
    entity: RetailPackages<T>
  ): CreateRequestBuilder<RetailPackages<T>, T> {
    return new CreateRequestBuilder<RetailPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPackages` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailPackages.dataAreaId}.
   * @param packageId Key property. See {@link RetailPackages.packageId}.
   * @returns A request builder for creating requests to retrieve one `RetailPackages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    packageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPackages<T>, T> {
    return new GetByKeyRequestBuilder<RetailPackages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PackageId: packageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPackages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPackages`.
   */
  update(
    entity: RetailPackages<T>
  ): UpdateRequestBuilder<RetailPackages<T>, T> {
    return new UpdateRequestBuilder<RetailPackages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPackages`.
   * @param dataAreaId Key property. See {@link RetailPackages.dataAreaId}.
   * @param packageId Key property. See {@link RetailPackages.packageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackages`.
   */
  delete(
    dataAreaId: string,
    packageId: string
  ): DeleteRequestBuilder<RetailPackages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPackages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPackages` by taking the entity as a parameter.
   */
  delete(entity: RetailPackages<T>): DeleteRequestBuilder<RetailPackages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    packageId?: string
  ): DeleteRequestBuilder<RetailPackages<T>, T> {
    return new DeleteRequestBuilder<RetailPackages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailPackages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PackageId: packageId!
          }
    );
  }
}
