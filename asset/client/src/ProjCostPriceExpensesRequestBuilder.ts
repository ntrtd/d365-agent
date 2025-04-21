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
import { ProjCostPriceExpenses } from './ProjCostPriceExpenses';

/**
 * Request builder class for operations supported on the {@link ProjCostPriceExpenses} entity.
 */
export class ProjCostPriceExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjCostPriceExpenses<T>, T> {
  /**
   * Returns a request builder for querying all `ProjCostPriceExpenses` entities.
   * @returns A request builder for creating requests to retrieve all `ProjCostPriceExpenses` entities.
   */
  getAll(): GetAllRequestBuilder<ProjCostPriceExpenses<T>, T> {
    return new GetAllRequestBuilder<ProjCostPriceExpenses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjCostPriceExpenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjCostPriceExpenses`.
   */
  create(
    entity: ProjCostPriceExpenses<T>
  ): CreateRequestBuilder<ProjCostPriceExpenses<T>, T> {
    return new CreateRequestBuilder<ProjCostPriceExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjCostPriceExpenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjCostPriceExpenses.dataAreaId}.
   * @param projId Key property. See {@link ProjCostPriceExpenses.projId}.
   * @param resourceId Key property. See {@link ProjCostPriceExpenses.resourceId}.
   * @param categoryId Key property. See {@link ProjCostPriceExpenses.categoryId}.
   * @param transactionDate Key property. See {@link ProjCostPriceExpenses.transactionDate}.
   * @param customerAccount Key property. See {@link ProjCostPriceExpenses.customerAccount}.
   * @param projectContractId Key property. See {@link ProjCostPriceExpenses.projectContractId}.
   * @returns A request builder for creating requests to retrieve one `ProjCostPriceExpenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjCostPriceExpenses<T>, T> {
    return new GetByKeyRequestBuilder<ProjCostPriceExpenses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjId: projId,
        ResourceId: resourceId,
        CategoryId: categoryId,
        TransactionDate: transactionDate,
        CustomerAccount: customerAccount,
        ProjectContractId: projectContractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjCostPriceExpenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjCostPriceExpenses`.
   */
  update(
    entity: ProjCostPriceExpenses<T>
  ): UpdateRequestBuilder<ProjCostPriceExpenses<T>, T> {
    return new UpdateRequestBuilder<ProjCostPriceExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjCostPriceExpenses`.
   * @param dataAreaId Key property. See {@link ProjCostPriceExpenses.dataAreaId}.
   * @param projId Key property. See {@link ProjCostPriceExpenses.projId}.
   * @param resourceId Key property. See {@link ProjCostPriceExpenses.resourceId}.
   * @param categoryId Key property. See {@link ProjCostPriceExpenses.categoryId}.
   * @param transactionDate Key property. See {@link ProjCostPriceExpenses.transactionDate}.
   * @param customerAccount Key property. See {@link ProjCostPriceExpenses.customerAccount}.
   * @param projectContractId Key property. See {@link ProjCostPriceExpenses.projectContractId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjCostPriceExpenses`.
   */
  delete(
    dataAreaId: string,
    projId: string,
    resourceId: string,
    categoryId: string,
    transactionDate: Moment,
    customerAccount: string,
    projectContractId: string
  ): DeleteRequestBuilder<ProjCostPriceExpenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjCostPriceExpenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjCostPriceExpenses` by taking the entity as a parameter.
   */
  delete(
    entity: ProjCostPriceExpenses<T>
  ): DeleteRequestBuilder<ProjCostPriceExpenses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projId?: string,
    resourceId?: string,
    categoryId?: string,
    transactionDate?: Moment,
    customerAccount?: string,
    projectContractId?: string
  ): DeleteRequestBuilder<ProjCostPriceExpenses<T>, T> {
    return new DeleteRequestBuilder<ProjCostPriceExpenses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjCostPriceExpenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjId: projId!,
            ResourceId: resourceId!,
            CategoryId: categoryId!,
            TransactionDate: transactionDate!,
            CustomerAccount: customerAccount!,
            ProjectContractId: projectContractId!
          }
    );
  }
}
