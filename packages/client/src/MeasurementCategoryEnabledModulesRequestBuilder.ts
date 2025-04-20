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
import { MeasurementCategoryEnabledModules } from './MeasurementCategoryEnabledModules';
import { MeasurementCategoryEnabledForModule } from './MeasurementCategoryEnabledForModule';

/**
 * Request builder class for operations supported on the {@link MeasurementCategoryEnabledModules} entity.
 */
export class MeasurementCategoryEnabledModulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
  /**
   * Returns a request builder for querying all `MeasurementCategoryEnabledModules` entities.
   * @returns A request builder for creating requests to retrieve all `MeasurementCategoryEnabledModules` entities.
   */
  getAll(): GetAllRequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
    return new GetAllRequestBuilder<MeasurementCategoryEnabledModules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MeasurementCategoryEnabledModules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MeasurementCategoryEnabledModules`.
   */
  create(
    entity: MeasurementCategoryEnabledModules<T>
  ): CreateRequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
    return new CreateRequestBuilder<MeasurementCategoryEnabledModules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MeasurementCategoryEnabledModules` entity based on its keys.
   * @param module Key property. See {@link MeasurementCategoryEnabledModules.module}.
   * @param companyId Key property. See {@link MeasurementCategoryEnabledModules.companyId}.
   * @param categoryId Key property. See {@link MeasurementCategoryEnabledModules.categoryId}.
   * @returns A request builder for creating requests to retrieve one `MeasurementCategoryEnabledModules` entity based on its keys.
   */
  getByKey(
    module: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.MeasurementCategoryEnabledForModule'
    >,
    companyId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
    return new GetByKeyRequestBuilder<MeasurementCategoryEnabledModules<T>, T>(
      this.entityApi,
      {
        Module: module,
        CompanyId: companyId,
        CategoryId: categoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MeasurementCategoryEnabledModules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MeasurementCategoryEnabledModules`.
   */
  update(
    entity: MeasurementCategoryEnabledModules<T>
  ): UpdateRequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
    return new UpdateRequestBuilder<MeasurementCategoryEnabledModules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MeasurementCategoryEnabledModules`.
   * @param module Key property. See {@link MeasurementCategoryEnabledModules.module}.
   * @param companyId Key property. See {@link MeasurementCategoryEnabledModules.companyId}.
   * @param categoryId Key property. See {@link MeasurementCategoryEnabledModules.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `MeasurementCategoryEnabledModules`.
   */
  delete(
    module: MeasurementCategoryEnabledForModule,
    companyId: string,
    categoryId: string
  ): DeleteRequestBuilder<MeasurementCategoryEnabledModules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MeasurementCategoryEnabledModules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MeasurementCategoryEnabledModules` by taking the entity as a parameter.
   */
  delete(
    entity: MeasurementCategoryEnabledModules<T>
  ): DeleteRequestBuilder<MeasurementCategoryEnabledModules<T>, T>;
  delete(
    moduleOrEntity: any,
    companyId?: string,
    categoryId?: string
  ): DeleteRequestBuilder<MeasurementCategoryEnabledModules<T>, T> {
    return new DeleteRequestBuilder<MeasurementCategoryEnabledModules<T>, T>(
      this.entityApi,
      moduleOrEntity instanceof MeasurementCategoryEnabledModules
        ? moduleOrEntity
        : {
            Module: moduleOrEntity!,
            CompanyId: companyId!,
            CategoryId: categoryId!
          }
    );
  }
}
