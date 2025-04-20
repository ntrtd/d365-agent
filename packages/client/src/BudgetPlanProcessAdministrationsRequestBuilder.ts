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
import { BudgetPlanProcessAdministrations } from './BudgetPlanProcessAdministrations';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProcessAdministrations} entity.
 */
export class BudgetPlanProcessAdministrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProcessAdministrations` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProcessAdministrations` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProcessAdministrations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProcessAdministrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProcessAdministrations`.
   */
  create(
    entity: BudgetPlanProcessAdministrations<T>
  ): CreateRequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProcessAdministrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProcessAdministrations` entity based on its keys.
   * @param process Key property. See {@link BudgetPlanProcessAdministrations.process}.
   * @param partyNumber Key property. See {@link BudgetPlanProcessAdministrations.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProcessAdministrations` entity based on its keys.
   */
  getByKey(
    process: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProcessAdministrations<T>, T>(
      this.entityApi,
      {
        Process: process,
        PartyNumber: partyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProcessAdministrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProcessAdministrations`.
   */
  update(
    entity: BudgetPlanProcessAdministrations<T>
  ): UpdateRequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProcessAdministrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcessAdministrations`.
   * @param process Key property. See {@link BudgetPlanProcessAdministrations.process}.
   * @param partyNumber Key property. See {@link BudgetPlanProcessAdministrations.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcessAdministrations`.
   */
  delete(
    process: string,
    partyNumber: string
  ): DeleteRequestBuilder<BudgetPlanProcessAdministrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProcessAdministrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProcessAdministrations` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProcessAdministrations<T>
  ): DeleteRequestBuilder<BudgetPlanProcessAdministrations<T>, T>;
  delete(
    processOrEntity: any,
    partyNumber?: string
  ): DeleteRequestBuilder<BudgetPlanProcessAdministrations<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProcessAdministrations<T>, T>(
      this.entityApi,
      processOrEntity instanceof BudgetPlanProcessAdministrations
        ? processOrEntity
        : {
            Process: processOrEntity!,
            PartyNumber: partyNumber!
          }
    );
  }
}
