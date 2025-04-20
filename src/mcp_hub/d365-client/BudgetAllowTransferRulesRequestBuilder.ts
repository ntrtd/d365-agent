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
import { BudgetAllowTransferRules } from './BudgetAllowTransferRules';

/**
 * Request builder class for operations supported on the {@link BudgetAllowTransferRules} entity.
 */
export class BudgetAllowTransferRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetAllowTransferRules<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetAllowTransferRules` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetAllowTransferRules` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetAllowTransferRules<T>, T> {
    return new GetAllRequestBuilder<BudgetAllowTransferRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetAllowTransferRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetAllowTransferRules`.
   */
  create(
    entity: BudgetAllowTransferRules<T>
  ): CreateRequestBuilder<BudgetAllowTransferRules<T>, T> {
    return new CreateRequestBuilder<BudgetAllowTransferRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetAllowTransferRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetAllowTransferRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetAllowTransferRules.legalEntityId}.
   * @param budgetTransferRule Key property. See {@link BudgetAllowTransferRules.budgetTransferRule}.
   * @param ruleMember Key property. See {@link BudgetAllowTransferRules.ruleMember}.
   * @param dimensionAttributeId Key property. See {@link BudgetAllowTransferRules.dimensionAttributeId}.
   * @returns A request builder for creating requests to retrieve one `BudgetAllowTransferRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    budgetTransferRule: DeserializedType<T, 'Edm.String'>,
    ruleMember: DeserializedType<T, 'Edm.String'>,
    dimensionAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetAllowTransferRules<T>, T> {
    return new GetByKeyRequestBuilder<BudgetAllowTransferRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        BudgetTransferRule: budgetTransferRule,
        RuleMember: ruleMember,
        DimensionAttributeId: dimensionAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetAllowTransferRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetAllowTransferRules`.
   */
  update(
    entity: BudgetAllowTransferRules<T>
  ): UpdateRequestBuilder<BudgetAllowTransferRules<T>, T> {
    return new UpdateRequestBuilder<BudgetAllowTransferRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetAllowTransferRules`.
   * @param dataAreaId Key property. See {@link BudgetAllowTransferRules.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetAllowTransferRules.legalEntityId}.
   * @param budgetTransferRule Key property. See {@link BudgetAllowTransferRules.budgetTransferRule}.
   * @param ruleMember Key property. See {@link BudgetAllowTransferRules.ruleMember}.
   * @param dimensionAttributeId Key property. See {@link BudgetAllowTransferRules.dimensionAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetAllowTransferRules`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    budgetTransferRule: string,
    ruleMember: string,
    dimensionAttributeId: string
  ): DeleteRequestBuilder<BudgetAllowTransferRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetAllowTransferRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetAllowTransferRules` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetAllowTransferRules<T>
  ): DeleteRequestBuilder<BudgetAllowTransferRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    budgetTransferRule?: string,
    ruleMember?: string,
    dimensionAttributeId?: string
  ): DeleteRequestBuilder<BudgetAllowTransferRules<T>, T> {
    return new DeleteRequestBuilder<BudgetAllowTransferRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetAllowTransferRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            BudgetTransferRule: budgetTransferRule!,
            RuleMember: ruleMember!,
            DimensionAttributeId: dimensionAttributeId!
          }
    );
  }
}
