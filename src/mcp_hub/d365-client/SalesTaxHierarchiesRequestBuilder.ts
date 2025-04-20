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
import { SalesTaxHierarchies } from './SalesTaxHierarchies';

/**
 * Request builder class for operations supported on the {@link SalesTaxHierarchies} entity.
 */
export class SalesTaxHierarchiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxHierarchies<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTaxHierarchies` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxHierarchies` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxHierarchies<T>, T> {
    return new GetAllRequestBuilder<SalesTaxHierarchies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTaxHierarchies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxHierarchies`.
   */
  create(
    entity: SalesTaxHierarchies<T>
  ): CreateRequestBuilder<SalesTaxHierarchies<T>, T> {
    return new CreateRequestBuilder<SalesTaxHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTaxHierarchies` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTaxHierarchies.dataAreaId}.
   * @param hierarchyName Key property. See {@link SalesTaxHierarchies.hierarchyName}.
   * @param hierarchyVersion Key property. See {@link SalesTaxHierarchies.hierarchyVersion}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxHierarchies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    hierarchyName: DeserializedType<T, 'Edm.String'>,
    hierarchyVersion: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SalesTaxHierarchies<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxHierarchies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HierarchyName: hierarchyName,
        HierarchyVersion: hierarchyVersion
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxHierarchies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxHierarchies`.
   */
  update(
    entity: SalesTaxHierarchies<T>
  ): UpdateRequestBuilder<SalesTaxHierarchies<T>, T> {
    return new UpdateRequestBuilder<SalesTaxHierarchies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxHierarchies`.
   * @param dataAreaId Key property. See {@link SalesTaxHierarchies.dataAreaId}.
   * @param hierarchyName Key property. See {@link SalesTaxHierarchies.hierarchyName}.
   * @param hierarchyVersion Key property. See {@link SalesTaxHierarchies.hierarchyVersion}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxHierarchies`.
   */
  delete(
    dataAreaId: string,
    hierarchyName: string,
    hierarchyVersion: number
  ): DeleteRequestBuilder<SalesTaxHierarchies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxHierarchies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxHierarchies` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxHierarchies<T>
  ): DeleteRequestBuilder<SalesTaxHierarchies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    hierarchyName?: string,
    hierarchyVersion?: number
  ): DeleteRequestBuilder<SalesTaxHierarchies<T>, T> {
    return new DeleteRequestBuilder<SalesTaxHierarchies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTaxHierarchies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HierarchyName: hierarchyName!,
            HierarchyVersion: hierarchyVersion!
          }
    );
  }
}
