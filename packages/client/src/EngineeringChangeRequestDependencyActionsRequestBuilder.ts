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
import { EngineeringChangeRequestDependencyActions } from './EngineeringChangeRequestDependencyActions';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeRequestDependencyActions} entity.
 */
export class EngineeringChangeRequestDependencyActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeRequestDependencyActions<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeRequestDependencyActions` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeRequestDependencyActions` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeRequestDependencyActions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeRequestDependencyActions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeRequestDependencyActions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeRequestDependencyActions`.
   */
  create(
    entity: EngineeringChangeRequestDependencyActions<T>
  ): CreateRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeRequestDependencyActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeRequestDependencyActions` entity based on its keys.
   * @param actionClassName Key property. See {@link EngineeringChangeRequestDependencyActions.actionClassName}.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeRequestDependencyActions.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeRequestDependencyActions.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeRequestDependencyActions.dependencyTransactionDescription}.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestDependencyActions.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeRequestDependencyActions` entity based on its keys.
   */
  getByKey(
    actionClassName: DeserializedType<T, 'Edm.String'>,
    dependentProductNumber: DeserializedType<T, 'Edm.String'>,
    dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>,
    dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>,
    engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeRequestDependencyActions<T>,
      T
    >(this.entityApi, {
      ActionClassName: actionClassName,
      DependentProductNumber: dependentProductNumber,
      DependencyLegalEntityId: dependencyLegalEntityId,
      DependencyTransactionDescription: dependencyTransactionDescription,
      EngineeringChangeRequestNumber: engineeringChangeRequestNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeRequestDependencyActions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeRequestDependencyActions`.
   */
  update(
    entity: EngineeringChangeRequestDependencyActions<T>
  ): UpdateRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeRequestDependencyActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestDependencyActions`.
   * @param actionClassName Key property. See {@link EngineeringChangeRequestDependencyActions.actionClassName}.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeRequestDependencyActions.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeRequestDependencyActions.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeRequestDependencyActions.dependencyTransactionDescription}.
   * @param engineeringChangeRequestNumber Key property. See {@link EngineeringChangeRequestDependencyActions.engineeringChangeRequestNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestDependencyActions`.
   */
  delete(
    actionClassName: string,
    dependentProductNumber: string,
    dependencyLegalEntityId: string,
    dependencyTransactionDescription: string,
    engineeringChangeRequestNumber: string
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeRequestDependencyActions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeRequestDependencyActions` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeRequestDependencyActions<T>
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T>;
  delete(
    actionClassNameOrEntity: any,
    dependentProductNumber?: string,
    dependencyLegalEntityId?: string,
    dependencyTransactionDescription?: string,
    engineeringChangeRequestNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeRequestDependencyActions<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeRequestDependencyActions<T>,
      T
    >(
      this.entityApi,
      actionClassNameOrEntity instanceof
      EngineeringChangeRequestDependencyActions
        ? actionClassNameOrEntity
        : {
            ActionClassName: actionClassNameOrEntity!,
            DependentProductNumber: dependentProductNumber!,
            DependencyLegalEntityId: dependencyLegalEntityId!,
            DependencyTransactionDescription: dependencyTransactionDescription!,
            EngineeringChangeRequestNumber: engineeringChangeRequestNumber!
          }
    );
  }
}
