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
import { ProjHourSalesPricesV2 } from './ProjHourSalesPricesV2';

/**
 * Request builder class for operations supported on the {@link ProjHourSalesPricesV2} entity.
 */
export class ProjHourSalesPricesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjHourSalesPricesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjHourSalesPricesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjHourSalesPricesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjHourSalesPricesV2<T>, T> {
    return new GetAllRequestBuilder<ProjHourSalesPricesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjHourSalesPricesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjHourSalesPricesV2`.
   */
  create(
    entity: ProjHourSalesPricesV2<T>
  ): CreateRequestBuilder<ProjHourSalesPricesV2<T>, T> {
    return new CreateRequestBuilder<ProjHourSalesPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjHourSalesPricesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjHourSalesPricesV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourSalesPricesV2.projectId}.
   * @param priceGroup Key property. See {@link ProjHourSalesPricesV2.priceGroup}.
   * @param resourceCategoryId Key property. See {@link ProjHourSalesPricesV2.resourceCategoryId}.
   * @param transDate Key property. See {@link ProjHourSalesPricesV2.transDate}.
   * @param currencyId Key property. See {@link ProjHourSalesPricesV2.currencyId}.
   * @param customerAccount Key property. See {@link ProjHourSalesPricesV2.customerAccount}.
   * @param projectContractId Key property. See {@link ProjHourSalesPricesV2.projectContractId}.
   * @param resourceId Key property. See {@link ProjHourSalesPricesV2.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourSalesPricesV2.resourceCompanyId}.
   * @param categoryId Key property. See {@link ProjHourSalesPricesV2.categoryId}.
   * @returns A request builder for creating requests to retrieve one `ProjHourSalesPricesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    priceGroup: DeserializedType<T, 'Edm.String'>,
    resourceCategoryId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    currencyId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    resourceCompanyId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjHourSalesPricesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjHourSalesPricesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectId: projectId,
        PriceGroup: priceGroup,
        ResourceCategoryId: resourceCategoryId,
        TransDate: transDate,
        CurrencyId: currencyId,
        CustomerAccount: customerAccount,
        ProjectContractId: projectContractId,
        ResourceId: resourceId,
        ResourceCompanyId: resourceCompanyId,
        CategoryId: categoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjHourSalesPricesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjHourSalesPricesV2`.
   */
  update(
    entity: ProjHourSalesPricesV2<T>
  ): UpdateRequestBuilder<ProjHourSalesPricesV2<T>, T> {
    return new UpdateRequestBuilder<ProjHourSalesPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjHourSalesPricesV2`.
   * @param dataAreaId Key property. See {@link ProjHourSalesPricesV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourSalesPricesV2.projectId}.
   * @param priceGroup Key property. See {@link ProjHourSalesPricesV2.priceGroup}.
   * @param resourceCategoryId Key property. See {@link ProjHourSalesPricesV2.resourceCategoryId}.
   * @param transDate Key property. See {@link ProjHourSalesPricesV2.transDate}.
   * @param currencyId Key property. See {@link ProjHourSalesPricesV2.currencyId}.
   * @param customerAccount Key property. See {@link ProjHourSalesPricesV2.customerAccount}.
   * @param projectContractId Key property. See {@link ProjHourSalesPricesV2.projectContractId}.
   * @param resourceId Key property. See {@link ProjHourSalesPricesV2.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourSalesPricesV2.resourceCompanyId}.
   * @param categoryId Key property. See {@link ProjHourSalesPricesV2.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourSalesPricesV2`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    priceGroup: string,
    resourceCategoryId: string,
    transDate: Moment,
    currencyId: string,
    customerAccount: string,
    projectContractId: string,
    resourceId: string,
    resourceCompanyId: string,
    categoryId: string
  ): DeleteRequestBuilder<ProjHourSalesPricesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjHourSalesPricesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourSalesPricesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProjHourSalesPricesV2<T>
  ): DeleteRequestBuilder<ProjHourSalesPricesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    priceGroup?: string,
    resourceCategoryId?: string,
    transDate?: Moment,
    currencyId?: string,
    customerAccount?: string,
    projectContractId?: string,
    resourceId?: string,
    resourceCompanyId?: string,
    categoryId?: string
  ): DeleteRequestBuilder<ProjHourSalesPricesV2<T>, T> {
    return new DeleteRequestBuilder<ProjHourSalesPricesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjHourSalesPricesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            PriceGroup: priceGroup!,
            ResourceCategoryId: resourceCategoryId!,
            TransDate: transDate!,
            CurrencyId: currencyId!,
            CustomerAccount: customerAccount!,
            ProjectContractId: projectContractId!,
            ResourceId: resourceId!,
            ResourceCompanyId: resourceCompanyId!,
            CategoryId: categoryId!
          }
    );
  }
}
