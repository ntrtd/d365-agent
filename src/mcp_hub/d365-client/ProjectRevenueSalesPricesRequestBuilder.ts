/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
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
import { ProjectRevenueSalesPrices } from './ProjectRevenueSalesPrices';

/**
 * Request builder class for operations supported on the {@link ProjectRevenueSalesPrices} entity.
 */
export class ProjectRevenueSalesPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectRevenueSalesPrices<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectRevenueSalesPrices` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectRevenueSalesPrices` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectRevenueSalesPrices<T>, T> {
    return new GetAllRequestBuilder<ProjectRevenueSalesPrices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectRevenueSalesPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectRevenueSalesPrices`.
   */
  create(
    entity: ProjectRevenueSalesPrices<T>
  ): CreateRequestBuilder<ProjectRevenueSalesPrices<T>, T> {
    return new CreateRequestBuilder<ProjectRevenueSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectRevenueSalesPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectRevenueSalesPrices.dataAreaId}.
   * @param projectId Key property. See {@link ProjectRevenueSalesPrices.projectId}.
   * @param priceGroup Key property. See {@link ProjectRevenueSalesPrices.priceGroup}.
   * @param categoryId Key property. See {@link ProjectRevenueSalesPrices.categoryId}.
   * @param effectiveDate Key property. See {@link ProjectRevenueSalesPrices.effectiveDate}.
   * @param salesCurrency Key property. See {@link ProjectRevenueSalesPrices.salesCurrency}.
   * @param customerAccount Key property. See {@link ProjectRevenueSalesPrices.customerAccount}.
   * @param projectContractId Key property. See {@link ProjectRevenueSalesPrices.projectContractId}.
   * @param resourceId Key property. See {@link ProjectRevenueSalesPrices.resourceId}.
   * @param role Key property. See {@link ProjectRevenueSalesPrices.role}.
   * @returns A request builder for creating requests to retrieve one `ProjectRevenueSalesPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    priceGroup: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    salesCurrency: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    role: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProjectRevenueSalesPrices<T>, T> {
    return new GetByKeyRequestBuilder<ProjectRevenueSalesPrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectID: projectId,
        PriceGroup: priceGroup,
        CategoryId: categoryId,
        EffectiveDate: effectiveDate,
        SalesCurrency: salesCurrency,
        CustomerAccount: customerAccount,
        ProjectContractID: projectContractId,
        ResourceId: resourceId,
        Role: role
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectRevenueSalesPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectRevenueSalesPrices`.
   */
  update(
    entity: ProjectRevenueSalesPrices<T>
  ): UpdateRequestBuilder<ProjectRevenueSalesPrices<T>, T> {
    return new UpdateRequestBuilder<ProjectRevenueSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectRevenueSalesPrices`.
   * @param dataAreaId Key property. See {@link ProjectRevenueSalesPrices.dataAreaId}.
   * @param projectId Key property. See {@link ProjectRevenueSalesPrices.projectId}.
   * @param priceGroup Key property. See {@link ProjectRevenueSalesPrices.priceGroup}.
   * @param categoryId Key property. See {@link ProjectRevenueSalesPrices.categoryId}.
   * @param effectiveDate Key property. See {@link ProjectRevenueSalesPrices.effectiveDate}.
   * @param salesCurrency Key property. See {@link ProjectRevenueSalesPrices.salesCurrency}.
   * @param customerAccount Key property. See {@link ProjectRevenueSalesPrices.customerAccount}.
   * @param projectContractId Key property. See {@link ProjectRevenueSalesPrices.projectContractId}.
   * @param resourceId Key property. See {@link ProjectRevenueSalesPrices.resourceId}.
   * @param role Key property. See {@link ProjectRevenueSalesPrices.role}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectRevenueSalesPrices`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    priceGroup: string,
    categoryId: string,
    effectiveDate: Moment,
    salesCurrency: string,
    customerAccount: string,
    projectContractId: string,
    resourceId: string,
    role: BigNumber
  ): DeleteRequestBuilder<ProjectRevenueSalesPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectRevenueSalesPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectRevenueSalesPrices` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectRevenueSalesPrices<T>
  ): DeleteRequestBuilder<ProjectRevenueSalesPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    priceGroup?: string,
    categoryId?: string,
    effectiveDate?: Moment,
    salesCurrency?: string,
    customerAccount?: string,
    projectContractId?: string,
    resourceId?: string,
    role?: BigNumber
  ): DeleteRequestBuilder<ProjectRevenueSalesPrices<T>, T> {
    return new DeleteRequestBuilder<ProjectRevenueSalesPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectRevenueSalesPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectID: projectId!,
            PriceGroup: priceGroup!,
            CategoryId: categoryId!,
            EffectiveDate: effectiveDate!,
            SalesCurrency: salesCurrency!,
            CustomerAccount: customerAccount!,
            ProjectContractID: projectContractId!,
            ResourceId: resourceId!,
            Role: role!
          }
    );
  }
}
