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
import { ServiceSubscriptionSalesPrices } from './ServiceSubscriptionSalesPrices';

/**
 * Request builder class for operations supported on the {@link ServiceSubscriptionSalesPrices} entity.
 */
export class ServiceSubscriptionSalesPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceSubscriptionSalesPrices` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceSubscriptionSalesPrices` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
    return new GetAllRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceSubscriptionSalesPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceSubscriptionSalesPrices`.
   */
  create(
    entity: ServiceSubscriptionSalesPrices<T>
  ): CreateRequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
    return new CreateRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceSubscriptionSalesPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceSubscriptionSalesPrices.dataAreaId}.
   * @param projectCategoryId Key property. See {@link ServiceSubscriptionSalesPrices.projectCategoryId}.
   * @param salesPriceCurrencyCode Key property. See {@link ServiceSubscriptionSalesPrices.salesPriceCurrencyCode}.
   * @param projectId Key property. See {@link ServiceSubscriptionSalesPrices.projectId}.
   * @param invoicingPeriodTypeCode Key property. See {@link ServiceSubscriptionSalesPrices.invoicingPeriodTypeCode}.
   * @param priceCustomerGroupCode Key property. See {@link ServiceSubscriptionSalesPrices.priceCustomerGroupCode}.
   * @param serviceSubscriptionId Key property. See {@link ServiceSubscriptionSalesPrices.serviceSubscriptionId}.
   * @param effectiveDate Key property. See {@link ServiceSubscriptionSalesPrices.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `ServiceSubscriptionSalesPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectCategoryId: DeserializedType<T, 'Edm.String'>,
    salesPriceCurrencyCode: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    invoicingPeriodTypeCode: DeserializedType<T, 'Edm.String'>,
    priceCustomerGroupCode: DeserializedType<T, 'Edm.String'>,
    serviceSubscriptionId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
    return new GetByKeyRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectCategoryId: projectCategoryId,
        SalesPriceCurrencyCode: salesPriceCurrencyCode,
        ProjectId: projectId,
        InvoicingPeriodTypeCode: invoicingPeriodTypeCode,
        PriceCustomerGroupCode: priceCustomerGroupCode,
        ServiceSubscriptionId: serviceSubscriptionId,
        EffectiveDate: effectiveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceSubscriptionSalesPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceSubscriptionSalesPrices`.
   */
  update(
    entity: ServiceSubscriptionSalesPrices<T>
  ): UpdateRequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
    return new UpdateRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceSubscriptionSalesPrices`.
   * @param dataAreaId Key property. See {@link ServiceSubscriptionSalesPrices.dataAreaId}.
   * @param projectCategoryId Key property. See {@link ServiceSubscriptionSalesPrices.projectCategoryId}.
   * @param salesPriceCurrencyCode Key property. See {@link ServiceSubscriptionSalesPrices.salesPriceCurrencyCode}.
   * @param projectId Key property. See {@link ServiceSubscriptionSalesPrices.projectId}.
   * @param invoicingPeriodTypeCode Key property. See {@link ServiceSubscriptionSalesPrices.invoicingPeriodTypeCode}.
   * @param priceCustomerGroupCode Key property. See {@link ServiceSubscriptionSalesPrices.priceCustomerGroupCode}.
   * @param serviceSubscriptionId Key property. See {@link ServiceSubscriptionSalesPrices.serviceSubscriptionId}.
   * @param effectiveDate Key property. See {@link ServiceSubscriptionSalesPrices.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceSubscriptionSalesPrices`.
   */
  delete(
    dataAreaId: string,
    projectCategoryId: string,
    salesPriceCurrencyCode: string,
    projectId: string,
    invoicingPeriodTypeCode: string,
    priceCustomerGroupCode: string,
    serviceSubscriptionId: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceSubscriptionSalesPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceSubscriptionSalesPrices` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceSubscriptionSalesPrices<T>
  ): DeleteRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectCategoryId?: string,
    salesPriceCurrencyCode?: string,
    projectId?: string,
    invoicingPeriodTypeCode?: string,
    priceCustomerGroupCode?: string,
    serviceSubscriptionId?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<ServiceSubscriptionSalesPrices<T>, T> {
    return new DeleteRequestBuilder<ServiceSubscriptionSalesPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceSubscriptionSalesPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectCategoryId: projectCategoryId!,
            SalesPriceCurrencyCode: salesPriceCurrencyCode!,
            ProjectId: projectId!,
            InvoicingPeriodTypeCode: invoicingPeriodTypeCode!,
            PriceCustomerGroupCode: priceCustomerGroupCode!,
            ServiceSubscriptionId: serviceSubscriptionId!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
