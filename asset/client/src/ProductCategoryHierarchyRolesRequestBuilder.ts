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
import { ProductCategoryHierarchyRoles } from './ProductCategoryHierarchyRoles';
import { EcoResCategoryNamedHierarchyRole } from './EcoResCategoryNamedHierarchyRole';

/**
 * Request builder class for operations supported on the {@link ProductCategoryHierarchyRoles} entity.
 */
export class ProductCategoryHierarchyRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
  /**
   * Returns a request builder for querying all `ProductCategoryHierarchyRoles` entities.
   * @returns A request builder for creating requests to retrieve all `ProductCategoryHierarchyRoles` entities.
   */
  getAll(): GetAllRequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
    return new GetAllRequestBuilder<ProductCategoryHierarchyRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductCategoryHierarchyRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductCategoryHierarchyRoles`.
   */
  create(
    entity: ProductCategoryHierarchyRoles<T>
  ): CreateRequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
    return new CreateRequestBuilder<ProductCategoryHierarchyRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductCategoryHierarchyRoles` entity based on its keys.
   * @param hierarchyRole Key property. See {@link ProductCategoryHierarchyRoles.hierarchyRole}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategoryHierarchyRoles.productCategoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProductCategoryHierarchyRoles` entity based on its keys.
   */
  getByKey(
    hierarchyRole: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EcoResCategoryNamedHierarchyRole'
    >,
    productCategoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
    return new GetByKeyRequestBuilder<ProductCategoryHierarchyRoles<T>, T>(
      this.entityApi,
      {
        HierarchyRole: hierarchyRole,
        ProductCategoryHierarchyName: productCategoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductCategoryHierarchyRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductCategoryHierarchyRoles`.
   */
  update(
    entity: ProductCategoryHierarchyRoles<T>
  ): UpdateRequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
    return new UpdateRequestBuilder<ProductCategoryHierarchyRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryHierarchyRoles`.
   * @param hierarchyRole Key property. See {@link ProductCategoryHierarchyRoles.hierarchyRole}.
   * @param productCategoryHierarchyName Key property. See {@link ProductCategoryHierarchyRoles.productCategoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryHierarchyRoles`.
   */
  delete(
    hierarchyRole: EcoResCategoryNamedHierarchyRole,
    productCategoryHierarchyName: string
  ): DeleteRequestBuilder<ProductCategoryHierarchyRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductCategoryHierarchyRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductCategoryHierarchyRoles` by taking the entity as a parameter.
   */
  delete(
    entity: ProductCategoryHierarchyRoles<T>
  ): DeleteRequestBuilder<ProductCategoryHierarchyRoles<T>, T>;
  delete(
    hierarchyRoleOrEntity: any,
    productCategoryHierarchyName?: string
  ): DeleteRequestBuilder<ProductCategoryHierarchyRoles<T>, T> {
    return new DeleteRequestBuilder<ProductCategoryHierarchyRoles<T>, T>(
      this.entityApi,
      hierarchyRoleOrEntity instanceof ProductCategoryHierarchyRoles
        ? hierarchyRoleOrEntity
        : {
            HierarchyRole: hierarchyRoleOrEntity!,
            ProductCategoryHierarchyName: productCategoryHierarchyName!
          }
    );
  }
}
