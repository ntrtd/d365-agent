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
import { BudgetControlCycleModels } from './BudgetControlCycleModels';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlCycleModels} entity.
 */
export class BudgetControlCycleModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlCycleModels<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlCycleModels` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlCycleModels` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlCycleModels<T>, T> {
    return new GetAllRequestBuilder<BudgetControlCycleModels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlCycleModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlCycleModels`.
   */
  create(
    entity: BudgetControlCycleModels<T>
  ): CreateRequestBuilder<BudgetControlCycleModels<T>, T> {
    return new CreateRequestBuilder<BudgetControlCycleModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlCycleModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlCycleModels.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlCycleModels.legalEntityId}.
   * @param status Key property. See {@link BudgetControlCycleModels.status}.
   * @param budgetCycleName Key property. See {@link BudgetControlCycleModels.budgetCycleName}.
   * @param budgetCycleTimeSpanName Key property. See {@link BudgetControlCycleModels.budgetCycleTimeSpanName}.
   * @param budgetCycleTimeSpanFiscalCalendarId Key property. See {@link BudgetControlCycleModels.budgetCycleTimeSpanFiscalCalendarId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlCycleModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    budgetCycleName: DeserializedType<T, 'Edm.String'>,
    budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>,
    budgetCycleTimeSpanFiscalCalendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlCycleModels<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlCycleModels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        BudgetCycleName: budgetCycleName,
        BudgetCycleTimeSpanName: budgetCycleTimeSpanName,
        BudgetCycleTimeSpanFiscalCalendarId: budgetCycleTimeSpanFiscalCalendarId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlCycleModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlCycleModels`.
   */
  update(
    entity: BudgetControlCycleModels<T>
  ): UpdateRequestBuilder<BudgetControlCycleModels<T>, T> {
    return new UpdateRequestBuilder<BudgetControlCycleModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlCycleModels`.
   * @param dataAreaId Key property. See {@link BudgetControlCycleModels.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlCycleModels.legalEntityId}.
   * @param status Key property. See {@link BudgetControlCycleModels.status}.
   * @param budgetCycleName Key property. See {@link BudgetControlCycleModels.budgetCycleName}.
   * @param budgetCycleTimeSpanName Key property. See {@link BudgetControlCycleModels.budgetCycleTimeSpanName}.
   * @param budgetCycleTimeSpanFiscalCalendarId Key property. See {@link BudgetControlCycleModels.budgetCycleTimeSpanFiscalCalendarId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlCycleModels`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    budgetCycleName: string,
    budgetCycleTimeSpanName: string,
    budgetCycleTimeSpanFiscalCalendarId: string
  ): DeleteRequestBuilder<BudgetControlCycleModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlCycleModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlCycleModels` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlCycleModels<T>
  ): DeleteRequestBuilder<BudgetControlCycleModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    budgetCycleName?: string,
    budgetCycleTimeSpanName?: string,
    budgetCycleTimeSpanFiscalCalendarId?: string
  ): DeleteRequestBuilder<BudgetControlCycleModels<T>, T> {
    return new DeleteRequestBuilder<BudgetControlCycleModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlCycleModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            BudgetCycleName: budgetCycleName!,
            BudgetCycleTimeSpanName: budgetCycleTimeSpanName!,
            BudgetCycleTimeSpanFiscalCalendarId:
              budgetCycleTimeSpanFiscalCalendarId!
          }
    );
  }
}
