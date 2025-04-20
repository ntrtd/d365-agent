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
import { EmploymentCategories } from './EmploymentCategories';
import { HcmEmploymentType } from './HcmEmploymentType';

/**
 * Request builder class for operations supported on the {@link EmploymentCategories} entity.
 */
export class EmploymentCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentCategories<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentCategories` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentCategories` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentCategories<T>, T> {
    return new GetAllRequestBuilder<EmploymentCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentCategories`.
   */
  create(
    entity: EmploymentCategories<T>
  ): CreateRequestBuilder<EmploymentCategories<T>, T> {
    return new CreateRequestBuilder<EmploymentCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentCategories` entity based on its keys.
   * @param workerType Key property. See {@link EmploymentCategories.workerType}.
   * @param employmentCategoryId Key property. See {@link EmploymentCategories.employmentCategoryId}.
   * @returns A request builder for creating requests to retrieve one `EmploymentCategories` entity based on its keys.
   */
  getByKey(
    workerType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmEmploymentType'
    >,
    employmentCategoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmploymentCategories<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentCategories<T>, T>(
      this.entityApi,
      {
        WorkerType: workerType,
        EmploymentCategoryId: employmentCategoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentCategories`.
   */
  update(
    entity: EmploymentCategories<T>
  ): UpdateRequestBuilder<EmploymentCategories<T>, T> {
    return new UpdateRequestBuilder<EmploymentCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentCategories`.
   * @param workerType Key property. See {@link EmploymentCategories.workerType}.
   * @param employmentCategoryId Key property. See {@link EmploymentCategories.employmentCategoryId}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentCategories`.
   */
  delete(
    workerType: HcmEmploymentType,
    employmentCategoryId: string
  ): DeleteRequestBuilder<EmploymentCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentCategories` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentCategories<T>
  ): DeleteRequestBuilder<EmploymentCategories<T>, T>;
  delete(
    workerTypeOrEntity: any,
    employmentCategoryId?: string
  ): DeleteRequestBuilder<EmploymentCategories<T>, T> {
    return new DeleteRequestBuilder<EmploymentCategories<T>, T>(
      this.entityApi,
      workerTypeOrEntity instanceof EmploymentCategories
        ? workerTypeOrEntity
        : {
            WorkerType: workerTypeOrEntity!,
            EmploymentCategoryId: employmentCategoryId!
          }
    );
  }
}
