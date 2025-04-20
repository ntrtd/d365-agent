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
import { BudgetPlans } from './BudgetPlans';

/**
 * Request builder class for operations supported on the {@link BudgetPlans} entity.
 */
export class BudgetPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlans<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlans` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlans` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlans<T>, T> {
    return new GetAllRequestBuilder<BudgetPlans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlans`.
   */
  create(entity: BudgetPlans<T>): CreateRequestBuilder<BudgetPlans<T>, T> {
    return new CreateRequestBuilder<BudgetPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlans` entity based on its keys.
   * @param documentNumber Key property. See {@link BudgetPlans.documentNumber}.
   * @param scenario Key property. See {@link BudgetPlans.scenario}.
   * @param lineReferenceId Key property. See {@link BudgetPlans.lineReferenceId}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlans` entity based on its keys.
   */
  getByKey(
    documentNumber: DeserializedType<T, 'Edm.String'>,
    scenario: DeserializedType<T, 'Edm.String'>,
    lineReferenceId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<BudgetPlans<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlans<T>, T>(this.entityApi, {
      DocumentNumber: documentNumber,
      Scenario: scenario,
      LineReferenceId: lineReferenceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlans`.
   */
  update(entity: BudgetPlans<T>): UpdateRequestBuilder<BudgetPlans<T>, T> {
    return new UpdateRequestBuilder<BudgetPlans<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlans`.
   * @param documentNumber Key property. See {@link BudgetPlans.documentNumber}.
   * @param scenario Key property. See {@link BudgetPlans.scenario}.
   * @param lineReferenceId Key property. See {@link BudgetPlans.lineReferenceId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlans`.
   */
  delete(
    documentNumber: string,
    scenario: string,
    lineReferenceId: string
  ): DeleteRequestBuilder<BudgetPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlans` by taking the entity as a parameter.
   */
  delete(entity: BudgetPlans<T>): DeleteRequestBuilder<BudgetPlans<T>, T>;
  delete(
    documentNumberOrEntity: any,
    scenario?: string,
    lineReferenceId?: string
  ): DeleteRequestBuilder<BudgetPlans<T>, T> {
    return new DeleteRequestBuilder<BudgetPlans<T>, T>(
      this.entityApi,
      documentNumberOrEntity instanceof BudgetPlans
        ? documentNumberOrEntity
        : {
            DocumentNumber: documentNumberOrEntity!,
            Scenario: scenario!,
            LineReferenceId: lineReferenceId!
          }
    );
  }
}
