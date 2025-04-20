/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BudgetPlanJustifications } from './BudgetPlanJustifications';

/**
 * Request builder class for operations supported on the {@link BudgetPlanJustifications} entity.
 */
export class BudgetPlanJustificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanJustifications<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanJustifications` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanJustifications` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanJustifications<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanJustifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanJustifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanJustifications`.
   */
  create(
    entity: BudgetPlanJustifications<T>
  ): CreateRequestBuilder<BudgetPlanJustifications<T>, T> {
    return new CreateRequestBuilder<BudgetPlanJustifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanJustifications` entity based on its keys.
   * @param effectiveDate Key property. See {@link BudgetPlanJustifications.effectiveDate}.
   * @param documentNumber Key property. See {@link BudgetPlanJustifications.documentNumber}.
   * @param scenarioName Key property. See {@link BudgetPlanJustifications.scenarioName}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanJustifications` entity based on its keys.
   */
  getByKey(
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    documentNumber: DeserializedType<T, 'Edm.String'>,
    scenarioName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanJustifications<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanJustifications<T>, T>(
      this.entityApi,
      {
        EffectiveDate: effectiveDate,
        DocumentNumber: documentNumber,
        ScenarioName: scenarioName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanJustifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanJustifications`.
   */
  update(
    entity: BudgetPlanJustifications<T>
  ): UpdateRequestBuilder<BudgetPlanJustifications<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanJustifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanJustifications`.
   * @param effectiveDate Key property. See {@link BudgetPlanJustifications.effectiveDate}.
   * @param documentNumber Key property. See {@link BudgetPlanJustifications.documentNumber}.
   * @param scenarioName Key property. See {@link BudgetPlanJustifications.scenarioName}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanJustifications`.
   */
  delete(
    effectiveDate: Moment,
    documentNumber: string,
    scenarioName: string
  ): DeleteRequestBuilder<BudgetPlanJustifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanJustifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanJustifications` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanJustifications<T>
  ): DeleteRequestBuilder<BudgetPlanJustifications<T>, T>;
  delete(
    effectiveDateOrEntity: any,
    documentNumber?: string,
    scenarioName?: string
  ): DeleteRequestBuilder<BudgetPlanJustifications<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanJustifications<T>, T>(
      this.entityApi,
      effectiveDateOrEntity instanceof BudgetPlanJustifications
        ? effectiveDateOrEntity
        : {
            EffectiveDate: effectiveDateOrEntity!,
            DocumentNumber: documentNumber!,
            ScenarioName: scenarioName!
          }
    );
  }
}
