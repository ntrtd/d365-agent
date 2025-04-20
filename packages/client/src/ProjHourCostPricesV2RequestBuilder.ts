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
import { ProjHourCostPricesV2 } from './ProjHourCostPricesV2';

/**
 * Request builder class for operations supported on the {@link ProjHourCostPricesV2} entity.
 */
export class ProjHourCostPricesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjHourCostPricesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjHourCostPricesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjHourCostPricesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjHourCostPricesV2<T>, T> {
    return new GetAllRequestBuilder<ProjHourCostPricesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjHourCostPricesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjHourCostPricesV2`.
   */
  create(
    entity: ProjHourCostPricesV2<T>
  ): CreateRequestBuilder<ProjHourCostPricesV2<T>, T> {
    return new CreateRequestBuilder<ProjHourCostPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjHourCostPricesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjHourCostPricesV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourCostPricesV2.projectId}.
   * @param categoryId Key property. See {@link ProjHourCostPricesV2.categoryId}.
   * @param transDate Key property. See {@link ProjHourCostPricesV2.transDate}.
   * @param resourceId Key property. See {@link ProjHourCostPricesV2.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourCostPricesV2.resourceCompanyId}.
   * @param resourceCategoryId Key property. See {@link ProjHourCostPricesV2.resourceCategoryId}.
   * @param customerAccount Key property. See {@link ProjHourCostPricesV2.customerAccount}.
   * @param priceGroupId Key property. See {@link ProjHourCostPricesV2.priceGroupId}.
   * @param projectContractId Key property. See {@link ProjHourCostPricesV2.projectContractId}.
   * @returns A request builder for creating requests to retrieve one `ProjHourCostPricesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    resourceCompanyId: DeserializedType<T, 'Edm.String'>,
    resourceCategoryId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    priceGroupId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjHourCostPricesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjHourCostPricesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectId: projectId,
        CategoryId: categoryId,
        TransDate: transDate,
        ResourceId: resourceId,
        ResourceCompanyId: resourceCompanyId,
        ResourceCategoryId: resourceCategoryId,
        CustomerAccount: customerAccount,
        PriceGroupId: priceGroupId,
        ProjectContractId: projectContractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjHourCostPricesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjHourCostPricesV2`.
   */
  update(
    entity: ProjHourCostPricesV2<T>
  ): UpdateRequestBuilder<ProjHourCostPricesV2<T>, T> {
    return new UpdateRequestBuilder<ProjHourCostPricesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjHourCostPricesV2`.
   * @param dataAreaId Key property. See {@link ProjHourCostPricesV2.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourCostPricesV2.projectId}.
   * @param categoryId Key property. See {@link ProjHourCostPricesV2.categoryId}.
   * @param transDate Key property. See {@link ProjHourCostPricesV2.transDate}.
   * @param resourceId Key property. See {@link ProjHourCostPricesV2.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourCostPricesV2.resourceCompanyId}.
   * @param resourceCategoryId Key property. See {@link ProjHourCostPricesV2.resourceCategoryId}.
   * @param customerAccount Key property. See {@link ProjHourCostPricesV2.customerAccount}.
   * @param priceGroupId Key property. See {@link ProjHourCostPricesV2.priceGroupId}.
   * @param projectContractId Key property. See {@link ProjHourCostPricesV2.projectContractId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourCostPricesV2`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    categoryId: string,
    transDate: Moment,
    resourceId: string,
    resourceCompanyId: string,
    resourceCategoryId: string,
    customerAccount: string,
    priceGroupId: string,
    projectContractId: string
  ): DeleteRequestBuilder<ProjHourCostPricesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjHourCostPricesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourCostPricesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProjHourCostPricesV2<T>
  ): DeleteRequestBuilder<ProjHourCostPricesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    categoryId?: string,
    transDate?: Moment,
    resourceId?: string,
    resourceCompanyId?: string,
    resourceCategoryId?: string,
    customerAccount?: string,
    priceGroupId?: string,
    projectContractId?: string
  ): DeleteRequestBuilder<ProjHourCostPricesV2<T>, T> {
    return new DeleteRequestBuilder<ProjHourCostPricesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjHourCostPricesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            CategoryId: categoryId!,
            TransDate: transDate!,
            ResourceId: resourceId!,
            ResourceCompanyId: resourceCompanyId!,
            ResourceCategoryId: resourceCategoryId!,
            CustomerAccount: customerAccount!,
            PriceGroupId: priceGroupId!,
            ProjectContractId: projectContractId!
          }
    );
  }
}
