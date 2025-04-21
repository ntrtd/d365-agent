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
import { DataManagementTemplateSourceDependencies } from './DataManagementTemplateSourceDependencies';

/**
 * Request builder class for operations supported on the {@link DataManagementTemplateSourceDependencies} entity.
 */
export class DataManagementTemplateSourceDependenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DataManagementTemplateSourceDependencies<T>, T> {
  /**
   * Returns a request builder for querying all `DataManagementTemplateSourceDependencies` entities.
   * @returns A request builder for creating requests to retrieve all `DataManagementTemplateSourceDependencies` entities.
   */
  getAll(): GetAllRequestBuilder<
    DataManagementTemplateSourceDependencies<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DataManagementTemplateSourceDependencies<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DataManagementTemplateSourceDependencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DataManagementTemplateSourceDependencies`.
   */
  create(
    entity: DataManagementTemplateSourceDependencies<T>
  ): CreateRequestBuilder<DataManagementTemplateSourceDependencies<T>, T> {
    return new CreateRequestBuilder<
      DataManagementTemplateSourceDependencies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DataManagementTemplateSourceDependencies` entity based on its keys.
   * @param templateId Key property. See {@link DataManagementTemplateSourceDependencies.templateId}.
   * @param sourceEntity Key property. See {@link DataManagementTemplateSourceDependencies.sourceEntity}.
   * @param dependentOnEntity Key property. See {@link DataManagementTemplateSourceDependencies.dependentOnEntity}.
   * @param relationName Key property. See {@link DataManagementTemplateSourceDependencies.relationName}.
   * @returns A request builder for creating requests to retrieve one `DataManagementTemplateSourceDependencies` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.String'>,
    sourceEntity: DeserializedType<T, 'Edm.String'>,
    dependentOnEntity: DeserializedType<T, 'Edm.String'>,
    relationName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DataManagementTemplateSourceDependencies<T>, T> {
    return new GetByKeyRequestBuilder<
      DataManagementTemplateSourceDependencies<T>,
      T
    >(this.entityApi, {
      TemplateId: templateId,
      SourceEntity: sourceEntity,
      DependentOnEntity: dependentOnEntity,
      RelationName: relationName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DataManagementTemplateSourceDependencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DataManagementTemplateSourceDependencies`.
   */
  update(
    entity: DataManagementTemplateSourceDependencies<T>
  ): UpdateRequestBuilder<DataManagementTemplateSourceDependencies<T>, T> {
    return new UpdateRequestBuilder<
      DataManagementTemplateSourceDependencies<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateSourceDependencies`.
   * @param templateId Key property. See {@link DataManagementTemplateSourceDependencies.templateId}.
   * @param sourceEntity Key property. See {@link DataManagementTemplateSourceDependencies.sourceEntity}.
   * @param dependentOnEntity Key property. See {@link DataManagementTemplateSourceDependencies.dependentOnEntity}.
   * @param relationName Key property. See {@link DataManagementTemplateSourceDependencies.relationName}.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateSourceDependencies`.
   */
  delete(
    templateId: string,
    sourceEntity: string,
    dependentOnEntity: string,
    relationName: string
  ): DeleteRequestBuilder<DataManagementTemplateSourceDependencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DataManagementTemplateSourceDependencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DataManagementTemplateSourceDependencies` by taking the entity as a parameter.
   */
  delete(
    entity: DataManagementTemplateSourceDependencies<T>
  ): DeleteRequestBuilder<DataManagementTemplateSourceDependencies<T>, T>;
  delete(
    templateIdOrEntity: any,
    sourceEntity?: string,
    dependentOnEntity?: string,
    relationName?: string
  ): DeleteRequestBuilder<DataManagementTemplateSourceDependencies<T>, T> {
    return new DeleteRequestBuilder<
      DataManagementTemplateSourceDependencies<T>,
      T
    >(
      this.entityApi,
      templateIdOrEntity instanceof DataManagementTemplateSourceDependencies
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            SourceEntity: sourceEntity!,
            DependentOnEntity: dependentOnEntity!,
            RelationName: relationName!
          }
    );
  }
}
