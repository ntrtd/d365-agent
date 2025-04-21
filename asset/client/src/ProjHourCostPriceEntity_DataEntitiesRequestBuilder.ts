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
import { ProjHourCostPriceEntity_DataEntities } from './ProjHourCostPriceEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjHourCostPriceEntity_DataEntities} entity.
 */
export class ProjHourCostPriceEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjHourCostPriceEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjHourCostPriceEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
    return new GetAllRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjHourCostPriceEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjHourCostPriceEntity_DataEntities`.
   */
  create(
    entity: ProjHourCostPriceEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjHourCostPriceEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjHourCostPriceEntity_DataEntities.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourCostPriceEntity_DataEntities.projectId}.
   * @param categoryId Key property. See {@link ProjHourCostPriceEntity_DataEntities.categoryId}.
   * @param transDate Key property. See {@link ProjHourCostPriceEntity_DataEntities.transDate}.
   * @param resourceId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCompanyId}.
   * @param resourceCategory Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCategory}.
   * @param resourceCategoryId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCategoryId}.
   * @param customerAccount Key property. See {@link ProjHourCostPriceEntity_DataEntities.customerAccount}.
   * @param priceGroupId Key property. See {@link ProjHourCostPriceEntity_DataEntities.priceGroupId}.
   * @param projectContractId Key property. See {@link ProjHourCostPriceEntity_DataEntities.projectContractId}.
   * @param effectiveLaborRate Key property. See {@link ProjHourCostPriceEntity_DataEntities.effectiveLaborRate}.
   * @param isResourceRate Key property. See {@link ProjHourCostPriceEntity_DataEntities.isResourceRate}.
   * @returns A request builder for creating requests to retrieve one `ProjHourCostPriceEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    resourceCompanyId: DeserializedType<T, 'Edm.String'>,
    resourceCategory: DeserializedType<T, 'Edm.Int64'>,
    resourceCategoryId: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>,
    priceGroupId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>,
    effectiveLaborRate: DeserializedType<T, 'Edm.Boolean'>,
    isResourceRate: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjHourCostPriceEntity_DataEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectId: projectId,
      CategoryId: categoryId,
      TransDate: transDate,
      ResourceId: resourceId,
      ResourceCompanyId: resourceCompanyId,
      ResourceCategory: resourceCategory,
      ResourceCategoryId: resourceCategoryId,
      CustomerAccount: customerAccount,
      PriceGroupId: priceGroupId,
      ProjectContractId: projectContractId,
      EffectiveLaborRate: effectiveLaborRate,
      IsResourceRate: isResourceRate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjHourCostPriceEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjHourCostPriceEntity_DataEntities`.
   */
  update(
    entity: ProjHourCostPriceEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjHourCostPriceEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjHourCostPriceEntity_DataEntities.dataAreaId}.
   * @param projectId Key property. See {@link ProjHourCostPriceEntity_DataEntities.projectId}.
   * @param categoryId Key property. See {@link ProjHourCostPriceEntity_DataEntities.categoryId}.
   * @param transDate Key property. See {@link ProjHourCostPriceEntity_DataEntities.transDate}.
   * @param resourceId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCompanyId}.
   * @param resourceCategory Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCategory}.
   * @param resourceCategoryId Key property. See {@link ProjHourCostPriceEntity_DataEntities.resourceCategoryId}.
   * @param customerAccount Key property. See {@link ProjHourCostPriceEntity_DataEntities.customerAccount}.
   * @param priceGroupId Key property. See {@link ProjHourCostPriceEntity_DataEntities.priceGroupId}.
   * @param projectContractId Key property. See {@link ProjHourCostPriceEntity_DataEntities.projectContractId}.
   * @param effectiveLaborRate Key property. See {@link ProjHourCostPriceEntity_DataEntities.effectiveLaborRate}.
   * @param isResourceRate Key property. See {@link ProjHourCostPriceEntity_DataEntities.isResourceRate}.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourCostPriceEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    categoryId: string,
    transDate: Moment,
    resourceId: string,
    resourceCompanyId: string,
    resourceCategory: BigNumber,
    resourceCategoryId: string,
    customerAccount: string,
    priceGroupId: string,
    projectContractId: string,
    effectiveLaborRate: boolean,
    isResourceRate: boolean
  ): DeleteRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjHourCostPriceEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjHourCostPriceEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjHourCostPriceEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    categoryId?: string,
    transDate?: Moment,
    resourceId?: string,
    resourceCompanyId?: string,
    resourceCategory?: BigNumber,
    resourceCategoryId?: string,
    customerAccount?: string,
    priceGroupId?: string,
    projectContractId?: string,
    effectiveLaborRate?: boolean,
    isResourceRate?: boolean
  ): DeleteRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<ProjHourCostPriceEntity_DataEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjHourCostPriceEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            CategoryId: categoryId!,
            TransDate: transDate!,
            ResourceId: resourceId!,
            ResourceCompanyId: resourceCompanyId!,
            ResourceCategory: resourceCategory!,
            ResourceCategoryId: resourceCategoryId!,
            CustomerAccount: customerAccount!,
            PriceGroupId: priceGroupId!,
            ProjectContractId: projectContractId!,
            EffectiveLaborRate: effectiveLaborRate!,
            IsResourceRate: isResourceRate!
          }
    );
  }
}
