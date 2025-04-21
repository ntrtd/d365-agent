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
import { SpecialCategoryMembers } from './SpecialCategoryMembers';

/**
 * Request builder class for operations supported on the {@link SpecialCategoryMembers} entity.
 */
export class SpecialCategoryMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SpecialCategoryMembers<T>, T> {
  /**
   * Returns a request builder for querying all `SpecialCategoryMembers` entities.
   * @returns A request builder for creating requests to retrieve all `SpecialCategoryMembers` entities.
   */
  getAll(): GetAllRequestBuilder<SpecialCategoryMembers<T>, T> {
    return new GetAllRequestBuilder<SpecialCategoryMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SpecialCategoryMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpecialCategoryMembers`.
   */
  create(
    entity: SpecialCategoryMembers<T>
  ): CreateRequestBuilder<SpecialCategoryMembers<T>, T> {
    return new CreateRequestBuilder<SpecialCategoryMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SpecialCategoryMembers` entity based on its keys.
   * @param headerProductCategoryHierarchyName Key property. See {@link SpecialCategoryMembers.headerProductCategoryHierarchyName}.
   * @param headerProductCategoryName Key property. See {@link SpecialCategoryMembers.headerProductCategoryName}.
   * @param lineProductCategoryHierarchyName Key property. See {@link SpecialCategoryMembers.lineProductCategoryHierarchyName}.
   * @param lineProductCategoryName Key property. See {@link SpecialCategoryMembers.lineProductCategoryName}.
   * @param productNumber Key property. See {@link SpecialCategoryMembers.productNumber}.
   * @param productVariantNumber Key property. See {@link SpecialCategoryMembers.productVariantNumber}.
   * @returns A request builder for creating requests to retrieve one `SpecialCategoryMembers` entity based on its keys.
   */
  getByKey(
    headerProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    headerProductCategoryName: DeserializedType<T, 'Edm.String'>,
    lineProductCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    lineProductCategoryName: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    productVariantNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SpecialCategoryMembers<T>, T> {
    return new GetByKeyRequestBuilder<SpecialCategoryMembers<T>, T>(
      this.entityApi,
      {
        HeaderProductCategoryHierarchyName: headerProductCategoryHierarchyName,
        HeaderProductCategoryName: headerProductCategoryName,
        LineProductCategoryHierarchyName: lineProductCategoryHierarchyName,
        LineProductCategoryName: lineProductCategoryName,
        ProductNumber: productNumber,
        ProductVariantNumber: productVariantNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SpecialCategoryMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpecialCategoryMembers`.
   */
  update(
    entity: SpecialCategoryMembers<T>
  ): UpdateRequestBuilder<SpecialCategoryMembers<T>, T> {
    return new UpdateRequestBuilder<SpecialCategoryMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SpecialCategoryMembers`.
   * @param headerProductCategoryHierarchyName Key property. See {@link SpecialCategoryMembers.headerProductCategoryHierarchyName}.
   * @param headerProductCategoryName Key property. See {@link SpecialCategoryMembers.headerProductCategoryName}.
   * @param lineProductCategoryHierarchyName Key property. See {@link SpecialCategoryMembers.lineProductCategoryHierarchyName}.
   * @param lineProductCategoryName Key property. See {@link SpecialCategoryMembers.lineProductCategoryName}.
   * @param productNumber Key property. See {@link SpecialCategoryMembers.productNumber}.
   * @param productVariantNumber Key property. See {@link SpecialCategoryMembers.productVariantNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SpecialCategoryMembers`.
   */
  delete(
    headerProductCategoryHierarchyName: string,
    headerProductCategoryName: string,
    lineProductCategoryHierarchyName: string,
    lineProductCategoryName: string,
    productNumber: string,
    productVariantNumber: string
  ): DeleteRequestBuilder<SpecialCategoryMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SpecialCategoryMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpecialCategoryMembers` by taking the entity as a parameter.
   */
  delete(
    entity: SpecialCategoryMembers<T>
  ): DeleteRequestBuilder<SpecialCategoryMembers<T>, T>;
  delete(
    headerProductCategoryHierarchyNameOrEntity: any,
    headerProductCategoryName?: string,
    lineProductCategoryHierarchyName?: string,
    lineProductCategoryName?: string,
    productNumber?: string,
    productVariantNumber?: string
  ): DeleteRequestBuilder<SpecialCategoryMembers<T>, T> {
    return new DeleteRequestBuilder<SpecialCategoryMembers<T>, T>(
      this.entityApi,
      headerProductCategoryHierarchyNameOrEntity instanceof
      SpecialCategoryMembers
        ? headerProductCategoryHierarchyNameOrEntity
        : {
            HeaderProductCategoryHierarchyName:
              headerProductCategoryHierarchyNameOrEntity!,
            HeaderProductCategoryName: headerProductCategoryName!,
            LineProductCategoryHierarchyName: lineProductCategoryHierarchyName!,
            LineProductCategoryName: lineProductCategoryName!,
            ProductNumber: productNumber!,
            ProductVariantNumber: productVariantNumber!
          }
    );
  }
}
