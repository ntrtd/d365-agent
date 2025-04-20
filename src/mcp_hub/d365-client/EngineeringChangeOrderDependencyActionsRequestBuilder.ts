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
import { EngineeringChangeOrderDependencyActions } from './EngineeringChangeOrderDependencyActions';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderDependencyActions} entity.
 */
export class EngineeringChangeOrderDependencyActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderDependencyActions<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderDependencyActions` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderDependencyActions` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderDependencyActions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderDependencyActions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderDependencyActions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderDependencyActions`.
   */
  create(
    entity: EngineeringChangeOrderDependencyActions<T>
  ): CreateRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderDependencyActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderDependencyActions` entity based on its keys.
   * @param actionClassName Key property. See {@link EngineeringChangeOrderDependencyActions.actionClassName}.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeOrderDependencyActions.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeOrderDependencyActions.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeOrderDependencyActions.dependencyTransactionDescription}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderDependencyActions.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderDependencyActions` entity based on its keys.
   */
  getByKey(
    actionClassName: DeserializedType<T, 'Edm.String'>,
    dependentProductNumber: DeserializedType<T, 'Edm.String'>,
    dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>,
    dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderDependencyActions<T>,
      T
    >(this.entityApi, {
      ActionClassName: actionClassName,
      DependentProductNumber: dependentProductNumber,
      DependencyLegalEntityId: dependencyLegalEntityId,
      DependencyTransactionDescription: dependencyTransactionDescription,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderDependencyActions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderDependencyActions`.
   */
  update(
    entity: EngineeringChangeOrderDependencyActions<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderDependencyActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderDependencyActions`.
   * @param actionClassName Key property. See {@link EngineeringChangeOrderDependencyActions.actionClassName}.
   * @param dependentProductNumber Key property. See {@link EngineeringChangeOrderDependencyActions.dependentProductNumber}.
   * @param dependencyLegalEntityId Key property. See {@link EngineeringChangeOrderDependencyActions.dependencyLegalEntityId}.
   * @param dependencyTransactionDescription Key property. See {@link EngineeringChangeOrderDependencyActions.dependencyTransactionDescription}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderDependencyActions.engineeringChangeOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderDependencyActions`.
   */
  delete(
    actionClassName: string,
    dependentProductNumber: string,
    dependencyLegalEntityId: string,
    dependencyTransactionDescription: string,
    engineeringChangeOrderNumber: string
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderDependencyActions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderDependencyActions` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderDependencyActions<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T>;
  delete(
    actionClassNameOrEntity: any,
    dependentProductNumber?: string,
    dependencyLegalEntityId?: string,
    dependencyTransactionDescription?: string,
    engineeringChangeOrderNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderDependencyActions<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderDependencyActions<T>,
      T
    >(
      this.entityApi,
      actionClassNameOrEntity instanceof EngineeringChangeOrderDependencyActions
        ? actionClassNameOrEntity
        : {
            ActionClassName: actionClassNameOrEntity!,
            DependentProductNumber: dependentProductNumber!,
            DependencyLegalEntityId: dependencyLegalEntityId!,
            DependencyTransactionDescription: dependencyTransactionDescription!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!
          }
    );
  }
}
