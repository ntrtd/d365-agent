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
import { BudgetControlRules } from './BudgetControlRules';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlRules} entity.
 */
export class BudgetControlRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlRules<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlRules` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlRules` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlRules<T>, T> {
    return new GetAllRequestBuilder<BudgetControlRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetControlRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlRules`.
   */
  create(
    entity: BudgetControlRules<T>
  ): CreateRequestBuilder<BudgetControlRules<T>, T> {
    return new CreateRequestBuilder<BudgetControlRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRules.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRules.status}.
   * @param name Key property. See {@link BudgetControlRules.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlRules<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlRules`.
   */
  update(
    entity: BudgetControlRules<T>
  ): UpdateRequestBuilder<BudgetControlRules<T>, T> {
    return new UpdateRequestBuilder<BudgetControlRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRules`.
   * @param dataAreaId Key property. See {@link BudgetControlRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRules.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRules.status}.
   * @param name Key property. See {@link BudgetControlRules.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRules`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    name: string
  ): DeleteRequestBuilder<BudgetControlRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRules` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlRules<T>
  ): DeleteRequestBuilder<BudgetControlRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    name?: string
  ): DeleteRequestBuilder<BudgetControlRules<T>, T> {
    return new DeleteRequestBuilder<BudgetControlRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            Name: name!
          }
    );
  }
}
