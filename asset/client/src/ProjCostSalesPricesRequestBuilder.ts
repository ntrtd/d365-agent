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
import { ProjCostSalesPrices } from './ProjCostSalesPrices';

/**
 * Request builder class for operations supported on the {@link ProjCostSalesPrices} entity.
 */
export class ProjCostSalesPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjCostSalesPrices<T>, T> {
  /**
   * Returns a request builder for querying all `ProjCostSalesPrices` entities.
   * @returns A request builder for creating requests to retrieve all `ProjCostSalesPrices` entities.
   */
  getAll(): GetAllRequestBuilder<ProjCostSalesPrices<T>, T> {
    return new GetAllRequestBuilder<ProjCostSalesPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjCostSalesPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjCostSalesPrices`.
   */
  create(
    entity: ProjCostSalesPrices<T>
  ): CreateRequestBuilder<ProjCostSalesPrices<T>, T> {
    return new CreateRequestBuilder<ProjCostSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjCostSalesPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjCostSalesPrices.dataAreaId}.
   * @param projectId Key property. See {@link ProjCostSalesPrices.projectId}.
   * @param priceGroup Key property. See {@link ProjCostSalesPrices.priceGroup}.
   * @param categoryId Key property. See {@link ProjCostSalesPrices.categoryId}.
   * @param customerAccount Key property. See {@link ProjCostSalesPrices.customerAccount}.
   * @param projectContractId Key property. See {@link ProjCostSalesPrices.projectContractId}.
   * @param transactionDate Key property. See {@link ProjCostSalesPrices.transactionDate}.
   * @param resourceId Key property. See {@link ProjCostSalesPrices.resourceId}.
   * @returns A request builder for creating requests to retrieve one `ProjCostSalesPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    priceGroup: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjCostSalesPrices<T>, T> {
    return new GetByKeyRequestBuilder<ProjCostSalesPrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectId: projectId,
        PriceGroup: priceGroup,
        CategoryId: categoryId,
        CustomerAccount: customerAccount,
        ProjectContractId: projectContractId,
        TransactionDate: transactionDate,
        ResourceId: resourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjCostSalesPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjCostSalesPrices`.
   */
  update(
    entity: ProjCostSalesPrices<T>
  ): UpdateRequestBuilder<ProjCostSalesPrices<T>, T> {
    return new UpdateRequestBuilder<ProjCostSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjCostSalesPrices`.
   * @param dataAreaId Key property. See {@link ProjCostSalesPrices.dataAreaId}.
   * @param projectId Key property. See {@link ProjCostSalesPrices.projectId}.
   * @param priceGroup Key property. See {@link ProjCostSalesPrices.priceGroup}.
   * @param categoryId Key property. See {@link ProjCostSalesPrices.categoryId}.
   * @param customerAccount Key property. See {@link ProjCostSalesPrices.customerAccount}.
   * @param projectContractId Key property. See {@link ProjCostSalesPrices.projectContractId}.
   * @param transactionDate Key property. See {@link ProjCostSalesPrices.transactionDate}.
   * @param resourceId Key property. See {@link ProjCostSalesPrices.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjCostSalesPrices`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    priceGroup: string,
    categoryId: string,
    customerAccount: string,
    projectContractId: string,
    transactionDate: Moment,
    resourceId: string
  ): DeleteRequestBuilder<ProjCostSalesPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjCostSalesPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjCostSalesPrices` by taking the entity as a parameter.
   */
  delete(
    entity: ProjCostSalesPrices<T>
  ): DeleteRequestBuilder<ProjCostSalesPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    priceGroup?: string,
    categoryId?: string,
    customerAccount?: string,
    projectContractId?: string,
    transactionDate?: Moment,
    resourceId?: string
  ): DeleteRequestBuilder<ProjCostSalesPrices<T>, T> {
    return new DeleteRequestBuilder<ProjCostSalesPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjCostSalesPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            PriceGroup: priceGroup!,
            CategoryId: categoryId!,
            CustomerAccount: customerAccount!,
            ProjectContractId: projectContractId!,
            TransactionDate: transactionDate!,
            ResourceId: resourceId!
          }
    );
  }
}
