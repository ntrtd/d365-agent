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
import { EngineeringChangeRequestDependencies } from './EngineeringChangeRequestDependencies';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeRequestDependencies} entity.
 */
export class EngineeringChangeRequestDependenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeRequestDependencies` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeRequestDependencies` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeRequestDependencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeRequestDependencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeRequestDependencies`.
   */
  create(
    entity: EngineeringChangeRequestDependencies<T>
  ): CreateRequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeRequestDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeRequestDependencies` entity based on its keys.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeRequestDependencies.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeRequestDependencies.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeRequestDependencies.dependencyTransactionDescription}.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestDependencies.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeRequestDependencies` entity based on its keys.
   */
  getByKey(
    dependentProductNumber: DeserializedType<T, 'Edm.String'>,
    dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>,
    dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>,
    engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeRequestDependencies<T>,
      T
    >(this.entityApi, {
      DependentProductNumber: dependentProductNumber,
      DependencyLegalEntityId: dependencyLegalEntityId,
      DependencyTransactionDescription: dependencyTransactionDescription,
      EngineeringChangeRequestNumber: engineeringChangeRequestNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeRequestDependencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeRequestDependencies`.
   */
  update(
    entity: EngineeringChangeRequestDependencies<T>
  ): UpdateRequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeRequestDependencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestDependencies`.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeRequestDependencies.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeRequestDependencies.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeRequestDependencies.dependencyTransactionDescription}.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestDependencies.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestDependencies`.
   */
  delete(
    dependentProductNumber: string,
    dependencyLegalEntityId: string,
    dependencyTransactionDescription: string,
    engineeringChangeRequestNumber: string
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestDependencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestDependencies` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeRequestDependencies<T>
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencies<T>, T>;
  delete(
    dependentProductNumberOrEntity: any,
    dependencyLegalEntityId?: string,
    dependencyTransactionDescription?: string,
    engineeringChangeRequestNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencies<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeRequestDependencies<T>, T>(
      this.entityApi,
      dependentProductNumberOrEntity instanceof
      EngineeringChangeRequestDependencies
        ? dependentProductNumberOrEntity
        : {
            DependentProductNumber: dependentProductNumberOrEntity!,
            DependencyLegalEntityId: dependencyLegalEntityId!,
            DependencyTransactionDescription: dependencyTransactionDescription!,
            EngineeringChangeRequestNumber: engineeringChangeRequestNumber!
          }
    );
  }
}
