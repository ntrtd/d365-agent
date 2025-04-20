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
import { BudgetControlRuleCriteria } from './BudgetControlRuleCriteria';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlRuleCriteria} entity.
 */
export class BudgetControlRuleCriteriaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlRuleCriteria<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlRuleCriteria` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlRuleCriteria` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlRuleCriteria<T>, T> {
    return new GetAllRequestBuilder<BudgetControlRuleCriteria<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlRuleCriteria` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlRuleCriteria`.
   */
  create(
    entity: BudgetControlRuleCriteria<T>
  ): CreateRequestBuilder<BudgetControlRuleCriteria<T>, T> {
    return new CreateRequestBuilder<BudgetControlRuleCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlRuleCriteria` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlRuleCriteria.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRuleCriteria.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRuleCriteria.status}.
   * @param name Key property. See {@link BudgetControlRuleCriteria.name}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlRuleCriteria.dimensionAttributeId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlRuleCriteria` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    name: DeserializedType<T, 'Edm.String'>,
    dimensionAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlRuleCriteria<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlRuleCriteria<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        Name: name,
        DimensionAttributeId: dimensionAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlRuleCriteria`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlRuleCriteria`.
   */
  update(
    entity: BudgetControlRuleCriteria<T>
  ): UpdateRequestBuilder<BudgetControlRuleCriteria<T>, T> {
    return new UpdateRequestBuilder<BudgetControlRuleCriteria<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRuleCriteria`.
   * @param dataAreaId Key property. See {@link BudgetControlRuleCriteria.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlRuleCriteria.legalEntityId}.
   * @param status Key property. See {@link BudgetControlRuleCriteria.status}.
   * @param name Key property. See {@link BudgetControlRuleCriteria.name}.
   * @param dimensionAttributeId Key property. See {@link BudgetControlRuleCriteria.dimensionAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRuleCriteria`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    name: string,
    dimensionAttributeId: string
  ): DeleteRequestBuilder<BudgetControlRuleCriteria<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlRuleCriteria`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlRuleCriteria` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlRuleCriteria<T>
  ): DeleteRequestBuilder<BudgetControlRuleCriteria<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    name?: string,
    dimensionAttributeId?: string
  ): DeleteRequestBuilder<BudgetControlRuleCriteria<T>, T> {
    return new DeleteRequestBuilder<BudgetControlRuleCriteria<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlRuleCriteria
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            Name: name!,
            DimensionAttributeId: dimensionAttributeId!
          }
    );
  }
}
