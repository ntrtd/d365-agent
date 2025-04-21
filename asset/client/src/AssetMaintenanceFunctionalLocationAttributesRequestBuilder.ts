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
import { AssetMaintenanceFunctionalLocationAttributes } from './AssetMaintenanceFunctionalLocationAttributes';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationAttributes} entity.
 */
export class AssetMaintenanceFunctionalLocationAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationAttributes<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.attributeTypeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    attributeTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceFunctionalLocationAttributes<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      AttributeTypeId: attributeTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationAttributes<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.functionalLocationId}.
   * @param attributeTypeId Key property. See {@link AssetMaintenanceFunctionalLocationAttributes.attributeTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    attributeTypeId: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationAttributes<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    attributeTypeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationAttributes<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationAttributes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocationAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            AttributeTypeId: attributeTypeId!
          }
    );
  }
}
