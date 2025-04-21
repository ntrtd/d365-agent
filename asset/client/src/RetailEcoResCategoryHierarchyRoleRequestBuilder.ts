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
import { RetailEcoResCategoryHierarchyRole } from './RetailEcoResCategoryHierarchyRole';

/**
 * Request builder class for operations supported on the {@link RetailEcoResCategoryHierarchyRole} entity.
 */
export class RetailEcoResCategoryHierarchyRoleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResCategoryHierarchyRole` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResCategoryHierarchyRole` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEcoResCategoryHierarchyRole` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResCategoryHierarchyRole`.
   */
  create(
    entity: RetailEcoResCategoryHierarchyRole<T>
  ): CreateRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
    return new CreateRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResCategoryHierarchyRole` entity based on its keys.
   * @param namedCategoryHierarchyRoleAsInt Key property. See {@link RetailEcoResCategoryHierarchyRole.namedCategoryHierarchyRoleAsInt}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategoryHierarchyRole.ecoResCategoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResCategoryHierarchyRole` entity based on its keys.
   */
  getByKey(
    namedCategoryHierarchyRoleAsInt: DeserializedType<T, 'Edm.Int32'>,
    ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>(
      this.entityApi,
      {
        NamedCategoryHierarchyRoleAsInt: namedCategoryHierarchyRoleAsInt,
        EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResCategoryHierarchyRole`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResCategoryHierarchyRole`.
   */
  update(
    entity: RetailEcoResCategoryHierarchyRole<T>
  ): UpdateRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryHierarchyRole`.
   * @param namedCategoryHierarchyRoleAsInt Key property. See {@link RetailEcoResCategoryHierarchyRole.namedCategoryHierarchyRoleAsInt}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategoryHierarchyRole.ecoResCategoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryHierarchyRole`.
   */
  delete(
    namedCategoryHierarchyRoleAsInt: number,
    ecoResCategoryHierarchyName: string
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryHierarchyRole`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryHierarchyRole` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResCategoryHierarchyRole<T>
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>;
  delete(
    namedCategoryHierarchyRoleAsIntOrEntity: any,
    ecoResCategoryHierarchyName?: string
  ): DeleteRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResCategoryHierarchyRole<T>, T>(
      this.entityApi,
      namedCategoryHierarchyRoleAsIntOrEntity instanceof
      RetailEcoResCategoryHierarchyRole
        ? namedCategoryHierarchyRoleAsIntOrEntity
        : {
            NamedCategoryHierarchyRoleAsInt:
              namedCategoryHierarchyRoleAsIntOrEntity!,
            EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName!
          }
    );
  }
}
