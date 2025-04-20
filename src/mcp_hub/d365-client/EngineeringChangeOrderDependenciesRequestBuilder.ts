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
import { EngineeringChangeOrderDependencies } from './EngineeringChangeOrderDependencies';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderDependencies} entity.
 */
export class EngineeringChangeOrderDependenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderDependencies` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderDependencies` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeOrderDependencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderDependencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderDependencies`.
   */
  create(
    entity: EngineeringChangeOrderDependencies<T>
  ): CreateRequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeOrderDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderDependencies` entity based on its keys.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeOrderDependencies.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeOrderDependencies.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeOrderDependencies.dependencyTransactionDescription}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderDependencies.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderDependencies` entity based on its keys.
   */
  getByKey(
    dependentProductNumber: DeserializedType<T, 'Edm.String'>,
    dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>,
    dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeOrderDependencies<T>, T>(
      this.entityApi,
      {
        DependentProductNumber: dependentProductNumber,
        DependencyLegalEntityId: dependencyLegalEntityId,
        DependencyTransactionDescription: dependencyTransactionDescription,
        EngineeringChangeOrderNumber: engineeringChangeOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderDependencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderDependencies`.
   */
  update(
    entity: EngineeringChangeOrderDependencies<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeOrderDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderDependencies`.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeOrderDependencies.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeOrderDependencies.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeOrderDependencies.dependencyTransactionDescription}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderDependencies.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderDependencies`.
   */
  delete(
    dependentProductNumber: string,
    dependencyLegalEntityId: string,
    dependencyTransactionDescription: string,
    engineeringChangeOrderNumber: string
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderDependencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderDependencies` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderDependencies<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencies<T>, T>;
  delete(
    dependentProductNumberOrEntity: any,
    dependencyLegalEntityId?: string,
    dependencyTransactionDescription?: string,
    engineeringChangeOrderNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencies<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeOrderDependencies<T>, T>(
      this.entityApi,
      dependentProductNumberOrEntity instanceof
      EngineeringChangeOrderDependencies
        ? dependentProductNumberOrEntity
        : {
            DependentProductNumber: dependentProductNumberOrEntity!,
            DependencyLegalEntityId: dependencyLegalEntityId!,
            DependencyTransactionDescription: dependencyTransactionDescription!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!
          }
    );
  }
}
