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
import { RetailEcoResCategory } from './RetailEcoResCategory';

/**
 * Request builder class for operations supported on the {@link RetailEcoResCategory} entity.
 */
export class RetailEcoResCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResCategory<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResCategory` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResCategory` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResCategory<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailEcoResCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResCategory`.
   */
  create(
    entity: RetailEcoResCategory<T>
  ): CreateRequestBuilder<RetailEcoResCategory<T>, T> {
    return new CreateRequestBuilder<RetailEcoResCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResCategory` entity based on its keys.
   * @param name Key property. See {@link RetailEcoResCategory.name}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategory.ecoResCategoryHierarchyName}.
   * @param ecoResCategory1Name Key property. See {@link RetailEcoResCategory.ecoResCategory1Name}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResCategory` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    ecoResCategory1Name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResCategory<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResCategory<T>, T>(
      this.entityApi,
      {
        Name: name,
        EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName,
        EcoResCategory1_Name: ecoResCategory1Name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResCategory`.
   */
  update(
    entity: RetailEcoResCategory<T>
  ): UpdateRequestBuilder<RetailEcoResCategory<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategory`.
   * @param name Key property. See {@link RetailEcoResCategory.name}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategory.ecoResCategoryHierarchyName}.
   * @param ecoResCategory1Name Key property. See {@link RetailEcoResCategory.ecoResCategory1Name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategory`.
   */
  delete(
    name: string,
    ecoResCategoryHierarchyName: string,
    ecoResCategory1Name: string
  ): DeleteRequestBuilder<RetailEcoResCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategory` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResCategory<T>
  ): DeleteRequestBuilder<RetailEcoResCategory<T>, T>;
  delete(
    nameOrEntity: any,
    ecoResCategoryHierarchyName?: string,
    ecoResCategory1Name?: string
  ): DeleteRequestBuilder<RetailEcoResCategory<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResCategory<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailEcoResCategory
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName!,
            EcoResCategory1_Name: ecoResCategory1Name!
          }
    );
  }
}
