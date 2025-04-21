/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { ProjWbsActivityEstimates } from './ProjWbsActivityEstimates';
import { QuotationProjTransType } from './QuotationProjTransType';

/**
 * Request builder class for operations supported on the {@link ProjWbsActivityEstimates} entity.
 */
export class ProjWbsActivityEstimatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjWbsActivityEstimates<T>, T> {
  /**
   * Returns a request builder for querying all `ProjWbsActivityEstimates` entities.
   * @returns A request builder for creating requests to retrieve all `ProjWbsActivityEstimates` entities.
   */
  getAll(): GetAllRequestBuilder<ProjWbsActivityEstimates<T>, T> {
    return new GetAllRequestBuilder<ProjWbsActivityEstimates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjWbsActivityEstimates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjWbsActivityEstimates`.
   */
  create(
    entity: ProjWbsActivityEstimates<T>
  ): CreateRequestBuilder<ProjWbsActivityEstimates<T>, T> {
    return new CreateRequestBuilder<ProjWbsActivityEstimates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjWbsActivityEstimates` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjWbsActivityEstimates.dataAreaId}.
   * @param projectId Key property. See {@link ProjWbsActivityEstimates.projectId}.
   * @param wbsId Key property. See {@link ProjWbsActivityEstimates.wbsId}.
   * @param transactionType Key property. See {@link ProjWbsActivityEstimates.transactionType}.
   * @param category Key property. See {@link ProjWbsActivityEstimates.category}.
   * @param resourceCategory Key property. See {@link ProjWbsActivityEstimates.resourceCategory}.
   * @param itemNumber Key property. See {@link ProjWbsActivityEstimates.itemNumber}.
   * @param salesCategory Key property. See {@link ProjWbsActivityEstimates.salesCategory}.
   * @param lineProperty Key property. See {@link ProjWbsActivityEstimates.lineProperty}.
   * @param quantity Key property. See {@link ProjWbsActivityEstimates.quantity}.
   * @param unitCostPrice Key property. See {@link ProjWbsActivityEstimates.unitCostPrice}.
   * @param unitSalesPrice Key property. See {@link ProjWbsActivityEstimates.unitSalesPrice}.
   * @returns A request builder for creating requests to retrieve one `ProjWbsActivityEstimates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    wbsId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.QuotationProjTransType'
    >,
    category: DeserializedType<T, 'Edm.String'>,
    resourceCategory: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    salesCategory: DeserializedType<T, 'Edm.String'>,
    lineProperty: DeserializedType<T, 'Edm.String'>,
    quantity: DeserializedType<T, 'Edm.Decimal'>,
    unitCostPrice: DeserializedType<T, 'Edm.Decimal'>,
    unitSalesPrice: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProjWbsActivityEstimates<T>, T> {
    return new GetByKeyRequestBuilder<ProjWbsActivityEstimates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectId: projectId,
        WBSId: wbsId,
        TransactionType: transactionType,
        Category: category,
        ResourceCategory: resourceCategory,
        ItemNumber: itemNumber,
        SalesCategory: salesCategory,
        LineProperty: lineProperty,
        Quantity: quantity,
        UnitCostPrice: unitCostPrice,
        UnitSalesPrice: unitSalesPrice
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjWbsActivityEstimates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjWbsActivityEstimates`.
   */
  update(
    entity: ProjWbsActivityEstimates<T>
  ): UpdateRequestBuilder<ProjWbsActivityEstimates<T>, T> {
    return new UpdateRequestBuilder<ProjWbsActivityEstimates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjWbsActivityEstimates`.
   * @param dataAreaId Key property. See {@link ProjWbsActivityEstimates.dataAreaId}.
   * @param projectId Key property. See {@link ProjWbsActivityEstimates.projectId}.
   * @param wbsId Key property. See {@link ProjWbsActivityEstimates.wbsId}.
   * @param transactionType Key property. See {@link ProjWbsActivityEstimates.transactionType}.
   * @param category Key property. See {@link ProjWbsActivityEstimates.category}.
   * @param resourceCategory Key property. See {@link ProjWbsActivityEstimates.resourceCategory}.
   * @param itemNumber Key property. See {@link ProjWbsActivityEstimates.itemNumber}.
   * @param salesCategory Key property. See {@link ProjWbsActivityEstimates.salesCategory}.
   * @param lineProperty Key property. See {@link ProjWbsActivityEstimates.lineProperty}.
   * @param quantity Key property. See {@link ProjWbsActivityEstimates.quantity}.
   * @param unitCostPrice Key property. See {@link ProjWbsActivityEstimates.unitCostPrice}.
   * @param unitSalesPrice Key property. See {@link ProjWbsActivityEstimates.unitSalesPrice}.
   * @returns A request builder for creating requests that delete an entity of type `ProjWbsActivityEstimates`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    wbsId: string,
    transactionType: QuotationProjTransType,
    category: string,
    resourceCategory: string,
    itemNumber: string,
    salesCategory: string,
    lineProperty: string,
    quantity: BigNumber,
    unitCostPrice: BigNumber,
    unitSalesPrice: BigNumber
  ): DeleteRequestBuilder<ProjWbsActivityEstimates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjWbsActivityEstimates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjWbsActivityEstimates` by taking the entity as a parameter.
   */
  delete(
    entity: ProjWbsActivityEstimates<T>
  ): DeleteRequestBuilder<ProjWbsActivityEstimates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    wbsId?: string,
    transactionType?: QuotationProjTransType,
    category?: string,
    resourceCategory?: string,
    itemNumber?: string,
    salesCategory?: string,
    lineProperty?: string,
    quantity?: BigNumber,
    unitCostPrice?: BigNumber,
    unitSalesPrice?: BigNumber
  ): DeleteRequestBuilder<ProjWbsActivityEstimates<T>, T> {
    return new DeleteRequestBuilder<ProjWbsActivityEstimates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjWbsActivityEstimates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!,
            WBSId: wbsId!,
            TransactionType: transactionType!,
            Category: category!,
            ResourceCategory: resourceCategory!,
            ItemNumber: itemNumber!,
            SalesCategory: salesCategory!,
            LineProperty: lineProperty!,
            Quantity: quantity!,
            UnitCostPrice: unitCostPrice!,
            UnitSalesPrice: unitSalesPrice!
          }
    );
  }
}
