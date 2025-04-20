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
import { CaseCategoryHierarchyDetails } from './CaseCategoryHierarchyDetails';
import { CaseCategoryType } from './CaseCategoryType';

/**
 * Request builder class for operations supported on the {@link CaseCategoryHierarchyDetails} entity.
 */
export class CaseCategoryHierarchyDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
  /**
   * Returns a request builder for querying all `CaseCategoryHierarchyDetails` entities.
   * @returns A request builder for creating requests to retrieve all `CaseCategoryHierarchyDetails` entities.
   */
  getAll(): GetAllRequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
    return new GetAllRequestBuilder<CaseCategoryHierarchyDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CaseCategoryHierarchyDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CaseCategoryHierarchyDetails`.
   */
  create(
    entity: CaseCategoryHierarchyDetails<T>
  ): CreateRequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
    return new CreateRequestBuilder<CaseCategoryHierarchyDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CaseCategoryHierarchyDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link CaseCategoryHierarchyDetails.dataAreaId}.
   * @param categoryType Key property. See {@link CaseCategoryHierarchyDetails.categoryType}.
   * @param caseCategory Key property. See {@link CaseCategoryHierarchyDetails.caseCategory}.
   * @returns A request builder for creating requests to retrieve one `CaseCategoryHierarchyDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    categoryType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CaseCategoryType'
    >,
    caseCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
    return new GetByKeyRequestBuilder<CaseCategoryHierarchyDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CategoryType: categoryType,
        CaseCategory: caseCategory
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CaseCategoryHierarchyDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CaseCategoryHierarchyDetails`.
   */
  update(
    entity: CaseCategoryHierarchyDetails<T>
  ): UpdateRequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
    return new UpdateRequestBuilder<CaseCategoryHierarchyDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CaseCategoryHierarchyDetails`.
   * @param dataAreaId Key property. See {@link CaseCategoryHierarchyDetails.dataAreaId}.
   * @param categoryType Key property. See {@link CaseCategoryHierarchyDetails.categoryType}.
   * @param caseCategory Key property. See {@link CaseCategoryHierarchyDetails.caseCategory}.
   * @returns A request builder for creating requests that delete an entity of type `CaseCategoryHierarchyDetails`.
   */
  delete(
    dataAreaId: string,
    categoryType: CaseCategoryType,
    caseCategory: string
  ): DeleteRequestBuilder<CaseCategoryHierarchyDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CaseCategoryHierarchyDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CaseCategoryHierarchyDetails` by taking the entity as a parameter.
   */
  delete(
    entity: CaseCategoryHierarchyDetails<T>
  ): DeleteRequestBuilder<CaseCategoryHierarchyDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    categoryType?: CaseCategoryType,
    caseCategory?: string
  ): DeleteRequestBuilder<CaseCategoryHierarchyDetails<T>, T> {
    return new DeleteRequestBuilder<CaseCategoryHierarchyDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CaseCategoryHierarchyDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CategoryType: categoryType!,
            CaseCategory: caseCategory!
          }
    );
  }
}
